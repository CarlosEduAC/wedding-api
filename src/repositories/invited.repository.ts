import path from 'path'
import { google } from 'googleapis'
import { logger } from '@/configs'
import { Invited } from '@/models/Invited.entity'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const KEY_PATH = path.resolve(__dirname, '../configs/auth.json')
const SPREADSHEET_ID = '1e5Sw90emkDuMietu1KpW59vg4PWIl3kSNTlfMmK9mW4'
const RANGE = 'Inviteds!A1:D100'

const auth = new google.auth.GoogleAuth({
  keyFilename: KEY_PATH,
  scopes: SCOPES,
})

google.options({ auth })

const client = google.sheets('v4')

export async function findAll(): Promise<Invited[]> {
  const response = await client.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
  })

  const inviteds = response.data.values.map(row => ({
    id: row[0],
    name: row[1],
    whatsapp: row[2],
    confirmed: row[3] === 'TRUE',
  }))

  inviteds.shift()

  return inviteds
}

export async function findConfirmed(): Promise<Invited[]> {
  const inviteds = await findAll()

  const confirmedInviteds = inviteds.filter(invited => invited.confirmed)

  return confirmedInviteds
}

export async function update(id: number, product: Invited): Promise<void> {
  try {
    const index = Number(id) + 1
    const range = `Inviteds!C${index}:D${index}`

    await client.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[product.whatsapp, product.confirmed ? 'TRUE' : 'FALSE']],
      },
    })

    logger.info(`Convidado com id ${id} atualizado com sucesso`)
  } catch (error) {
    logger.error(error, `Erro ao atualizar convidado com id ${id}`)
  }
}

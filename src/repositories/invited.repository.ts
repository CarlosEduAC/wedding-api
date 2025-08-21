import { prisma, logger } from '@/configs'
import { Invited } from '@/models/Invited.entity'

export async function findAll(): Promise<Invited[]> {
  const inviteds = await prisma.invited.findMany()

  const invitedsParsed = inviteds as unknown as Invited[]

  return invitedsParsed
}

export async function findConfirmed(): Promise<Invited[]> {
  const confirmedInviteds = await prisma.invited.findMany({
    where: {
      confirm: true,
    },
  })

  const confirmedInvitedsParsed = confirmedInviteds as unknown as Invited[]

  return confirmedInvitedsParsed
}

export async function create(invited: Invited): Promise<void> {
  try {
    await prisma.invited.create({
      data: invited,
    })

    logger.info(`Convidado com id ${invited.id} criado com sucesso`)
  } catch (error) {
    logger.error(error, 'Erro ao criar convidado')
    throw error
  }
}

export async function update(id: string, product: Invited): Promise<void> {
  const data = product as object

  try {
    await prisma.invited.update({
      select: { id: true },
      where: {
        id,
      },
      data,
    })

    logger.info(`Convidado com id ${id} atualizado com sucesso`)
  } catch (error) {
    logger.error(error, `Erro ao atualizar convidado com id ${id}`)
  }
}

export async function createMany(inviteds: Invited[]): Promise<void> {
  try {
    await prisma.invited.createMany({
      data: inviteds,
    })

    logger.info(`Convidados criados com sucesso`)
  } catch (error) {
    logger.error(error, 'Erro ao criar convidados')
    throw error
  }
}

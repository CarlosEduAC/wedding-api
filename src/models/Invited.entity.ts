export interface Invited {
  id: number
  name: string
  whatsapp?: string
  confirmed: boolean
}


export interface Inviteds {
  inviteds: Invited[]
}

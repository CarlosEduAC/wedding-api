export interface Invited {
  id: string
  name: string
  whatsapp?: string
  confirm: boolean
  created_at?: Date
  updated_at?: Date
}


export interface Inviteds {
  inviteds: Invited[]
}

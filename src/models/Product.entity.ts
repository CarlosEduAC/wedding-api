export interface Product {
  id: string
  price: number
  name: string
  description?: string
  image: string
  quantity: number
  created_at?: Date
  updated_at?: Date
}

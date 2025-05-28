import { Product } from './Product.entity'

export interface Checkout {
  id: string
  products: Product[]
  total: number
}

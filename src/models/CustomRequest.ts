import { Request } from 'express'

export interface CustomRequest<T> extends Request {
  body: T
  params: {
    id: string
  }
}

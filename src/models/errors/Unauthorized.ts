import { CustomError } from './CustomError'

export default class Unauthorized extends CustomError {
  readonly statusCode = 401
  readonly message: string

  constructor(message = 'Unauthorized') {
    super(message)
    this.message = message
  }
}

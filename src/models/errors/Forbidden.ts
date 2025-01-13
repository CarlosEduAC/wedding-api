import { CustomError } from './CustomError'

export default class Forbidden extends CustomError {
  readonly statusCode = 403
  readonly message: string

  constructor(message = 'Forbidden') {
    super(message)
    this.message = message
  }
}

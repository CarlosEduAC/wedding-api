import { CustomError } from './CustomError'

export default class BadRequest extends CustomError {
  readonly statusCode = 400
  readonly message: string

  constructor(message = 'Bad Request') {
    super(message)
    this.message = message
  }
}

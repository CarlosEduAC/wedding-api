import { CustomError } from './CustomError'

export default class NotFound extends CustomError {
  readonly statusCode = 404
  readonly message: string

  constructor(message = 'Not Found') {
    super(message)
    this.message = message
  }
}

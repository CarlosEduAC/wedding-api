import CustomError from '../../../src/models/errors/CustomError'

class TestError extends CustomError {
  readonly statusCode: number
  readonly message: string

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    this.message = message
  }
}

describe('CustomError', () => {
  it('should instantiate TestError with correct statusCode and message', () => {
    const statusCode = 404
    const message = 'Not Found'

    const error = new TestError(statusCode, message)

    expect(error).toBeInstanceOf(CustomError)
    expect(error.statusCode).toBe(statusCode)
    expect(error.message).toBe(message)
  })

  it('should have the correct message in the base Error', () => {
    const statusCode = 500
    const message = 'Internal Server Error'

    const error = new TestError(statusCode, message)

    expect(error.message).toBe(message)
    expect(error.toString()).toBe(`Error: ${message}`)
  })
})

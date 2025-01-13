import BadRequest from '../../../src/models/errors/BadRequest'
import CustomError from '../../../src/models/errors/CustomError'

describe('BadRequestError', () => {
  it('should have the correct statusCode and use the provided message', () => {
    const message = 'This is a bad request'
    const error = new BadRequest(message)
    expect(error.statusCode).toBe(400)
    expect(error.message).toBe(message)
  })

  it('should use the default message when none is provided', () => {
    const error = new BadRequest()
    expect(error.message).toBe('Bad Request')
  })

  it('should inherit from CustomError', () => {
    const error = new BadRequest('Test message')
    expect(error).toBeInstanceOf(CustomError)
  })
})

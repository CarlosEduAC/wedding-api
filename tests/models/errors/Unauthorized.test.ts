import Unauthorized from '../../../src/models/errors/Unauthorized'
import CustomError from '../../../src/models/errors/CustomError'

describe('UnauthorizedError', () => {
  it('should have the correct statusCode and use the provided message', () => {
    const message = 'This is a unautorized request'
    const error = new Unauthorized(message)
    expect(error.statusCode).toBe(401)
    expect(error.message).toBe(message)
  })

  it('should use the default message when none is provided', () => {
    const error = new Unauthorized()
    expect(error.message).toBe('Unauthorized')
  })

  it('should inherit from CustomError', () => {
    const error = new Unauthorized('Test message')
    expect(error).toBeInstanceOf(CustomError)
  })
})

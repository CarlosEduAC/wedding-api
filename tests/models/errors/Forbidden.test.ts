import Forbidden from '../../../src/models/errors/Forbidden'
import CustomError from '../../../src/models/errors/CustomError'

describe('ForbiddenError', () => {
  it('should have the correct statusCode and use the provided message', () => {
    const message = 'This is a forbidden request'
    const error = new Forbidden(message)
    expect(error.statusCode).toBe(403)
    expect(error.message).toBe(message)
  })

  it('should use the default message when none is provided', () => {
    const error = new Forbidden()
    expect(error.message).toBe('Forbidden')
  })

  it('should inherit from CustomError', () => {
    const error = new Forbidden('Test message')
    expect(error).toBeInstanceOf(CustomError)
  })
})

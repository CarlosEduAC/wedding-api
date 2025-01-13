import NotFound from '../../../src/models/errors/NotFound'
import CustomError from '../../../src/models/errors/CustomError'

describe('NotFoundError', () => {
  it('should have the correct statusCode and use the provided message', () => {
    const message = 'This is a not found request'
    const error = new NotFound(message)
    expect(error.statusCode).toBe(404)
    expect(error.message).toBe(message)
  })

  it('should use the default message when none is provided', () => {
    const error = new NotFound()
    expect(error.message).toBe('Not Found')
  })

  it('should inherit from CustomError', () => {
    const error = new NotFound('Test message')
    expect(error).toBeInstanceOf(CustomError)
  })
})

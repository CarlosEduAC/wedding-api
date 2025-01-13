import { Request, Response } from 'express'
import CustomError from '../../src/models/errors/CustomError'
import errorHandler from '../../src/middlewares/errorHandler.middleware'

const mockResponse = () => {
  const res: Partial<Response> = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res as Response
}

describe('errorHandler', () => {
  it('should handle CustomError correctly', () => {
    const mockReq: Partial<Request> = {}
    const mockRes = mockResponse()
    const mockNext = jest.fn()

    class TestError extends CustomError {
      readonly statusCode = 400
      readonly message

      constructor(message: string) {
        super(message)
        this.message = message
      }
    }

    const error = new TestError('Test error message')

    errorHandler(error, mockReq as Request, mockRes, mockNext)

    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      status: 400,
      message: 'Test error message',
      stack: process.env.NODE_ENV === 'development' ? error.stack : {},
    })
  })

  it('should handle generic errors correctly', () => {
    const mockReq: Partial<Request> = {}
    const mockRes = mockResponse()
    const mockNext = jest.fn()

    const error = new Error('Generic error')

    errorHandler(error, mockReq as Request, mockRes, mockNext)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      status: 500,
      message: 'Generic error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : {},
    })
  })

  it('should handle error correctly', () => {
    const mockReq: Partial<Request> = {}
    const mockRes = mockResponse()
    const mockNext = jest.fn()

    const error = new Error()

    errorHandler(error, mockReq as Request, mockRes, mockNext)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      status: 500,
      message: 'Internal Server Error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : {},
    })
  })
})

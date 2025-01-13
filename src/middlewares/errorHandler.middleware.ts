/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

import { logger } from '@/configs'
import CustomError from '@/models/errors/CustomError'

const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response => {
  logger.error(error, `Error: ${error.name} - ${error.message}`)

  if (error instanceof CustomError) {
    return response.status(error.statusCode).json({
      success: false,
      status: error.statusCode,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : {},
    })
  }

  return response.status(500).json({
    success: false,
    status: 500,
    message: error.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? error.stack : {},
  })
}

export default errorHandler

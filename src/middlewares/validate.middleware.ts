import { Request, Response, NextFunction } from 'express'
import { ZodError, ZodIssue, AnyZodObject } from 'zod'

import { StatusCodes } from 'http-status-codes'

export function validate(schema: AnyZodObject) {
  return (request: Request, response: Response, next: NextFunction) => {
    try {
      schema.parse(request)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: ZodIssue) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }))

        response
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'Dados incorretos', details: errorMessages })
      } else {
        response
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: 'Internal Server Error' })
      }
    }
  }
}

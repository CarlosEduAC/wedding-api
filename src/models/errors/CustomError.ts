export abstract class CustomError extends Error {
  abstract readonly statusCode: number
  abstract readonly message: string

  constructor(message: string) {
    super(message)
  }
}

export default CustomError

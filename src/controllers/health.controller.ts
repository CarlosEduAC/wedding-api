import { Request, Response } from 'express'

export function get(_request: Request, response: Response) {
  /*
  #swagger.tags = ['Health']
  #swagger.summary = 'Endpoint para Health Check'
  #swagger.description = 'Este endpoint é usado para verificar a disponibilidade e o status da API.'
  */
  response.send('Server is running!')
}

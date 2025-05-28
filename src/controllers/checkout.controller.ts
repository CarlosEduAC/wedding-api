import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as CheckoutRepository from '@/repositories/checkout.repository'
import { Checkout } from '@/models/Checkout.entity'
import { CustomRequest } from '@/models/CustomRequest'

export async function create(
  request: CustomRequest<Checkout>,
  response: Response,
) {
  /*
  #swagger.tags = ['Checkout']
  #swagger.summary = 'Endpoint para armazenamento de Checkout'
  #swagger.description = 'Esse endpoint é responsável por armazenar um novo checkout no sistema.'
  */
  const product = request.body

  await CheckoutRepository.create(product)

  return response
    .status(StatusCodes.CREATED)
    .json({ message: 'Produto criado com sucesso' })
}

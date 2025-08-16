import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as ImageRepository from '@/repositories/image.repository'
import { Image, Images } from '@/models/Image.entity'
import { CustomRequest } from '@/models/CustomRequest'

export async function findAll(
  _request: CustomRequest<Images>,
  response: Response,
) {
  /*
  #swagger.tags = ['Image']
  #swagger.summary = 'Endpoint para buscar todas as imagens'
  #swagger.description = 'Esse endpoint é responsável por buscar todas as imagens do pré wedding.'
  */
  const images = await ImageRepository.findAll()

  return response.status(StatusCodes.OK).json({ images })
}

export async function create(
  request: CustomRequest<Image>,
  response: Response,
) {
  /*
  #swagger.tags = ['Image']
  #swagger.summary = 'Endpoint para adicionar uma nova imagem'
  #swagger.description = 'Esse endpoint é responsável por adicionar uma nova imagem no sistema.'
  */
  const image = request.body

  await ImageRepository.create(image)

  return response.status(StatusCodes.CREATED).json({ message: 'Imagem adicionada com sucesso' })
}

export async function createMany(
  request: CustomRequest<Image[]>,
  response: Response,
) {
  /*
  #swagger.tags = ['Image']
  #swagger.summary = 'Endpoint para adicionar várias imagens novas'
  #swagger.description = 'Esse endpoint é responsável por adicionar várias imagens novas no sistema.'
  */
  const image = request.body

  await ImageRepository.createMany(image)

  return response.status(StatusCodes.CREATED).json({ message: 'Imagens adicionadas com sucesso' })
}

import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as InvitedRepository from '@/repositories/invited.repository'
import { Invited, Inviteds } from '@/models/Invited.entity'
import { CustomRequest } from '@/models/CustomRequest'

export async function findAll(
  _request: CustomRequest<Inviteds>,
  response: Response,
) {
  /*
  #swagger.tags = ['Invited']
  #swagger.summary = 'Endpoint para buscar Inviteds'
  #swagger.description = 'Esse endpoint é responsável por buscar todos os convidados no sistema.'
  */
  const inviteds = await InvitedRepository.findAll()

  return response.status(StatusCodes.OK).json({ inviteds })
}

export async function update(
  request: CustomRequest<Invited>,
  response: Response,
) {
  /*
  #swagger.tags = ['Product']
  #swagger.summary = 'Endpoint para atualizar Product'
  #swagger.description = 'Esse endpoint é responsável por atualizar um novo produto no sistema.'
  */
  const { id } = request.params
  const invited = request.body

  await InvitedRepository.update(id, invited)

  return response
    .status(StatusCodes.OK)
    .json({ message: 'Convidado atualizado com sucesso' })
}

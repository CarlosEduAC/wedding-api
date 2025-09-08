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

export async function findConfirmed(
  _request: CustomRequest<Inviteds>,
  response: Response,
) {
  /*
  #swagger.tags = ['Invited']
  #swagger.summary = 'Endpoint para buscar convidados confirmados'
  #swagger.description = 'Esse endpoint é responsável por buscar todos os convidados confirmados no sistema.'
  */
  const confirmedInviteds = InvitedRepository.findConfirmed()

  return response.status(StatusCodes.OK).json({ inviteds: confirmedInviteds })
}

export async function update(
  request: CustomRequest<Invited>,
  response: Response,
) {
  /*
  #swagger.tags = ['Invited']
  #swagger.summary = 'Endpoint para atualizar convidado'
  #swagger.description = 'Esse endpoint é responsável por atualizar o convidado no sistema.'
  */
  const { id } = request.params
  const invited = request.body

  await InvitedRepository.update(Number(id), invited)

  return response
    .status(StatusCodes.OK)
    .json({ message: 'Convidado atualizado com sucesso' })
}


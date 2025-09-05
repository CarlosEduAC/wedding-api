import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as ProductRepository from '@/repositories/product.repository'
import { Product } from '@/models/Product.entity'
import { CustomRequest } from '@/models/CustomRequest'

export async function create(
  request: CustomRequest<Product>,
  response: Response,
) {
  /*
  #swagger.tags = ['Product']
  #swagger.summary = 'Endpoint para armazenamento de Product'
  #swagger.description = 'Esse endpoint é responsável por armazenar um novo produto no sistema.'
  */
  const product = request.body

  await ProductRepository.create(product)

  return response
    .status(StatusCodes.CREATED)
    .json({ message: 'Produto criado com sucesso' })
}

export async function update(
  request: CustomRequest<Product>,
  response: Response,
) {
  /*
  #swagger.tags = ['Product']
  #swagger.summary = 'Endpoint para atualizar Product'
  #swagger.description = 'Esse endpoint é responsável por atualizar um novo produto no sistema.'
  */
  const { id } = request.params
  const product = request.body

  await ProductRepository.update(id, product)

  return response
    .status(StatusCodes.OK)
    .json({ message: 'Product atualizado com sucesso' })
}

export async function findById(
  request: CustomRequest<Product>,
  response: Response,
) {
  /*
  #swagger.tags = ['Product']
  #swagger.summary = 'Endpoint para buscar Product'
  #swagger.description = 'Esse endpoint é responsável por buscar um produto no sistema.'
  */
  const { id } = request.params

  const product = await ProductRepository.findById(id)

  return response.status(StatusCodes.OK).json(product)
}

export async function findAll(
  _request: CustomRequest<Product>,
  response: Response,
) {
  /*
  #swagger.tags = ['Product']
  #swagger.summary = 'Endpoint para buscar Products'
  #swagger.description = 'Esse endpoint é responsável por buscar todos os produtos no sistema.'
  */
  // const products = await ProductRepository.findAll()

  const products = [
    {id: "1", name: "Fritadeira Elétrica", price: 243.20, image: "https://imgs.casasbahia.com.br/55065681/1g.jpg", quantity: 0},
    {id: "2", name: "Sanduicheira", price: 85.90, image: "https://imgs.casasbahia.com.br/3230329/1g.jpg", quantity: 0},
    {id: "3", name: "Ferro de Passar", price: 105.90, image: "https://imgs.casasbahia.com.br/55058111/1g.jpg", quantity: 0},
    {id: "4", name: "Liquidificador", price: 99.90, image: "https://imgs.casasbahia.com.br/11439315/1xg.jpg", quantity: 0},
    {id: "5", name: "Batedeira", price: 86.90, image: "https://imgs.casasbahia.com.br/55005424/1g.jpg", quantity: 0},
    {id: "6", name: "Fritadeira Elétrica", price: 243.20, image: "https://imgs.casasbahia.com.br/55065681/1g.jpg", quantity: 0},
    {id: "7", name: "Sanduicheira", price: 85.90, image: "https://imgs.casasbahia.com.br/3230329/1g.jpg", quantity: 0},
    {id: "8", name: "Ferro de Passar", price: 105.90, image: "https://imgs.casasbahia.com.br/55058111/1g.jpg", quantity: 0},
    {id: "9", name: "Liquidificador", price: 99.90, image: "https://imgs.casasbahia.com.br/11439315/1xg.jpg", quantity: 0},
    {id: "10", name: "Batedeira", price: 86.90, image: "https://imgs.casasbahia.com.br/55005424/1g.jpg", quantity: 0},
  ];

  return response.status(StatusCodes.OK).json(products)
}

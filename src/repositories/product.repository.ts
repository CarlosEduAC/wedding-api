import { prisma, logger } from '@/configs'
import { Product } from '@/models/Product.entity'

export async function create(product: Product): Promise<void> {
  const data = {
    ...product,
  }

  try {
    await prisma.product.create({
      data,
    })

    logger.info(`Produto com id ${product.id} criado com sucesso`)
  } catch (error) {
    logger.error(error, `Erro ao criar produto com id ${product.id}`)

    throw error
  }
}

export async function update(id: string, product: Product): Promise<void> {
  const data = product as object

  try {
    await prisma.product.update({
      select: { id: true },
      where: {
        id,
      },
      data,
    })

    logger.info(`Produto com id ${id} atualizado com sucesso`)
  } catch (error) {
    logger.error(error, `Erro ao atualizar produto com id ${id}`)
  }
}

export async function findById(id: string): Promise<Product> {
  const product = await prisma.product.findFirst({
    where: {
      id,
    },
  })

  const productParsed = product as unknown as Product

  return productParsed
}

export async function findAll(): Promise<Product[]> {
  const products = await prisma.product.findMany()

  const productsParsed = products as unknown as Product[]

  return productsParsed
}

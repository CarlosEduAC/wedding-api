import { prisma } from '@/configs'
import { Checkout } from '@/models/Checkout.entity'
import { logger } from '@/configs'

export async function create(checkout: Checkout): Promise<void> {
  const data = {
    id: checkout.id,
    price: checkout.total,
  }

  try {
    await prisma.checkout.create({
      data,
    })

    logger.info(`Checkout com id ${checkout.id} criado com sucesso`)
  } catch (error) {
    logger.error(error, `Erro ao criar checkout com id ${checkout.id}`)

    throw error
  }
}

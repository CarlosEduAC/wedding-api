import { prisma, logger } from '@/configs'
import { Invited } from '@/models/Invited.entity'

export async function findAll(): Promise<Invited[]> {
  const inviteds = await prisma.invited.findMany()

  const invitedsParsed = inviteds as unknown as Invited[]

  return invitedsParsed
}

export async function update(id: string, product: Invited): Promise<void> {
  const data = product as object

  try {
    await prisma.invited.update({
      select: { id: true },
      where: {
        id,
      },
      data,
    })

    logger.info(`Convidado com id ${id} atualizado com sucesso`)
  } catch (error) {
    logger.error(error, `Erro ao atualizar convidado com id ${id}`)
  }
}

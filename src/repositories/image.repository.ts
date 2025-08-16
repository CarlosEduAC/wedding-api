import { prisma, logger } from '@/configs'
import { Image } from '@/models/Image.entity'

export async function findAll(): Promise<Image[]> {
  const images = await prisma.image.findMany()

  const imagesParsed = images as unknown as Image[]

  return imagesParsed
}

export async function create(image: Image): Promise<void> {
  try {
    await prisma.image.create({
      data: image,
    })

    logger.info(`Convidado com id ${image.id} criado com sucesso`)
  } catch (error) {
    logger.error(error, 'Erro ao adicionar convidado')
    throw error
  }
}

export async function createMany(images: Image[]): Promise<void> {
  try {
    await prisma.image.createMany({
      data: images,
    })

    logger.info(`Imagens adicionadas com sucesso`)
  } catch (error) {
    logger.error(error, 'Erro ao adicionar imagens')
    throw error
  }
}

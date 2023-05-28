import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = Number(event.context.params?.id)
  const updated = await prisma.user.update({
    where: {
      id: id,
    },
    data: body
  })

  return { updated }
})
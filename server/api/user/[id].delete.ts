import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const id = Number(event.context.params?.id)
    const deleted = await prisma.user.delete({
        where: {
            id,
        }
    })

    return { deleted }
})
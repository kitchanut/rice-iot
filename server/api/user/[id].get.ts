import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const id = Number(event.context.params?.id)
    const output = await prisma.user.findUnique({
        where: {
            id,
        },
    })

    return { output }
})
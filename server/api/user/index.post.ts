import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const created = await prisma.user.create({
        data: body
    })

    return { created }
})
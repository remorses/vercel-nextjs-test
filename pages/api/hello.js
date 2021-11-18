import { PrismaClient } from '@prisma/client'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
    const prisma = new PrismaClient()

    // await prisma.$connect()

    res.status(200).json({
        name: 'John Doe',
    })
}

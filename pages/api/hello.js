import { PrismaClient } from '@prisma/client'

let start = Date.now()

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
    let functionReady = Date.now()
    const prisma = new PrismaClient()
    await prisma.$connect()
    let prismaConnected = Date.now()
    res.status(200).json({
        name: 'John Doe',
        prismaConnectionTime: prismaConnected - functionReady + 'ms',
        functionStartTime: functionReady - start + 'ms',
    })
}

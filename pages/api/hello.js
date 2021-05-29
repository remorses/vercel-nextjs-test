import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

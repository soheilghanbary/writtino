import { getServerSession } from "next-auth"

import { authOptions } from "./auth"
import { prisma } from "./db"

export const getUserSession = async () => {
  const session = await getServerSession(authOptions)
  return session?.user?.id as string
}

// get current user
export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions)
  return await prisma.user.findFirst({ where: { id: session?.user?.id } })
}

import { NextResponse } from "next/server"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

export async function POST(req: Request) {
  try {
    const id = await getUserSession()
    if (!id) {
      return new Response(null, { status: 403 })
    }

    const body = (await req.json()) as {
      title: string
      description: string
      image: string
      content: string
    }
    await prisma.post.create({ data: { ...body, userId: id } })

    return NextResponse.json(null, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

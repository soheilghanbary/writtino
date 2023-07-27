import { NextResponse } from "next/server"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

export async function PATCH(req: Request) {
  try {
    // get request body
    const body = await req.json()
    // Ensure user is authentication and has access to this user.
    const id = await getUserSession()
    if (!id) {
      return new Response(null, { status: 403 })
    }
    // Update the user.
    await prisma.user.update({
      where: { id },
      data: body,
    })

    return NextResponse.json(body, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

import { NextResponse } from "next/server"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

// Fetch post by ID
async function fetchPostById(id: string) {
  const post = await prisma.post.findFirst({ where: { id } })
  return NextResponse.json(post, { status: 200 })
}

// Fetch all posts
async function fetchAllPosts() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts, { status: 200 })
}

// Handle GET requests
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const postId = searchParams.get("id")
  try {
    if (postId !== null) return fetchPostById(postId)
    return fetchAllPosts()
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

// Handle POST requests
export async function POST(req: Request) {
  try {
    const userId = await getUserSession()
    if (!userId) {
      return new Response(null, { status: 403 })
    }

    const postData = (await req.json()) as {
      title: string
      description: string
      image: string
      content: string
    }
    await prisma.post.create({ data: { ...postData, userId } })

    return NextResponse.json(null, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

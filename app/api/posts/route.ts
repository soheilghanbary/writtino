import { NextResponse } from "next/server"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

// Fetch post by ID
async function fetchPostById(id: string) {
  const post = await prisma.post.findFirst({
    where: { id },
    include: { user: true },
  })
  return NextResponse.json(post, { status: 200 })
}

// Fetch all posts
async function fetchAllPosts() {
  const posts = await prisma.post.findMany({ include: { user: true } })
  return NextResponse.json(posts, { status: 200 })
}

// Fetch posts by search -> query
async function searchPost(query: string) {
  const posts = await prisma.post.findMany({
    where: {
      title: {
        contains: query,
      },
    },
    include: { user: true },
  })
  return NextResponse.json(posts, { status: 200 })
}
// Handle GET requests
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const postId = searchParams.get("id")
  const query = searchParams.get("search")

  try {
    if (query !== null) return searchPost(query)
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
    const newPost = await prisma.post.create({ data: { ...postData, userId } })
    return NextResponse.json(newPost, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

// search posts by query string

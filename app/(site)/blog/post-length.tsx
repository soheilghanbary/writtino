"use client"

import { useAllPosts } from "@/hooks/use-post"

export function PostLength() {
  const { data: posts, isLoading } = useAllPosts()
  if (isLoading) return <p>loading post lengths</p>
  return <div>Posts: {posts?.length}</div>
}

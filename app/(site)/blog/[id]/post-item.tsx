"use client"

import { usePost } from "@/hooks/use-post"

import { SinglePost } from "./post"

export function PostItem({ id }: { id: string }) {
  const { data: post, isLoading } = usePost(id)
  if (isLoading) return <p>loading post data</p>
  return <SinglePost {...post} />
}

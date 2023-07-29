"use client"

import { usePost } from "@/hooks/use-post"

interface Props {
  id: string
}

export function PostAuthor({ id }: Props) {
  const { data: post, isLoading } = usePost(id)
  if (isLoading) return <p>loading post author</p>

  return <div>{post?.title}</div>
}

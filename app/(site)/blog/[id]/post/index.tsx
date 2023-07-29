"use client"

import { usePost } from "@/hooks/use-post"
import { Icons } from "@/components/icons"

import { PostContent } from "./post-content"
import { PostCover } from "./post-cover"
import { PostTitle } from "./post-title"

export function SinglePost({ id }: { id: string }) {
  const { data: post, isLoading } = usePost(id)
  if (isLoading) return <p>loading...</p>
  return (
    <div className="mx-auto max-w-screen-sm">
      <PostTitle text={post?.title!} />
      <div className="my-4 flex items-center justify-center gap-8 font-medium text-foreground/80">
        <div className="flex items-center">
          <Icons.heart className="mr-2 h-4 w-4" /> 23.5K
        </div>
        <div className="flex items-center">
          <Icons.saved className="mr-2 h-4 w-4" />
        </div>
      </div>
      <PostCover image={post?.image!} alt={post?.title!} />
      <PostContent content={post?.content!} />
      <hr className="my-4" />
    </div>
  )
}

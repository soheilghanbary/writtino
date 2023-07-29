"use client"

import { useAllPosts } from "@/hooks/use-post"
import { Skeleton } from "@/components/ui/skeleton"
import { Postcard } from "@/components/post/post-card"

export function PostList() {
  const { data: posts, isLoading } = useAllPosts()
  if (isLoading) return <PostCardSkeletons />
  return (
    <div className="w-4/6 flex-1 space-y-8">
      {posts?.map((p) => <Postcard key={p.id} {...p} />)}
    </div>
  )
}

export const PostCardSkeletons = () => (
  <div className="w-4/6 flex-1 space-y-8">
    {[...Array(4)].map((_, i) => (
      <div className="flex max-w-screen-sm items-center space-x-6">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-1/3 rounded-full" />
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-full rounded-full" />
          <div className="flex items-center space-x-2 pt-2">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-4 w-24 rounded-full" />
          </div>
        </div>
        <hr />
        <Skeleton className="relative h-24 w-24 rounded-lg shadow md:h-36 md:w-36" />
      </div>
    ))}
  </div>
)

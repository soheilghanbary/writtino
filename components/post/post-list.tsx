"use client"

import { useAllPosts } from "@/hooks/use-post"
import { Skeleton } from "@/components/ui/skeleton"
import { PostCard } from "@/components/post/post-card"

export function PostList({ role }: { role: string }) {
  const { data: posts, isLoading } = useAllPosts(role)
  if (isLoading) return <PostCardSkeletons />
  return (
    <div className="mx-auto flex-1 space-y-10 lg:w-4/6">
      {posts?.map((p) => <PostCard key={p.id} {...p} />)}
    </div>
  )
}

export const PostCardSkeletons = () => (
  <div className="mx-auto flex max-w-screen-sm flex-1 flex-col items-center justify-center space-y-8">
    {[...Array(4)].map((_, i) => (
      <div className="flex w-full items-center space-x-6">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-1/3 rounded-full" />
          <Skeleton className="hidden h-4 w-full rounded-full md:block" />
          <Skeleton className="h-4 w-full rounded-full" />
          <div className="flex items-center space-x-2 pt-2">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-4 w-24 rounded-full" />
          </div>
        </div>
        <hr />
        <Skeleton className="relative h-28 w-28 rounded-lg shadow md:h-36 md:w-36 lg:h-40 lg:w-40" />
      </div>
    ))}
  </div>
)

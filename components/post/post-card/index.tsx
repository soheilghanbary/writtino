import Link from "next/link"

import { BlurImage } from "@/components/blur-image"
import { Icons } from "@/components/icons"

interface Props {}

export function PostCard(post: any) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <PostTitle text={post.title} />
        <PostDescription description={post.description} />
        <PostFooter />
        <PostAuthor {...post.user} />
      </div>
      <Link href={`/blog/${post.id}`}>
        <BlurImage
          className="h-40 w-40 rounded-lg"
          image={post.image}
          alt={post.title}
        />
      </Link>
    </div>
  )
}

const PostTitle = ({ text }: { text: string }) => (
  <h2 className="text-lg font-semibold">{text}</h2>
)

const PostDescription = ({ description }: { description: string }) => (
  <p className="line-clamp-2 text-sm text-foreground/70">{description}</p>
)

const PostFooter = () => (
  <div className="mt-3 flex items-center justify-end gap-4">
    <span className="flex items-center text-sm text-foreground/70">
      <Icons.heart className="mr-2 h-4 w-4" />
      23.1K
    </span>
    <span className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Icons.saved className="h-4 w-4" />
    </span>
  </div>
)

const PostAuthor = (user: any) => (
  <div className="flex space-x-2">
    <BlurImage
      className="h-7 w-7 rounded-full"
      alt={user.name}
      image={user.image}
    />
    <div className="space-y-1">
      <p className="text-xs font-semibold text-foreground">{user.name}</p>
      <p className="text-xs text-muted-foreground">{user.email}</p>
    </div>
  </div>
)

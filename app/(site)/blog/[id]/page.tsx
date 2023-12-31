import { prisma } from "@/lib/db"
import { SinglePost } from "@/components/post/single-post"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await prisma.post.findFirst({ where: { id: params.id } })

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
    },
  }
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findFirst({
    where: { id: params.id },
    include: { user: true },
  })

  return <SinglePost {...post} />
}

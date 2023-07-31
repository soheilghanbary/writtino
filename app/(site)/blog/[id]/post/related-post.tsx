import Link from "next/link"

import { prisma } from "@/lib/db"
import { BlurImage } from "@/components/blur-image"

export async function RelatedPosts({ id }: { id: string }) {
  const posts = await prisma.post.findMany({
    where: {
      id: {
        not: id,
      },
    },
    take: 2,
  })
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {posts.map((p) => (
        <Link
          href={`/blog/${p.id}`}
          className="space-y-2 rounded-lg border p-3 shadow"
        >
          <BlurImage
            image={p.image}
            alt={p.title}
            className="h-52 w-full rounded-[inherit] [&>img]:rounded-[inherit]"
          />
          <h2 className="line-clamp-1 text-lg font-semibold">{p.title}</h2>
          <p className="line-clamp-3 text-sm text-foreground/70">
            {p.description}
          </p>
        </Link>
      ))}
    </div>
  )
}

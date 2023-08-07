import Link from "next/link"

import { BlurImage } from "@/components/blur-image"
import { Icons } from "@/components/icons"

import styles from "./post-card.module.scss"

export function PostCard(post: any) {
  return (
    <div className={styles.card}>
      <div className={styles["card-details"]}>
        <Link href={`/blog/${post.id}`}>
          <h2 className={styles.title}>{post.title}</h2>
        </Link>
        <p className={styles.description}>{post.description}</p>
        <hr />
        <div className="flex items-center justify-between">
          <PostAuthor {...post.user} />
          <div className={styles["card-action"]}>
            <span className="flex items-center text-sm text-foreground/70">
              <Icons.heart className="mr-2 h-4 w-4" />
              23.1K
            </span>
            <span className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icons.saved className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
      <Link href={`/blog/${post.id}`}>
        <BlurImage
          className={styles.cover}
          image={post.image}
          alt={post.title}
        />
      </Link>
    </div>
  )
}

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

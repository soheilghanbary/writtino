import { Balancer } from "react-wrap-balancer"

import { BlurImage } from "@/components/blur-image"
import { Icons } from "@/components/icons"

import { PostPublished } from "./post-published"
import styles from "./post.module.scss"

export function SinglePost(post: any) {
  return (
    <div className="mx-auto max-w-screen-sm">
      <PostTitle text={post.title} />
      <PostPublished published={post.published} />
      <PostAuthor {...post.user} />
      <PostCover image={post.image} alt={post.title} />
      <PostContent content={post.content!} />
    </div>
  )
}

const PostTitle = ({ text }: { text: string }) => (
  <h1 className={styles.title}>{text}</h1>
)

const PostContent = ({ content }: { content: string }) => (
  <div
    className={styles.content}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const PostCover = ({ image, alt }: { image: string; alt: string }) => (
  <BlurImage alt={alt} image={image} className={styles.cover} />
)

const PostAuthor = ({
  name,
  username,
  image,
}: {
  name: string
  email: string
  image: string
  username: string
}) => (
  <div className="my-4 flex items-center space-x-4">
    <BlurImage
      className="h-10 w-10 [&>img]:rounded-full"
      alt={name}
      image={image}
    />
    <div>
      <h2 className="text-base font-semibold">{name}</h2>
      <p className="text-sm text-muted-foreground">@{username}</p>
    </div>
  </div>
)

import { Balancer } from "react-wrap-balancer"

import { BlurImage } from "@/components/blur-image"
import { Icons } from "@/components/icons"

import styles from "./post.module.scss"

export function SinglePost(post: any) {
  return (
    <div className="mx-auto max-w-screen-sm">
      <PostTitle text={post.title} />
      <div className="my-4 flex items-center justify-center gap-8 font-medium text-foreground/80">
        <div className="flex items-center">
          <Icons.heart className="mr-2 h-4 w-4" /> 23.5K
        </div>
        <div className="flex items-center">
          <Icons.saved className="mr-2 h-4 w-4" />
        </div>
      </div>
      <PostCover image={post.image} alt={post.title} />
      <PostContent content={post.content!} />
      <hr className="my-4" />
      <PostAuthor {...post.user} />
      {/* <RelatedPosts id={post.id} /> */}
    </div>
  )
}

const PostTitle = ({ text }: { text: string }) => (
  <Balancer ratio={0} preferNative={false} className={styles.title}>
    {text}
  </Balancer>
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
  email,
  image,
}: {
  name: string
  email: string
  image: string
}) => (
  <div className="space-y-4">
    <BlurImage
      className="h-14 w-14 [&>img]:rounded-full"
      alt={name}
      image={image}
    />
    <div>
      <h2 className="text-base font-semibold">{name}</h2>
      <p className="text-sm text-foreground/70">{email}</p>
    </div>
  </div>
)

import { SinglePost } from "./post"
import { PostAuthor } from "./post/post-author"

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <>
      <SinglePost id={params.id} />
      <PostAuthor id={params.id} />
    </>
  )
}

import { SinglePost } from "./post"

export default function PostPage({ params }: { params: { id: string } }) {
  return <SinglePost id={params.id} />
}

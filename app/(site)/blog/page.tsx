import { PostList } from "@/components/post/post-list"

import { SearchPost } from "../../../components/post/search-post"

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <SearchPost />
      <PostList role="all" />
    </div>
  )
}

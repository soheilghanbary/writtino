import { PostList } from "@/components/post/post-list"
import { UserProfile } from "@/components/user-profile"

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-screen-lg gap-10">
      <UserProfile />
      <PostList />
    </div>
  )
}

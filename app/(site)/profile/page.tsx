import { PostList } from "../blog/post-list"
import { UserProfile } from "./user-profile"

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-screen-lg gap-10">
      <UserProfile />
      <PostList />
    </div>
  )
}

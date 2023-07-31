import Image from "next/image"

import { getCurrentUser } from "@/lib/user-session"
import { Icons } from "@/components/icons"
import { Postcard } from "@/components/post/post-card"

import { UserProfile } from "./user-profile"

export default function ProfilePage() {
  return (
    <div className="mx-auto flex max-w-screen-lg gap-10">
      <div className="w-2/5">
        <div className="sticky top-20">
          <UserProfile />
        </div>
      </div>
      <section className="mx-auto w-3/5 max-w-xl space-y-10">
        {/* <Postcard />
        <Postcard />
        <Postcard />
        <Postcard /> */}
      </section>
    </div>
  )
}

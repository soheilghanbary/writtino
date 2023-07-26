import Image from "next/image"

import { getCurrentUser } from "@/lib/user-session"
import { Icons } from "@/components/icons"
import { Postcard } from "@/components/post/post-card"

export default async function ProfilePage() {
  const user = await getCurrentUser()
  return (
    <div className="mx-auto flex max-w-screen-lg gap-10">
      <div className="w-2/5">
        <div className="sticky top-20">
          <section className="mx-auto flex max-w-xl items-center gap-8">
            <div className="relative h-32 w-32">
              <Image
                fill
                className="h-full w-full rounded-full object-cover"
                alt={user?.name!}
                src={user?.image!}
              />
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-lg font-semibold text-foreground">
                {user?.name}
              </p>
              <p className="text-sm text-muted-foreground">@{user?.username}</p>
              <a
                href={`https://${user?.website}`}
                className="flex items-center text-sm text-sky-500 underline"
              >
                <Icons.link className="mr-1 h-4 w-4" />
                {user?.website}
              </a>
            </div>
          </section>
          <section className="mx-auto my-4 max-w-xl">
            <p className="my-4 text-sm text-muted-foreground">{user?.bio}</p>
            <h2 className="mb-4 text-base font-semibold text-foreground">
              Social Links
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Icons.link className="mr-2 h-4 w-4 text-teal-500" />{" "}
                hamkary.dev
              </li>
              <li className="flex items-center text-muted-foreground">
                <Icons.twitter className="mr-2 h-4 w-4 text-sky-500" />
                @soli_ghanbary
              </li>
              <li className="flex items-center text-muted-foreground">
                <Icons.insta className="mr-2 h-4 w-4 text-pink-500" />
                soheil__ghanbary
              </li>
              <li className="flex items-center text-muted-foreground">
                <Icons.linkedin className="mr-2 h-4 w-4 text-blue-500" />
                soheil_ghanbary
              </li>
            </ul>
          </section>
        </div>
      </div>
      <section className="mx-auto w-3/5 max-w-xl space-y-10">
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
        <Postcard />
      </section>
    </div>
  )
}

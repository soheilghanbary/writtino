import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import { PostLength } from "./post-length"
import { PostList } from "./post-list"

const topics = [
  "Programming",
  "Data Science",
  "Technology",
  "Writing",
  "Machine Learning",
  "Explore",
  "Freelancer",
  "Artifical Intelligence",
  "Blockchain",
]

const navItems = [
  "Help",
  "Status",
  "About",
  "Services",
  "Contact",
  "Terms",
  "FAQ",
]

const users = [
  {
    image: "https://avatars.githubusercontent.com/u/810438?v=4",
    name: "dan abromov",
    email: "user1@example.com",
  },
  {
    image: "https://avatars.githubusercontent.com/u/22392?v=4",
    name: "Jack Herrington",
    email: "user2@example.com",
  },
  {
    image: "https://avatars.githubusercontent.com/u/163561?v=4",
    name: "Jason Lengstorf",
    email: "user3@example.com",
  },
]

export default function BlogPage() {
  return (
    <section className="mx-auto flex max-w-screen-lg gap-10">
      <PostLength />
      <PostList />
      <div className="w-2/6">
        <section className="sticky top-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold leading-relaxed text-foreground">
              Recommended topics
            </h2>
            <ul className="flex flex-wrap items-center gap-3">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="cursor-pointer rounded-full bg-secondary px-4 py-3 text-sm font-medium text-foreground/70 ring-2 ring-transparent ring-offset-2 ring-offset-background duration-200 hover:text-foreground/90 hover:ring-sky-500"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold leading-relaxed text-foreground">
              Reading List
            </h2>
            <ul className="flex flex-wrap items-center gap-6">
              {navItems.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold leading-relaxed text-foreground">
              Who to Follow
            </h2>
            <ul className="flex flex-wrap items-center gap-6">
              {users.map(({ email, image, name }, i) => (
                <li
                  key={i}
                  className="flex w-full items-center justify-between space-x-4"
                >
                  <Avatar>
                    <AvatarImage src={image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h2 className="flex-1 font-bold">{name}</h2>
                  <Button variant={"outline"} size={"sm"}>
                    Follow
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  )
}

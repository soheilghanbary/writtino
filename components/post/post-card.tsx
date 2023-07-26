import Image from "next/image"
import Balancer from "react-wrap-balancer"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Icons } from "../icons"

export function Postcard() {
  return (
    <section className="flex max-w-screen-sm items-center space-x-6">
      <div className="flex-1 space-y-2">
        <PostTitle />
        <PostDescription />
        <PostFooter />
      </div>
      <PostCover />
    </section>
  )
}

export function PostCover() {
  return (
    <div className="relative h-24 w-24 rounded-lg shadow md:h-36 md:w-36">
      <Image
        fill
        className="h-full w-full rounded-lg object-cover"
        alt="my cover post"
        src={"/images/cover-2.jpeg"}
      />
    </div>
  )
}

export function PostTitle() {
  return <h2 className="text-lg font-semibold">God of War: Ragnarök</h2>
}

export function PostDescription() {
  return (
    <p className="hidden border-b pb-2 text-xs leading-5 text-foreground/60 md:inline-block">
      God of War Ragnarok: Embark on an epic Norse odyssey with Kratos and
      Atreus in the highly anticipated sequel.
    </p>
  )
}

export function PostFooter() {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <PostAuthor />
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <PostLike />
        <PostSave />
      </div>
    </div>
  )
}

export function PostLike() {
  return (
    <div className="flex items-center">
      <Icons.heart className="mr-2 h-4 w-4 text-pink-500 md:h-5 md:w-5" />
      12.4K
    </div>
  )
}

export function PostSave() {
  return <Icons.saved className="h-4 w-4 text-sky-500 md:h-5 md:w-5" />
}

export function PostAuthor() {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-7 w-7">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-0.5">
        <h5 className="text-xs font-semibold text-foreground/90">
          Soheil Ghanbary
        </h5>
        <h6 className="text-xs font-medium text-muted-foreground">
          CEO Writtino
        </h6>
      </div>
    </div>
  )
}

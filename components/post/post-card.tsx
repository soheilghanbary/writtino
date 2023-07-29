import Image from "next/image"
import Link from "next/link"
import { Post } from "@prisma/client"

import { PostType } from "@/types/post"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Icons } from "../icons"

export function Postcard({ id, title, description, image }: PostType) {
  return (
    <section className="flex max-w-screen-sm items-center space-x-6">
      <div className="flex-1 space-y-2">
        <PostTitle text={title} />
        <PostDescription text={description} />
        <PostFooter />
      </div>
      <PostCover image={image} id={id} />
    </section>
  )
}
export function PostCover({ image, id }: { image: string; id: string }) {
  return (
    <Link
      href={`/blog/${id}`}
      className="relative h-24 w-24 rounded-lg shadow md:h-36 md:w-36"
    >
      <Image
        fill
        className="h-full w-full rounded-lg object-cover"
        alt="my cover post"
        src={image}
      />
    </Link>
  )
}

export function PostTitle({ text }: { text: string }) {
  return <h2 className="text-lg font-semibold">{text}</h2>
}

export function PostDescription({ text }: { text: string }) {
  return (
    <p className="hidden border-b pb-2 text-xs leading-5 text-foreground/60 md:block">
      {text}
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

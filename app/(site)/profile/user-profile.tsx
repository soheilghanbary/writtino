"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { useCurrentUser } from "@/hooks/user"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"
import { UserAvatar } from "@/components/user-avatar"

export function UserProfile() {
  const { data: user, isLoading } = useCurrentUser()
  if (isLoading) return <UserProfileSkeleton />

  return (
    <>
      <section className="mx-auto flex w-4/6 items-center gap-8">
        <div className="relative h-32 w-32">
          <UserAvatar image={user.image} alt={user.name} />
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-lg font-semibold text-foreground">{user?.name}</p>
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
      <section className="mx-auto my-4 w-4/6">
        <p className="my-4 text-sm text-muted-foreground">{user?.bio}</p>
        <h2 className="mb-4 text-base font-semibold text-foreground">
          Social Links
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center text-muted-foreground">
            <Icons.mail className="mr-2 h-4 w-4 text-teal-500" /> {user.email}
          </li>
          <li className="flex items-center text-muted-foreground">
            <Icons.twitter className="mr-2 h-4 w-4 text-sky-500" />
            {user.twitter}
          </li>
          <li className="flex items-center text-muted-foreground">
            <Icons.insta className="mr-2 h-4 w-4 text-pink-500" />
            {user.instagram}
          </li>
          <li className="flex items-center text-muted-foreground">
            <Icons.linkedin className="mr-2 h-4 w-4 text-blue-500" />
            {user.linkedin}
          </li>
        </ul>
      </section>
    </>
  )
}

export const UserProfileSkeleton = () => (
  <>
    <section className="mx-auto flex max-w-xl items-center gap-8">
      <Skeleton className="relative h-32 w-32 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-24" />
      </div>
    </section>
    <section className="mx-auto my-4 max-w-xl space-y-4">
      <Skeleton className="h-3 w-full rounded-full" />
      <Skeleton className="h-3 w-full rounded-full" />
    </section>
  </>
)

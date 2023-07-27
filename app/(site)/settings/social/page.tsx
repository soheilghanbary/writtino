"use client"

import { useCurrentUser } from "@/hooks/user"

import { SocialForm } from "./social-form"

export default function SocialPage() {
  const { data: user, isLoading } = useCurrentUser()
  return (
    <>
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold leading-relaxed text-foreground">
          Social Setting
        </h1>
        <p className="text-sm text-muted-foreground">
          manage your social network links
        </p>
      </div>
      <SocialForm
        website={user?.website}
        twitter={user?.twitter}
        linkedin={user?.linkedin}
        instagram={user?.instagram}
      />
    </>
  )
}

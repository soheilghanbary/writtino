"use client"

import { useCurrentUser } from "@/hooks/user"

import AccountForm from "./account-form"
import { ImageUpload } from "./image-upload"

export default function AccountSettings() {
  const { data: user, isLoading } = useCurrentUser()

  return (
    <>
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold leading-relaxed text-foreground">
          Account Setting
        </h1>
        <p className="text-sm text-muted-foreground">
          manage your account setting
        </p>
      </div>
      <ImageUpload />
      <AccountForm
        bio={user?.bio!}
        name={user?.name!}
        username={user?.username!}
      />
    </>
  )
}

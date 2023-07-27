"use client"

import { FormEvent, useRef } from "react"

import { AccountProps } from "@/types/user"
import { useUpdateAccount } from "@/hooks/user"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AccountForm({ bio, name, username }: AccountProps) {
  const nameRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const bioRef = useRef<HTMLTextAreaElement>(null)

  const { isLoading, mutateAsync } = useUpdateAccount()

  const onUpdate = async (e: FormEvent) => {
    e.preventDefault()
    const user = {
      name: nameRef.current?.value!,
      username: usernameRef.current?.value!,
      bio: bioRef.current?.value!,
    }
    await mutateAsync(user)
  }

  return (
    <form onSubmit={onUpdate} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="name">
          Full Name
        </label>
        <Input
          id="name"
          size={32}
          className="w-[400px]"
          ref={nameRef}
          defaultValue={name}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="username">
          Username
        </label>
        <Input
          id="username"
          size={32}
          className="w-[400px]"
          ref={usernameRef}
          defaultValue={username}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="name">
          Biography
        </label>
        <Textarea
          id="name"
          ref={bioRef}
          className="w-[400px]"
          defaultValue={bio}
        />
      </div>
      <Button disabled={isLoading} type="submit" variant={"default"}>
        Save
      </Button>
    </form>
  )
}

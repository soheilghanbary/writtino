"use client"

import { FormEvent, useRef } from "react"

import { SocialProps } from "@/types/user"
import { useUpdateAccount } from "@/hooks/user"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

export function SocialForm({
  twitter,
  instagram,
  linkedin,
  website,
}: SocialProps) {
  const websiteRef = useRef<HTMLInputElement>(null)
  const twitterRef = useRef<HTMLInputElement>(null)
  const linkedinRef = useRef<HTMLInputElement>(null)
  const instagramRef = useRef<HTMLInputElement>(null)

  const { mutateAsync, isLoading } = useUpdateAccount()

  const onSave = async (e: FormEvent) => {
    e.preventDefault()
    const social = {
      website: websiteRef.current?.value!,
      twitter: twitterRef.current?.value!,
      linkedin: linkedinRef.current?.value!,
      instagram: instagramRef.current?.value!,
    }
    await mutateAsync(social)
  }

  return (
    <form onSubmit={onSave} className="space-y-4">
      <div className="space-y-2">
        <label
          className="flex items-center text-sm font-medium"
          htmlFor="twitter"
        >
          <Icons.link className="mr-2 h-4 w-4" /> Personal Site
        </label>
        <Input
          id="twitter"
          size={32}
          className="w-[400px]"
          ref={websiteRef}
          defaultValue={website}
        />
      </div>
      <div className="space-y-2">
        <label
          className="flex items-center text-sm font-medium"
          htmlFor="twitter"
        >
          <Icons.twitter className="mr-2 h-4 w-4" /> Twitter
        </label>
        <Input
          id="twitter"
          size={32}
          className="w-[400px]"
          ref={twitterRef}
          defaultValue={twitter}
        />
      </div>
      <div className="space-y-2">
        <label
          className="flex items-center text-sm font-medium"
          htmlFor="linkedin"
        >
          <Icons.linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </label>
        <Input
          id="linkedin"
          size={32}
          className="w-[400px]"
          ref={linkedinRef}
          defaultValue={linkedin}
        />
      </div>
      <div className="space-y-2">
        <label
          className="flex items-center text-sm font-medium"
          htmlFor="instagram"
        >
          <Icons.insta className="mr-2 h-4 w-4" /> Instagram
        </label>
        <Input
          id="instagram"
          size={32}
          className="w-[400px]"
          ref={instagramRef}
          defaultValue={instagram}
        />
      </div>
      <Button disabled={isLoading} type="submit" variant={"default"}>
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Save
      </Button>
    </form>
  )
}

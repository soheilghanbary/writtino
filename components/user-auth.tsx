"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export function UserAuth() {
  const [isGithubLoading, setIsGithubLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  function onSignOAuth(provider: "google" | "github") {
    provider === "github" ? setIsGithubLoading(true) : setIsGoogleLoading(true)
    signIn(provider)
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        disabled={isGithubLoading}
        onClick={() => onSignOAuth("github")}
        variant={"outline"}
      >
        {isGithubLoading ? (
          <Icons.spinner className="mr-2.5 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2.5 h-4 w-4" />
        )}
        Github
      </Button>
      <Button
        disabled={isGoogleLoading}
        onClick={() => onSignOAuth("google")}
        variant={"outline"}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2.5 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2.5 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  )
}

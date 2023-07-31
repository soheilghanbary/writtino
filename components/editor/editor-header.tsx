"use client"

import { useRef, useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"

import { useUploadThing } from "@/lib/uploadthing"
import { usePostState } from "@/hooks/use-post"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BackButton } from "@/components/back-button"

import { Icons } from "../icons"
import { PostImageUpload } from "./post-upload-image"

export function EditorHeader() {
  const [loading, setLoading] = useState(false)
  const { post } = usePostState()
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const router = useRouter()

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(data),
      })
      return await res.json()
    },
    onSuccess: (res: any) => {
      router.push(`/blog/${res.id}`)
    },
  })

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: async (res: any) => {
      const newPost = {
        title: titleRef.current?.value!,
        description: descriptionRef.current?.value!,
        content: post.content,
        image: res[0].fileUrl,
      }
      await mutateAsync(newPost)
      setLoading(false)
    },
    onUploadError: () => {
      alert("error occurred while uploading")
    },
  })

  const onPublish = () => {
    setLoading(true)
    startUpload([post.image])
  }

  return (
    <div className="flex items-center justify-between">
      <BackButton />
      <Dialog>
        <DialogTrigger>
          <Button variant={"default"}>Publish</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Preview on Publish Post</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="title">
                Title
              </label>
              <Input ref={titleRef} id="title" size={32} className="w-full" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="title">
                Description
              </label>
              <Textarea ref={descriptionRef} id="title" className="w-full" />
            </div>
            <PostImageUpload />
          </div>
          <DialogFooter>
            <Button
              onClick={onPublish}
              disabled={loading}
              variant={loading ? "outline" : "default"}
            >
              {loading && (
                <Icons.spinner className="mr-4 h-4 w-4 animate-spin" />
              )}
              Create Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

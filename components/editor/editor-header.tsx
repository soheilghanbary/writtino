"use client"

import { useRef } from "react"
import { useMutation } from "@tanstack/react-query"

import { useUploadThing } from "@/lib/uploadthing"
import { usePost, usePostImage } from "@/hooks/use-post"
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

import { PostImageUpload } from "./post-upload-image"

export function EditorHeader() {
  const { post } = usePost()
  const { files } = usePostImage()
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: any) => {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(data),
      })
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
    },
    onUploadError: () => {
      alert("error occurred while uploading")
    },
  })

  const onPublish = () => startUpload(files)

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
              disabled={isLoading}
              variant={"default"}
            >
              Create Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

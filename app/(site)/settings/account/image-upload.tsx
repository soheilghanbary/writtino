"use client"

import { useCallback, useState } from "react"
import { ImageIcon } from "lucide-react"
import { useDropzone } from "react-dropzone"
import type { FileWithPath } from "react-dropzone"
import { toast } from "sonner"

import { useUploadThing } from "@/lib/uploadthing"
import { useCurrentUser, useUpdateAccount } from "@/hooks/user"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { UserAvatar } from "@/components/user-avatar"

export function ImageUpload() {
  const [isLoading, setIsLoading] = useState(false)
  const { data: user } = useCurrentUser()
  const [files, setFiles] = useState<File[]>([])
  const [path, setPath] = useState("")
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
    setPath(URL.createObjectURL(acceptedFiles[0]))
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {},
  })
  const { mutateAsync } = useUpdateAccount()
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: async (res: any) => {
      mutateAsync({ image: res[0].fileUrl })
    },
    onUploadError: () => {
      alert("error occurred while uploading")
    },
  })

  const onUpload = () => {
    setIsLoading(true)
    toast.promise(startUpload(files), {
      loading: "Image Uploading ...",
      success: () => {
        setPath("")
        setIsLoading(false)
        return `Image Successfully Updated!`
      },
      error: "Error",
    })
  }

  return (
    <section className="my-4">
      {path.length ? (
        <div className="flex items-center space-x-4">
          <div
            {...getRootProps()}
            className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed bg-secondary"
          >
            <UserAvatar alt="upload user avatar" image={path} />
          </div>
          <Button
            disabled={isLoading}
            variant={isLoading ? "outline" : "default"}
            onClick={onUpload}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Upload & Save
          </Button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed bg-secondary"
        >
          <input {...getInputProps()} />
          {user?.image ? (
            <UserAvatar alt="upload user avatar" image={user.image} />
          ) : (
            <ImageIcon className="h-5 w-5" />
          )}
        </div>
      )}
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/back-button"

export function EditorHeader() {
  return (
    <div className="flex items-center justify-between">
      <BackButton />
      <Button variant={"default"}>Save</Button>
    </div>
  )
}

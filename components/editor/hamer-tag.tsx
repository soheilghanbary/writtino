import { NodeViewWrapper } from "@tiptap/react"

export const HamerTag = () => {
  return (
    <NodeViewWrapper className="react-component">
      <div className="flex w-full items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle cx="20" cy="50" r="2" fill="hsl(var(--muted-foreground))" />
          <circle cx="40" cy="50" r="2" fill="hsl(var(--muted-foreground))" />
          <circle cx="60" cy="50" r="2" fill="hsl(var(--muted-foreground))" />
          <circle cx="80" cy="50" r="2" fill="hsl(var(--muted-foreground))" />
        </svg>
      </div>
    </NodeViewWrapper>
  )
}

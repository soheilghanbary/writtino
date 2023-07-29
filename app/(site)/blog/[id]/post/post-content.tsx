export const PostContent = ({ content }: { content: string }) => (
  <div
    className="mt-8 text-foreground/90 [&>h2]:text-4xl [&>h2]:font-bold [&>h2]:text-foreground [&>img]:mx-auto [&>p]:my-4 [&>p]:leading-8"
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

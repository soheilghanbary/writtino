import { Balancer } from "react-wrap-balancer"

interface Props {
  text: string
}

export function PostTitle({ text }: Props) {
  return (
    <Balancer
      ratio={0}
      preferNative={false}
      className="text-center text-5xl font-black leading-tight text-foreground"
    >
      {text}
    </Balancer>
  )
}

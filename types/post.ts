export interface PostType {
  id: string
  title: string
  description: string
  content: string
  image: string
  userId: string
  user: {
    id: string
    name: string
    email: string
    image: string
  }
}

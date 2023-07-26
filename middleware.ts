import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // if (req.nextUrl.pathname === "/profile") {
      //   return token?.userRole === "profile"
      // }
      return !!token
    },
  },
})

export const config = { matcher: ["/profile/:path*", "/settings", "/"] }

import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";



export default NextAuth({
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      // ...add more providers here
    ],
    secret: [{
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    }]
})

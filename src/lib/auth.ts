import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.client_id as string,
      clientSecret: process.env.client_secret as string,
    }),
  ],
}

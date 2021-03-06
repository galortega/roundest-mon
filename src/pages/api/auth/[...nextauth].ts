import { prisma } from "@/backend/utils/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  VERCEL_ENV,
  NODE_ENV,
  FACEBOOK_ID,
  FACEBOOK_SECRET,
  SECRET,
} = process.env;

declare module "next-auth" {
  interface Session {
    userId: string;
  }
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers:
    VERCEL_ENV === "preview" || NODE_ENV === "test"
      ? [
          CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: {
                label: "Username",
                type: "text",
                placeholder: "jsmith",
              },
              password: { label: "Password", type: "password" },
            },
            async authorize() {
              return {
                id: 1,
                name: "J Smith",
                email: "jsmith@example.com",
                image:
                  "https://lh3.googleusercontent.com/a/AATXAJwCDUo1jIT5HDujh9XXrPfV-1Vnj64VvCtSu7MQUrE=s96-c",
              };
            },
          }),
        ]
      : [
          GoogleProvider({
            clientId: `${GOOGLE_CLIENT_ID}`,
            clientSecret: `${GOOGLE_CLIENT_SECRET}`,
          }),
          FacebookProvider({
            clientId: `${FACEBOOK_ID}`,
            clientSecret: `${FACEBOOK_SECRET}`,
          }),
          // ...add more providers here
        ],
  pages: {
    signIn: "/auth/signin",
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user }) {
      session.userId = user.id;
      return session;
    },
  },
  secret: SECRET,
};

export default NextAuth(authOptions);

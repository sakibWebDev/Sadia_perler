import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt"

const handler = NextAuth({
session: {
    strategy : "jwt",
    maxAge : 30*24*60*60
},
providers: [
    CredentialsProvider({
        credentials: {
            email : {},
            password : {}
        },
        async authorize (credentials) {
            const { email, password } = credentials;
            console.log(email, password);
            if (!email || !password) {
                return null;
              }
              const db = await connectDB();
              const currentUser = await db.collection("users").findOne({ email });
              if (!currentUser) {
                return null;
              }
              const passwordMatched = bcrypt.compareSync(
                password,
                currentUser.password
              );
              if (!passwordMatched) {
                return null;
              }
            return currentUser;
        }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
],
callbacks: [],
pages: {
    signIn : '/login'
}

}) 

export { handler as GET , handler as POST }


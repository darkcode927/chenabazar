import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    // 🔥 GOOGLE LOGIN
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // 🔥 EMAIL + PASSWORD LOGIN
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        await connectDB();

        const user = await User.findOne({
          email: credentials.email.toLowerCase(),
        });

        if (!user) {
          throw new Error("User not found");
        }

        // 🔥 IMPORTANT: Google user has no password
        if (!user.password) {
          throw new Error("Please login with Google");
        }

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isMatch) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role || "user",
          image: user.image || null,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    // 🔥 GOOGLE USER SAVE
    async signIn({ profile }) {
      try {
        if (!profile?.email) return true;

        await connectDB();

        const existingUser = await User.findOne({
          email: profile.email.toLowerCase(),
        });

        if (!existingUser) {
          await User.create({
            name: profile.name,
            email: profile.email.toLowerCase(),
            image: profile.image,
            role: "user",
          });
        }

        return true;
      } catch (error) {
        console.error("SIGNIN ERROR:", error);
        return false;
      }
    },

    // 🔥 ADD DATA TO TOKEN
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id;
        token.role = (user as any).role;
      }

      // 🔥 ensure role always exists
      if (!token.role) {
        await connectDB();

        const dbUser = await User.findOne({
          email: token.email!.toLowerCase(),
        });

        if (dbUser) {
          token.id = dbUser._id.toString();
          token.role = dbUser.role;
        }
      }

      return token;
    },

    // 🔥 SEND TO FRONTEND
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
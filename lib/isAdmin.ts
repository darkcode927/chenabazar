import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { authOptions } from "./authOptions";

export async function isAdmin() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return false;

  await connectDB();

  const user = await User.findOne({
    email: session.user.email,
  });

  return user?.role === "admin";
}
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function GET(req: Request) {
  try {
    const token = req.headers
      .get("cookie")
      ?.split("token=")[1];

    if (!token) {
      return NextResponse.json({ user: null });
    }

    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

    await connectDB();

    const user = await User.findById(decoded.userId).select(
      "-password"
    );

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ user: null });
  }
}
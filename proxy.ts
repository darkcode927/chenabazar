import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function proxy(request: NextRequest) {
  const session = await getServerSession(authOptions);

  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (!session || (session.user as any)?.role !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Protect authenticated user routes
  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/orders") ||
    pathname.startsWith("/profile")
  ) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// কোন route গুলো protect হবে
export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/orders/:path*",
    "/profile/:path*",
  ],
};
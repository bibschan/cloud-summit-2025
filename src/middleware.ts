import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnVote = req.nextUrl.pathname.startsWith("/vote");

  if (isOnVote && !isLoggedIn) {
    return Response.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
});

// Optionally configure middleware to run only on specific paths
export const config = {
  matcher: ["/vote/:path*", "/api/auth/:path*"],
}; 
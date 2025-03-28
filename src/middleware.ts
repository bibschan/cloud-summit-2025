import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnVote = req.nextUrl.pathname.startsWith("/vote");
  const isProtectedApi = req.nextUrl.pathname.startsWith("/api/vote");

  if (!isLoggedIn && (isOnVote || isProtectedApi)) {
    if (isProtectedApi) {
      return new NextResponse(
        JSON.stringify({ error: "Authentication required" }),
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
    return Response.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
});

// run only on specific paths
export const config = {
  matcher: [
    "/vote/:path*",
    "/api/vote/:path*",
    "/api/auth/:path*"
  ]
}; 
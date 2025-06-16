import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// Create a middleware function that works for both static export and development
const middleware = process.env.NEXT_PHASE === 'phase-production-build'
  ? function staticMiddleware() {
      // No-op middleware for static export
      return NextResponse.next();
    }
  : auth((req) => {
      // Auth middleware for development/production server
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
                "Content-Type": "application/json",
              },
            }
          );
        }
        return Response.redirect(new URL("/auth/signin", req.url));
      }
      return NextResponse.next();
    });

export default middleware;

// Configure matcher for non-static environments
export const config = {
  matcher: process.env.NEXT_PHASE === 'phase-production-build' ? [] : [
    // Add paths that should be protected by auth
    '/vote/:path*',
    '/api/vote/:path*',
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(
  request: NextRequest,
) {
  const token =
    request.cookies.get("token");

  const pathname =
    request.nextUrl.pathname;

  if (
    pathname.startsWith(
      "/super-admin",
    ) &&
    !token
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url),
    );
  }

  if (
    pathname.startsWith("/admin") &&
    !token
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/super-admin/:path*",
    "/admin/:path*",
  ],
};
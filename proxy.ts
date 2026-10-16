import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard",
  "/dashboard/(.*)",
  "/userdata",
  "/userdata/(.*)",
  "/admin",
  "/admin/(.*)",
  "/vendor",
  "/vendor/(.*)",
  "/create-custompiece",
  "/create-custompiece/(.*)",
]);

const isAdminRoute = createRouteMatcher(["/admin", "/admin/(.*)"]);
const isVendorRoute = createRouteMatcher(["/vendor", "/vendor/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  console.log("PROXY HIT:", req.nextUrl.pathname);
  const headers = new Headers(req.headers);
  headers.set("x-pathname", req.nextUrl.pathname);
  const response = NextResponse.next({ request: { headers } });

  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  if (isAdminRoute(req)) {
    const { sessionClaims } = await auth();
    const userRole = (sessionClaims?.metadata as { role?: string })?.role;

    if (userRole !== "ADMIN") {
      const url = new URL("/", req.url);
      return NextResponse.redirect(url);
    }
  }

  if (isVendorRoute(req)) {
    const { sessionClaims } = await auth();
    const userRole = sessionClaims?.metadata?.role;

    if (userRole !== "VENDOR") {
      return NextResponse.redirect(new URL("/vendor-application", req.url));
    }
  }

  return response;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

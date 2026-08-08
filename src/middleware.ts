import { auth } from "@/auth";
import { findDemoUserByEmail } from "@/lib/demo-users";

export default auth((req) => {
  if (!req.auth) {
    const isMeridian = req.nextUrl.pathname.startsWith("/meridian");
    const loginUrl = new URL(isMeridian ? "/meridian" : "/", req.nextUrl.origin);
    return Response.redirect(loginUrl);
  }

  const email = req.auth.user?.email;
  if (email && !findDemoUserByEmail(email)) {
    const loginUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  runtime: "nodejs",
  matcher: ["/dashboard/:path*", "/meridian/dashboard/:path*"],
};

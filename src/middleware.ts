import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth) {
    const isMeridian = req.nextUrl.pathname.startsWith("/meridian");
    const loginUrl = new URL(isMeridian ? "/meridian" : "/", req.nextUrl.origin);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/meridian/dashboard/:path*"],
};

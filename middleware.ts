import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["no", "en", "lt"],
  defaultLocale: "no"
});

export const config = {
  matcher: ["/", "/(no|en|lt)/:path*"]
};

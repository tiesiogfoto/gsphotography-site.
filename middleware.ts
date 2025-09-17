import createMiddleware from "next-intl/middleware";
import { locales } from "./next-intl.config";

export default createMiddleware({
  locales,
  defaultLocale: "no"
});

export const config = {
  matcher: ["/", "/(no|en|lt)/:path*"]
};

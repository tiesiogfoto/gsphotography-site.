import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import nextIntlConfig from "./next-intl.config";

export default createMiddleware(nextIntlConfig);

export const config = {
  matcher: ["/", "/(no|en|lt)/:path*"]
};

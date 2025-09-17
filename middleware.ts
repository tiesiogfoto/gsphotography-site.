// middleware.ts
import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config';

export default createMiddleware(intlConfig);

export const config = {
  // aptarnaujam šaknį ir lokalizuotus path’us
  matcher: ['/', '/(en|no|lt)/:path*']
};

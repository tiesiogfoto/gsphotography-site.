import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'no', 'lt'],
  defaultLocale: 'no',
  localeDetection: true
});

export const config = {
  matcher: ['/', '/(en|no|lt)/:path*']
};


import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./next-intl.config.js');

export default withNextIntl({
  reactStrictMode: true
});

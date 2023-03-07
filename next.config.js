// `next-pwa` config should be passed here
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  reactStrictMode: true,
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'img.icons8.com',
      'gateway.moralisipfs.com',
      'ipfs.moralis.io',
      'lh3.googleusercontent.com',
      'www.artnews.com',
    ],
  },
  output: 'standalone',
});

module.exports = nextConfig;

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? 'https://ishareteam6.na.xom.com/sites/DigProcdrs/Portal' : undefined,
  // basePath: '/dponestopshop', --deactivated this config since conflicts in Edge that forces emulating IE11 mode
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

// module.exports = {
//   reactStrictMode: true,
// }
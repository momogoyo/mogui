/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  cssModules: true,
  env: {
    VERSION: require('./package.json').version
  }
}

module.exports = nextConfig
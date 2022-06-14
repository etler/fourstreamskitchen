/** @type {import('next').NextConfig} */

const withReactSvg = require("next-react-svg")
const path = require("path")

module.exports = withReactSvg({
  reactStrictMode: true,
  include: path.resolve(__dirname, "public/icons"),
  webpack(config) {
    return config
  },
})

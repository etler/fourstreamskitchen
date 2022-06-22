/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins")
const reactSvg = require("next-react-svg")
const path = require("path")

module.exports = withPlugins([[reactSvg, {}]], {
  reactStrictMode: true,
  include: path.resolve(__dirname, "public/icons"),
  webpack(config) {
    return config
  },
})

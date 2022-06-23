/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins")
const reactSvg = require("next-react-svg")
const path = require("path")

module.exports = withPlugins([[reactSvg, {}]], {
  reactStrictMode: true,
  include: path.resolve(__dirname, "public/icons"),
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/",
      exportFolderPath: "out",
      quality: 75,
    },
  },
  experimental: { images: { layoutRaw: true } },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
  },
  webpack(config) {
    return config
  },
})

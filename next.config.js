// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos({
  assetDirectory: 'static',

  webpack(config, options) {
    return config
  }
})

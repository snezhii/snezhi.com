module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },

      use: ['@svgr/webpack']
    })

    return config
  },

  // ...other config
  output: 'export',
  pageExtensions: ['page.jsx', 'page.js']
}

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
  pageExtensions: ['page.jsx', 'page.js'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
}

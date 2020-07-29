const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = {
  webpack: (config, { dev, defaultLoaders }) => {
    config.module.rules.push({
      output: {
        publicPath: './public',
      },
      loader: defaultLoaders.babel,
      include: path.resolve(__dirname, '../src'),
    })
    return config
  }
}

module.exports = withSass({
  cssModules: true,
})
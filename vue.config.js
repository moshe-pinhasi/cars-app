const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/sass/abstracts/_mixing.scss'),
        path.resolve(__dirname, './src/assets/sass/abstracts/_variables.scss')
      ]
    }
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qpony-shibainu/'
    : '/',
  devServer: {
    // https: true
  }
}
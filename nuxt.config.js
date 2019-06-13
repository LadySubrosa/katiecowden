module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Killer Queen Designs by Katie Cowden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Austin, TX Artist specializing in Lasercut pieces, Photography, Embroidery and all things Spooky' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#C89A27' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    cssSourceMap: false,
    loaders: [
      {
        test: /\.(png|jpe?g|JPE?G}gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 15000, // 10KO
          name: 'img/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: ['~plugins/v-img']
}

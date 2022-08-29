export default {
  head: {
    title: 'Killer Queen Designs by Katie Cowden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Austin, TX Artist specializing in Lasercut pieces, Photography, Embroidery and all things Spooky'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  loading: { color: '#C89A27' },
  target: 'static',
  plugins: ['~/plugins/v-img']
}

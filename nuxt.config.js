const nodeExternals = require('webpack-node-externals');
module.exports = {
  modules: [
    '@nuxtjs/axios',
    'nuxt-babel'
  ],
  head: {
    title: 'formbuilder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://unpkg.com/muse-ui@3.0.0-beta.5/dist/muse-ui.css" },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css' }
    ]
  },
  plugins: [
    '~/plugins/muse-ui.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   extend(config, { isDev, isClient, isServer }) {
    if (isServer) {
      config.externals = [
        nodeExternals({
          whitelist: [/^muse-ui/]
        })
      ];
    }
  }
  }
}

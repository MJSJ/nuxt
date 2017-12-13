function isJSRule (rule) {
  return ['/\\.js$/', '/\\.es6$/'].indexOf(rule.test.toString()) !== -1
}

const ES6Loader = {
  //jsx、es6、es7兼容性
  // test: /\.(es6|jsx|js)$/,
  // exclude: /node_modules\/(?!(@gfe|@dp))/,
  loader: 'babel-loader',
  // query: {
  //   presets: [ 'es2015', 'stage-0']
    
  // }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    init(axios, ctx) {
      axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
    },
    requestInterceptor: (config, { store }) => {
      if (store.state.token) {
        config.headers.common['Authorization'] = store.state.token
      }
      return config
    }
    // proxyHeaders: false
  },
  build: {
    extend (config) {
      // config.module.rules.forEach((rule) => {
      //     if (isJSRule(rule)) {
      //       rule.include = /node_modules\/mjsj-api/
      //       console.log(rule)
      //     }
      // })
      // config.module.rules.push({
      //   test: /\.js$/,
      //   exclude:/node_modules\/?!mjsj-api/,
      //   loader: 'babel-loader',
      //   options:{
      //     presets:["babel-preset-vue-app"]
      //   }
      // });
    }
  },
}

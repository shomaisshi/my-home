export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/my-home/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'KLEENOTE（クレーノート）',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'KLEENOTE（クレーノート）のブログです。作ったものや、好きなものを紹介していきます。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#fff' },
      { name: 'keywords', content: 'shoma, shomaisshi, shoma kato, 加藤匠馬, developer, designer' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'KLEENOTEE（クレーノート）' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://shomaisshi.github.io/my-home/' },
      { hid: 'og:title', property: 'og:title', content: 'KLEENOTEE（クレーノート）' },
      { hid: 'og:description', property: 'og:description', content: 'KLEENOTE（クレーノート）のブログです。作ったものや、好きなものを紹介していきます。' },
      { hid: 'og:image', property: 'og:image', content: 'https://shomaisshi.github.io/my-home/cover/DSC01295.JPG' },

      // { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@shomaisshi' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'G-V5FZNRGJMW',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

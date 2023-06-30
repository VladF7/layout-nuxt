export default {
  target: 'server',
  head: {
    title: 'layout-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['@/assets/styles/main.scss', 'swiper/dist/css/swiper.css'],

  plugins: [{ src: '~/plugins/vue-awesome-swiper.js', mode: 'client' }],

  components: true,

  modules: [],

  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(ico)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[hash:8].[ext]'
          }
        }
      })
    }
  },

  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/assets/variables/colors.scss',
      '@/assets/variables/elements.scss',
      '@/assets/styles/fonts.scss',
      '@/assets/styles/mixins.scss'
    ]
  },
  loaders: {
    scss: {
      additionalData: [
        '@/assets/variables/colors.scss',
        '@/assets/variables/elements.scss',
        '@/assets/styles/fonts.scss',
        '@/assets/styles/mixins.scss'
      ]
    }
  }
}

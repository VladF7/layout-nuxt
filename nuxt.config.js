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

  build: {},

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

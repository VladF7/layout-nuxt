export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
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

  css: ['@/assets/styles/main.scss'],

  plugins: [],

  components: true,

  modules: ['bootstrap-vue/nuxt'],

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

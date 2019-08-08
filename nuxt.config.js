import path from 'path'
import pkg from './package'

const defaults = {
  title: 'Codebryo.com - Blog, Tech, More',
  description:
    'Roman Kubas personal blog full of ideas, learnings and what ever gets put on this page eventually. Have fun discovering.'
}

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: defaults.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#272727' },
      { name: 'theme-color', content: '#272727' },
      {
        hid: 'description',
        name: 'description',
        content: defaults.description
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: 'codebryo' },
      { property: 'og:url', content: 'https://codebryo.com' },
      { property: 'og:title', content: defaults.title },
      { property: 'og:description', content: defaults.description },
      { property: 'og:image', content: 'https://codebryo.com/ogdefault.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#272727' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/sass/tailwind.sass', '~/assets/sass/style.sass'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-purgecss', 'nuxt-svg'],

  /*
   ** Configure PurgeCSS rules
   */
  purgeCSS: {},

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    extractCSS: true,

    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }
  }
}

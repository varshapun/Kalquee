// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],

  imports: {
    dirs: ['stores'],
  },
  
  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    
    app: {     
      baseURL: '/Kalquee/',
      buildAssetsDir: 'assets',
      
      head: {
        title: 'Kalquey - Professional Web Design Services',
  
        bodyAttrs: {
          class: 'font-base font-open-sans h-full bg-gray-50',
        },
  
        htmlAttrs: {
          class: 'h-full',
          lang: 'en',
        },
  
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'title',
            name: 'title',
            content: 'Kalquey - Professional Web Design Services',
          },
          {
            hid: 'description',
            name: 'description',
            content: 'Transforming your ideas into visually stunning websites. Get professional web design services tailored to your unique needs. Contact Kalquey today!',
          },
          { name: 'msapplication-TileColor', content: '#2d89ef' },
          { name: 'theme-color', content: '#ffffff' },
          // Twitter
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            hid: 'twitter:site',
            name: 'twitter:site',
            content: '@kalquey.co',
          },
          {
            hid: 'twitter:url',
            name: 'twitter:url',
            content: 'https://www.twitter.com/kalquey/',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'Kalquey - Professional Web Design Services',
          },
        ],
        
        script: [
          {
           
          },
        ],
        link: [
          { rel: 'icon', type: 'image/png', href: '/icon.png' },
        ],
        //   {
        //     rel: 'apple-touch-icon',
        //     sizes: '180x180',
        //     href: '/favicons/apple-touch-icon.png',
        //   },
  
        //   {
        //     rel: 'icon',
        //     type: 'image/png',
        //     sizes: '32x32',
        //     href: '/favicons/favicon-32x32.png',
        //   },
  
        //   {
        //     rel: 'icon',
        //     type: 'image/png',
        //     sizes: '16x16',
        //     href: '/favicons/favicon-16x16.png',
        //   },
  
        //   { rel: 'manifest', href: '/favicons/site.webmanifest' },
  
        //   {
        //     rel: 'mask-icon',
        //     href: '/favicons/safari-pinned-tab.svg',
        //     color: '#5bbad5',
        //   },
        // ],
      },
    }
})

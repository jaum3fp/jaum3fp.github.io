// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  
  ssr: true,

  content: {
    renderer: {
      anchorLinks: {
        h2: false,
        h3: false,
      }
    }
  },

  app: {
    head: {
      title: 'Jaume Ferrà Pérez',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { name: 'author', content: 'Jaume Ferrà Pérez | Programador de software' },
        { name: 'description', content: 'Portfolio de Jaume Ferrà Pérez, técnico superior de desarrollo de aplicaciones multiplataforma y web. Experiencia con Nuxt, WordPress y Droupal.'},
        { name: 'keywords', content: 'Jaume Ferrà Pérez, Desarrollador Web, Desarrollador Android, Desarrollador Multiplataforma, Desarrollador Frontend, Desarrollador Backend, Programador Junior' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'css/main.css'},
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'},
      ]
    }
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'José Pérez Domínguez',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Portafolio de José Pérez Domínguez, desarrollador web Full Stack en Madrid, especializado en desarrollo front-end y back-end. Conozca mis proyectos y habilidades.' },
        { name: 'keywords', content: 'José Pérez Domínguez, desarrollador web, Full Stack, front-end, back-end, Madrid, portafolio, programación web, desarrollo web, HTML, CSS, JavaScript, React, Node.js, PHP, Python, Vue.js, Laravel' },
        { name: 'author', content: 'José Pérez Domínguez' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js',
          async: true
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-MNLGTQ73EL',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MNLGTQ73EL');
          `
        }
      ]
    }
  }
})
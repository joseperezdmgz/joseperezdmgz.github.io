<template>
  <footer class="flex flex-col md:flex-row gap-6 justify-around items-center py-6 fixed bottom-0 w-full">
    <div class="flex gap-3 flex-col text-center md:flex-row md:gap-6 md:text-left">
      <p class="text-[--tertiary]">Contáctame:</p>
      <div class="flex gap-3 md:gap-6">
        <template v-for="link in footerLinks" :key="link.id">
          <Link :href="link.url" :arialabel="link.arialabel">
            <component :is="link.component" />
          </Link>
        </template>
      </div>
    </div>
    <CookieConsent/>
  </footer>
</template>

<script setup>
import Mail from '@/components/icons/Mail.vue'
import GitHub from '@/components/icons/GitHub.vue'
import LinkedIn from '@/components/icons/LinkedIn.vue'
import Download from '@/components/icons/Download.vue'
import Link from '@/components/Link.vue'
import CV from '@/assets/JosePerez_cv.pdf'

const footerLinks = [
  { id: 1, component: Mail, url: 'mailto:joseperezdmgz@gmail.com', arialabel: 'Enviar correo a joseperezdmgz@gmail.com' },
  { id: 2, component: GitHub, url: 'https://github.com/joseperezdmgz', arialabel: 'Perfil de GitHub de joseperezdmgz' },
  { id: 3, component: LinkedIn, url: 'https://www.linkedin.com/in/joseperezdmgz', arialabel: 'Perfil de LinkedIn de joseperezdmgz' },
  { id: 4, component: Download, url: CV, arialabel: 'Descargar archivo' },
];

</script>

<style>
footer { -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); box-shadow: 0 7px 14px #000; transition: opacity .2s ease; }
</style>
<script setup>
import CookieConsent from '@/plugins/CookieConsent.vue'
import LinkedIn from '@/components/icons/LinkedIn.vue'
import GitHub from '@/components/icons/GitHub.vue'

</script>

<template>
  <footer class="flex flex-col md:flex-row gap-6 justify-around items-center py-6 relative bottom-0 w-full">
    <div class="flex gap-3 flex-col text-center md:flex-row md:gap-6 md:text-left">
      <p class="dark:text-gray-400">Contáctame:</p>
      <div class="flex gap-3 md:gap-6">
        <a href="mailto:joseperezdmgz@gmail.com" class="flex hover:text-[--secondary]"><span class="material-icons-outlined">mail</span></a>
        <a href="https://github.com/joseperezdmgz" target="_blank" class="flex hover:text-[--secondary]"><GitHub/></a>
        <a href="https://www.linkedin.com/in/joseperezdmgz" target="_blank" class="flex hover:text-[--secondary]"><LinkedIn/></a>
        <a href="" class="flex hover:text-[--secondary]"><span class="material-icons">download</span></a>
      </div>
    </div>
    <CookieConsent/>
  </footer>
</template>

<style>
footer { -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); box-shadow: 0 7px 14px #000; transition: opacity .2s ease; }
</style>
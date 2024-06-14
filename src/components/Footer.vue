<script setup>
import CookieConsent from '@/plugins/CookieConsent.vue'

</script>

<template>
  <footer class="flex justify-around items-center py-4">
    <a href="mailto:joseperezdmgz.com" class="flex"><span class="material-icons-outlined">mail</span></a>
    <CookieConsent/>
    <a href=""></a>
  </footer>
</template>

<style>
footer { -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); box-shadow: 0 7px 14px #000; transition: opacity .2s ease; }
</style>
<script setup>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
import * as CookieConsent from 'vanilla-cookieconsent';

</script>

<template>
  <footer class="bg-opacity-50 shadow-lg flex items-center justify-center p-4 transition-opacity duration-200 ease-in-out absolute bottom-0">
    <button @click="CookieConsent.showSettings(0);">Cookie Settings</button>

  </footer>

</template>
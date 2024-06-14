<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DarkMode from '@/components/DarkMode.vue'

</script>

<template>
  <header>
    <nav class="flex items-center justify-between sticky top-0 z-10 py-4 px-10">
      <RouterLink to="/" class="text-xl hover:text-[yellow]">JOSE PÉREZ</RouterLink>
      <aside class="flex items-center gap-20">
        <RouterLink class="hover:text-[yellow]" to="/">Home</RouterLink>
        <RouterLink class="hover:text-[yellow]" to="/portfolio">Portfolio</RouterLink>
        <RouterLink class="hover:text-[yellow]" to="/blog">Blog</RouterLink>
        <RouterLink class="hover:text-[yellow]" to="/about">About</RouterLink>
        <DarkMode/>
      </aside>
    </nav>
  </header>

  <RouterView />
</template>

<style>
  nav {-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); box-shadow: 0 -7px 14px #000;transform: translateZ(0); will-change: transform;}
</style>
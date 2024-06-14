<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex items-center justify-between sticky top-0 z-10 py-4 px-10" style="-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); box-shadow: 0 -7px 14px #000;transform: translateZ(0); will-change: transform;">
      <RouterLink to="/" class="text-xl hover:text-[#edfc56]">JOSE PÉREZ</RouterLink>
      <aside class="flex items-center gap-20 h-10">
        <RouterLink class="hover:text-[#edfc56]" to="/">Home</RouterLink>
        <RouterLink class="hover:text-[#edfc56]" to="/portfolio">Portfolio</RouterLink>
        <RouterLink class="hover:text-[#edfc56]" to="/blog">Blog</RouterLink>
        <RouterLink class="hover:text-[#edfc56]" to="/about">About</RouterLink>
      </aside>
    </nav>
  </header>

  <RouterView />
</template>
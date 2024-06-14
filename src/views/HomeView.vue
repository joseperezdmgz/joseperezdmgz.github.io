<script setup>
import Footer from '@/components/Footer.vue'
import Foto from '@/components/Foto.vue'

</script>
<template>
  <div class="flex justify-center items-center h-full gap-20">
    <Foto/>
    <div class="max-w-[40%] flex flex-col gap-3">
        <h2 class="text-[yellow]">HI THERE</h2>
        <h1 class="text-4xl">I'm Yusep</h1>
        <p class="text-lg text-gray-300 leading-tight"> Looking for a <span class="text-[yellow]">passionate frontend expert</span>? Your search ends here. As a <span class="text-[yellow]">professional Senior Software Engineer</span>, I thrive on the dynamic world of web development, technology, and open source projects. With expertise in Angular, React, Vue.js, Nuxt.js, TypeScript and Node.js, I'm poised to bring <span class="text-[yellow]">innovation and excellence</span> to every project. </p>
    </div>
  </div>
  <Footer/>
</template>

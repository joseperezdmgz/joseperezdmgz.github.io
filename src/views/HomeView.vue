<template>
  <div class="flex flex-col justify-center items-center gap-1 md:min-h-[80vh] md:gap-20 sm:flex-row py-10">
    <Foto/>
    <div class="max-w-[80%] flex flex-col gap-3 sm:max-w-[40%]">
      <h2 class="text-[--secondary]">¡HOLA!</h2>
      <h1 class="title text-2xl md:text-3xl block mb-4">Jose Pérez Domínguez</h1>
      <p class="text-xl text-[--tertiary] leading-8">¿Buscas un <span class="text-[--secondary]">desarrollador Full Stack</span>? Como Desarrollador de Software, me destaco por mi profundo conocimiento en el dinámico mundo del desarrollo web, la tecnología y los proyectos de código abierto. Con experiencia en <span class="text-[--secondary]">Vue.js, Laravel, PHP</span> entre otras, estoy listo para aportar innovación y excelencia a cada proyecto.</p>
    </div>
  </div>
  <Footer/>
</template>

<style>
  h1.title {white-space: nowrap; border-right: 4px solid; width: 20ch ;animation: typing 2s steps(20), blink 0.5s infinite step-end alternate; overflow: hidden;}
  @keyframes typing {from {width: 0;}}
  @keyframes blink {50% {border-color: transparent;}}
</style>

<script setup>
import Footer from '@/components/Footer.vue'
import Foto from '@/components/Foto.vue'

</script>
<template>
  <div class="lg:w-3/5 w-11/12 mx-auto pb-10">
      <h1 class="text-2xl md:text-4xl block my-4">About me</h1>
      <Subtitle name="Perfil"/>
      <div class="block">
       <img :src="img" alt="" class="rounded-full float-none ml-0 p-0 absolute md:static right-4 top-28 md:float-right h-28 md:h-60 md:ml-2" style="shape-outside: ellipse()">
        <p> I'm a <span>passionate front end engineer</span> in web application development based on TypeScript, JavaScript, CSS and HTML. Having gained a <span class="text-[--secondary]">lot of experience with frontend frameworks</span> such as Angular, React or Vue, I am considered an expert in my projects in terms of <span class="text-[--secondary]">ensuring quality of delivery, scalable architecture and maintainability</span> of the developed solutions. </p>
        <br>
        <p> Additionally, I love writing tech articles, am a sponsored open source developer on GitHub and active member on StackOverflow with an <span class="text-[--secondary]">impact on over 420 thousand developers.</span></p>
      </div>
      <Subtitle name="Experiencia"/>
      <BoxExpansion/>
      <Subtitle name="Educación"/>
  </div>
  <Footer/>
</template>

<script setup>
import img from '@/assets/foto.webp'
import Subtitle from '@/components/Subtitle.vue'
import BoxExpansion from '@/components/BoxExpansion.vue'
import Footer from '@/components/Footer.vue'
</script>
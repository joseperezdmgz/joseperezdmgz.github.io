<template>
  <div class="lg:w-4/5 w-11/12 mx-auto pb-10">
      <h1 class="text-2xl md:text-4xl block my-4">About me</h1>
      <Subtitle name="Perfil"/>
      <div class="block">
        <img :src="img" alt="Foto de más sobre mí" class="rounded-full float-none ml-0 p-0 absolute md:static right-4 top-28 md:float-right h-28 md:h-60 md:ml-2" style="shape-outside: ellipse()">
        <p> Lorem ipsum <span>dolor sit amet, consectetur adipiscing elit</span>. Fusce egestas elit in urna scelerisque, nec ultrices nisl pellentesque. Etiam nec <span class="text-[--secondary]">massa ac velit aliquet pretium</span>. Praesent et ante vitae erat ultricies consequat. Vestibulum <span class="text-[--secondary]">consectetur</span> odio a facilisis lobortis. </p>
        <p> Lorem ipsum <span>dolor sit amet, consectetur adipiscing elit</span>. Fusce egestas elit in urna scelerisque, nec ultrices nisl pellentesque. Etiam nec <span class="text-[--secondary]">massa ac velit aliquet pretium</span>. Praesent et ante vitae erat ultricies consequat. Vestibulum <span class="text-[--secondary]">consectetur</span> odio a facilisis lobortis. </p>
        <br>
        <p> Aliquam quis erat <span class="text-[--secondary]">volutpat, hendrerit dui sed, suscipit ligula</span>. Quisque tincidunt, magna a fringilla gravida, nisl lacus volutpat felis, sed hendrerit nunc augue non neque. Curabitur <span class="text-[--secondary]">id ornare ligula, sed suscipit velit.</span></p>
      </div>
      <BoxExpansion name="Experiencia" :items="experiences"/>
      <BoxExpansion name="Educación" :items="education" :formation="true" />
      <InfoBox name="Skills" :items="skills"/>
      <InfoBox name="Idiomas" :items="languajes"/>
      <InfoBox name="Intereses" :items="interests"/>
  </div>
  <Footer/>
</template>

<script setup>
import img from '@/assets/foto.webp'
import InfoBox from '@/components/InfoBox.vue'
import Subtitle from '@/components/Subtitle.vue'
import BoxExpansion from '@/components/BoxExpansion.vue'
import Footer from '@/components/Footer.vue'
import hackaboss_img from '@/assets/empresas/hackaboss.webp';
import astibot_img from '@/assets/empresas/astibot.webp';
import idearium_img from '@/assets/empresas/idearium.webp';

const experiences = [
  {
    business: 'Idearium',
    date_start: '10/2022',
    date_end: 'presente',
    position: 'Fullstack Developer',
    img: idearium_img,
    alt: 'Logo de la empresa Idearium',
    location: 'Madrid, España',
    description: [
      'Descripción de la experiencia laboral...',
      'Descripción de la experiencia laboral...',
    ]
  },
  {
    business: 'Astibot',
    date_start: '09/2021',
    date_end: '10/2022',
    position: 'Fullstack Developer',
    img: astibot_img,
    alt: 'Logo de la empresa Astibot',
    location: 'Valladolid, España',
    description: [
      'Descripción de la experiencia laboral...',
      'Descripción de la experiencia laboral...',
    ]
  },
];

const education = [{
    business: 'Hack A Boss',
    date_start: '10/2022',
    position: 'Bootcamp',
    img: hackaboss_img,
    location: 'A Coruña, España',
    description: [
      'Bootcamp de Programación Web Full Stack Javascript de 400 horas de duración.',
      'HTML, JavaScript, CSS, SQL, Node.js, React, Workshops, Proyecto'
    ]
  }]

const skills = ['Node','React']
const languajes = ['Español','Gallego']
const interests = ['Español','React']
</script>

<template>
  <ul class="flex flex-col">
    <template v-for="(exp, index) in experiences" :key="index">
        <li 
          class="flex justify-between w-full p-4 mt-3 cursor-pointer" :class="menuOpen[index] ? 'bg-[--bg-box-expansion-open]' : 'bg-[--bg-box-expansion]'"
          @click="toggleMenuAbout(index)"
        >
          <div class="flex w-1/3 items-center gap-2">
            <span class="material-icons">calendar_month</span>
            <p>{{ exp.date_start }}</p> - 
            <p v-if="!exp.date_end" class="relative text-green-500">Actualmente<span class="green-dot bg-green-500 inline-block w-3 h-3 rounded-full ml-1"></span></p>
            <p v-else>{{ exp.date_end }}</p>
          </div>
          <div class="flex w-1/3 items-center gap-2">
            <i class="material-icons">business</i>
            {{ exp.business }}
          </div>
          <div class="flex w-1/3 items-center gap-2">
            <i class="material-icons">business_center</i>
            {{ exp.position }}
          </div>
          <span 
            class="material-icons transform transition-transform duration-300" 
            :class="menuOpen[index] ? 'rotate-90' : '-rotate-90'"
          >
            arrow_back_ios_new
          </span>
        </li>
        <ul class="flex min-h-28 bg-[--bg-box-expansion] p-5" v-if="menuOpen[index]">
          <li class="w-1/3 px-10 flex flex-col items-center justify-center gap-3">
            <img :src="exp.img" alt="" class="block w-4/5">
            <p>{{ exp.business }}</p>
            <p class="flex items-center gap-3 text-[--tertiary]">
              <span class="material-icons !text-sm">fmd_good</span>
              {{ exp.location }}
            </p>
          </li>
          <li class="w-2/3 p-5">
            <ul class="list-disc">
              <li>{{ exp.description }}</li>
              <li>{{ exp.description }}</li>
              <li>{{ exp.description }}</li>
            </ul>
          </li>
        </ul>
    </template>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import idearium_img from '@/assets/empresas/idearium.webp';
import astibot_img from '@/assets/empresas/astibot.webp';

// Simulando datos de experiencia laboral
const experiences = [
  {
    business: 'Idearium',
    date_start: '10/2022',
    date_end: null,
    position: 'Fullstack Developer',
    img: idearium_img,
    location: 'Madrid, España',
    description: 'Descripción de la experiencia laboral...'
  },
  {
    business: 'Astibot',
    date_start: '09/2021',
    date_end: '10/2022',
    position: 'Fullstack Developer',
    img: astibot_img,
    location: 'Valladolid, España',
    description: 'Descripción de la experiencia laboral...'
  },
];

// Estado para cada menú
const menuOpen = ref(experiences.map(() => false));

const toggleMenuAbout = (index) => {
  menuOpen.value[index] = !menuOpen.value[index];
};
</script>

<style scoped>
.green-dot {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

</style>

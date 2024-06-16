<template>
  <button @click="toggleDarkMode" class="z-10 flex justify-center">
      <span class="material-icons md:hover:text-[--secondary]">{{ isDarkMode ? 'wb_sunny' : 'nightlight_round' }}</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.add('cc--darkmode');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.remove('cc--darkmode');
    localStorage.theme = 'light';
  }
};

onMounted(() => {
  isDarkMode.value = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.add('cc--darkmode');
  }
});
</script>
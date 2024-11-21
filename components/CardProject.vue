<template>
    <li v-for="card in props.cards" class="bg-[--bg-box-expansion] rounded flex gap-3 mt-10 overflow-hidden flex-col md:flex-row w-full mx-auto p-5">
      <div class="w-full lg:w-1/4">
        <img :src="card.img" class="w-full rounded" :alt="card.alt">
      </div>
      <div class="w-full lg:w-3/4 md:px-4 relative">
        <p class="font-bold text-xl pb-4">{{ card.title }}</p>
        <p class="py-4 md:py-0">{{ card.desc }}</p>
        <a :href="card.link" target="_blank" class="dark:bg-white dark:text-black text-white bg-black inline-block px-4 md:absolute bottom-0 right-0 rounded">Ver proyecto</a>
      </div>
    </li>  
</template>
<script setup>
const props = defineProps({
    cards: Object,
  });

</script>
<template>
  <h2 class="text-xl md:text-2xl block mb-4 mt-10">{{ name }}</h2>
  <div class="block h-1 w-12 bg-[--secondary] mb-6"></div>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
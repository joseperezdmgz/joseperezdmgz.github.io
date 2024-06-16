<template>
  <Subtitle :name="props.name"/>
  <ul class="flex flex-wrap gap-2">
    <li v-for="item in props.items" class="bg-[--tertiary] text-base px-4 py-2">{{ item }}</li>
  </ul>
</template>
  
<script setup>
  import Subtitle from '@/components/Subtitle.vue'
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  });
</script>
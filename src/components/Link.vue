<template>
  <a :href="props.href" :aria-label="arialabel" class="flex hover:text-[--secondary]" target="_blank">
    <slot></slot>
  </a>
</template>
<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  arialabel: {
    type: String,
  },
});
</script>
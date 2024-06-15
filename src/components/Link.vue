<template>
  <a :href="props.href" class="flex hover:text-[--secondary]" target="_blank">
    <slot></slot>
  </a>
</template>
<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
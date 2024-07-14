<template>
  <Subtitle :name="props.name" />  
  <ul class="flex flex-col" v-for="(exp, index) in props.items" :key="index">
    <li 
      class="flex flex-col lg:flex-row justify-between w-full p-4 mt-3 cursor-pointer relative" :class="menuOpen[index] ? 'bg-[--bg-box-expansion-open]' : 'bg-[--bg-box-expansion]'"
      @click="toggleMenuAbout(index)"
    >
      <div class="flex w-full lg:w-1/3 items-center gap-2">
        <span class="material-icons">calendar_month</span>
        <p>{{ exp.date_start }}</p> {{ exp.date_end ? '-' : '' }}
        <p v-if="exp.date_end == 'presente'" class="relative text-green-500">Actualmente<span class="green-dot bg-green-500 inline-block w-3 h-3 rounded-full ml-1"></span></p>
        <p v-else>{{ exp.date_end }}</p>
      </div>
      <div class="flex w-full lg:w-1/3 items-center gap-2">
        <i class="material-icons">business</i>
        {{ exp.business }}
      </div>
      <div class="flex w-full lg:w-1/3 items-center gap-2">
        <i class="material-icons">{{ formation == true ? 'school' : 'business_center' }}</i>
        {{ exp.position }}
      </div>
      <span 
        class="material-icons transform transition-transform duration-300 absolute lg:static right-6 !flex h-full items-center top-0" 
        :class="menuOpen[index] ? 'rotate-90' : '-rotate-90'"
      >
        arrow_back_ios_new
      </span>
    </li>
    <ul class="flex flex-col md:flex-row min-h-28 bg-[--bg-box-expansion] p-5" v-if="menuOpen[index]">
      <li class="md:w-1/3 w-full px-10 flex flex-col items-center justify-center gap-3">
        <img :src="exp.img" :alt="exp.alt" class="block md:w-3/5 w-20 rounded">
        <p>{{ exp.business }}</p>
        <p class="flex items-center gap-3 text-[--tertiary]">
          <span class="material-icons !text-sm">fmd_good</span>
          {{ exp.location }}
        </p>
      </li>
      <li class="md:w-2/3 w-full p-5">
        <ul class="list-disc flex flex-col gap-5">
          <li v-for="desc in exp.description" v-html="desc"/>
        </ul>
      </li>
    </ul>
  </ul>
</template>
  
<script setup>
  import { ref } from 'vue';
  import Subtitle from '@/components/Subtitle.vue'
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
    formation: {
      type: Boolean,
    },
  });
const menuOpen = ref(props.items.map(() => false));

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
  
<template>
  <header class="sticky top-0 z-10 py-6 px-4 w-full md:px-10">
    <nav class="flex items-center justify-between">
      <div class="burger flex justify-center flex-col gap-[6px] lg:hidden w-8 h-8 z-10" @click="toggleMenu" :class="{ 'open': isMenuOpen }">
          <span class="block relative border-b-0 top-0 z-[2] p-0 rounded-xl h-[2px] bg-[--primary] transition-all duration-300" :class="{ 'rotate-45 top-2' : isMenuOpen}"></span>
          <span class="block relative border-b-0 top-0 z-[2] p-0 rounded-xl h-[2px] bg-[--primary] transition-all duration-300" :class="{ 'w-0': isMenuOpen }"></span>
          <span class="block relative border-b-0 top-0 z-[2] p-0 rounded-xl h-[2px] bg-[--primary] transition-all duration-300" :class="{ '-rotate-45 top-[-8px]' : isMenuOpen}"></span>
      </div>
      <NuxtLink to="/" class="text-xl hover:text-[--secondary] z-10">JOSE PÉREZ</NuxtLink>
      <div class="flex gap-20">
        <aside class="overflow-hidden left-0 transition-all duration-300 items-center pt-[20vh] lg:pt-0 top-0 ring-0 w-0 gap-20 flex lg:flex-row flex-col lg:w-auto lg:h-auto h-dvh absolute lg:relative" :class="{ 'w-full': isMenuOpen }">
          <NuxtLink v-for="item in navLink" @click="toggleMenu" class="hover:text-[--secondary]" activeClass="text-[--secondary]" :to="item.url">{{item.name}}</NuxtLink>
        </aside>
        <DarkMode/>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
    
const navLink = [
  {
    name : "Inicio",
    url : "/"
  },
  {
    name:"Sobre mí",
    url:"/about"
  },
  {
    name:"Portfolio",
    url:  "/portfolio"
  },
  // {
  //   name:"Contacto",
  //   url:"/contact"
  // },
  // {
  //   name:"Blog",
  //   url:"/blog"
  // },
]

</script>
<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";

const mobileMenuOpen = ref(false);

const links = ref([
  {
    name: "Home",
    link: "#home",
  }, 
  {
    name: "Projects",
    link: "#project-work",
  },
  {
    name: "Platforms",
    link: "#services",
  },
  {
    name: "Contact",
    link: "#contact-me",
  },
]);
</script>
<template>
  <div class="">
    <header class="fixed w-[100%]   h-24 top-0 z-50 bg-gray-100 rounded-md drop-shadow-md">
      <div class="md:w-[80%] md:mx-auto w-full">
        <nav class="flex items-start pt-5  md:pt-0 w-full md:px-1 justify-between lg:pr-8 ">
          <div class="flex">
            <NuxtLink to="#" class="-mx-1.5 px-1.5 md:pt-2">
              <span class="sr-only">Your Company</span>
              <img class="w-[170px] md:w-[300px]" src="~/assets/images/logo-main.png" alt="" />
            </NuxtLink>
          </div>

          <div class="hidden lg:flex gap-x-2 lg:gap-x-8 md:mr-9  ">
            <NuxtLink v-for="item in links" :key="item.name" :to="item.link" class="text-base font-semibold leading-1 mt-7  text-[#5DACBD] transition-all ease-in-out duration-100 md:text-xl             
            lg:text-xl py-1 basic-3">
              {{ item.name }}
            </NuxtLink>
          </div>
        </nav>
      </div>
      <div class=" absolute  top-5 right-10 md:px-8 flex lg:hidden">
        <button type="button" class="-mx-2.5 inline-flex items-center justify-center rounded-md px-1 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon @click="mobileMenuOpen = true" class="h-12 font-bold w-12 text-primary-500" aria-hidden="true" />
        </button>
      </div>
      <DialogPanel v-if="mobileMenuOpen"
        class="transition-all px-1 ease-in h-[100vh] duration-100 py-5 fixed backdrop-blur-sm inset-y-0 right-0 z-50 w-[80%]  overflow-y-auto  bg-[rgba(255,255,255,0.9)]   sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <NuxtLink to="#" class="">
            <img class="w-[100px] md:w-[300px]" src="~/assets/images/logo-main.png" alt="" />
          </NuxtLink>
          <button type="button" class="  rounded-md  text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon @click="mobileMenuOpen = false"
              class="h-8 w-8 hover:bg-primary-300 px-[2px] mb-3    md:mr-10 border-2 border-primary-500 shadow-md rounded-full  bg-primary-500 text-2xl text-primary-50 "
              aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root px-6">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink v-for="item in links" :key="item.name" :to="item.link"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-500 italic hover:bg-gray-50">
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </header>
  </div>
</template>
<style scoped>
.transparent {
  /* padding: 1.75rem 1rem; */
  transition: all 900ms ease-in-out;
}

.basic-3 {
  background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px no-repeat;
  transition: 0.5s;
}

.basic-3:hover {
  --d: 100%;
}

.basic-active {
  --d: 100%;
}
</style>
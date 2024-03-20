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
  <div class="w-full bg-gray-100">
    <div class="md:w-[80%] md:mx-auto w-full">
      <div
        class="flex justify-around items-center mt-24 mb-5 md:flex-row flex-col-reverse  md:items-center  lg:mt-12 md:justify-around pt-10">
        <div class="flex items-center w-[100%]  lg:w-[80%]">
          <div
            class="text-center md:text-left w-[100%] justify-center md:space-y-16 leading-5 mx-2 px-0 md:px-5 space-y-5">
            <h1 class="text-lg md:3xl lg:text-4xl text-primary-500 font-bold">
              Crafting Beautiful Digital Experiences
            </h1>
            <p class="md:flex text-xs md:text-lg lg:text-xl text-gray-500  italic">
              We believe that a well-designed website can make a significant impact
              on your business success by attracting, engaging, and converting your
              target audience.
            </p>
            <div>
              <NuxtLink to="#contact-me">
                <button
                  class="text-center bg-primary-500 md:text-2xl  text-white px-5 py-2 rounded-md hover:bg-primary-700 transition-all ease-in">
                  Let's Get In Touch
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="flex justify-center md:justify-end  md:mr-20 lg:mr-20 text-right h-[500px] w-[100%] md:h-[700px] lg:w-[70%]">
          <img src="~/assets/images/hero-section-illustration.png" class="text-right" />
        </div>
      </div>
    </div>
  </div>
</template>

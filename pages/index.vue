<template>
  <NuxtLayout name="home" class="bg-gray-100 ">
<div >
  <HeroSection class="w-full " id="home"/>
    <Projects id="project-work"/>
    <Services id="services"/>
    <Contact id="contact-me" class="md:w-[80%]  md:mx-auto w-full" />
</div>
   
  </NuxtLayout>
</template>
<script setup>

import Projects from "~/components/Projects/Projects.vue";
import Services from "~/components/Services/Services.vue";
import Contact from "~/components/Contacts/Contacts.vue";
</script>

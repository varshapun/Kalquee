<script setup lang="ts">
import NotificationRoot from '../components/notifications/NotificationRoot.vue';

</script>

<template>
  <NotificationRoot />
  <div class="flex h-screen overflow-hidden font-open-sans">

    <div class="grid w-full h-full grid-cols-12 overflow-y-hidden">
      <div
        class="absolute z-50 flex-col  items-center justify-center block max-w-lg md:relative lg:h-full md:col-span-5 lg:col-span-5 xl:col-span-3 md:flex content-box  bg-gray-100 ">

        <NuxtLink to="/">
          <img src="../assets/images/logo-main.png" alt="">
        </NuxtLink>



      </div>

      <div
        class="w-full col-span-12 p-4 mx-auto md:p-8 md:col-span-7 lg:col-span-7 xl:col-span-9 flex-2 bg-primary-500 md:pb-48 md:pt-28 overflow-auto">
        <div
          class="absolute top-0 left-0 block w-full h-24 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-400 sm:block md:hidden lg:hidden xl:hidden" />

        <div class="flex items-center justify-center mt-24 md:mt-0 lg:mt-24 xl:mt-24">
          <div class="w-full max-w-2xl rounded-lg md:shadow-md :shadow-md md:bg-white lg:bg-white">
            <slot />
          </div>
        </div>



        <div class="flex justify-center">
          <h6 class="sm:absolute text-xs font-medium text-gray-800 bottom-3">
            {{ `Copyright © 2023 Kalquey Inc.` }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

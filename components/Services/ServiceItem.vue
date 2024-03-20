<script lang="ts" setup>
defineProps({
  
    image: {
        type: Object,
        required: true,
    }
});
</script>

<template>
    <div class=" my-5  flex flex-col items-center justify-center py-4  px-5  text-center space-y-2  object-cover  border-4  hover:border-primary-700  rounded-md hover:-translate-y-5 transition-all duration-75 ease-linear">
        <img :src="image.logo" alt="" class="rounded-md w-[80px]  md:w-[100px]">     
        <h1 class="text-lg md:text-2xl text-primary-800 rounded-md">{{ image.name }}</h1>   
    </div>    
</template>


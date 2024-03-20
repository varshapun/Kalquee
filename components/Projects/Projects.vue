<script lang="ts" setup>
import ProjectList from '~/components/Projects/ProjectList.vue'
useHead({
    'title': 'Kalquey - Professional Web Design Services',
    meta: [
        {
            name: 'description',
            content: 'Transforming your ideas into visually stunning websites. Get professional web design services tailored to your unique needs. Contact Kalquey today!',
        },
        {
            name: 'site-name',
            content: 'Kalquey',
        },
        {
            name: 'URL',
            content: 'https://kalquey.com',
        },
        {
            name: 'type',
            content: 'website',
        },
        {
            name: 'card',
            content: 'summury',
        },
        // {
        //     name: 'Image',
        //     content: 'https://kalquey.com/social-head/sharing-image.png',
        // },
    ],
})






</script>

<template>
    <div class="bg-primary-50 w-full">
        <div class="rounded-md md:w-[80%] md:mx-auto w-full   ">

            <ProjectList>
                <template #top>


                    <div class=" flex justify-center mt-0 md:mt-10 mb-5 py-1 md:py-5  px-2   mx-auto rounded-md">

                        <h1
                            class="text-center text-xl    md:text-5xl text-primary-700 font-bold basic-3 cursor-pointer transition-all duration-150 ease-in-out">
                            Our Awesome Projects</h1>
                    </div>


                </template>
            </ProjectList>
        </div>
    </div>
</template>

<style scoped>
.basic-3 {
    background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px no-repeat;
    transition: 0.5s;
}

.basic-3:hover {
    --d: 100%;
}
</style>
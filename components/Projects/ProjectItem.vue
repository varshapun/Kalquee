<script lang="ts" setup>
const props = defineProps({
    project: {
        type: Object,
        default: null,
    },
    order: {
        type: Number,
        default: 0,
    },
    limit: {
        type: [Boolean],
        default: false,
    },
})

const { project }: any = props
const { Image, description, id, name, Link, Languages } = project


</script>

<template>
    <div
        class="overflow-hidden w-[90%] my-1 space-y-3  md:space-y-8 drop-shadow-md  rounded-none mx-auto md:rounded-md md:w-full  md:md:filter-none   relative ">


        <div class="flex space-y-5  flex-col px-4 sm:px-12 md:flex-row items-center justify-center md:justify-between  h-full text-lg font-semibold text-gray-900 transition duration-200 hover:text-cyan-500"
            :class="{
                'flex-col md:flex-row-reverse md:justify-between justify-center items-center ': order % 2 == 0,
            }">
            <!-- project Image -->

            <div
                class="overflow-hidden w-[90%] md:mr-5    hover:rounded-t-md rounded-t-md md:my-5 my-1 md:basis-1/3 md:w-1/2 mx-auto">
                <nuxt-link :to="Link" target="_blank">
                    <img :src="project.Image"
                        class="border-primary-600 border-2 rounded-md  object-cover w-full h-full text-center overflow-hidden transition duration-1000 transform cursor-pointer hover:rounded-t-md rounded-t-md hover:scale-110"
                        alt="">
                </nuxt-link>
            </div>


            <div class="flex flex-col justify-between px-1 basis-2/3  text-center md:px-4 py-4 overflow-hidden ">
                <div class="space-y-1 lg:space-y-3">
                    <p class="font-semibold text-primary-600 capitalize   md:text-left text-lg md:xl lg:text-3xl">
                        {{ name }}
                    </p>

                    <div class="flex flex-row pt-1 ">
                        <!-- <img src="/images/icon/map.svg" class="w-4 h-4 mt-[0.2rem] mr-3"> -->
                        <p class="text-xs text-center md:text-left font-normal text-primary-300 md:text-base lg:text-lg">
                            {{ description }}
                        </p>
                    </div>
                    <div class="flex w-full justify-center md:justify-start flex-row pt-1">
                        <!-- <img src="/images/icon/map.svg" class="w-4 h-4 mt-[0.2rem] mr-3"> -->
                        <p class="text-sm text-center md:text-left font-normal text-primary-300 md:text-base lg:text-lg">
                            Languages Used : {{ Languages }}
                        </p>
                    </div>
                    <div v-if="Link"
                        class="flex flex-row items-center text-center md:text-left justify-center md:justify-start ">
                        <!-- <img src="/images/icon/users.svg" class="w-4 h-4 mr-3"> -->
                        <nuxt-link :to="Link" target="_blank"
                            class="text-sm  rounded-md lg:px-8 font-normal px-2 py-1 text-primary-300 lg:py-3 hover:text-primary-800 border-2 border-primary-300 md:text-base lg:text-lg">
                            {{ Link }}
                        </nuxt-link>
                    </div>
                </div>
                <div class="mt-2 mb-3  text-black w-full h-[0.5rem] " />
            </div>

        </div>
    </div>
</template>

<!--  -->
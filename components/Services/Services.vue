<script setup lang="ts">
import htmlLogo from "../../assets/images/platform logo/html.svg";
import jsLogo from "../../assets/images/platform logo/js.svg";
import phpLogo from "../../assets/images/platform logo/php.svg";
import vueLogo from "../../assets/images/platform logo/vue.svg";
import nuxtLogo from "../../assets/images/platform logo/nuxt.svg";
import bootstrapLogo from "../../assets/images/platform logo/bootstrap.svg";
import laravelLogo from "../../assets/images/platform logo/laravel.svg";
import tsLogo from "../../assets/images/platform logo/ts.svg";
import tailwindLogo from "../../assets/images/platform logo/tailwind.png";
import npmLogo from "../../assets/images/platform logo/npm.svg";
import cssLogo from "../../assets/images/platform logo/css.svg";
import materializeLogo from "../../assets/images/platform logo/materialize.svg";

const logos = reactive([
    {
        id: 1,
        name: "HTML",
        logo: htmlLogo,
    },
    {
        id: 2,
        name: "JavaScript",
        logo: jsLogo,
    },
    {
        id: 3,
        name: "CSS",
        logo: cssLogo,
    },
    {
        id: 4,
        name: "PHP",
        logo: phpLogo,
    },
    {
        id: 5,
        name: "Vue Js",
        logo: vueLogo,
    },
    {
        id: 6,
        name: "Nuxt",
        logo: nuxtLogo,
    },
    {
        id: 7,
        name: "Bootstrap",
        logo: bootstrapLogo,
    },
    {
        id: 8,
        name: "Laravel",
        logo: laravelLogo,
    },
    {
        id: 9,
        name: "TypeScript",
        logo: tsLogo,
    },
    {
        id: 10,
        name: "Tailwind CSS",
        logo: tailwindLogo,
    },
    {
        id: 11,
        name: "NPM",
        logo: npmLogo,
    },

    {
        id: 12,
        name: "Materialize",
        logo: materializeLogo,
    },
])

</script>

<template>
    <div class="md:w-[80%] md:mx-auto w-full">
        <div class=" flex justify-center mt-10 mb-5 bg-gray-100  py-5 px-2  mx-auto ">
            <h1
                class="text-center text-xl md:text-5xl text-primary-700 font-bold basic-3 cursor-pointer transition-all duration-150 ease-in-out">
                Platforms We use</h1>
        </div>
        <div class="grid grid-cols-2   place-items-center  my-10 md:grid-cols-3 lg:grid-cols-4    ">
            <div v-for="logo in logos" class="  object-cover w-[120px] md:w-[180px]    ">

                <ServicesServiceItem :image="logo" class=" cursor-pointer" />
            </div>
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
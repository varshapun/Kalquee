<script lang="ts" setup>
import ProjectItem from '~/components/projects/ProjectItem.vue'
import shrishivvilla from '~/assets/images/shrishivvilla.png'
import travelville from '~/assets/images/travelville.png'
import Loruki from '~/assets/images/Loruki.png'
import TraversyMedia from '~/assets/images/traversy media.png'

const props = defineProps({
    resetFilter: {
        type: Boolean,
        default: false,
    },
    limit: {
        type: [Boolean],
        default: false,
    },
    top: {
        type: [Boolean],
        default: false,
    },

})


const scrollComponent = ref(null)


let params = reactive({
    page: 1,
    limit: 3,
    top: props.top,
    venue_type_id: '',
    orderBy: 'desc',
})

const projects = ref([
    {
        id: 1,
        name: 'Shri Shiv Villa',
        description: 'It is Official Website of Shri Shiv Villa. It is a Hotel Website which is situated in Gir, Gujrat, India.',
        Link: 'https://www.shrishivvilla.com',
        Languages: 'HTML, CSS, Java Script, Tailwind Css',
        Image: shrishivvilla,
    },
    {
        id: 2,
        name: 'Travel Ville',
        description: 'It is Dummy Website Project of Travel Villa. It is a Hotel Website.',
        Link: 'https://varshapun.github.io/TravelVille',
        Languages: 'HTML, CSS, Java Script, Materialize Css',
        Image: travelville,
    },
    {
        id: 3,
        name: 'Loruki Cloud Hosting Site',
        description: 'It is Dummy Website Project of cloud hosting. It is a Cloud hosting Website.',
        Link: 'https://varshapun.github.io/Loruki-Website',
        Languages: 'HTML, CSS, Java Script',
        Image: Loruki,
    },
    {
        id: 4,
        name: 'Traversy Media',
        description: 'It is Dummy Website Project of Traversy Media. It was designed by Kalquey. It is a Educational bootcamp Website Brad Travesry.',
        Link: 'https://varshapun.github.io/Traversy-Media-demo',
        Languages: 'HTML, CSS, Java Script, Bootstrap',
        Image: TraversyMedia,
    },
])


</script>

<template>
    <p class="invisible">
        Kalquey | The Web Designing company work to create dynamic and attractive design for Businesses, Projects That made
        By our programmer is...
    </p>
    <slot name="top" />
    <slot name="search" />



    <div ref="scrollComponent" class="space-y-4 md:space-y-10">
        <ProjectItem v-for="(project, index) in projects" :key="index" :order="index" :project="project" :limit="limit" />
    </div>
</template>


<script lang="ts" setup>
const props = defineProps({
  circle: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
})

const circleClass = computed(() => {
  return {
    'base-content-circle': props.circle,
    'base-content-placeholders-is-rounded': props.rounded,
  }
})
</script>

<template>
  <div class="base-content-placeholders-box" :class="circleClass" />
</template>

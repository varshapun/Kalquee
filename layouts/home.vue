<script lang="ts" setup>
import NotificationRoot from '../components/notifications/NotificationRoot.vue';

</script>

<template>
  <div>
    <NotificationRoot />
    <LayoutTheSiteHeader />
    <slot />

    <LayoutTheSiteFooter />
  </div>
</template>
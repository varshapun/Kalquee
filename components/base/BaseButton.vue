<script lang="ts" setup>
import SpinnerIcon from '../icons/SpinnerIcon.vue';
const props = defineProps({
  download: {
    type: Boolean,
    default: false,
  },
  contentLoading: {
    type: Boolean,
    default: false,
  },
  defaultClass: {
    type: String,
    default:
      'inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800',
  },
  focusClass: {
    type: String,
    default:
      '',
  },
  tag: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
    validator(value) {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
  },
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return [
        'primary',
        'secondary',
        'warning',
        'primary-outline',
        'white',
        'danger',
        'gray',
        'green',
        'gray-800',
      ].includes(value)
    },
  },
})

const sizeClass = computed(() => {
  return {
    'px-2.5 py-1.5 text-xs leading-4 rounded': props.size === 'xs',
    'px-3 py-2 text-sm leading-4 rounded-md': props.size == 'sm',
    'px-4 py-2 text-sm leading-5 rounded-md': props.size === 'md',
    'px-4 py-2 text-base leading-6 rounded-md': props.size === 'lg',
    'px-6 py-3 text-base leading-6 rounded-md': props.size === 'xl',
  }
})

const placeHolderSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return '32'
    case 'sm':
      return '38'
    case 'md':
      return '42'
    case 'lg':
      return '42'
    case 'xl':
      return '46'
    default:
      return ''
  }
})

const variantClass = computed(() => {
  return {
    'border-transparent shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600':
      props.variant === 'primary',
    'border-transparent shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-400 dark:bg-emerald-400 dark:hover:bg-emerald-500':
      props.variant === 'green',
    'border-transparent shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600':
      props.variant === 'warning',
    'border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500':
      props.variant === 'secondary',
    'border-solid border-primary-500 font-normal transition ease-in-out duration-150 text-primary-500 hover:bg-primary-200 shadow-inner focus:ring-primary-500 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-transparent dark:hover:text-primary-500 dark:hover:border-primary-500':
      props.variant == 'primary-outline',
    'border-gray-200 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500 focus:ring-offset-0 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-900':
      props.variant == 'white',
    'border-transparent shadow-sm text-white bg-red-600 hover:bg-red-700 focus:ring-red-500':
      props.variant === 'danger',
    'border-transparent bg-gray-200 border hover:bg-opacity-60 focus:ring-gray-500 focus:ring-offset-0 dark:bg-gray-600 dark:text-white dark:hover:bg-opacity-60 ':
      props.variant === 'gray',
    'border-transparent bg-gray-800 border hover:bg-opacity-90 focus:ring-gray-500 focus:ring-offset-0 dark:bg-gray-600 dark:text-white dark:hover:bg-opacity-60 ':
      props.variant === 'gray-800',
  }
})

const roundedClass = computed(() => {
  return props.rounded ? '!rounded-full' : ''
})

const iconLeftClass = computed(() => {
  return {
    '-ml-0.5 mr-2 h-4 w-4': props.size == 'sm',
    '-ml-1 mr-2 h-5 w-5': props.size === 'md',
    '-ml-1 mr-3 h-5 w-5': props.size === 'lg' || props.size === 'xl',
  }
})

const iconVariantClass = computed(() => {
  return {
    'text-white': props.variant === 'primary',
    'text-primary-700': props.variant === 'secondary',
    'text-gray-700': props.variant === 'white',
    'text-gray-400': props.variant === 'gray',
  }
})
const buttonDisabledClass = computed(() => {
  if (props.disabled || props.loading)
    return 'cursor-not-allowed bg-opacity-70 pointer-event-none'

  return ''
})

const iconRightClass = computed(() => {
  return {
    'ml-2 -mr-0.5 h-4 w-4': props.size == 'sm',
    'ml-2 -mr-1 h-5 w-5': props.size === 'md',
    'ml-3 -mr-1 h-5 w-5': props.size === 'lg' || props.size === 'xl',
  }
})
</script>

<template>
  <BaseContentPlaceholders v-if="contentLoading" class="pointer-events-none disabled cursor-normal">
    <BaseContentPlaceholdersBox :rounded="true" class="md:w-[100px] w-full" :style="`height: ${placeHolderSize}px; `" />
  </BaseContentPlaceholders>

  <BaseCustomTag
    v-else :tag="tag" :disabled="disabled"
    :class="[defaultClass, sizeClass, variantClass, roundedClass, focusClass, buttonDisabledClass]" :download="download"
  >
    <SpinnerIcon v-if="loading" :class="[iconLeftClass, iconVariantClass]" />

    <slot v-else name="left" :class="iconLeftClass" />

    <slot />

    <slot name="right" :class="[iconRightClass, iconVariantClass]" />
  </BaseCustomTag>
</template>

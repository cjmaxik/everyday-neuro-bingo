<template>
  <template v-if="preferredMotion === 'reduce'">
    <slot />
  </template>

  <transition
    v-else
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
    :duration="70"
  >
    <slot />
  </transition>
</template>

<script setup>
import { usePreferredReducedMotion } from '@vueuse/core'
const preferredMotion = usePreferredReducedMotion()
</script>

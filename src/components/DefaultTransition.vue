<template>
  <template v-if="preferredMotion === 'reduce'">
    <slot />
  </template>

  <transition
    v-else
    appear
    :duration="70"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
  >
    <slot />
  </transition>
</template>

<script setup>
// @ts-check

import { usePreferredReducedMotion } from '@vueuse/core'
const preferredMotion = usePreferredReducedMotion()
</script>

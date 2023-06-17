<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
    :duration="70"
  >
    <slot />
  </transition>
</template>

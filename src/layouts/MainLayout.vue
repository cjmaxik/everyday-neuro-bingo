<template>
  <q-layout view="hHh LpR fFf">
    <PageToolbar />

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
          duration="50"
        >
          <component
            :is="Component"
            padding
          />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
// project-related
import PageToolbar from '../components/PageToolbar.vue'
</script>

<style scoped></style>

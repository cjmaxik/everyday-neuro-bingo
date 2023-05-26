<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <PageToolbar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// project-related
import PageToolbar from '../components/PageToolbar.vue'
</script>

<style scoped></style>

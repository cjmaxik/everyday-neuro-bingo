<template>
  <q-layout view="hHh LpR fFf">
    <PageToolbar />

    <q-page-container>
      <q-banner
        class="text-center"
        rounded
      >
        The project is on a prolonged hiatus, no updates will be performed. Website is still accessible.
      </q-banner>

      <router-view v-slot="{ Component }">
        <DefaultTransition>
          <component
            :is="Component"
            padding
          />
        </DefaultTransition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
// @ts-check

// project-related
import PageToolbar from 'components/PageToolbar.vue'
</script>

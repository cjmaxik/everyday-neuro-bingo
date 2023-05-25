<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-gymbag">
        <q-avatar>
          <img src="../assets/gymbag.png">
        </q-avatar>

        <q-toolbar-title>
          Everyday Neuro Bingo
        </q-toolbar-title>

        <q-btn href="https://github.com/cjmaxik/everyday-neuro-bingo" target="_blank" ref="noopener noreferrer"
          label="Source code" flat round dense no-caps />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar class="bg-gymbag">
        <q-toolbar-title>
          PROTOTYPE! Might break at any time!
        </q-toolbar-title>

        <q-btn href="https://cjmaxik.ru" target="_blank" ref="noopener noreferrer" label="©️ CJMAXiK, 2023" flat
          no-caps />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
</script>

<style scoped></style>

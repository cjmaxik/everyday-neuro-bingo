<template>
  <q-btn-dropdown
    stretch
    flat
    label="Change stream"
    no-caps
  >
    <q-item-label header>
      Solo
    </q-item-label>

    <q-item
      clickable
      dense
      tag="a"
      href="/"
    >
      <q-item-section>
        <q-item-label>Just Chatting</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-item-label header>
      Collabs
    </q-item-label>

    <q-item
      clickable
      dense
      tag="a"
      href="/filianCollab"
    >
      <q-item-section>
        <q-item-label>with filian</q-item-label>
      </q-item-section>
    </q-item>
    <q-list />
  </q-btn-dropdown>
</template>

<script setup>
</script>

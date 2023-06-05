<template>
  <div class="bg-white shadow-5 shadow-transition">
    <q-list
      bordered
      separator
      class="q-mt-sm text-center text-h6"
    >
      <StreamTypeItem
        to="justChatting"
        text="Just Chatting"
      />

      <StreamTypeItem
        to="vedalCollab"
        text="Stream with Vedal"
      />

      <StreamTypeItem
        to="evilNeuro"
        text="Stream with Evil Neuro"
      />

      <q-separator />

      <q-item-label header>
        Collabs
      </q-item-label>

      <StreamTypeItem
        to="filianCollab"
        text="Collab with filian"
      />

      <StreamTypeItem
        to="annyCollab"
        text="Collab with anny"
      />

      <StreamTypeItem
        to="shylilyCollab"
        text="Collab with Shylily"
      />
    </q-list>
  </div>
</template>

<script setup>
// project-related
import StreamTypeItem from './StreamTypeItem.vue'
</script>

<template>
  <div class="bg-white">
    <q-list
      bordered
      separator
      class="q-mt-sm text-center text-h6"
    >
      <q-item-label header>
        Regular streams
      </q-item-label>

      <StreamTypeItem
        to="justChatting"
        text="Just Chatting"
      />

      <StreamTypeItem
        to="vedalCollab"
        text="Stream with Vedal"
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

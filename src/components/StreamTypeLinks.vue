<template>
  <div class="bg-white shadow-5 shadow-transition">
    <q-list
      bordered
      separator
      class="q-mt-sm text-center text-h6"
    >
      <StreamTypeItem
        to="justChatting"
        text="Chill stream"
      />

      <StreamTypeItem
        to="devStream"
        text="Dev stream"
      />

      <StreamTypeItem
        to="familyCollab"
        text="Family stream"
        is-new
      />

      <StreamTypeItem
        to="evilNeuro"
        text="Evil Neuro solo"
        is-new
      />

      <q-expansion-item
        group="collab"
        label="Collabs"
        header-class="text-gymbag text-subtitle1"
        toggle
        expand-icon-class="collab-toggle"
      >
        <StreamTypeItem
          to="evilCollab"
          text="Evil Neuro"
        />

        <q-separator />
        <StreamTypeItem
          to="filianCollab"
          text="filian"
        />
        <q-separator />

        <StreamTypeItem
          to="annyCollab"
          text="anny"
        />
        <q-separator />

        <StreamTypeItem
          to="shylilyCollab"
          text="Shylily"
        />
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
// project-related
import StreamTypeItem from './StreamTypeItem.vue'
</script>

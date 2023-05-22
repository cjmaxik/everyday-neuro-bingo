<template>
  <div v-if="item.free" class="bingo-card__item free-block" />

  <div v-else class="bingo-card__item" :class="{ active: item.tally }">
    {{ item.text }}

    <q-badge class="tally">
      {{ item.tally }}
    </q-badge>
  </div>
</template>

<script setup>
defineProps({
  item: Object
})
</script>

<style lang="scss" scoped>
.bingo-card__item {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
  background-color: white;
  border-color: #532933;
  border-width: 3px;
  border-style: solid;

  max-width: 100px;
  height: 100px;
  max-height: 100px;

  font-size: 20px;

  text-align: center;
}

.tally {
  position: absolute;

  bottom: 0px;
  right: 0;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;

  background-color: #532933;
  font-size: 15px;
  padding: 4px 2px 0px 4px;
}

.active {
  background-image: url('../assets/gymbag.png');
  background-size: cover;
}

.free-block {
  background-image: url('../assets/vedal.png');
  background-size: cover;
}
</style>

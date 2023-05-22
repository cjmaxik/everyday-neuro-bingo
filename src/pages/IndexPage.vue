<template>
  <div class="main">
    <div class="bingo-card" v-if="store.board">
      <div v-for="item in store.board" :key="item.index">
        <BingoBlock :item="item" non-selectable cursor-pointer v-ripple @click="increment(item.index)" />
      </div>
    </div>

    <div v-else>
      <img src="../assets/gymbag.png" alt="Loading...">
    </div>

    <div v-if="store.bingo">
      <h2 class="text-center">BINGO!</h2>
    </div>
  </div>
</template>

<script setup>
// vue-related
// import { computed } from 'vue'

// project-related
import BingoBlock from '../components/BingoItem.vue'

// game state
// TODO: store the state in localStorage for 12 hours
import { gameStateStore } from '../stores/gameStateStore'
const store = gameStateStore()

store.generateBoard(new Date().getUTCDate)
console.log(store.board)

const kekwa = new Audio('../src/assets/KEKWA.mp3')
const win = new Audio('../src/assets/vine-boom.mp3')

const increment = (index) => {
  if (store.isFree(index)) return
  store.increment(index)

  if (!store.bingo) {
    const bingo = store.checkForBingo()

    if (bingo) win.play()
  }

  if (store.getTally(index) === 1) kekwa.play()
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 700px;
  width: 100%;
  margin: 3em auto 0;
  overflow: hidden;
}

.bingo-card {
  display: grid;
  grid-template-rows: repeat(7, 100px);
  grid-template-columns: repeat(7, 1fr);

  user-select: none;
}
</style>

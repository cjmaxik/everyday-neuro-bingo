import { boot } from 'quasar/wrappers'
import DefaultTransition from '../components/DefaultTransition.vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.component('DefaultTransition', DefaultTransition)
})

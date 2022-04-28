<template>
 <div class="container-fluid">
    <div class="row">
      <div class="col-2"></div>
    </div>
    <div class="row p-2">
      <House v-for="h in houses" :key="h.id" :house="h"/>
      <!-- Inject house component -->
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { housesService } from '../services/housesService.js'
import { AppState } from '../AppState'
export default {
  setup(){
    onMounted(async () => {
      try {
        await housesService.getAllHouses()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      houses: computed(() => AppState.houses)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
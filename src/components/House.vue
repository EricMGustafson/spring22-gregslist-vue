<template>
  <div class="col-md-4 mb-2">
    <div class="bg-light shadow rounded">
      <!-- NOTE make sure to supply the needed params for this route! -->
      <router-link :to="{ name: 'HouseDetailsPage', params: { id: house.id } }">
        <img
          :src="house.imgUrl"
          :alt="`${house.levels} ${house.bedrooms} ${house.bathrooms}`"
          class="img-fluid rounded"
        />
      </router-link>
    </div>
  </div>
</template>


<script>
import { House } from '../models/House'
export default {
  props: {
    house: {
      type: House,
      required: true,
      }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
<template>
  <div class="col-md-4 mb-2">
    <div class="bg-light shadow rounded">
      <!-- NOTE make sure to supply the needed params for this route! -->
      <router-link :to="{ name: 'JobsDetailsPage', params: { id: job.id } }">
        <div>
          <h1>{{ job.company }}</h1>
          <p>{{ job.jobTitle }}{{ job.hours }}{{ job.rate}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
import { Job } from '../models/Job'
export default {
  props: {
    job: {
      type: Job,
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
<template>
 <div class="container-fluid">
    <div class="row">
      <div class="col-2"></div>
    </div>
    <div class="row p-2">
      <Job v-for="j in jobs" :key="j.id" :job="j"/>
      <!-- Inject job component -->
    </div>
  </div>

  <!-- Create Job Modal -->
    <Modal id="create-job-modal">
    <template #modal-title-slot>
      <h3>Create a Job!</h3>
    </template>
    <template #modal-body-slot>
      <JobForm />
    </template>
  </Modal>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { jobsService } from '../services/JobsService.js'
import { AppState } from '../AppState'
export default {
  setup(){
    onMounted(async () => {
      try {
        await jobsService.getAllJobs()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      jobs: computed(() => AppState.jobs)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
<template>
  <div class="container-fluid">
    <div v-if="job">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="p-2" v-if="job.creatorId === account.id">
            <i
              class="mdi mdi-pencil selectable"
              data-bs-toggle="modal"
              data-bs-target="#edit-car-modal"
            ></i>
            <i class="mdi mdi-delete ms-2 selectable" @click="deleteJob()"></i>
          </div>
          <div class="d-flex justify-content-between p-2">
            <h5>{{ job.jobTitle }}</h5>
            <h5>{{ job.hours }}</h5>
            <h5>{{ job.rate }}</h5>

          </div>
          <div class="d-flex p-2">
            <p>{{ job.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>...Loading</h1>
    </div>
  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
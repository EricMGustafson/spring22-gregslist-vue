<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-group">
      <div class="form-group">
      <label for="year" class="form-label">company:</label>
      <input
        type="text"
        class="form-control"
        id="company"
        v-model="editable.company"
      />
    </div>
    <div class="form-group">
      <label for="model" class="form-label">Job Title:</label>
      <input
        type="text"
        class="form-control"
        id="jobTitle"
        v-model="editable.jobTitle"
      />
    </div>
    <div class="form-group">
      <label for="price" class="form-label">Hours:</label>
      <input
        type="number"
        class="form-control"
        id="hours"
        v-model="editable.hours"
      />
    </div>
    <div class="form-group">
      <label for="img" class="form-label">rate</label>
      <input
        type="text"
        class="form-control"
        id="rate"
        v-model="editable.rate"
      />
    </div>
    <div class="form-group">
      <label for="year" class="form-label">Description:</label>
      <textarea
        type="text"
        class="form-control"
        id="year"
        v-model="editable.description"
      />
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity"
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { jobsService } from "../services/JobsService";
import { Modal } from "bootstrap";
import { Job } from "../models/Job";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  props: {
    job: {
      type: Job,
      default: () => new Job()
    },
  },
  setup(props) {
    const router = useRouter();
    const editable = ref({})
    watchEffect(() => {
      editable.value = { ...props.job };
    });
    return {
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await jobsService.editJob(editable.value);
            Pop.toast("Job  Edited!", "success");
            Modal.getOrCreateInstance(document.getElementById("edit-job-Modal")).toggle();
          } else {
            const createdJob = await jobsService.createJob(editable.value);
            router.push({
              name: "JobDetailsPage",
              params: { id: createdJob.id }
            });
            Pop.toast("Job Created!", "success");
            Modal.getOrCreateInstance(document.getElementById("create-job-modal")).toggle();
          }
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, "error") 
        }
      }
    }
  }
}
</script>

<style>

</style>
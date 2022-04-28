<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-group">
      <div class="form-group">
        <label for="year" class="form-label">Year:</label>
        <input
          type="text"
          class="form-control"
          id="year"
          v-model="editable.year"
        />
      </div>
      <div class="form-group">
        <label for="model" class="form-label">Model:</label>
        <input
          type="text"
          class="form-control"
          id="model"
          v-model="editable.bedrooms"
        />
      </div>
      <div class="form-group">
        <label for="price" class="form-label">Price:</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="editable.bathrooms"
        />
      </div>
      <div class="form-group">
        <label for="img" class="form-label">Img:</label>
        <input
          type="text"
          class="form-control"
          id="img"
          v-model="editable.imgUrl"
        />
      </div>
      <div class="form-group">
        <label for="color" class="form-label">Color:</label>
        <input
          type="color"
          class="form-control"
          id="color"
          v-model="editable.levels"
        />
      </div>
      <div class="form-group">
        <label for="color" class="form-label">Color:</label>
        <input
          type="color"
          class="form-control"
          id="color"
          v-model="editable.price"
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
import { House } from "../models/House"
import { watchEffect } from "@vue/runtime-core"
import { housesService } from "../services/HousesService"
import Pop from "../utils/Pop"
import { Modal } from "bootstrap"
export default {
  props: {
    house: {
      type: House,
      default: () => new House()
    },
  },
  setup(props) {
    const router = useRouter()
    const editable = ref({})
    watchEffect(() => {
      editable.value = {...props.house}
    });
    return {
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await housesService.editHouse(editable.value)
            Pop.toast("House Edited!", "success");
            Modal.getOrCreateInstance(document.getElementById("edit-house-modal")).toggle()
          } else {
            const createdHouse = await housesService.createHouse(editable.value);
            router.push({
              name: "HouseDetailsPage",
              params: { id: createdHouse.id }
            });
            Pop.toast("House Created!", "success")
            Modal.getOrCreateInstance(document.getElementById)
          }
        } catch (error) {
          
        }
      }
    }
  }
}
</script>

<style>

</style>
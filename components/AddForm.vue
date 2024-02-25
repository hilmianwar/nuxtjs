<script setup>
import axios from "axios";
import { ref } from "vue"; // Import ref dari Vue

const props = defineProps(["toggleAddForm"]); // Define props untuk mengakses menuId

const token = localStorage.getItem("token");

const name = ref("");
const description = ref("");
const type = ref("");
const imageUrl = ref("");
const price = ref("");

const handleSubmit = async () => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const payload = {
    name: name.value,
    description: description.value,
    type: type.value,
    imageUrl: imageUrl.value,
    price: parseFloat(price.value),
  };
  try {
    const response = await axios.post(
      `https://api.mudoapi.tech/menu`,
      payload,
      config
    );
    props.toggleAddForm(); // Panggil toggleEditForm dari props
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="fixed z-50 inset-0 w-full m-auto">
    <!-- <div class="w-full h-full bg-color-dark opacity-25 z-10"></div> -->
    <div
      class="bg-color-accent2 w-1/3 mx-auto my-auto rounded-md relative mt-20 z-50"
    >
      <button
        @click="toggleAddForm"
        class="absolute right-3 mt-2 font-semibold"
      >
        X
      </button>
      <div class="flex flex-col p-3 gap-3">
        <p>Name</p>
        <input
          class="p-1 rounded-md outline-color-accent3"
          v-model="name"
          type="text"
        />
        <p>Description</p>
        <input
          class="p-1 rounded-md outline-color-accent3"
          v-model="description"
          type="text"
        />
        <p>Tipe</p>
        <input
          class="p-1 rounded-md outline-color-accent3"
          v-model="type"
          type="text"
        />
        <p>Image Url</p>
        <input
          class="p-1 rounded-md outline-color-accent3"
          v-model="imageUrl"
          type="text"
        />
        <p>Harga</p>
        <input
          class="p-1 rounded-md outline-color-accent3"
          v-model="price"
          type="text"
        />
        <button
          @click="handleSubmit"
          class="bg-color-secondary p-2 my-3 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  </div>
  <!-- <div v-if="">HALOO</div> -->
</template>

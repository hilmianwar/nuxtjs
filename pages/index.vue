<script setup>
import axios from "axios";

const { data: menus } = await axios.get(
  "https://api.mudoapi.tech/menus?perPage=12"
);

const showEditForm = ref(false);
const showAddForm = ref(false);
const menuId = ref(null);

const toggleEditForm = (id) => {
  showEditForm.value = !showEditForm.value;
  menuId.value = id;
};
const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
};
const handleDelete = async (id) => {
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const response = await axios.delete(
      `https://api.mudoapi.tech/menu/${id}`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <EditForm
    :menuId="menuId"
    :toggleEditForm="toggleEditForm"
    v-if="showEditForm"
  />
  <AddForm :toggleAddForm="toggleAddForm" v-if="showAddForm" />

  <h1 class="pt-10 pb-5 text-center text-2xl font-bold">ALL MENUS</h1>
  <div class="w-full text-end px-10 pb-5">
    <button
      @click="toggleAddForm"
      class="text-end p-2 text-color-primary bg-color-secondary rounded-md"
    >
      Add Menu
    </button>
  </div>
  <div class="grid grid-cols-4 gap-10 h-10 mx-10">
    <div v-for="data in menus.data.Data">
      <div class="h-80 rounded-md">
        <img
          :src="data.imageUrl"
          alt=""
          class="h-[70%] w-full rounded-md hover:scale-[1.02] transition-all"
        />

        <div>
          <div class="flex justify-between">
            <h2 class="text-xl font-bold">{{ data.name }}</h2>
            <div class="flex justify-center items-center gap-2">
              <button @click="toggleEditForm(data.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
              <button @click="handleDelete(data.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p class="text-lg font-semibold">Price: ${{ data.price }}</p>
          <nuxt-link :to="`/detail/${data.id}`">
            <button
              class="bg-color-secondary p-1 px-4 rounded-md text-color-primary"
            >
              Detail
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

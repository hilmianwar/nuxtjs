<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const q = route.params.slug;

const { data: search } = await axios.get(
  `https://api.mudoapi.tech/menus?perPage=10&page=1&name=${q}&type=`
);
</script>

<template>
  <h1 class="pt-10 px-10 pb-5 text-2xl font-bold">
    Pencarian Untuk {{ q }}...
  </h1>
  <div class="grid grid-cols-4 gap-10 h-10 mx-10">
    <div v-for="data in search?.data?.Data">
      <div class="h-80 rounded-md">
        <img
          :src="data.imageUrl"
          alt=""
          class="h-[70%] w-full rounded-md hover:scale-[1.02] transition-all"
        />

        <div>
          <h2 class="text-xl font-bold">{{ data.name }}</h2>
          <p class="text-lg font-semibold">Price: ${{ data.price }}</p>
          <nuxt-link to="/detail/1">
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

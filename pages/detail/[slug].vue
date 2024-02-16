<script setup>
import axios from "axios";

const route = useRoute();
const id = route.params.slug;

const { data: detail } = await axios.get(`https://api.mudoapi.tech/menu/${id}`);
const menu = detail.data;
</script>

<template>
  <div>
    <div class="h-screen flex items-center justify-center mx-10">
      <div>
        <div class="text-3xl pb-4">
          <h1>{{ menu.name }}</h1>
        </div>
        <div class="flex gap-4">
          <div>
            <img :src="menu.imageUrl" alt="" class="h-96 w-96 rounded-md" />
          </div>
          <div class="text-start w-2/4">
            <p class="flex gap-2">
              <span class="flex w-1/6 justify-between font-bold">
                <span>Nama</span> <span>:</span>
              </span>
              <span>{{ menu.name }} </span>
            </p>
            <p class="flex gap-2">
              <span class="flex w-1/6 justify-between font-bold">
                <span>Tipe</span> <span>:</span>
              </span>
              <span>{{ menu.type }} </span>
            </p>
            <p class="flex gap-2">
              <span class="flex w-1/6 justify-between font-bold">
                <span>Harga</span> <span>:</span>
              </span>
              <span>{{ menu.priceFormatted }} </span>
            </p>
            <p class="flex gap-2">
              <span class="flex w-1/5 justify-between font-bold">
                <span>Deskripsi</span> <span>:</span>
              </span>
              <span class="w-full text-justify break-words">
                {{ menu.description }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

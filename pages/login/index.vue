<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response = await axios.post("https://api.mudoapi.tech/login", {
      username: username.value,
      password: password.value,
    });
    router.push("/");
    localStorage.setItem("token", response.data.data.token);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex justify-center items-center py-10">
    <div class="w-1/3 border border-black p-4 px-6 rounded-md">
      <div class="py-5 text-2xl font-semibold">LOGIN</div>
      <form @submit.prevent="handleLogin">
        <div class="flex flex-col py-4 gap-6">
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="border-b border-black outline-none py-2"
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="border-b border-black outline-none py-2"
          />
        </div>
        <button
          class="my-8 p-3 w-full bg-color-accent hover:bg-color-accent2 transition-all text-color-primary text-center font-bold rounded-md"
        >
          Log in
        </button>
        <p class="text-center text-sm mb-4">
          Dont have a acount?
          <nuxt-link to="/register" class="font-semibold underline"
            >Registe for free</nuxt-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

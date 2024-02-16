<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const username = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response = await axios.post("https://api.mudoapi.tech/register", {
      name: name.value,
      username: username.value,
      password: password.value,
      roleId: 1,
    });
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex justify-center items-center py-10 md:mx-0 mx-6">
    <div
      class="lg:w-1/3 md:w-1/2 w-full border border-black p-4 px-6 rounded-md"
    >
      <div class="text-2xl py-5 font-semibold">REGISTER</div>
      <form @submit.prevent="handleLogin">
        <div class="flex flex-col py-4 gap-6">
          <input
            type="text"
            v-model="name"
            placeholder="Name"
            class="border-b border-black outline-none py-2"
          />
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
          Register
        </button>
        <p class="text-center text-sm mb-4">
          Already have an acount?
          <nuxt-link to="/login" class="font-semibold underline"
            >Log in now</nuxt-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

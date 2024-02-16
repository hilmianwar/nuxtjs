import type { InputSearch } from '#build/components'; import { ref } from 'vue'
<script setup>
const search = ref("");
const router = useRouter();

const handleSearch = () => {
  if (search.value) {
    router.push(`/search/${search.value}`);
  }
};

// const handleSearch = async (search) => {
//   const response = await axios.get(
//     `https://api.mudoapi.tech/menus?perPage=10&page=1&name=${search}&type=`
//   );
// };
</script>

<template>
  <input
    v-model="search"
    class="p-1 rounded-md absolute right-10 outline-none px-2"
  />
  <button @click="handleSearch" class="relative right-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-search text-color-secondary"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
const DEBOUNCE_TIME = 300;
const isLoading = ref(false);
const giftSearchBar = ref();

const searchTerm = ref("");
const products = ref([]);

const findProducts = async (term: string) => {
  if (term.length === 0) return (products.value = []);
  isLoading.value = true;
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${term}&limit=5`
    );
    const data = await res.json();
    products.value = data.products;
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  } finally {
    isLoading.value = false;

    await nextTick;
    giftSearchBar.value.focus();
  }
};

const debouncedFn = useDebounceFn(() => {
  findProducts(searchTerm.value.trim());
}, DEBOUNCE_TIME);

watch(searchTerm, () => debouncedFn());
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input
      ref="giftSearchBar"
      type="text"
      class="py-2 px-4 border-2 border-gray-dark text-black rounded-lg"
      v-model="searchTerm"
      placeholder="Start typing..."
      :disabled="isLoading"
      autofocus
    />

    <p v-if="searchTerm && products.length === 0 && !isLoading">
      No results...
    </p>
    <p v-if="isLoading">Please wait...</p>

    <ul>
      <li v-for="{ id, title, price } in products" :key="id">
        {{ title }} - ${{ price }}
      </li>
    </ul>
  </div>
</template>

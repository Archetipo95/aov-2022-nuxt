<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
}

const DEBOUNCE_TIME = 300;
const API = "https://dummyjson.com/products/search";
const isLoading = ref(false);
const giftSearchBar = ref();

const searchTerm = ref("");
const products = ref<Product[]>([]);

const fetchProducts = async (searchTerm: string) => {
  const res = await fetch(`${API}?q=${searchTerm}`);
  const json = await res.json();
  return json.products as Product[];
};

const getProducts = async (newTerm: string) => {
  const searchTerm = newTerm.trim();

  if (searchTerm.length === 0) products.value = [];
  else {
    const result = await fetchProducts(searchTerm);
    products.value = result;
  }
  isLoading.value = false;
};

watch(products, (newProducts) => {
  if (newProducts.length === 0 && searchTerm.value)
    alert("No products found. Please try again.");
});

watch(searchTerm, () => (isLoading.value = true));

watch(searchTerm, useDebounceFn(getProducts, DEBOUNCE_TIME));
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
      autofocus
    />

    <p v-if="searchTerm && products.length === 0 && !isLoading">
      No results...
    </p>
    <p v-if="isLoading">Searching, please wait...</p>

    <ul>
      <li v-for="{ id, title, price } in products" :key="id">
        {{ title }} - ${{ price }}
      </li>
    </ul>
  </div>
</template>

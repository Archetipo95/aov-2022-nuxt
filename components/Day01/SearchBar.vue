<script setup lang="ts">
const searchTerm = ref("");
const products = ref();

const findProducts = async (term: string) => {
  if (!term) {
    products.value = null;
    return;
  }

  const res = await fetch(`https://dummyjson.com/products/search?q=${term}`);
  const data = await res.json();
  products.value = data.products;
};

const debouncedFn = useDebounceFn(() => {
  findProducts(searchTerm.value.trim());
}, 1000);

watch(searchTerm, () => {
  debouncedFn();
});
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input
      type="text"
      class="p-2 border-2 border-gray-dark text-black"
      v-model="searchTerm"
      placeholder="Start typing..."
    />
    <ul class="list-disc">
      <li v-for="{ id, title } in products" :key="id">{{ title }}</li>
    </ul>
  </div>
</template>

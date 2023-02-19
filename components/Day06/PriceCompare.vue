<script setup lang="ts">
const { availableItems, itemsToCompare } = useItemComparison()

const { data, pending, error } = await useFetch('https://dummyjson.com/products')

availableItems.value = data.value?.products
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 v-if="error">Something went wrong: {{ error }}</h1>
    <h1 v-else-if="pending">Please wait...</h1>
    <div v-else>
      <h1 class="text-4xl font-bold mb-4">Select items to compare</h1>
      <div class="flex flex-col gap-5 justify-center">
        <Day06ItemSelect />
        <Day06ItemSelect />
      </div>
      <Day06ComparisonSummary v-if="itemsToCompare.length === 2" />
    </div>
  </div>
</template>

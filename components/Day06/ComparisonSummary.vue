<script setup lang="ts">

const { itemsToCompare } = useItemComparison()

const itemsSortedByPriceDesc = computed(() =>
  [...itemsToCompare.value].sort((a, b) => b.price - a.price)
)

const expensiveItem = computed(() => itemsSortedByPriceDesc.value[0])
const cheapItem = computed(() => itemsSortedByPriceDesc.value[1])

const itemsAreTheSame = computed(
  () => expensiveItem.value.id === cheapItem.value.id
)

const numCheaperItems = computed(() =>
  Math.floor(expensiveItem.value.price / cheapItem.value.price)
)
</script>

<template>
  <div class="mt-4 text-lg">
    <p v-if="itemsAreTheSame" class="mx-5 text-center">
      These are the same items
    </p>
    <p v-else class="mx-5 text-center">
      You can get <strong>{{ numCheaperItems }}x </strong>
      <em>{{ cheapItem.title }}</em> for about the same price as a single
      <em>{{ expensiveItem.title }}</em>
    </p>
  </div>
</template>

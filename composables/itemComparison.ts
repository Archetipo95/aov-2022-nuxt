const availableItems = ref([])
const itemsToCompare = ref([])

export const useItemComparison = () => ({
  availableItems,
  itemsToCompare,
})

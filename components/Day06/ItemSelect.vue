<script setup>
const { availableItems, itemsToCompare } = useItemComparison()

const selected = ref()

watch(selected, (newItem, prevItem) => {
    itemsToCompare.value = itemsToCompare.value.filter(
        item => item.id !== prevItem?.id
    )
    itemsToCompare.value.push(newItem)
})

const id = ref(Math.random())
</script>

<template>
    <div class="flex flex-col">
        <label :for="`select-${id}`">Select an item:</label>
        <select :id="`select-${id}`" v-model="selected" class="p-2 border-2 border-gray-dark text-black rounded-md">
            <option disabled value="">Select an item</option>
            <option :value="{ id, title, price }" v-for="{ id, title, price } in availableItems" :key="id">
                {{ title }} - {{ price }}$
            </option>
        </select>
    </div>
</template>

<!-- You shouldn't need to update this file -->
<script setup lang="ts">
import Tree from '@/assets/images/tree.svg?component'

defineProps<{
    presents: string[]
}>()
</script>

<template>
    <div class="relative flex justify-center">
        <Tree class="w-64" />
        <div v-if="presents.length" class="flex items-end absolute -bottom-8 -gap-8 presents">
            <Day07ChristmasPresent v-for="(p, index) in presents" :key="p" :name="p" />
        </div>
    </div>
</template>

<style scoped>
/* Styles the middle present slightly in front of the other two */
.presents>div:nth-of-type(2) {
    @apply -mx-8 z-10 -mb-4;
}
</style>
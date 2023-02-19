<!-- You shouldn't need to update this file -->
<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <IconsGiftRedTall v-if="name === 'tall-red-gift'" />
  <IconsGiftRedSmall v-else-if="name === 'small-red-gift'" />
  <IconsGiftBlue v-else-if="name === 'blue-gift'" />
</template>

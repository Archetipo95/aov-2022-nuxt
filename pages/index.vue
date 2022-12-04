<script setup lang="ts">
const pages = [
  { title: "Day 0: Pilot Puzzle TicTacToe", path: "tictactoe" },
  { title: "Day 1: Gift Search Bar", path: "giftSearchbar" },
];
</script>

<template>
  <ul class="space-y-1">
    <li v-for="{ title, path } in pages" :key="path">
      <nuxt-link :to="`/${path}`">{{ title }}</nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
li {
  @apply underline;
}
</style>

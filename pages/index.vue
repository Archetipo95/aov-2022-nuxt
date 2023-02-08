<script setup lang="ts">
const pages = [
  { title: "Day 00: Pilot Puzzle TicTacToe", path: "day-00" },
  { title: "Day 01: Gift Search Bar", path: "day-01" },
  { title: "Day 02: Xmas Joke Generator", path: "day-02" },
  { title: "Day 03: Xmas Countdown", path: "day-03" },
  { title: "Day 04: Recursive Tree", path: "day-04" },
  { title: "Day 05: Gift Label Maker", path: "day-05" },
  { title: "Day 06: Price Comparer", path: "day-06" },
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

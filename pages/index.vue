<script setup lang="ts">
const pages = [
  { title: "Day 00: Pilot Puzzle TicTacToe", path: "day-00" },
  { title: "Day 01: Gift Search Bar", path: "day-01" },
  { title: "Day 02: Xmas Joke Generator", path: "day-02" },
  { title: "Day 03: Xmas Countdown", path: "day-03" },
  { title: "Day 04: Recursive Tree", path: "day-04" },
  { title: "Day 05: Gift Label Maker", path: "day-05" },
  { title: "Day 06: Price Comparator", path: "day-06" },
  // { title: "Day 07: Drag Gifts", path: "day-07" },
];
</script>

<template>
  <ul class="grid grid-cols-4 gap-4">
    <li v-for="{ title, path } in pages" :key="path">
      <nuxt-link
        :to="`/${path}`"
        class="
          border
          h-[180px]
          w-[170px]
          rounded-lg
          p-5
          flex
          justify-center
          items-center
          hover:bg-white
          hover:text-gray-dark
          transition-all
        "
      >
        {{ title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
li {
  @apply underline;
}
</style>

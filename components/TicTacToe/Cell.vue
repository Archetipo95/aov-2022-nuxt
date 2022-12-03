<script setup lang="ts">
import type { CellProps } from "./Cell.props";

defineProps<CellProps>();
</script>

<template>
  <div
    :class="`border border-white w-24 h-24 hover:bg-gray-700 flex items-center justify-center material-symbols-outlined text-4xl cursor-pointer ${
      value === 'X' ? 'text-pink-500' : 'text-blue-400'
    }`"
  >
    {{ value === "X" ? "close" : value === "O" ? "circle" : "" }}
  </div>
</template>

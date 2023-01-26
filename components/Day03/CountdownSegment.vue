<script setup lang="ts">
import { CountdownSegmentProps } from "./CountdownSegment.props";

defineProps<CountdownSegmentProps>();
</script>

<template>
  <div class="segment text-center">
    <div class="pt-10 overflow-hidden relative">
      <span
        :key="number"
        class="numbers text-green-aov absolute top-0 left-[50%]"
        >{{ number }}</span
      >
    </div>

    <span class="label block pt-2">{{ label }}</span>
  </div>
</template>

<style scoped>
.segment {
  width: 80px;
}
.numbers {
  transform: translateX(-50%);
  font-size: 32px;
}
.label {
  font-size: 16px;
}
</style>

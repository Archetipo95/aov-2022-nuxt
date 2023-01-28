<script setup lang="ts">
import { CountdownSegmentProps } from "./CountdownSegment.props";

defineProps<CountdownSegmentProps>();
</script>

<template>
  <div class="segment text-center">
    <div class="pt-10 relative overflow-hidden">
      <Transition>
        <span
          :key="number"
          class="numbers text-green-aov absolute top-0 left-[50%]"
          >{{ number }}</span
        >
      </Transition>
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

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from {
  transform: translateY(-100%) translateX(-50%);
}
.v-leave-to {
  transform: translateY(100%) translateX(-50%);
}
.v-enter-to,
.v-leave-from {
  transform: translateY(0px) translateX(-50%);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

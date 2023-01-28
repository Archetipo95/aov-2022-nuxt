<template>
  <div>
    <ChristmasTree v-if="positiveSize > 1" :size="positiveSize - 1" />
    <div class="flex flex-row justify-center">
      <div
        v-for="i in positiveSize"
        class="relative rounded-full bg-green-aov w-10 h-10 -m-1 flex justify-center items-center"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size: number;
  }>(),
  {
    size: 1,
  }
);

const positiveSize = computed(() => Math.abs(props.size));
</script>

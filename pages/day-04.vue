<script setup lang="ts">
const heigth = ref(10);
</script>

<template>
  <div class="relative">
    <h1 class="text-center mb-10">
      I'm
      <input
        class="text-black w-8 mx-1"
        v-model="heigth"
        type="number"
        name="height"
        id="xmas-tree-height"
      />
      units tall
    </h1>
    <Day04ChristmasTree :size="heigth" />
    <div
      class="w-10 h-10 bg-amber-900 rounded-sm -z-10 -bottom-9 -translate-x-1/2 left-1/2 absolute"
    ></div>
  </div>
</template>

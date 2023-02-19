<script setup lang="ts">
const presents = ref(["small-red-gift", "blue-gift", "tall-red-gift"]);
const underTheTree = ref([]);

const startDrag = (evt, index) => {
  // TODO
};

const onDrop = (evt) => {
  // TODO
};
</script>

<template>
  <div class="flex flex-col items-center mt-16 min-h-screen w-full">
    <h1 class="mt-8 text-xl font-bold">Drag the presents under the tree!</h1>
    <!-- TODO: make ChristmasTree our drop zone! -->
    <Day07ChristmasTree :presents="underTheTree" class="mt-16" />
    <div class="pt-10 mt-10 bg-gray-100 w-full justify-center flex-1">
      <div class="flex items-end justify-center">
        <!-- TODO: make each present draggable -->
        <Day07ChristmasPresent
          v-for="(p, index) in presents"
          :key="p"
          :name="p"
          class="h-auto w-32"
        />
      </div>
    </div>
  </div>
</template>

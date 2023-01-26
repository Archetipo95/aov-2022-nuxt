<script setup lang="ts">
const now = useNow();
const christmas = new Date("12/25/2022 00:00:00"); // todo: make year dynamic

console.log(now.value);
</script>

<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div
        class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px] text-black"
      >
        <Day03CountdownHeader />
        <main class="flex justify-center">
          <Day03CountdownSegment label="days" :number="0" />
          <Day03CountdownSegment label="hours" :number="0" />
          <Day03CountdownSegment label="minutes" :number="0" />
          <Day03CountdownSegment label="seconds" :number="0" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by
        <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

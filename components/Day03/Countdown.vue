<script setup lang="ts">
const now = useNow();
const christmas = new Date(`${now.value.getFullYear()}-12-25T00:00:00.000Z`);

const millisInDay = 1000 * 60 * 60 * 24;

const days = computed(
  () => (christmas.getTime() - now.value.getTime()) / millisInDay
);

const daysRounded = computed(() => {
  return Math.floor(days.value);
});

const hours = computed(() => {
  return 24 * (days.value - daysRounded.value);
});

const hoursRounded = computed(() => {
  return Math.floor(hours.value);
});

const minutes = computed(() => {
  return 60 * (hours.value - hoursRounded.value);
});

const minutesRounded = computed(() => {
  return Math.floor(minutes.value);
});

const seconds = computed(() => {
  return 60 * (minutes.value - minutesRounded.value);
});

const secondsRounded = computed(() => {
  return Math.floor(seconds.value);
});
</script>

<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div
        class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px] text-black"
      >
        <Day03CountdownHeader />
        <main class="flex justify-center">
          <Day03CountdownSegment label="days" :number="daysRounded" />
          <Day03CountdownSegment label="hours" :number="hoursRounded" />
          <Day03CountdownSegment label="minutes" :number="minutesRounded" />
          <Day03CountdownSegment label="seconds" :number="secondsRounded" />
        </main>
      </div>
    </div>
  </div>
</template>

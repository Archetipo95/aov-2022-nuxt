<script setup lang="ts">
const from = ref();
const to = ref();
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div>
      <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
        <div
          class="
            border-2
            rounded
            flex flex-col
            md:flex-row
            md:items-center
            md:gap-8
            p-4
          "
        >
          <img src="/assets/santa.svg" alt="" class="max-w-[12em]" />
          <div>
            <h1 class="font-serif text-4xl">Happy Holidays!</h1>
            <div class="mt-4 bg-white text-black p-2 rounded">TO: {{ to }}</div>
            <div class="mt-2 bg-white text-black p-2 rounded">
              FROM: {{ from }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          mt-4
          gap-2
          flex flex-col
          [&>input[type=text]]:text-black
          [&>input[type=text]]:p-1
          [&>input[type=text]]:rounded-[4px]
        "
      >
        <label for="to_input">TO:</label>
        <input type="text" v-model="to" name="to_input" />
        <label for="from_input">From:</label>
        <input type="text" v-model="from" name="from_input" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

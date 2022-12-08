<script setup lang="ts">
interface Joke {
  setup: string;
  delivery: string;
}

const API = "https://v2.jokeapi.dev/joke/christmas";

const joke = ref<Joke>();
const showDelivery = ref(false);

const fetchJoke = async () => {
  const res = await fetch(API);
  const json = await res.json();

  joke.value = {
    setup: json.setup,
    delivery: json.delivery,
  };

  showDelivery.value = false;
};

fetchJoke();

const handleButtonClick = () => {
  showDelivery.value ? fetchJoke() : (showDelivery.value = true);
};
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Xmas Joke Generator</h1>
    <div
      class="flex flex-col space-y-4 text-gray-dark border border-white px-2 py-4 rounded-md"
    >
      <h3 v-if="joke?.setup" class="p-6 bg-white rounded-2xl w-3/4">
        {{ joke?.setup }}
      </h3>
      <h3
        v-if="joke?.delivery && showDelivery"
        class="p-6 bg-red-600 text-white rounded-2xl w-3/4 ml-auto"
      >
        {{ joke?.delivery }}
      </h3>

      <button
        @click="handleButtonClick"
        class="bg-green-aov p-2 rounded-lg hover:bg-green-aov/90"
      >
        {{ showDelivery ? "Show another" : "Tell me" }}
      </button>
    </div>
  </div>
</template>

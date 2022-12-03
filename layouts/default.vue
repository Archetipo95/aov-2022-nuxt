<template>
  <div>
    <header class="top-0 fixed w-full bg-green-aov text-gray-dark p-3">
      <nuxt-link
        to="/"
        class="underline hover:bg-gray-dark hover:text-green-aov"
        >Home</nuxt-link
      >
    </header>
    <div class="flex justify-center items-center min-h-screen">
      <slot />
    </div>
    <footer
      class="bottom-0 fixed w-full bg-green-aov text-gray-dark p-3 text-center"
    >
      Made for
      <a
        href="https://adventofvue.com"
        target="_blank"
        rel="noreferrer noopener"
        class="underline hover:bg-gray-dark hover:text-green-aov"
      >
        Advent Of Vue 2022
      </a>
    </footer>
  </div>
</template>

import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Martin's Advent Of Vue 2022",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
      ],
    },
  },
  css: ["@/assets/scss/main.scss"],
  tailwindcss: {
    cssPath: "@/assets/scss/main.scss",
    viewer: false,
  },
  modules: [
    "vite-plugin-vue-type-imports/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            customCollections: ["icons"],
          }),
        ],
        dts: true,
      }),
      Icons({
        customCollections: {
          icons: FileSystemIconLoader("./icons", (svg) => {
            const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg);
            if (!viewBox) return svg;
            const w = viewBox?.[1];
            const h = viewBox?.[2];
            svg = svg.replace(/width=".*?"/, `width="${w}" `);
            svg = svg.replace(/height=".*?"/, `height="${h}" `);
            return svg;
          }),
        },
      }),
    ],
  },
});

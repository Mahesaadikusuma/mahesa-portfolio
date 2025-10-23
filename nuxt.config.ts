import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    // NuxtLoadingIndicator: {
    //   name: "default", // atau 'circle', 'bar', 'pulse', dll.
    //   color: "#4F46E5",
    //   background: "#fff",
    // },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/scripts"],
  image: {
    inject: true,
  },

  vite: { plugins: [tailwindcss()] },
});

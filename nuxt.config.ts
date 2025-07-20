// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
  ],
  nitro: {
    preset: "cloudflare_module",
    prerender: {
      autoSubfolderIndex: false
    },
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: "DB",
            database_name: "blog",
            database_id: "09ca416c-c0af-47a1-bf24-84f9601b63cb",
          },
        ],
      },
    },
  },
});

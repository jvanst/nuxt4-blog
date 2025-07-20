<script setup lang="ts">
useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
      <ClientOnly v-if="!colorMode?.forced">
        <div class="fixed bottom-4 right-4 z-50">
          <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            @click="isDark = !isDark"
          />
        </div>
        <template #fallback>
          <div class="size-8" />
        </template>
      </ClientOnly>
    </NuxtLayout>
  </UApp>
</template>

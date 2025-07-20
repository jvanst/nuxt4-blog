<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <main class="max-w-lg mx-auto py-6 sm:py-14">
    <h1
      class="mt-2 text-xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl"
    >
      {{ error?.statusCode }} 🤔
    </h1>
    <p class="mt-3 prose dark:prose-invert sm:mt-4">
      {{ error?.statusMessage || "An unexpected error occurred." }}
    </p>
    <div class="mt-8">
      <NuxtLink to="/">Go to homepage</NuxtLink>
    </div>
  </main>
</template>

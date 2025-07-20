<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData(() =>
  queryCollection("content").path(`/${route.params.slug}`).first()
);

if (!post.value) {
  showError({ statusCode: 404, statusMessage: "Post not found", fatal: true });
}

const title = post.value?.seo?.title || post.value?.title
const description = post.value?.seo?.description || post.value?.description

useSeoMeta({
  title: title,
  description: description,
  ogDescription: description,
  ogTitle: title
});
</script>

<template>
  <main
    class="max-w-2xl mx-auto py-6 sm:py-14 px-4 md:px-0"
    aria-label="Post content"
  >
    <NuxtLink to="/">Go home</NuxtLink>
    
    <div class="prose dark:prose-invert mt-2">
      <ContentRenderer v-if="post" :value="post" />
    </div>
  </main>
</template>

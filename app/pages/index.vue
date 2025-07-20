<script setup lang="ts">
const personalDescription =
  "A Staff Software Developer with over eight years of experience building scalable web applications and leading high-impact technical initiatives.";

const { data } = await useAsyncData(() =>
  queryCollection("content")
    .select("id", "title", "description", "path", "meta")
    .limit(10)
    .all()
);

useSeoMeta({
  title: "Hi I'm James 👋🏻",
  description: personalDescription,
});
</script>


<template>
  <main class="max-w-lg mx-auto py-6 sm:py-14 px-4 md:px-0" aria-label="Homepage main content">
    <header class="flex flex-col items-center" aria-label="Personal introduction">
      <img
        class="w-24 h-24 block rounded-full object-cover object-center"
        src="/avatar.png"
        alt="James avatar"
        width="96"
        height="96"
      >
      <h1
        class="mt-2 text-xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl"
      >
        Hi I'm James 👋🏻
      </h1>
    </header>

    <section class="flex" aria-label="Personal description">
      <p class="mt-3 mr-2 prose dark:prose-invert sm:mt-4">
        {{ personalDescription }}
      </p>
    </section>

    <section class="mt-8" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        class="text-lg leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl"
      >
        Projects
      </h2>
      <a
        href="https://uhost.gg"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 rounded-lg transition flex items-center gap-4 bg-white dark:bg-gray-900"
        aria-label="Visit uhost.gg website"
      >
        <img
          src="/uhost-logo.jpg"
          alt="uhost.gg logo"
          class="w-20 h-20 object-cover rounded-md flex-shrink-0"
          width="80"
          height="80"
        >
        <div class="flex flex-col">
          <span class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
            uhost.gg
          </span>
          <p class="text-base text-gray-700 dark:text-gray-300">
            Launch high-quality dedicated game servers with zero setup hassle.
          </p>
        </div>
      </a>
    </section>

    <section class="mt-8" aria-labelledby="articles-heading">
      <h2
        id="articles-heading"
        class="text-lg leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl"
      >
        Latest Articles
      </h2>
      <ul>
        <li v-for="post in data" :key="post.id">
          <article class="min-w-0 flex-1 flex flex-col justify-center p-2 sm:p-4 lg:px-0 !px-0" aria-labelledby="article-title-{{post.id}}">
            <header class="flex items-center gap-2 mb-2">
              <time
                :datetime="String(post.meta.date)"
                class="text-sm text-toned"
                aria-label="Published date"
              >
                {{ post.meta.date }}
              </time>
            </header>
            <NuxtLink :to="`/post${post.path}`" role="link" tabindex="0" aria-labelledby="article-title-{{post.id}}">
              <h3 :id="`article-title-${post.id}`" class="text-pretty font-semibold text-highlighted">
                {{ post.title }}
              </h3>
              <div class="mt-1 text-base text-pretty text-muted">
                {{ post.description }}
              </div>
            </NuxtLink>
          </article>
        </li>
      </ul>
    </section>
  </main>
</template>

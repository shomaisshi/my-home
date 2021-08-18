<template>
  <div>
    <article class="main-content">
      <PrevButton prevLink="/blog" prevHeading="blog" />
      <h1 class="main-content-h1">{{ article.title }}</h1>
      <p class="main-content-date">{{ formatDate(article.createdAt) }}</p>
      <!-- <nav>
        <ul>
          <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav> -->
      <nuxt-content :document="article" />
      <prev-next :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("ja", options);
    },
  },
  layout: "page",
};
</script>
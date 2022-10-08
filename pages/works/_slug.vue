<template>
  <div>
    <article class="main-content">
      <PrevButton prevLink="/works" prevHeading="works" />
      <h1 class="main-content-h1">{{ article.title }}</h1>
      <p class="main-content-date">{{ article.date }}</p>
      <nuxt-content :document="article" />
      <prev-next :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("works", params.slug).fetch();

    const [prev, next] = await $content("works")
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
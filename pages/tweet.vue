<template>
  <div class="main-content">
    <div class="Tweet">
      <h1>{{ tweet.title }}</h1>
      <p>日々のつぶやきやメモを書いています。</p>
      <nuxt-content :document="tweet" />
    </div>

    <div class="blog-container">
      <h2>新着記事</h2>
      <article class="blog-articles">
        <BaseCard
          class="blog-card"
          v-for="(article, index) in blogArticles"
          :key="index"
          :cover="article.cover"
          :title="article.title"
          :date="article.date"
          :description="article.description"
          :category="article.category"
          :slug="{ name: 'blog-slug', params: { slug: article.slug } }"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tweet = await $content("tweet").fetch();

    const blogArticles = await $content("blog", params.slug)
      .only(["cover", "title", "date", "description", "category", "slug"])
      .sortBy("date", "desc")
      .limit(6)
      .fetch();

    return {
      tweet,
      blogArticles,
    };
  },
  layout: "page",
};
</script>

<style scoped>
.main-content {
  max-width: var(--main-width);
}

/* blog-container */
.blog-container {
  margin-top: 56px;
  margin-bottom: 48px;
}
.blog-articles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media screen and (min-width: 640px) {
  .blog-articles {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}
</style>
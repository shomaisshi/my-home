<template>
  <div>
    <div class="main-content">
      <div class="blog-container">
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
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogArticles = await $content("blog", params.slug)
      .only(["cover", "title", "date", "description", "category", "slug"])
      .sortBy("date", "desc")
      .fetch();

    return {
      blogArticles,
    };
  },
};
</script>

<style scoped>
.main-content {
  max-width: var(--main-width);
}
.blog-container {
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

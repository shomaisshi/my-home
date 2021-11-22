<template>
  <div>
    <div class="main-content">
      <div class="blog-container">
        <!-- <h2>新着記事</h2> -->
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
            :tags="article.tags"
            :slug="{ name: 'blog-slug', params: { slug: article.slug } }"
          />
        </article>
      </div>
      <TheProfile class="TheProfile" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogArticles = await $content("blog", params.slug)
      .only([
        "cover",
        "title",
        "date",
        "description",
        "category",
        "tags",
        "slug",
      ])
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
  /* max-width: var(--main-width); */
}
.blog-container {
  max-width: var(--main-width);
  margin-bottom: 48px;
}
.blog-articles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media screen and (min-width: 640px) {
  .main-content {
    display: flex;
    justify-content: center;
  }
  .TheProfile {
    margin-left: 24px;
    align-self: flex-start;
  }
  .blog-articles {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}
</style>

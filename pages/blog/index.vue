<template>
  <div>
    <div class="main-content">
      <h1 class="blog-heading">blog</h1>
      <article class="blog-articles">
        <Card
          v-for="(article, index) in articles"
          :key="index"
          :title="article.title"
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
    const articles = await $content("blog", params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>

<style scoped>
</style>

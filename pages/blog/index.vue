<template>
  <div>
    <Header />
    <h1>blog一覧</h1>
    <article>
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
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug).fetch();

    return {
      articles,
    };
  },
};
</script>

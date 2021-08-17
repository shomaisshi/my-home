<template>
  <div>
    <div class="main-content">
      <NuxtLink to="/">&lt; top</NuxtLink>
      <p>works</p>
      <article class="works-articles">
        <Card
          v-for="(article, index) in articles"
          :key="index"
          :title="article.title"
          :description="article.description"
          :category="article.category"
          :slug="{ name: 'works-slug', params: { slug: article.slug } }"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("works", params.slug)
      .sortBy("date", "desc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>

<style scoped>
</style>

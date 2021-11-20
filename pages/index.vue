<template>
  <div>
    <div class="main-content">
      <div class="blog-container">
        <!-- <h1 class="blog-heading">blog</h1> -->
        <article class="blog-articles">
          <BaseCard
            class="blog-card"
            v-for="(article, index) in blogArticles"
            :key="index"
            :cover="article.cover"
            :title="article.title"
            :description="article.description"
            :category="article.category"
            :slug="{ name: 'blog-slug', params: { slug: article.slug } }"
          />
        </article>
        <!-- <NuxtLink to="/blog">&rarr; more blog..</NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogArticles = await $content("blog", params.slug)
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
.works-container,
.blog-container {
  margin-bottom: 48px;
}
.blog-articles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
.blog-card:first-child {
}
@media screen and (min-width: 640px) {
  .blog-articles {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}
</style>

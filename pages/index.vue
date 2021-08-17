<template>
  <div>
    <div class="main-content">
      <div class="works-container">
        <p>works</p>
        <article class="works-articles">
          <Card
            v-for="(article, index) in worksArticles"
            :key="index"
            :title="article.title"
            :description="article.description"
            :category="article.category"
            :slug="{ name: 'works-slug', params: { slug: article.slug } }"
          />
        </article>
        <NuxtLink to="/works">&rarr; more works..</NuxtLink>
      </div>

      <div class="blog-container">
        <p>blog</p>
        <article class="blog-articles">
          <Card
            v-for="(article, index) in blogArticles"
            :key="index"
            :title="article.title"
            :description="article.description"
            :category="article.category"
            :slug="{ name: 'blog-slug', params: { slug: article.slug } }"
          />
        </article>
        <NuxtLink to="/blog">&rarr; more blog..</NuxtLink>
      </div>

      <div class="about-container">
        <p>about</p>
        <article class="about-article">
          <NuxtLink :to="aboutArticle.slug">
            <h1>{{ aboutArticle.title }}</h1>
            <p>{{ aboutArticle.description }}</p>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const worksArticles = await $content("works", params.slug)
      .sortBy("date", "desc")
      .limit(3)
      .fetch();

    const blogArticles = await $content("blog", params.slug)
      .sortBy("createdAt", "desc")
      .limit(3)
      .fetch();

    const aboutArticle = await $content("about/about", params.slug).fetch();

    return {
      worksArticles,
      blogArticles,
      aboutArticle,
    };
  },
};
</script>

<style scoped>
.works-container,
.blog-container {
  margin-bottom: 48px;
}
</style>

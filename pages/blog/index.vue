<template>
  <div>
    <Header />
    <h1>blog一覧</h1>
    <article v-for="article in articles" :key="article.slug">
      <NuxtLink to="/blog/article.slug">
        <h1>{{ article.title }}</h1>
      </NuxtLink>
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

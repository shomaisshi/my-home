<template>
  <div class="main-content">
    <!-- <PrevButton prevLink="/" prevHeading="top" /> -->
    <article class="about-article">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("about/about", params.slug).fetch();

    return {
      article,
    };
  },
  layout: "page",
};
</script>
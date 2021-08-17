<template>
  <div class="main-content">
    <NuxtLink to="/">&lt; top</NuxtLink>
    <article class="about-article">
      <p>about</p>
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
};
</script>
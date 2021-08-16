<template>
  <div>
    <Header />
    <p>詳細ページ</p>
    <h1>{{ this.slug }}</h1>
    <nuxt-content :document="slug" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
};
</script>
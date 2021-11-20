<template>
  <div>
    <article class="main-content">
      <!-- <PrevButton prevLink="/blog" prevHeading="blog" /> -->
      <img
        class="main-content-img"
        :src="`/my-home/cover/${article.cover}`"
        alt="カバー画像"
      />
      <div class="main-contentContainer">
        <h1 class="main-content-h1">{{ article.title }}</h1>
        <p class="main-content-date">{{ article.date }}</p>
        <BaseCategory>{{ article.category }}</BaseCategory>
        <!-- <nav>
        <ul>
          <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav> -->
        <nuxt-content :document="article" />
      </div>
      <prev-next :prev="prev" :next="next" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("date", "desc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("ja", options);
    },
  },
  layout: "page",
};
</script>

<style scoped>
/* slug style */
.main-content {
  max-width: var(--main-width);
  overflow: hidden;
  background: #fff;
  box-sizing: border-box;
}
@media screen and (min-width: 640px) {
  .main-content {
    /* border: 1px solid #cdcdcd; */
    box-shadow: var(--shadow);
    border-radius: 12px;
  }
}
.main-content-h1 {
  font-size: clamp(16px, 5vw, 28px);
  margin-bottom: 24px;
}
.main-content-date {
  font-size: 14px;
  color: rgb(155, 155, 155);
}
.main-content-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  /* object-position: 50% 90%; */
}
.main-contentContainer {
  padding: 24px;
  box-sizing: border-box;
}
</style>

<style>
/* md style */
.nuxt-content h2 {
  margin-top: 40px;
  padding-left: 8px;
  font-size: 24px;
  border-left: 8px solid var(--main-color);
}
.nuxt-content h3 {
  font-size: 20px;
}
.nuxt-content p {
  margin-top: 32px;
  font-size: 16px;
  line-height: 1.8;
}
.nuxt-content ul {
  margin: 0;
  padding-left: 20px;
  line-height: 1.8;
}
.nuxt-content img {
  /* height: 324px; */
  width: 100%;
}
.nuxt-content hr {
  margin-top: 32px;
  border-top: 2px dashed var(--main-gray);
}
</style>
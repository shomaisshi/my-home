<template>
  <div>
    <article class="main-content">
      <img
        class="main-content-img"
        :src="`/my-home/cover/${article.cover}`"
        alt="カバー画像"
      />
      <div class="main-contentContainer">
        <p class="main-content-date">{{ article.date }}</p>
        <h1 class="main-content-h1">{{ article.title }}</h1>
        <BaseCategory>{{ article.category }}</BaseCategory>
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
  margin: 0;
  font-size: 32px;
  margin-bottom: 24px;
}
.main-content-date {
  font-size: 14px;
  color: var(--main-gray);
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
.main-content-nav {
  background: var(--main-lightgray);
  border-radius: 10px;
  box-sizing: border-box;
}
@media screen and (min-width: 640px) {
  .main-content-h1 {
    font-size: 32px;
  }
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
.nuxt-content a {
  text-decoration: underline;
}
.nuxt-content a:not(h1 a, h2 a, h3 a, h4 a)::after {
  content: "";
  display: inline-block;
  background: url("~assets/icons/external-link-alt-solid.svg");
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  margin-left: 4px;
  margin-right: 8px;
  vertical-align: -1px;
}
@media screen and (min-width: 640px) {
  .nuxt-content h2 {
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-size: 24px;
  }
  .nuxt-content p,
  .nuxt-content ul {
    font-size: 18px;
  }
}
</style>
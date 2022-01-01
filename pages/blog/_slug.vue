<template>
  <div>
    <div class="slug">
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
            <BaseTags :tags="article.tags" class="main-content-tags" />
          </div>
          <prev-next :prev="prev" :next="next" />
        </article>

        <!-- 新着一覧 -->
      </div>
      <div class="sidebar">
        <TheProfile class="TheProfile" />
        <BlockProduct />
        <!-- <BlockCategories /> -->
        <!-- <BlockTags v-for="tag in tags" :key="tag.slug" :tags="tag.tags" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title + " | KLEENOTE（クレーノート）",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "KLEENOTEE（クレーノート）",
        },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:url",
          property: "og:url",
          content:
            "https://shomaisshi.github.io/my-home/blog/" + this.article.slug,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.article.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.article.cover,
        },

        // { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "twitter:site", name: "twitter:site", content: "@shomaisshi" },
      ],
    };
  },
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
.main-content-tags {
  margin-top: 56px;
}
@media screen and (min-width: 640px) {
  .main-content-h1 {
    font-size: 32px;
  }
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

/* slug style */
@media screen and (min-width: 640px) {
  .slug {
    display: flex;
    justify-content: center;
  }
  .sidebar {
    max-width: 344px;
    position: sticky;
    top: 0;
    margin-left: 24px;
    padding: 0;
    align-self: flex-start;
  }
}
</style>

<style>
/* md style */
.nuxt-content h2 {
  /* color: var(--main-color); */
  margin-top: 40px;
  padding-left: 8px;
  /* padding-bottom: 8px; */
  font-size: 24px;
  border-left: 8px solid var(--main-color);
  /* border-bottom: 2px dashed var(--main-color); */
}
.nuxt-content h3 {
  margin-top: 40px;
  font-size: 20px;
}
.nuxt-content h4 {
  margin: 0;
  margin-top: 40px;
  font-size: 16px;
}
.nuxt-content p {
  /* margin: 0; */
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
  border-radius: 4px;
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
.nuxt-content pre {
  color: var(--main-black);
  background: var(--main-lightgray);
  border-radius: 8px;
}
.nuxt-content p code {
  display: inline-block;
  padding: 1px 6px 0;
  font-size: 14px;
  color: var(--main-black);
  background: var(--main-lightgray);
  border-radius: 4px;
  box-sizing: border-box;
  border: solid 1px #d6dde4;
}
.nuxt-content blockquote {
  margin: 8px 0;
  padding: 24px 32px;
  background: var(--main-lightgray);
  border-radius: 4px;
}
.nuxt-content blockquote > p {
  margin: 0;
  font-size: 15px;
}
@media screen and (min-width: 640px) {
  .nuxt-content h2 {
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-size: 24px;
  }
  .nuxt-content h4 {
    font-size: 18px;
  }
  .nuxt-content p,
  .nuxt-content ul {
    font-size: 18px;
  }
}
</style>
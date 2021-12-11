<template>
  <div>
    <h2 class="main__heading">{{ mainHeading }}</h2>
    <div class="main-content">
      <div class="blog-container">
        <article class="blog-articles">
          <BaseCard
            class="blog-card"
            v-for="(article, index) in blogArticles"
            :key="index"
            :cover="article.cover"
            :title="article.title"
            :date="article.date"
            :description="article.description"
            :category="article.category"
            :tags="article.tags"
            :slug="{ name: 'blog-slug', params: { slug: article.slug } }"
          />
        </article>
        <section id="next" class="PrevNext">
          <span class="PrevNext__current">1</span>
          <nuxt-link to="/page/2">2</nuxt-link>
          <nuxt-link to="/page/3">3</nuxt-link>
          <nuxt-link to="/page/2"> ＞ </nuxt-link>
        </section>
      </div>
      <div class="sidebar">
        <TheProfile class="TheProfile" />
        <BlockProduct />
        <BlockCategories />
        <!-- <BlockTags v-for="tag in tags" :key="tag.slug" :tags="tag.tags" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogArticles = await $content("blog", params.slug)
      .only([
        "cover",
        "title",
        "date",
        "description",
        "category",
        "tags",
        "slug",
      ])
      .sortBy("date", "desc")
      .limit(6)
      .fetch();
    const nextPage = blogArticles.length === 10;
    const posts = nextPage ? blogArticles.slice(0, -1) : blogArticles;

    const tags = await $content("blog", params.slug)
      .only(["tags"])
      .limit(4)
      .fetch();

    return {
      blogArticles,
      tags,
      posts,
    };
  },

  data() {
    return {
      mainHeading: "新着記事",
    };
  },
};
</script>

<style scoped>
.main__heading {
  max-width: 968px;
  margin: 16px auto;
}
.main-content {
  /* max-width: var(--main-width); */
}
.blog-container {
  max-width: var(--main-width);
  margin-bottom: 48px;
}
.blog-articles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media screen and (min-width: 640px) {
  .main-content {
    display: flex;
    justify-content: center;
  }
  .blog-articles {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  /* sidebar */
  .sidebar {
    max-width: 344px;
    position: sticky;
    top: 0;
    margin-left: 24px;
    align-self: flex-start;
  }
}

/* pagination */
.PrevNext {
  margin-top: 48px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.PrevNext__current {
  font-weight: bold;
  color: #fff;
  background: var(--main-color);
  padding: 8px 16px;
  border-radius: 4px;
}
.PrevNext a {
  padding: 8px 16px;
  border-radius: 4px;
}
</style>

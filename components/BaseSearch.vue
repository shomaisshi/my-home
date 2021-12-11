<template>
  <div class="Search">
    <input
      class="Search__input"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
    />
    <ul class="Search__ul BaseCardSidebar" v-if="articles.length">
      <li class="Search__li" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: [],
    };
  },
  watch: {
    async searchQuery(serchQuery) {
      if (!this.searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("blog")
        .limit(10)
        .search(this.searchQuery)
        .fetch();
    },
  },
};
</script>

<style scoped>
.Search {
  display: none;
  position: relative;
}
.Search:hover .Search__ul {
  opacity: 1;
}
@media screen and (min-width: 700px) {
  .Search {
    display: block;
  }
}
.Search__input {
  width: 200px;
  font-size: 16px;
  padding: 4px 8px;
  border: none;
  background: url(~assets/icons/search-solid.svg) var(--main-lightgray);
  background-repeat: no-repeat;
  background-position: center right 8px;
  background-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;
}
.Search__input:focus {
  background: var(--main-lightgray);
}
.Search__ul {
  opacity: 0;
  position: absolute;
  top: 20px;
  left: 0;
  z-index: 10;
  padding: 8px;
  background: var(--main-white);
  border-radius: 0 0 8px 8px;
  list-style: none;
}
.Search__li {
  box-sizing: border-box;
  border-radius: 4px;
}
.Search__li:hover {
  background: var(--main-color);
}
.Search__li:hover a {
  font-weight: bold;
  color: var(--main-white);
}
.Search__li a {
  display: block;
  padding: 12px 16px;
  color: var(--main-black);
}
</style>
<template>
  <div class="PrevNext">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    >
      <div class="PrevNextContainer">
        <img
          class="PrevNext__icon"
          src="~/assets/icons/arrow-left-solid.svg"
          alt="前の記事を指す矢印"
        />
        <span class="PrevNext__title">{{ prev.title }}</span>
      </div>
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
    >
      <div class="PrevNextContainer">
        <span class="PrevNext__title">{{ next.title }}</span>
        <img
          class="PrevNext__icon"
          src="~/assets/icons/arrow-right-solid.svg"
          alt="次の記事を指す矢印"
        />
      </div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style scoped>
.PrevNext {
  padding: 8px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.PrevNext a {
  color: var(--main-gray);
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 10px;
  transition: all 0.1s;
}
.PrevNext a:hover {
  color: var(--main-color);
  /* background: rgb(255, 252, 240); */
}
.PrevNextContainer {
  display: flex;
  align-items: center;
  gap: 4px;
}
.PrevNext__title {
  display: inline-block;
  max-width: 144px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.PrevNext__icon {
  display: inline-block;
  width: 14px;
  padding-bottom: 2px;
}

/* @media screen and (min-width: 600px) {
  .container {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
    margin-bottom: 0;
  }
} */
</style>
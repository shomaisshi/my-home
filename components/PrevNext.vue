<template>
  <div class="container">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    >
      &larr;{{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
    >
      {{ next.title }}&rarr;
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
.container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.container a {
  max-width: 144px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #c2c2c2;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 10px;
  transition: all 0.1s;
}
.container a:hover {
  color: var(--main-color);
  background: rgb(255, 252, 240);
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
<template>
  <div class="container">
    <!-- <p>aaa</p> -->
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    >
      ←{{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
    >
      {{ next.title }}→
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
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  padding: 0 24px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.container a {
  color: #3b6ace;
  text-decoration: none;
  font-weight: 600;
}
</style>
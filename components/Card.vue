<template>
  <div class="container">
    <NuxtLink :to="slug">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p>{{ category }}</p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    category: String,
    slug: String,
  },
};
</script>

<style scoped>
a {
  color: #333;
}
</style>
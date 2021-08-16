<template>
  <NuxtLink :to="slug">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <p>{{ category }}</p>
  </NuxtLink>
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
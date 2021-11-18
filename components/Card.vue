<template>
  <div class="container">
    <NuxtLink :to="slug">
      <div class="padding">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <!-- <p>{{ category }}</p> -->
      </div>
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
  color: #525252;
}
.padding {
  padding: 8px 16px;
}
.container {
  border-radius: 12px;
  transition: 0.1s;
}
.container:hover {
  background: #f5f5f5;
}
h1 {
  font-size: clamp(16px, 5vw, 20px);
}
</style>
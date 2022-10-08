<template>
  <NuxtLink :to="prevLink">&larr; {{ prevHeading }}</NuxtLink>
</template>

<script>
export default {
  props: {
    prevLink: String,
    prevHeading: String,
  },
};
</script>

<style scoped>
a {
  font-size: 24px;
  font-weight: 600;
  color: #c2c2c2;
  border-radius: 10px;
  transition: all 0.1s;
  padding: 8px 16px;
  padding-left: 0;
}
a:hover {
  color: #333;
  background: #f5f5f5;
}
</style>
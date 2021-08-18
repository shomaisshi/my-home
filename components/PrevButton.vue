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
  font-size: 32px;
  font-weight: 600;
  color: #3b6ace;
}
</style>
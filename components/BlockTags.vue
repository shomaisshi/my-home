<template>
  <div class="TagsContainer">
    <BaseTags :tags="tags" />
  </div>
</template>

<script>
export default {
  props: {
    tags: Array,
  },
};
</script>

<style scoped>
</style>
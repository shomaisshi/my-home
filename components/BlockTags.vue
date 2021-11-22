<template>
  <div class="TagsContainer">
    <BaseTags :tags="tags" />
  </div>
</template>

<script>
export default {
  props: {
    tags: String,
  },
};
</script>
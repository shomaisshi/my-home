<template>
  <div class="Tags">
    <ul>
      <li v-for="tag in tags" :key="tag">{{ tag }}</li>
    </ul>
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
.Tags ul {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
  padding: 0;
}
.Tags li {
  display: inline-block;
  font-size: 12px;
  padding: 4px 8px;
  color: var(--main-black);
  border-radius: 6px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
}
.Tags li::before {
  content: "";
  display: inline-block;
  background: url(~assets/icons/hashtag-solid.svg);
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  vertical-align: -1.5px;
  opacity: 0.7;
}
</style>
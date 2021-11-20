<template>
  <div class="category">
    <slot>カテゴリ</slot>
  </div>
</template>

<style scoped>
.category {
  display: inline-block;
  font-size: 12px;
  padding: 4px 8px;
  color: var(--main-black);
  border-radius: 6px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
}
.category::before {
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
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
  content: "カテゴリー：";
}
</style>
<template>
  <div class="category">
    <slot>カテゴリ</slot>
  </div>
</template>

<style scoped>
.category {
  display: inline-block;
  font-size: 12px;
  padding: 8px 16px;
  color: var(--main-black);
  border-radius: 8px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
}
.category::before {
  content: "# ";
}
</style>
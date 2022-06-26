<template>
  <div>
    <TheHeader />
    <!-- <TheHeaderImage /> -->
    <main class="main">
      <Nuxt />
    </main>
    <BlockTags />
    <TheFooter />
  </div>
</template>

<style scoped>
.main {
  margin-top: 16px;
  padding: 0 16px;
  box-sizing: border-box;
}
@media screen and (min-width: 640px) {
  .main {
    margin-top: 40px;
  }
}
</style>

<style>
:root {
  --main-color: #0262f2;
  /* --main-black: #525252; */
  --main-black: #333;
  --main-gray: #9f9f9f;
  --main-mediumgray: #cdcdcd;
  --main-lightgray: #f4f4f4;
  --main-white: #fff;
  --shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  --main-width: 720px;
}
body {
  font-family: ui-rounded, "SF Compact Rounded", -apple-system,
    "BlinkMacSystemFont", "Hiragino Sans", Helvetica, Meiryo, sans-serif;
  color: var(--main-black);
  margin: 0;
  background: var(--main-white);
  /* background: var(--main-lightgray); */
  /* background: url(~assets/icons/star.gif) var(--main-lightgray); */
}
a {
  text-decoration: none;
  color: var(--main-color);
}
.blog-heading {
  color: var(--main-color);
}
.about-article a {
  color: #333;
}
/* カードスタイル */
.BaseCardSidebar {
  padding: 16px;
  border-radius: 12px;
  /* box-shadow: var(--shadow); */
  background: #fff;
  box-sizing: border-box;
}
</style>
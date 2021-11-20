<template>
  <div>
    <TheHeader />
    <main class="main">
      <Nuxt />
      <TheProfile class="TheProfile" />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.main {
  padding: 0 16px;
  box-sizing: border-box;
}
@media screen and (min-width: 640px) {
  .main {
    display: flex;
    justify-content: center;
  }
  .TheProfile {
    margin-left: 24px;
    align-self: flex-start;
  }
}
</style>

<style>
:root {
  --main-color: #d95e4d;
  /* --main-black: #525252; */
  --main-black: #333;
  --main-gray: #acacac;
  --main-lightgray: #f4f4f4;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  --main-width: 640px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--main-black);
  margin: 0;
  background: #fff;
}
a {
  text-decoration: none;
  color: var(--main-color);
}

/* index style */
.blog-heading {
  color: var(--main-color);
}
/* articles */
/* .blog-articles h1::before {
  content: "# ";
  color: var(--main-color);
} */
.about-article a {
  color: #333;
}
</style>
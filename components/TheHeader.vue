<template>
  <div class="Header">
    <h1>
      <NuxtLink to="/">
        <img src="~/assets/icons/logo.svg" alt="ロゴ" />
      </NuxtLink>
    </h1>
    <nav class="nav">
      <!-- <NuxtLink to="/works">works</NuxtLink> -->
      <!-- <NuxtLink to="/blog">blog</NuxtLink> -->
      <NuxtLink to="/about">about</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.Header {
  /* position: sticky; */
  /* top: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 24px;
  width: 100%;
  color: var(--main-black);
  /* background: rgb(250, 250, 250); */
  z-index: 9999;
  box-sizing: border-box;
}
h1 {
  margin: 0;
}
h1 a {
  color: #545454;
}
h1 img {
  height: 32px;
}
.nav {
  padding: 0;
  display: flex;
  justify-content: space-around;
}
.nav a {
  font-weight: bold;
}
.nav a + a {
  margin-left: 8px;
}
.nav a.nuxt-link-exact-active {
  color: #3b6ace;
}
a {
  text-decoration: none;
  color: #333;
}

@media screen and (min-width: 640px) {
  .Header {
    /* margin: 32px 0 40px; */
  }
}
</style>
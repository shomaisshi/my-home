<template>
  <div>
    <div class="header">
      <h1><NuxtLink to="/">shomaisshi</NuxtLink></h1>
      <nav class="nav">
        <NuxtLink to="/works">works</NuxtLink>
        <NuxtLink to="/blog">blog</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
      </nav>
    </div>
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 24px;
  /* padding: 8px; */
  max-width: 600px;
  width: 100%;
  color: #333;
  background: #fff;
  z-index: 9999;
}

h1 {
  margin: 0;
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

a:hover {
  opacity: 0.8;
}

@media screen and (min-width: 600px) {
  .header {
    padding-top: 24px;
  }

  .HeaderHeight {
    height: 96px;
  }
}
</style>
<template>
  <div>
    <div class="Header">
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
.Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;
  padding: 0;
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
  .Header {
    margin-top: 48px;
  }
}
</style>
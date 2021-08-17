<template>
  <div class="header">
    <h1><NuxtLink to="/">shomaisshi</NuxtLink></h1>
    <nav class="nav">
      <NuxtLink to="/works">works</NuxtLink>
      <NuxtLink to="/blog">blog</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 24px;
  max-width: 600px;
  color: #333;
}

.logo {
  margin: 0;
}

.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  background: #fff;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.nav a {
  font-weight: bold;
  color: #333;
}

.nav a.nuxt-link-exact-active {
  color: #3b6ace;
}

a {
  text-decoration: none;
  color: #333;
  padding: 16px 0;
}

a:hover {
  opacity: 0.8;
}

@media screen and (min-width: 600px) {
  .nav {
    position: static;
    bottom: auto;
    left: auto;
    right: auto;
    box-shadow: none;
  }
  .nav a + a {
    margin-left: 24px;
  }
}
</style>
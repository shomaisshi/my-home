<template>
  <div class="header">
    <h1><NuxtLink to="/">shomaisshi</NuxtLink></h1>
    <div id="nav">
      <NuxtLink to="/works">works</NuxtLink> |
      <NuxtLink to="/blog">blog</NuxtLink> |
      <NuxtLink to="/about">About</NuxtLink>
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
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  color: #333;
}

.logo {
  margin: 0;
}

a {
  text-decoration: none;
  color: #333;
  padding: 16px 0;
}

a:hover {
  opacity: 0.8;
}

#nav {
  padding: 30px 0;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #333;
}

#nav a.nuxt-link-exact-active {
  color: #3b6ace;
}
</style>
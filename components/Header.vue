<template>
  <div>
    <div class="header">
      <h1><NuxtLink to="/">shomaisshi</NuxtLink></h1>
      <nav class="nav">
        <NuxtLink to="/works">works</NuxtLink>
        <NuxtLink to="/blog">blog</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </div>
    <div class="HeaderHeight"></div>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 8px;
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
  color: rgb(165, 165, 165);
}

.nav a + a {
  margin-left: 16px;
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

.HeaderHeight {
  height: 72px;
  width: 100%;
}

@media screen and (min-width: 600px) {
  .header {
    flex-direction: row;
    align-items: center;
    padding-top: 24px;
  }

  .HeaderHeight {
    height: 96px;
  }
}
</style>
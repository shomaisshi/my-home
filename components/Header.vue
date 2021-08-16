<template>
  <div class="header">
    <h1><NuxtLink to="/">shomaisshi</NuxtLink></h1>
    <div id="nav">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/portfolio/test">About</NuxtLink>
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
  padding: 16px 8px;
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #3b6ace;
}
</style>
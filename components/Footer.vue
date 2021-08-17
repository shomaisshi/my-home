<template>
  <div>
    <div class="footer">
      <nav class="nav">
        <NuxtLink to="/works">works</NuxtLink>
        <NuxtLink to="/blog">blog</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.footer {
  margin: 0 auto;
  padding: 16px 0;
  text-align: center;
  border-top: 1px solid #cccccc;
}

.nav {
  padding: 0;
  display: flex;
  /* justify-content: space-around; */
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
</style>
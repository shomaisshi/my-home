<template>
  <div>
    <TheHeader />
    <main class="main">
      <Nuxt />
      <!-- <TheProfile class="TheProfile" /> -->
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
@media screen and (min-width: 640px) {
  .main {
    margin-top: 40px;
    padding: 0 16px;
    box-sizing: border-box;
  }
}
</style>

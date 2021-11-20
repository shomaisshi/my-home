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
@media screen and (min-width: 640px) {
  .main {
    display: flex;
    justify-content: center;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .TheProfile {
    margin-left: 24px;
    align-self: flex-start;
  }
}
</style>

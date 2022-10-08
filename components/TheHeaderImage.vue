<template>
  <!-- HeaderImage -->
  <div class="HeaderImage">
    <img src="/my-home/cover/IMG_0151.JPG" alt="ヘッダー画像" />
  </div>
</template>

<style scoped>
/* HeaderImage */
.HeaderImage img {
  width: 100%;
  height: 264px;
  object-fit: cover;
}
@media screen and (min-width: 640px) {
  .HeaderImage img {
    height: 400px;
  }
}
</style>
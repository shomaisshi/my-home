<template>
  <div class="Profile">
    <h2>このサイトについて</h2>
    <p>Developer / Designer</p>
    <p>
      KLEENOTE（クレーノート）のブログです。作ったものや、好きなものを紹介していきます。
    </p>
    <NuxtLink to="/tweet">つぶやき</NuxtLink>
  </div>
</template>

<style scoped>
.Profile {
  padding: 16px;
  border-radius: 12px;
  /* border: 1px solid #cdcdcd; */
  box-shadow: var(--shadow);
  background: #fff;
  box-sizing: border-box;
}
@media screen and (min-width: 640px) {
  .Profile {
    max-width: 296px;
    position: sticky;
    top: 0;
  }
}
</style>
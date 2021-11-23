<template>
  <div class="Profile">
    <h2 class="Profile__name">shoma</h2>
    <p class="Profile__occupation">Developer / Designer</p>
    <p class="Profile__p">
      KLEENOTE（クレーノート）というブログを運営しています。作ったものや、好きなものを紹介しています。
    </p>
    <p>ご連絡はこちらのメールまでお願い致します。</p>
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
.Profile__name {
  margin: 0;
}
.Profile__occupation {
  margin: 0;
  margin-top: 8px;
}
.Profile__p {
  /* line-height: 1.6; */
}
@media screen and (min-width: 640px) {
  .Profile {
    /* max-width: 296px;
    position: sticky;
    top: 0; */
  }
}
</style>
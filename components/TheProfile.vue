<template>
  <div class="Profile BaseCardSidebar">
    <div class="Profile__header">
      <img
        class="Profile__img"
        src="~/assets/icons/profile_icon.gif"
        alt="icon"
      />
      <div class="Profile__header__right">
        <h2 class="Profile__name">shoma</h2>
        <p class="Profile__occupation">Developer / Designer</p>
      </div>
    </div>
    <p>作った物や好きなものの紹介、技術メモなど。</p>
    <NuxtLink to="/PagePortfolio">→リリースしたアプリ一覧</NuxtLink>
  </div>
</template>

<style scoped>
.Profile__header {
  display: flex;
  align-items: center;
}
.Profile__img {
  width: 48px;
  border-radius: 50%;
}
.Profile__header__right {
  flex: 1;
  margin-left: 8px;
}
.Profile__name {
  margin: 0;
}
.Profile__occupation {
  margin: 0;
  margin-top: 4px;
  margin-bottom: 4px;
}
@media screen and (min-width: 640px) {
  .Profile {
    /* max-width: 296px;
    position: sticky;
    top: 0; */
  }
}
</style>
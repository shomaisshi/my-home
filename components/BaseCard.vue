<template>
  <div class="Card">
    <NuxtLink :to="slug">
      <div class="flex">
        <img :src="`/my-home/cover/${cover}`" alt="カバー画像" />
        <div class="padding">
          <h1 class="Card__h1">{{ title }}</h1>
          <p class="Card__p">{{ description }}</p>
          <BaseCategory class="Card__category">{{ category }}</BaseCategory>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    cover: String,
    title: String,
    description: String,
    category: String,
    slug: String,
  },
};
</script>

<style scoped>
img {
  width: 30%;
  aspect-ratio: 1/1;
  object-fit: cover;
  /* object-position: 50% 90%; */
  border-radius: 10px 0 0 10px;
}
a {
  color: #525252;
}
.padding {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.flex {
  display: flex;
}
.Card {
  border-radius: 12px;
  /* border: 1px solid #cdcdcd; */
  box-shadow: var(--shadow);
  transition: 0.3s;
  background: #fff;
  box-sizing: border-box;
}
.Card__h1 {
  font-size: 16px;
  margin: 0;
}
.Card__p {
  display: none;
  font-size: 14px;
  color: var(--main-gray);
}
.Card__category {
  margin-top: auto;
  align-self: flex-start;
}
@media screen and (min-width: 640px) {
  .flex {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100%;
    /* aspect-ratio: 1.2/1; */
    aspect-ratio: 16/9;
    border-radius: 10px 10px 0 0;
  }
  .Card__h1 {
    font-size: 18px;
  }
  .Card__p {
    display: block;
  }
}
</style>
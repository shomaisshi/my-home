<template>
  <div class="Card">
    <NuxtLink :to="slug">
      <div class="flex">
        <img :src="`/my-home/cover/${cover}`" alt="カバー画像" />
        <div class="padding">
          <p class="Card__date">{{ date }}</p>
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
    date: String,
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
  color: var(--main-black);
}
.flex {
  display: flex;
  height: 100%;
}
.padding {
  padding: 16px;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
}
.Card {
  border-radius: 12px;
  /* border: 1px solid #cdcdcd; */
  box-shadow: var(--shadow);
  transition: 0.3s;
  background: #fff;
  box-sizing: border-box;
}
.Card__date {
  display: none;
  margin: 0;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--main-gray);
}
.Card__h1 {
  font-size: 16px;
  margin: 0;
  margin-bottom: 8px;
}
.Card__p {
  display: none;
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
  .padding {
    height: 100%;
  }
  img {
    width: 100%;
    /* aspect-ratio: 1.2/1; */
    aspect-ratio: 16/9;
    border-radius: 10px 10px 0 0;
  }
  .Card__date {
    display: block;
  }
  .Card__h1 {
    font-size: 20px;
    margin-bottom: 0;
  }
  .Card__p {
    font-size: 14px;
    color: var(--main-gray);
    /* ...で省略する */
    display: block;
    overflow: hidden;
    line-height: 16px;
    height: 48px; /* 16px * 6 lines */
  }
  @supports (-webkit-line-clamp: 3) {
    .Card__p {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
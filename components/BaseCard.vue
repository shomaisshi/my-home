<template>
  <div class="Card">
    <NuxtLink :to="slug">
      <div class="flex">
        <img :src="`/my-home/cover/${cover}`" alt="カバー画像" />
        <div class="padding">
          <p class="Card__date">{{ date }}</p>
          <h2 class="Card__h2">{{ title }}</h2>
          <p class="Card__p">{{ description }}</p>
          <!-- <BaseCategory class="Card__category">{{ category }}</BaseCategory> -->
          <BaseTags :tags="tags" class="Card__tags" />
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
    tags: Array,
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
  padding: 12px;
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
.Card__h2 {
  font-size: 16px;
  margin: 0;
  margin-bottom: 8px;
  /* ...で省略する */
  display: block;
  overflow: hidden;
  line-height: 24px;
  height: auto; /* 24px * 2 lines */
}
@supports (-webkit-line-clamp: 2) {
  .Card__h2 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.Card__p {
  display: none;
}
.Card__tags {
  margin-top: auto;
  align-self: flex-start;
  height: 25px;
  overflow: hidden;
}
@media screen and (min-width: 640px) {
  .flex {
    display: flex;
    flex-direction: column;
  }
  .padding {
    padding: 16px;
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
  .Card__h2 {
    font-size: 20px;
    margin-bottom: 0;
    overflow: auto;
    height: auto;
  }
  @supports (-webkit-line-clamp: 3) {
    .Card__h2 {
      -webkit-line-clamp: 3;
    }
  }
  .Card__p {
    font-size: 14px;
    color: var(--main-gray);
    /* ...で省略する */
    display: block;
    overflow: hidden;
    line-height: 18px;
    height: auto; /* 16px * 6 lines */
  }
  @supports (-webkit-line-clamp: 2) {
    .Card__p {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
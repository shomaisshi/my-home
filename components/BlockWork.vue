<template>
  <div class="work">
    <h2 class="work__title">{{ title }}</h2>
    <img class="work__img" :src="image" alt="" />
    <p class="work__description">{{ description }}</p>
    <div class="work__linkContainer">
      <a
        class="work__downloadLink"
        v-if="downloadLink"
        :href="downloadLink"
        target="_blank"
        >ダウンロード</a
      >
      <a class="work__webLink" v-if="webLink" :href="webLink" target="_blank"
        >WEBで遊ぶ</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
    downloadLink: String,
    webLink: String,
  },
};
</script>

<style scoped>
.work {
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
  background: #fff;
}
.work__title {
  font-size: 16px;
  margin: 0;
}
.work__img {
  margin-top: 8px;
  max-width: 600px;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
}
.work__description {
  font-size: 16px;
}
.work__linkContainer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.work__downloadLink,
.work__webLink {
  padding: 8px 12px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: var(--main-color);
  border-radius: 4px;
  align-self: flex-start;
}
@media screen and (min-width: 700px) {
  .work {
    padding: 16px;
  }
  .work__title {
    font-size: 24px;
  }
  .work__img {
    margin-top: 16px;
  }
  .work__description {
    font-size: 18px;
  }
  .work__linkContainer {
    flex-direction: row;
  }
  .work__downloadLink,
  .work__webLink {
    padding: 12px 16px;
  }
}
</style>
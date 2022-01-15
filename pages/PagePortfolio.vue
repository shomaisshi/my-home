<template>
  <div class="portfolio">
    <h1>リリースしたアプリ置き場</h1>

    <div class="portfolio__worksContainer">
      <BlockWork
        image="/cover/hit_and_blow.gif"
        title="ヒット&ブロー"
        description="色と位置を推理して当てる定番のゲーム。"
        webLink="https://tic80.com/play?cart=2531"
      />

      <BlockWork
        image="/cover/janken.png"
        title="じゃんけんゲーム"
        description="タップでじゃんけんをするだけのゲーム。"
        webLink="https://shomaisshi.github.io/labo/janken/"
      />

      <BlockWork
        image="/cover/DSC01293.JPG"
        title="ピクセルマップスケッチ"
        description="ブラウザ上でドット絵のタイルを打ち、タイルマップを描けるアプリ。"
        webLink="https://shomaisshi.github.io/Pixel-map-sketch/"
      />

      <BlockWork
        image="/cover/pico-8-01.gif"
        title="宇宙船の鍵を探せ"
        description="宇宙空間のどこかで鍵を無くしてしまった！鍵は2つ必要だ..。早く戻らないと酸素が無くなっちゃう！1面しかない脱出ゲーム。"
        webLink="http://www.shomaisshi.com/MyGames/mygame01/foo.html"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: "page",
};
</script>

<style scoped>
.portfolio {
  margin: 0 auto;
  max-width: 900px;
  padding: 8px;
}
.portfolio__worksContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
@media screen and (min-width: 700px) {
  .portfolio__worksContainer {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
}
</style>
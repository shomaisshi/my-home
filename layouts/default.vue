<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
  color: #525252;
}

a {
  text-decoration: none;
  color: rgb(255, 196, 0);
}

.main-content {
  margin: 0 auto;
  max-width: 600px;
}

/* index style */
.works-heading {
  color: #3b6ace;
}

.blog-heading {
  color: rgb(255, 196, 0);
}

.about-heading {
  color: indianred;
}

/* articles */
.works-articles h1::before {
  content: "# ";
  color: #3b6ace;
}

.blog-articles h1::before {
  content: "# ";
  color: rgb(255, 196, 0);
}

.about-container .about-article h1::before {
  content: "# ";
  color: indianred;
}

.about-article a {
  color: #333;
}

/* slug style */
.main-content-date {
  font-size: 14px;
  color: rgb(155, 155, 155);
  margin-bottom: 32px;
}

.main-content-h1 {
  font-size: clamp(16px, 5vw, 20px);
  margin-top: clamp(24px, 5vw, 56px);
  margin-bottom: 24px;
  text-align: center;
}

.nuxt-content h2 {
  margin-top: 40px;
  font-size: 20px;
}

.nuxt-content h3 {
  font-size: 20px;
}

.nuxt-content p {
  margin-top: 32px;
  font-size: 16px;
  line-height: 1.8;
}

.nuxt-content ul {
  margin: 0;
  padding-left: 20px;
  line-height: 1.8;
}
</style>
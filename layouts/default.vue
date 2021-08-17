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
  color: #333;
}

a {
  text-decoration: none;
  color: #3b6ace;
}

.main-content {
  margin: 0 auto;
  max-width: 600px;
}

/* articles */
.works-articles h1::before {
  content: "# ";
  color: #3b6ace;
}

.blog-articles h1::before {
  content: "# ";
  color: forestgreen;
}

.about-article h1::before {
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
  font-size: 32px;
  margin-bottom: 0;
}

.nuxt-content h2 {
  font-size: 24px;
}

.nuxt-content h3 {
  font-size: 20px;
}

.nuxt-content p {
  font-size: 16px;
  line-height: 1.8;
}
</style>
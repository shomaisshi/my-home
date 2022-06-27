---
cover: Paper2.webp
title: サクサク動く静的なブログ「KLEENOTE」を作った。
date: 2021/11/18
category: ポートフォリオ
tags: [ポートフォリオ, 技術, vue, nuxt]
---

今回はVue・Nuxtを使ってブログを作成してみた。nuxt contentモジュールを使うことで、マークダウンファイルで記事を管理して、静的なブログをGithub Pagesにアップロードしている。
Webサイトを作るのは、秘密基地を作ってるみたいで楽しい。

![画像](/my-home/cover/webスクリーンショット.webp)

[KLEENOTE（クレーノート）](https://shomaisshi.github.io/my-home/)

<!--more-->


## ブログのコンセプト

主に作ったアプリやゲームの紹介、好きなアプリやWebサイト、本の紹介、技術記事、やりたいことなど願望を書いていく。ブログを作った理由は、SNSをあまり使わなくなり制作物を置いておく場がなくなったことと、メディアサイトをデザインしてみたかったから。

## デザインについて

記事は整理しようとせずに、時系列においていく。タグをつけておいて、タグ別に見れるUIを後で作るつもり。

ポートフォリをやリリースしたものはまとめてみれるページを作ればいい。　

前までは、Webサイトはページをタップするごとにリロードがあってサクサク見れるわけではなかった。最近はJavaScriptフレームワークのReactやVueを使うことで、**アプリのような操作感のサイトを作れるようになった**ので、また新しくWebサイトを作り始めた。

## NuxtJSとnuxt contentで制作

VueやNuxtはドキュメントが日本語化されていて、デザインもわかりやすいので使うことにした。

- [NuxtJS](https://nuxtjs.org/ja/)
- [nuxt content](https://content.nuxtjs.org)

---


以下のコマンドでNuxtプロジェクトの雛形を作れる。

```
$ yarn create nuxt-app <project-name>
```

プロジェクトフォルダで `yarn dev` とコマンドを打つと、  
[http://localhost:3000](http://localhost:3000)で動作を確認しながら開発できる。

```
$ cd <project-name>
$ yarn dev
```

あとはnuxt contentを入れて、マークダウンで記事を書き、コンポーネントベースでサイトのデザインをゴリゴリ作っていく。nuxt contentの使い方はNuxtの[ブログ](https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/)がわかりやすい。

Gitでブランチを作成して以下のコマンドで `dist` フォルダをGithub Pagesに更新できる。
詳しくは、https://nuxtjs.org/ja/deployments/github-pages/ を参照

```
$ yarn generate
$ yarn deploy
```

---

[KLEENOTE（クレーノート）](https://shomaisshi.github.io/my-home/)
(window.webpackJsonp=window.webpackJsonp||[]).push([[18,2],{267:function(t,e,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("d86a95a0",content,!0,{sourceMap:!1})},269:function(t,e,r){"use strict";r(267)},270:function(t,e,r){var d=r(21)(!1);d.push([t.i,"img[data-v-8ead376a]{width:35%;height:100%;aspect-ratio:1/1;-o-object-fit:cover;object-fit:cover;border-radius:10px 0 0 10px}a[data-v-8ead376a]{color:var(--main-black)}.flex[data-v-8ead376a]{display:flex;height:100%}.padding[data-v-8ead376a]{padding:12px;display:flex;flex-direction:column}.Card[data-v-8ead376a]{border-radius:12px;border:1px solid #cdcdcd;transition:.3s;background:#fff;box-sizing:border-box}.Card__date[data-v-8ead376a]{margin:0 0 8px;font-size:14px;color:var(--main-gray)}.Card__h2[data-v-8ead376a]{font-size:16px;margin:0 0 8px;display:block;overflow:hidden;line-height:24px;height:auto}@supports (-webkit-line-clamp:2){.Card__h2[data-v-8ead376a]{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}}.Card__p[data-v-8ead376a]{font-size:14px;color:var(--main-gray)}.Card__tags[data-v-8ead376a]{margin-top:auto;align-self:flex-start;height:25px;overflow:hidden}@media screen and (min-width:640px){.flex[data-v-8ead376a]{display:flex;flex-direction:column}.padding[data-v-8ead376a]{padding:16px;height:100%}img[data-v-8ead376a]{width:100%;aspect-ratio:16/9;border-radius:10px 10px 0 0}.Card__date[data-v-8ead376a]{display:block}.Card__h2[data-v-8ead376a]{font-size:20px;margin-bottom:0;overflow:hidden;height:auto}@supports (-webkit-line-clamp:3){.Card__h2[data-v-8ead376a]{-webkit-line-clamp:3}}.Card__p[data-v-8ead376a]{display:block;overflow:hidden;line-height:18px;height:auto}@supports (-webkit-line-clamp:2){.Card__p[data-v-8ead376a]{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}}}",""]),t.exports=d},272:function(t,e,r){"use strict";r.r(e);var d={props:{cover:String,title:String,date:String,description:String,category:String,tags:Array,slug:String}},n=(r(269),r(8)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Card"},[r("NuxtLink",{attrs:{to:t.slug}},[r("div",{staticClass:"flex"},[r("div",{staticClass:"padding"},[r("p",{staticClass:"Card__date"},[t._v(t._s(t.date))]),t._v(" "),r("h2",{staticClass:"Card__h2"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"Card__p"},[t._v(t._s(t.description))]),t._v(" "),r("BaseTags",{staticClass:"Card__tags",attrs:{tags:t.tags}})],1)])])],1)}),[],!1,null,"8ead376a",null);e.default=component.exports;installComponents(component,{BaseTags:r(189).default})},293:function(t,e,r){var content=r(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("e6db3ee6",content,!0,{sourceMap:!1})},304:function(t,e,r){"use strict";r(293)},305:function(t,e,r){var d=r(21)(!1);d.push([t.i,".main-content[data-v-61673548]{max-width:var(--main-width)}.blog-container[data-v-61673548]{margin-top:56px;margin-bottom:48px}.blog-articles[data-v-61673548]{display:grid;grid-template-columns:1fr;grid-gap:16px;gap:16px}@media screen and (min-width:640px){.blog-articles[data-v-61673548]{grid-template-columns:1fr 1fr;grid-gap:24px;gap:24px}}",""]),t.exports=d},333:function(t,e,r){"use strict";r.r(e);var d=r(6),n=(r(37),{asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var r,d,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,d=t.params,e.next=3,r("tweet").fetch();case 3:return n=e.sent,e.next=6,r("blog",d.slug).only(["cover","title","date","description","category","slug"]).sortBy("date","desc").limit(6).fetch();case 6:return o=e.sent,e.abrupt("return",{tweet:n,blogArticles:o});case 8:case"end":return e.stop()}}),e)})))()},layout:"page"}),o=(r(304),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-content"},[r("div",{staticClass:"Tweet"},[r("h1",[t._v(t._s(t.tweet.title))]),t._v(" "),r("p",[t._v("日々のつぶやきやメモを書いています。")]),t._v(" "),r("nuxt-content",{attrs:{document:t.tweet}})],1),t._v(" "),r("div",{staticClass:"blog-container"},[r("h2",[t._v("新着記事")]),t._v(" "),r("article",{staticClass:"blog-articles"},t._l(t.blogArticles,(function(article,t){return r("BaseCard",{key:t,staticClass:"blog-card",attrs:{cover:article.cover,title:article.title,date:article.date,description:article.description,category:article.category,slug:{name:"blog-slug",params:{slug:article.slug}}}})})),1)])])}),[],!1,null,"61673548",null);e.default=component.exports;installComponents(component,{BaseCard:r(272).default})}}]);
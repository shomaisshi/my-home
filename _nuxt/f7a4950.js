(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7],{278:function(t,o,e){var content=e(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("5a37668c",content,!0,{sourceMap:!1})},286:function(t,o,e){"use strict";e(278)},287:function(t,o,e){var r=e(21)(!1);r.push([t.i,".work[data-v-6f6edc38]{padding:8px;display:flex;flex-direction:column;border-radius:8px;border:1px solid #cdcdcd;box-sizing:border-box;background:#fff}.work__title[data-v-6f6edc38]{font-size:16px;margin:0}.work__img[data-v-6f6edc38]{margin-top:8px;max-width:600px;width:100%;aspect-ratio:16/9;-o-object-fit:contain;object-fit:contain;border-radius:4px;border:1px solid #cdcdcd;box-sizing:border-box}.work__description[data-v-6f6edc38]{font-size:16px}.work__linkContainer[data-v-6f6edc38]{margin-top:auto;display:flex;flex-direction:column;grid-gap:8px;gap:8px}.work__downloadLink[data-v-6f6edc38],.work__webLink[data-v-6f6edc38]{padding:8px 12px;font-size:18px;font-weight:700;color:#fff;background:var(--main-color);border-radius:4px;align-self:flex-start}@media screen and (min-width:700px){.work[data-v-6f6edc38]{padding:16px}.work__title[data-v-6f6edc38]{font-size:24px}.work__img[data-v-6f6edc38]{margin-top:16px}.work__description[data-v-6f6edc38]{font-size:18px}.work__linkContainer[data-v-6f6edc38]{flex-direction:row}.work__downloadLink[data-v-6f6edc38],.work__webLink[data-v-6f6edc38]{padding:12px 16px}}",""]),t.exports=r},292:function(t,o,e){var content=e(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("272de3ca",content,!0,{sourceMap:!1})},299:function(t,o,e){"use strict";e.r(o);var r={props:{image:String,title:String,description:String,downloadLink:String,webLink:String}},n=(e(286),e(8)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"work"},[e("h2",{staticClass:"work__title"},[t._v(t._s(t.title))]),t._v(" "),e("img",{staticClass:"work__img",attrs:{src:t.image,alt:""}}),t._v(" "),e("p",{staticClass:"work__description"},[t._v(t._s(t.description))]),t._v(" "),e("div",{staticClass:"work__linkContainer"},[t.downloadLink?e("a",{staticClass:"work__downloadLink",attrs:{href:t.downloadLink,target:"_blank"}},[t._v("ダウンロード")]):t._e(),t._v(" "),t.webLink?e("a",{staticClass:"work__webLink",attrs:{href:t.webLink,target:"_blank"}},[t._v("WEBで遊ぶ")]):t._e()])])}),[],!1,null,"6f6edc38",null);o.default=component.exports},302:function(t,o,e){"use strict";e(292)},303:function(t,o,e){var r=e(21)(!1);r.push([t.i,".portfolio[data-v-445cf722]{margin:0 auto;max-width:900px;padding:8px}.portfolio__worksContainer[data-v-445cf722]{display:grid;grid-template-columns:1fr 1fr;grid-gap:8px;gap:8px}@media screen and (min-width:700px){.portfolio__worksContainer[data-v-445cf722]{grid-template-columns:1fr 1fr 1fr;grid-gap:16px;gap:16px}}",""]),t.exports=r},332:function(t,o,e){"use strict";e.r(o);var r={layout:"page"},n=(e(302),e(8)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"portfolio"},[e("h1",[t._v("リリースしたアプリ置き場")]),t._v(" "),e("div",{staticClass:"portfolio__worksContainer"},[e("BlockWork",{attrs:{image:"/cover/hit_and_blow.gif",title:"ヒット&ブロー",description:"色と位置を推理して当てる定番のゲーム。",webLink:"https://tic80.com/play?cart=2531"}}),t._v(" "),e("BlockWork",{attrs:{image:"/cover/janken.png",title:"じゃんけんゲーム",description:"タップでじゃんけんをするだけのゲーム。",webLink:"https://shomaisshi.github.io/labo/janken/"}}),t._v(" "),e("BlockWork",{attrs:{image:"/cover/DSC01293.JPG",title:"ピクセルマップスケッチ",description:"ブラウザ上でドット絵のタイルを打ち、タイルマップを描けるアプリ。",webLink:"https://shomaisshi.github.io/Pixel-map-sketch/"}}),t._v(" "),e("BlockWork",{attrs:{image:"/cover/pico-8-01.gif",title:"宇宙船の鍵を探せ",description:"宇宙空間のどこかで鍵を無くしてしまった！鍵は2つ必要だ..。早く戻らないと酸素が無くなっちゃう！1面しかない脱出ゲーム。",webLink:"http://www.shomaisshi.com/MyGames/mygame01/foo.html"}})],1)])}),[],!1,null,"445cf722",null);o.default=component.exports;installComponents(component,{BlockWork:e(299).default})}}]);
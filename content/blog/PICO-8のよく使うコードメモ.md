---
cover: untitled_0.gif
title: PICO-8のすすめとチートシート
date: 2021/12/03
category: 技術
tags: [技術, アイデア, ラボ, pico-8]
---

PICO-8のよく使うコードをメモしておきます。
まだ書いてる途中です。

<!--more-->

久しぶりに使うと色々忘れてるので、個人的によく使うものをまとめておく。ここをみればすぐにプロトタイプを作れるようなページにする。

色々な開発環境を触ってみて、一番好きだったのがPICO-8。p5jsも好きだけど、自分はタイルゲームが好きだったのでそれをミニマムに作れるところがよかった。あとはとても軽いのが最高。微力ながら普及していきたい。

基本的には公式の[PICO-8 User Manual](https://www.lexaloffle.com/dl/docs/pico-8_manual.html)をみると良と思います。

こちらの記事も参考にさせていただいてます。  
[PICO–8って何？ – PICO–8ゲーム開発入門(1)](https://automaton-media.com/devlog/technical/pico-8-for-beginners-vol1/)

---

## 基本操作

### 保存、ロード

保存する
```
save hoge
```

ロードする
```
load hoge
```

### エクスポート
画像書き出し

スプライトシートのみ描き出す
```
export hoge.png
``` 

スプライトシートを読み込む
```
import hoge.png
```

保存
拡張子 `.p8.png` で保存するとカートリッジのように見える特殊なフォーマットにで保存できる。
プログラム実行中に `F7` キーでスクリーンショットを撮ると反映される。
プログラム先頭の `’—‘` で始まる2行はカートリッジのテキストラベルになる。

### プレイヤー操作
- プレイヤー1：カーソルキー + ZX /  NM / CV
- プレイヤー2：SDFE + TAB,Q / SHIFT A

### スクリーンショットの撮り方
- `F6` で静止画
- `F7` でカートリッジのタイトル画像を撮る
- `F8` でGifアニメーションの録画をスタート、 `F9` でストップ
Macだと `fn` キーを押しながら `F6` キーとかを押す

---

## PICO-8の文法
- ゲームループ
- オブジェクト化
- 関数
- if文
- forループ

### ゲームループ

```lua
function _init()

end

function _update()
    
end

function _draw()

end
```

### if文

```lua
If x < 10 then
	print(‘ok’)
end
```

### for文

```lua
--4回繰り返す
for i=1, 4 do
	print(i)
end
```

### 関数
```lua
function hoge()
	print('ok')
end
```

### テーブル

```lua
player = {}
player.spr = 1
player.x = 64
player.y = 64

spr(player.spr, player.x, player.y)
```

### printの使い方
変数と文字列を同時に表示する

```lua
score = 1234
print('score: '..score, 0, 120, 8)
```

—

## よく使うコード例

いろいろな書き方があると思うので、あくまでも参考までに。

### プレイヤー

```lua
--player

p={}
p.init=function()
	p.x=64
	p.y=64
	p.spr=1
end

p.update=function()
 if btn(0) then p.x-=1 end
 if btn(1) then p.x+=1 end
 if btn(2) then p.y-=1 end
 if btn(3) then p.y+=1 end
end

p.draw=function()
	spr(p.spr,p.x,p.y)
end
```

```lua
function _init()
	p.init()
end

function _update()
	p.update()
end

function _draw()
	cls()
	p.draw()
end
```

1タイルずつ動かしたい時は、 `btnp()` を使い、8ピクセル動かす。

```lua
p.update=function()
 if btnp(0) then p.x-=8 end
 if btnp(1) then p.x+=8 end
 if btnp(2) then p.y-=8 end
 if btnp(3) then p.y+=8 end
end
```

---

### オブジェクトを動的に出す

### 敵を出してみる

```lua
--npcs

npcs = {}

function create_npc(x, y)
	local n = {}
	
	n.s = 3
	n.x = x
	n.y = y
	
	n.update=function()
	
	end

	n.draw=function()
		spr(n.s, n.x, n.y)
	end

	return n
end
```

```lua
function _init()
	for i=1, 4 do
		add(npcs, create_npc(i*10, 30))
	end
end

function _update()
	for npc in all(npcs) do
		npc.update()
	end
end

function _draw()
	cls()
	for npc in all(npcs) do
		npc.draw()
	end
end
```

### ビームを作る

```lua
--beams
beams={}

function create_beam(x,y)
	local b={}
	b.x=x
	b.y=y
	b.s=2
	
	b.update=function()
		b.y-=1
	end
	
	b.draw=function()
		spr(b.s,b.x,b.y)
	end
	
	return b
end

```

```lua
--player

p={}
p.init=function()
	p.x=64
	p.y=64
	p.spr=1
end

p.update=function()
 if btn(0) then p.x-=1 end
 if btn(1) then p.x+=1 end
 if btn(2) then p.y-=1 end
 if btn(3) then p.y+=1 end
 if btnp(4) then
 	add(beams,create_beam(p.x,p.y))
 end
 
 --beam update
 for beam in all(beams) do
		beam.update()
	end
end

p.draw=function()
	spr(p.spr,p.x,p.y)
	
	--beam draw
	for beam in all(beams) do
		beam.draw()
	end
end
```

```lua
—game loop
function _init()
	p.init()
end

function _update()
	p.update()
end

function _draw()
	cls()
	p.draw()
	print(#beams)
end
```

これでプレイヤーからビームがたくさん出るようになった。

---

### 簡単な衝突判定の関数
```lua
--collision

function distance(x1,y1,x2,y2)
 return sqrt((x1-x2)^2+(y1-y2)^2)
end

function collision(x1, y1, x2, y2)
	if distance(x1, y1, x2, y2) < 4 then
		return true
	else
		return false
	end
end
```

### オブジェクトを削除する

```lua
del(obj, value)
```

### パーティクル
```lua
--particle
ptcl = {}

function create_ptcl(x, y)
	local dot = {}
	dot.x = x
	dot.y = y
	dot.r = rnd() * 4
	dot.c = 2
	dot.vx = rnd() * 2 - 1
	dot.vy = rnd() * 2 - 1
	dot.life = 20
	
	dot.update=function()
		dot.x += dot.vx
		dot.y += dot.vy
		
		dot.life -= 1
		if dot.life < 0 then
			del(ptcl, dot)
		end
	end
	
	dot.draw=function()
		circfill(dot.x, dot.y, dot.r, dot.c)
	end
	
	return dot
end
```

パーティクルを発生させる

```lua
--particle
for i=1, 10 do
	add(ptcl, create_ptcl(n.x+4, n.y+4))
end
```

パーティクルを表示する

```lua
function _update()
	for p in all(ptcl) do
		p.update()
	end
end

function _draw()
	for p in all(ptcl) do
		p.draw()
	end
end
```

### Mapタイル系のメモ

Map
```lua
map(0, 0, 0, 0, 64, 64)
```

Camera
```lua
camera(p.x-60, 0)
```


### タイル系ゲームのテンプレート

タイルの取得
フラッグの取得

・Update関数内で、新しく `newx` `newy` を作りキャラクターの位置を代入する  
・移動ボタンを押した時、その位置にどのタイルがあるかを確認する  
・`wall` タイルなら効果音を鳴らすだけ  
・それ以外であればキャラクターの位置に `newx` `newy`を代入する

mget

fget

```lua
--tiles
tiles = {}
tiles.wall = 0
tiles.key = 1

--player
p = {}
p.x = 24
p.y = 24
p.newx = p.x
p.newy = p.y
p.spr = 24
p.hp = 10
p.keys = 0
p.spr_flipped = false

--move
p.move = function()
	p.newx = p.x
	p.newy = p.y
	
	if btnp(⬅️) then
		p.newx -= 8
		p.spr_flipped = true
	end
	if btnp(➡️) then
		p.newx += 8
		p.spr_flipped = false
	end
	if btnp(⬆️) then
		p.newy -= 8
	end
	if btnp(⬇️) then
		p.newy += 8
	end
end

--tile effect
--check tile
p.is_tile = function(tile_type, x, y)
	tile = mget(x, y)
	has_flag = fget(tile, tile_type)
	return has_flag
end

--can move
--check if the tile is a wall
p.can_move = function(x, y)
	return not p.is_tile(tiles.wall, x, y)
end

p.move_or_stop = function()
	if p.can_move(p.newx/8, p.newy/8) then
		p.x = p.newx
		p.y = p.newy
	else
		sfx(0)
	end
end

--swap tile
p.swap_tile = function(x, y)
	tile = mget(x, y)
	mset(x, y, tile+1)
end

--key get
p.get_key = function(x, y)
	p.keys += 1
	p.swap_tile(x, y)
	sfx(1)
end

--interact
p.interact = function(x, y)
	--get key
	if p.is_tile(tiles.key, x, y) then
		p.get_key(x, y)
	end
end

--update
p.update = function()

	--move
	p.move()

	--move or stop
	p.move_or_stop()
	
	--interact
	p.interact(p.newx/8, p.newy/8)

end

p.draw = function()
	spr(p.spr, p.x, p.y, 1, 1, p.spr_flipped)
end
```

```lua
--game loop

function _init()

end

function _update()
	p.update()
end

function _draw()
	cls()
	map(0, 0, 0, 0, 64, 64)
	p.draw()
end
```

### カメラについて
・画面ごと移動する実装
・キャラクターについてくる実装

キャラクターについてくる実装はシンプルにこうすればいい

```lua
camera(p.x-60, p.y-60)
```

### UI

```lua
-- ui

ui = {}
ui.x = 0
ui.y = 0

ui.update = function()
	ui.x = p.x-60
	ui.y = p.y-60
end

ui.draw = function()
	print('keys:'..p.keys, ui.x, ui.y)
end
```

### マウスの使い方
マウスも使えたりする

```lua
-- mouse
mouse={}
mouse.init=function()
	poke(0x5f2d, 1)
	mouse.spr=32
	mouse.x=stat(32)
	mouse.y=stat(33)
end

mouse.update=function()
	mouse.x=stat(32)
	mouse.y=stat(33)
end

mouse.pressed=function()
	if(stat(34)==1) then
		return true
	end
end

mouse.draw=function()
	if(mouse.pressed()) then
		print(1)
		mouse.spr=1
	else
		mouse.spr=32
	end
	
	--map get
	if(mget(mouse.x/8,mouse.y/8)==1) then
		mouse.spr=33
		circ(mouse.x,mouse.y,8,7)
	end
	
	spr(mouse.spr,mouse.x,mouse.y)
	
	print(mouse.x)
	print(mouse.y)
	print(mget(mouse.x/8,mouse.y/8))
end
```

```lua
function _init()
	mouse.init()
end

function _update()
	mouse.update()
end

function _draw()
	mouse.draw()
end
```
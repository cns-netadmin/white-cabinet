+++
title =  "Event内容の表示について"
date = 2019-08-13T18:13:29+09:00
tags = ["Seminar","Conference"]
image = "img/topics/CNS_Guidance_poster_2019.png"
draft = false
mkbanner = true
bannerimg = ""
weight = 2
+++


![image](https://www.cns.s.u-tokyo.ac.jp/test/img/cns_mark_color.jpg)

## ひとつめ

Event情報の表示の際にたとえば```<h2>```を指定してしまうと、
## このように
postcard(仮称)に序文を表示する際にタイトルの書式が適用されて見栄えがかなり悪くなる。
なので、post（仮称）の見出しは特殊なクラスやidを割り振り、個別にcssで修飾する必要がある。

こちらは

<br>
<br>

```html

<h2 class="post-title" >
{{ .Title }}
</h2>

```
とすることで解決。

## ふたつめ

画像を入れると内容がポストカードに表示されない。

- 画像はポストカード内に実際に展開されている
- サイズが大きいため肝心の内容の部分が下に行き、グラデーションでかき消される

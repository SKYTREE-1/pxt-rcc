### 「リモコン扇風機」タブについて
![](http://www.kodai.uec.ac.jp/blocks_img/UR/sample.png)
#### 図. 配線図

![](http://www.kodai.uec.ac.jp/blocks_img/UR/real.png)
#### 図. 実際の配線状況

#### 1. 概要
　このカスタムブロックは、オーム電機社のリモコンコンセントをコントロールするもので、
ON/OFFを行うブロックです。赤外線LEDと抵抗（ここでは200Ω）を利用して,
配線図のように配線することで演習ができます。
配線図は演習用のため数十センチ～１ｍ程度の距離を想定しています。
「ずっと」のブロックに直接繋げることは可能ですが、動かなくなりますので繋げないようにしてください。

#### 2. ブロックの説明
- ##### 電源を入れる  
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_on.png)
コンセントの電源を入れます。
micro:bitの画面には[1]が表示されます。  


- ##### 電源を消す  
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_off.png)
コンセントの電源を落とします。
micro:bitの画面には[0]が表示されます。


#### 3. 使用例
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_exp.png)



> このページを開く [https://skytree-1.github.io/pxt-rcc/](https://skytree-1.github.io/pxt-rcc/)

## 拡張機能として使用

このリポジトリは、MakeCode で **拡張機能** として追加できます。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **新しいプロジェクト** をクリックしてください
* ギアボタンメニューの中にある **拡張機能** をクリックしてください
* **https://github.com/skytree-1/pxt-rcc** を検索してインポートします。

## このプロジェクトを編集します

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/skytree-1/pxt-rcc** を貼り付けてインポートをクリックしてください

#### メタデータ (検索、レンダリングに使用)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

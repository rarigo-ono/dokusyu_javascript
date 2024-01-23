# 1.1  JavaScriptとECMAScript
## 1.1.1   成り立ち
- 1995年に実装される形で登場。あくまでシステム開発時に「おまけ」として使う程度だった。
- 同時期JScriptが開発されInternetexplorer3.0に実装されたが互換性がなかったので、ブラウザ別に異なる記述が必要だった。
- そこでECMScriptとして標準化されることになった。
## 1.1.2   
- ECMScriptとはプログラミング言語の仕様のことを指す。
- JavaScriptは、ECMScriptの使用をもとに実装されたプログラミング言語。
## 1.1.3   ECMScriptとバージョン
- ES5とES6はECMScriptのバージョンを表している。
- ES5からES6のアップデータは大規模で、記述に大きな違いあり。
- 現在の主要ブラウザはES6で対応。
# 1.2
## 1.2.1    ブラウザ環境
- 利用されている最も一般な環境。
- JavaScriptコードを解析、実行処理することをJavaScriptエンジンという。
- JavaScriptコードは、単にスクリプトとも呼ぶ。
- JavaScriptエンジンは、様々な種類がある
  - firefox SpiderMonkey
  - chrome   V8
- ECMScriptに決められている機能に加えてWebAPIが使用可能。
  - JavaScriptコードからブラウザを操作するために、提供している機能
## 1.2.2    Node.js環境
- ブラウザなしでJavaScriptコードを実行できる環境
- ECMScriptに加えてCommonJSというモジュールを管理する仕組みが使用可能。

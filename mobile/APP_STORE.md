# App Store提出メモ

## 販売形態

- 買い切り有料アプリ。広告とアプリ内課金は実装しない。
- 価格はApp Store Connectで設定する。価格設定と有料アプリ契約、税務情報、振込先の登録はアカウント保有者が行う。
- Web版は公開中であり、「私用サイト」ではない。有料版はオフライン動作と端末内の復習履歴を訴求する。公開前に無料Web版との差別化と価格を再評価する。

## アプリ情報の下書き

名称：DP-700 問題道場

サブタイトル：Fabricデータエンジニア演習

説明文：

Microsoft Fabricのデータエンジニアリングを学ぶための日本語演習アプリです。296問の独自演習を端末に保存し、通信がない場所でも学習できます。初級から最上級までの段階演習、分野別演習、45問模試、コード問題、間違い復習、期限復習、用語検索を収録。回答後に解説と関連するMicrosoft公式資料へのリンクを表示します。問題の順序と選択肢の順序は演習ごとに変わります。Microsoftの公式アプリではありません。本試験の問題や公式Practice Assessmentの解答を収録したものではありません。

キーワード案：DP-700,Fabric,データエンジニア,資格,模擬試験,学習

サポート：fitmo.app@gmail.com

プライバシーポリシー：https://minetoshi.github.io/dp700/mobile-privacy.html

## 提出前のゲート

1. 同梱296問の文章、コード、画像、出典の権利と正答・解説を個別確認する。PDF由来・PA由来・判定保留の問題は同梱しない。
2. Macで `npm ci && npm run ios:sync && npm run ios:open` を実行する。実機で全演習形式、色による正誤表示、オフライン、復習、履歴の保存・読込、外部リンクを確認する。
3. iPhone/iPadの実画面からApp Store用スクリーンショットを作成し、App Privacy、対象年齢、サポートURL、価格を登録する。
4. XcodeでArchiveを作成しTestFlightで配布する。実機テストを完了した後にApp Reviewへ提出する。審査通過は保証されない。

参考：

- https://developer.apple.com/help/app-store-connect/manage-app-pricing/set-a-price
- https://developer.apple.com/app-store/review/guidelines/
- https://learn.microsoft.com/en-us/legal/termsofuse

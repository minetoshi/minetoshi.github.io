# DP-700 問題道場 iPhone版

このディレクトリは `dp700/` の問題データと画面を端末へ同梱する Capacitor 8 のiOSアプリです。オフラインで演習できます。iOSプロジェクトとアイコンは生成済みです。問題の更新は `npm run ios:sync` で取り込みます。

## App Store向けの内容と課金

iOSビルドには現時点で基本218問と段階演習78問、合計296問を同梱します。採点保留の3問、利用者提供PDF、PA派生問題、図解PDFは有料版に同梱しません。Web版の589問は従来のままです。現行ビルドは機能制限や広告SDKを持たない買い切りアプリとして用意しています。価格はApp Store Connectで設定し、アプリ内課金は使いません。公開前に296問の権利と内容を最終確認してください。

プライバシーポリシーURLは `https://minetoshi.github.io/dp700/mobile-privacy.html` です。App Store Connectのアプリ情報へ登録してください。実機の画面を使ったスクリーンショットと説明文、サポート窓口、App Privacyの回答、税務・銀行口座設定もApp Store Connectで用意します。

## Macでの仕上げ

Node.js 22以上、Xcode 26以上と Xcode Command Line Tools を用意してから、リポジトリの `mobile/` で実行します。

```sh
cd mobile
npm install
npm run ios:sync
npm run ios:open
```

`ios/App/App.xcodeproj` をXcodeで開き、Signing & Capabilities のTeamとBundle Identifierを確認して実機を選んで実行します。Bundle Identifier `com.minetoshi.dp700dojo` が既に使用されていれば、`capacitor.config.json` とXcode側のBundle Identifierを変更してください。後から問題を更新するときは `npm run ios:sync` を使います。

`ios/` と `package-lock.json` はリポジトリに含まれます。配布にはXcodeで署名とアーカイブが必要です。

## 学習履歴

既存のWeb版の「学習履歴を保存」でJSONを保存し、アプリの「学習履歴を読み込む」で選択します。Web版とiOS版は別の保存領域です。初回起動後に一度だけ取り込んでください。読み込み時はアプリ内の現在の履歴を保存ファイルで置き換えます。

ブラウザだけで使う場合は公開ページをiPhoneのSafariで開き、「共有」→「ホーム画面に追加」を選べます。オフライン使用は一度オンラインで画面を開いて全ファイルの保存が完了した後に確認してください。

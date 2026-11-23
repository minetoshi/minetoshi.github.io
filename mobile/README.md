# DP-700 問題道場 iPhone版

このディレクトリは `dp700/` の問題データと画面を端末へ同梱する Capacitor 8 のiOSアプリです。オフラインで演習できます。iOSプロジェクトとアイコンは生成済みです。問題の更新は `npm run ios:sync` で取り込みます。

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

# DP-700 問題道場 iPhone版

`dp700/` の独自演習から販売対象だけを生成し、Capacitor 8でiPhoneへ同梱します。2026-11-23時点の販売対象は295問（通常217問、段階演習78問）です。買い切りを想定し、広告・アプリ内課金・アカウント・分析SDK・通知権限はありません。Web版589問とその公開URLは維持します。

## ビルド

Node.js 22以上、Xcode 26以上を使用します。

```sh
cd mobile
npm ci
npm run ios:sync
xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 17 Pro' CODE_SIGNING_ALLOWED=NO build
npm run ios:open
```

このMacではSwift Package Managerの公式バイナリ取得が停止したため、公式配布物のSHA-256を照合して一時的にローカル参照でビルドする `npm run ios:build:fallback` も用意しました。実行後は生成マニフェストを元に戻します。通常のXcode取得が進む環境では不要です。

`ios/App/App.xcodeproj` でTeamとBundle Identifierを設定してiPhone実機に実行します。`com.minetoshi.dp700dojo` が使用済みならCapacitor設定とXcodeの両方を変更してください。`ios:sync` は同梱問題の更新後に毎回実行します。問題数は `commercial-exclusions.json` と監査台帳に従い、ビルド時に自動計算されます。

## 学習履歴

Web版で「学習履歴を保存」からJSONを書き出し、アプリの「学習履歴を読み込む」で選択します。上書き前に確認画面を表示し、現在のアプリ履歴を端末内にバックアップします。「直前の履歴を復元」で戻せます。Web版の履歴には販売対象外IDが含まれる場合がありますが、そのレコードは保持し、販売対象の進捗計算には含めません。アプリ削除前にはファイルとして保存してください。

## 監査と公開前ゲート

`node scripts/audit.cjs` が候補296問の個別記録を `audit/commercial-questions.json` に生成します。`audit/source-status-20261123.json` はURL到達性だけを示し、仕様上の正答や著作権を保証しません。Microsoft Learnに個別の公式解答キーはありません。出題文が独自作成であること、コードが第三者資料から転載されていないことを販売者が最終確認してください。

実機操作、履歴のiOSファイル読み込み・共有、機内モード、外部リンク、Apple署名、TestFlight、実機スクリーンショットは販売者のiPhoneで完了する必要があります。詳細は [APP_STORE.md](APP_STORE.md)。

# DP-700 問題道場 iPhone版

`dp700/` の独自演習から販売対象だけを生成し、Capacitor 8でiPhoneへ同梱します。販売対象は295問（通常217問、段階演習78問）です。買い切りを想定し、広告・アプリ内課金・アカウント・分析SDK・通知権限はありません。Web版589問とその公開URLは維持します。iPhone版には試験日から逆算した1日の未着手問題数、期限・誤答・未着手の順に始める導線、49テーマの優先演習を追加しています。試験日は任意で、合格を保証する指標ではありません。

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

### 実機確認の最短手順

1. iPhoneをMacに接続・ロック解除し、信頼と開発者モードを有効にする。`xcrun devicectl list devices` で `available` を確認する。
2. `npm run ios:sync && npm run ios:open` を実行する。Xcodeの App target → Signing & Capabilities で本人のTeamを選び、Bundle Identifierの登録と署名を完了する。
3. 実機を実行先に選んでRunする。通常のSwiftPM取得が止まるMacでは `bash scripts/with-local-capacitor.sh xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Debug -destination 'platform=iOS,id=<devicectlで確認したID>' -allowProvisioningUpdates build` を試す。
4. 正答・誤答・複数選択・コード・復習・最終スコア、機内モード、学習履歴のファイル保存・読込・復元、Safariへの遷移を実機で確認し、スクリーンショットを撮る。署名済みArchiveとTestFlightはその後に確認する。

## 学習履歴

Web版で「学習履歴を保存」からJSONを書き出し、アプリの「学習履歴を読み込む」で選択します。上書き前に確認画面を表示し、現在のアプリ履歴と試験日を端末内にバックアップします。「直前の履歴を復元」で戻せます。「履歴リセット」は端末内の履歴、試験日、復元用バックアップを削除します。Web版の履歴には販売対象外IDが含まれる場合がありますが、そのレコードは保持し、販売対象の進捗計算には含めません。アプリ削除前にはファイルとして保存してください。

## 監査と公開前ゲート

`node scripts/audit.cjs` が候補296問の個別記録を `audit/commercial-questions.json` に生成します。`audit/source-status-20261123.json` はURL到達性だけを示し、仕様上の正答や著作権を保証しません。Microsoft Learnに個別の公式解答キーはありません。出題文が独自作成であること、コードが第三者資料から転載されていないことを販売者が最終確認してください。

シミュレータではiOSファイルの保存・読み込み・復元とSafari遷移まで確認済みです。接続済みiPhoneは `devicectl` 上で `unavailable` のため、実機操作、機内モード、実機スクリーンショット、Apple署名、TestFlightは未実施です。詳細は [TEST_REPORT.md](TEST_REPORT.md) と [APP_STORE.md](APP_STORE.md)。

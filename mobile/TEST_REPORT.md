# 検証記録（2026-11-24）

## 実施

- `node dp700/tests/validate.cjs`：589問の構造検査、エラー0。
- `node mobile/scripts/audit.cjs`：候補296問のID別台帳、販売対象295問、除外1問、構造エラー0。
- 2026-11-23に販売対象のMicrosoft Learn参照URL 76件を再取得し、HTTP 200が76件。意味的な正答確認とは別。
- `node dp700/tests/browser.cjs`：幅1280/390の36モードケース、全問題の出題・回答・結果とWeb版589問を通過。
- `node dp700/tests/mobile.cjs`：Web版のオフライン再読み込み、販売用295問の分離、幅1280/390で正誤と資料リンクを通過。
- `node mobile/tests/release.cjs`：iPhone幅で初級～最上級、分野別、模試、コード、誤答、最終スコア、間違い復習、履歴読込・復元、読み込み済み画面のオフライン操作を通過。
- Xcode 26.4：iPhone 17 Pro Simulator向けDebugビルド成功。SwiftPMの公式バイナリ取得が停止したため、同じ8.6.2の公式zipをSHA-256で確認し、一時ローカル参照でビルド。マニフェストは復元済み。
- iPhone 17 Pro Simulator（iOS 26.4）：アプリ起動、295問表示、選択肢順の変化、誤答の赤・正答の緑、復習導線、再インストール後の履歴保持を画面で確認。`screenshots/simulator-drafts/` に確認用画像を保存。

## 未実施・制限

- 接続済みiPhoneは `devicectl` で unavailable と表示。実機ビルド、機内モード、iOS共有シートとファイル取り込み、外部リンクの遷移、実機からのApp Storeスクリーンショットは未実施。
- TestFlight、署名付きArchive、App Store Connectへの登録・審査提出は未実施。
- このMacにはJava Runtimeがなく、ローカルPySpark検査は起動できなかった。CIのUbuntuジョブでは実行する。
- Microsoft LearnのHTTP 200や既存の2026-11-16監査は、295問の公式個別解答・現行仕様を全件再確認した証拠ではない。販売者による原稿とコードの作成経緯・権利確認が残る。

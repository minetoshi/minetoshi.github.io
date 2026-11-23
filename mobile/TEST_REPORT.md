# 検証記録（2026-11-24）

## 実施

- `node dp700/tests/validate.cjs`：589問の構造検査、エラー0。
- `node mobile/scripts/audit.cjs`：候補296問のID別台帳、販売対象295問、除外1問、構造エラー0。
- 2026-11-23に販売対象のMicrosoft Learn参照URL 76件を再取得し、HTTP 200が76件。意味的な正答確認とは別。
- `node dp700/tests/browser.cjs`：幅1280/390の36モードケース、全問題の出題・回答・結果とWeb版589問を通過。
- `node dp700/tests/mobile.cjs`：Web版のオフライン再読み込み、販売用295問の分離、幅1280/390で正誤と資料リンクを通過。
- `node mobile/tests/release.cjs`：iPhone幅で初級～最上級、分野別、模試、コード、誤答、最終スコア、間違い復習、履歴読込・復元・リセット、読み込み済み画面のオフライン操作を通過。期限復習・間違い復習が各30問ある場合、開始ボタンが1回25問と対象総数を区別して表示し、実際に25問を出すことを確認。
- Xcode 26.4：iPhone 17 Pro Simulator向けDebugビルド成功。2026-11-24の履歴リセット・復習表示修正後も再ビルド成功。SwiftPMの公式バイナリ取得が停止したため、同じ8.6.2の公式zipをSHA-256で確認し、一時ローカル参照でビルド。マニフェストは復元済み。
- iPhone 17 Pro Simulator（iOS 26.4）：アプリ起動、295問表示、選択肢順の変化、誤答の赤・正答の緑、復習導線、再インストール後の履歴保持を画面で確認。修正後のアプリを再インストールして起動し、復習開始ボタンの件数表示も画面で確認。`screenshots/simulator-drafts/` に確認用画像を保存。
- iPhone 17 Pro Simulator（iOS 26.4）：iOS共有シートから学習履歴JSONを「ファイル」に保存し、iOSファイル選択画面から読み込み。復元確認後に回答数が2→3→2と戻ることを画面で確認。
- iPhone 17 Pro Simulator（iOS 26.4）：Microsoft公式Study GuideをSafariで開いてアプリに戻れることを確認。サポート・プライバシー画面の戻り導線と、スクロール中のステータスバー・用語集の安全領域を画面で確認。
- Xcode 26.4：`generic/platform=iOS` のRelease Archiveが署名なしで成功。アプリIDは `com.minetoshi.dp700dojo`。これはApp Storeに提出できる署名済みArchiveではない。

## 未実施・制限

- 接続済みiPhone 13とiPhone 17は、2026-11-24の `devicectl` で両方 `unavailable`。実機インストール・操作、機内モード、実機でのiOS共有シート・ファイル取り込み・外部リンク、実機からのApp Storeスクリーンショットは未実施。
- このMacには有効なApple Development証明書があるが、XcodeプロジェクトのTeamは未設定で、このアプリIDのプロビジョニングプロファイルは見つからなかった。署名付きArchive、TestFlight、App Store Connectへの登録・審査提出は未実施。
- このMacにはJava Runtimeがなく、ローカルPySpark検査は起動できなかった。CIのUbuntuジョブでは実行する。
- Microsoft LearnのHTTP 200や既存の2026-11-16監査は、295問の公式個別解答・現行仕様を全件再確認した証拠ではない。販売者による原稿とコードの作成経緯・権利確認が残る。

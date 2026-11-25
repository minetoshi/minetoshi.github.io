# 検証記録（2026-11-25）

## SwiftUI版で実施

- `node mobile/scripts/build-native.cjs` と `node mobile/tests/native.cjs`：販売用295問、49テーマ、除外IDとXcodeターゲットにWebView・HTML/JavaScriptを含まないことを確認。
- Xcode 26.4でSwiftUI版のiPhone 17 Pro Simulator向けDebugビルド成功。`xcodebuild test` でSwift単体テスト4件通過（複数選択、並べ替え、誤答、模試、コード、試験日、履歴読込・復元）。
- 新規iPhone 17 Pro SimulatorでComputer UseによりSwiftUIホーム、演習一覧、回答前の選択表示、回答後の緑表示と解説、コード問題と採点を操作。初回の画面余白はLaunchScreen指定を修正して再確認。
- 旧Capacitor版のシミュレーターを複製してネイティブ版を上書きインストール。旧WebKitのSQLiteから回答4件・試験日・復元用バックアップを初回起動時にネイティブJSONへコピーしたことを確認。元の旧版シミュレーターとWebKitデータは保持。
- 複製したシミュレーターで「履歴リセット」を操作し、ネイティブ履歴とバックアップの削除、旧WebKitの対象履歴キー2件の削除、再起動後も旧履歴を取り込まないこと、復元ボタンが消えることを確認。元の旧版シミュレーターは変更していない。
- SwiftUI版の署名なしRelease Archiveが `generic/platform=iOS` で成功。これは提出可能な署名済みArchiveではない。

## 旧Capacitor版で実施した検査（現行SwiftUI版の確認とは区別）

- `node dp700/tests/validate.cjs`：589問の構造検査、エラー0。
- `node mobile/scripts/audit.cjs`：候補296問のID別台帳、販売対象295問、除外1問、構造エラー0。
- 2026-11-23に販売対象のMicrosoft Learn参照URL 76件を再取得し、HTTP 200が76件。意味的な正答確認とは別。
- `node dp700/tests/browser.cjs`：幅1280/390の36モードケース、全問題の出題・回答・結果とWeb版589問を通過。
- `node dp700/tests/mobile.cjs`：Web版のオフライン再読み込み、販売用295問の分離、幅1280/390で正誤と資料リンクを通過。
- `node mobile/tests/release.cjs`：iPhone幅で初級～最上級、分野別、模試、コード、誤答、最終スコア、間違い復習、履歴読込・復元・リセット、読み込み済み画面のオフライン操作を通過。期限復習・間違い復習が各30問ある場合、開始ボタンが1回25問と対象総数を区別して表示し、実際に25問を出すことを確認。
- iOS同梱HTMLはWeb版のService Workerを登録せず、存在しない `sw.js` を要求しない。Web版のService Workerは維持。
- Xcode 26.4：iPhone 17 Pro Simulator向けDebugビルド成功。2026-11-24の履歴リセット・復習表示修正後も再ビルド成功。SwiftPMの公式バイナリ取得が停止したため、同じ8.6.2の公式zipをSHA-256で確認し、一時ローカル参照でビルド。マニフェストは復元済み。
- iPhone 17 Pro Simulator（iOS 26.4）：アプリ起動、295問表示、選択肢順の変化、誤答の赤・正答の緑、復習導線、再インストール後の履歴保持を画面で確認。修正後のアプリを再インストールして起動し、復習開始ボタンの件数表示も画面で確認。`screenshots/simulator-drafts/` に確認用画像を保存。
- iPhone 17 Pro Simulator（iOS 26.4）：iOS共有シートから学習履歴JSONを「ファイル」に保存し、iOSファイル選択画面から読み込み。復元確認後に回答数が2→3→2と戻ることを画面で確認。
- iPhone 17 Pro Simulator（iOS 26.4）：Microsoft公式Study GuideをSafariで開いてアプリに戻れることを確認。サポート・プライバシー画面の戻り導線と、スクロール中のステータスバー・用語集の安全領域を画面で確認。
- iPhone 17 Pro Simulator（iOS 26.4）：Computer Useでホーム、演習前後の正誤表示、結果、コード問題、用語集、分野別導線、サポート・プライバシー画面を操作。プライバシー見出しの不自然な折り返しを修正し、再ビルド・再インストール後に画面で確認。
- 2026-11-25：アプリ専用の試験日から逆算する学習目安（目安に合わせた演習数、1回最大50問）、期限・誤答・未着手の優先演習、49テーマからの演習、履歴JSONへの試験日の保存・復元をiPhone幅の自動UIテストで確認。iPhone 17 Pro Simulatorで日付ピッカー、1日あたりの目安、日本語テーマ表示、テーマ別演習をComputer Useで操作し、日付欄の横はみ出しを修正後に再確認。
- Xcode 26.4：`generic/platform=iOS` のRelease Archiveが署名なしで成功。アプリIDは `com.minetoshi.dp700dojo`。これはApp Storeに提出できる署名済みArchiveではない。

## 未実施・制限

- 接続済みiPhone 13とiPhone 17は、2026-11-25の `devicectl` で両方 `unavailable`。SwiftUI版の実機インストール・操作、機内モード、実機でのiOS共有シート・ファイル取り込み・旧版自動移行・外部リンク、実機からのApp Storeスクリーンショットは未実施。
- このMacには有効なApple Development証明書があるが、XcodeプロジェクトのTeamは未設定で、このアプリIDのプロビジョニングプロファイルは見つからなかった。署名付きArchive、TestFlight、App Store Connectへの登録・審査提出は未実施。
- このMacにはJava Runtimeがなく、ローカルPySpark検査は起動できなかった。CIのUbuntuジョブでは実行する。
- Microsoft LearnのHTTP 200や既存の2026-11-16監査は、295問の公式個別解答・現行仕様を全件再確認した証拠ではない。販売者による原稿とコードの作成経緯・権利確認が残る。

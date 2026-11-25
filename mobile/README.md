# DP-700 問題道場 iPhone版

販売用アプリはSwiftUIで実装しています。問題・採点・復習・進捗・履歴管理はiOS上で動き、Capacitor、WebView、HTML/JavaScriptをアプリに同梱しません。販売対象は独自演習220問（基本142問、段階演習78問）です。購入時の買い切りを想定し、広告、アプリ内課金、サブスクリプション、アカウント、分析SDK、通知権限はありません。

「今日」では期限復習、保存した問題、直近の間違い、未着手の順に演習を案内します。回答後には任意の問題を保存でき、後からまとめて復習できます。49テーマの学習状況画面は、基本問題のうち98問を分類して表示します。設計と販売前の条件は [PRODUCT_DESIGN.md](PRODUCT_DESIGN.md) を参照してください。

## ビルドとテスト

Node.js 22以上とXcode 26以上を使用します。問題JSONは公開Web版のデータから販売対象だけを選び、監査除外IDを適用して生成します。XcodeGenがある場合は `npm run ios:project` でプロジェクトを再生成できます。生成済みの `.xcodeproj` もコミットしています。

```sh
cd mobile
npm run build
xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Debug -destination 'generic/platform=iOS Simulator' CODE_SIGNING_ALLOWED=NO build
xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 17 Pro' CODE_SIGNING_ALLOWED=NO test
```

`node tests/native.cjs` は220問の内訳、除外ID、出典URL、XcodeターゲットにWebViewやWebアセットが入らないことを検査します。旧Web画面の回帰確認用に `npm run web:fixture` を残していますが、生成物はiOSアプリへ組み込みません。

候補296問の原稿は `audit/content-lock.json` で固定しています。設問、選択肢、正答、解説、コード、参照URLなどが変わると監査とビルドが失敗します。変更時は対象IDの内容・正答・根拠・作成経緯を再確認し、対象IDのハッシュだけを更新して差分をレビューしてください。`node scripts/overlap-audit.cjs` は販売用と除外済みの問題を照合します。検査結果は [audit/overlap-report.json](audit/overlap-report.json) に残りますが、独立作成の証明にはなりません。

## 履歴と移行

履歴はApplication Support内のJSONへ保存します。旧Capacitor版と同じBundle Identifierで更新した場合、初回起動時に旧版WebKitのローカルストレージSQLiteから回答履歴、試験日、復元用バックアップを**コピー**します。旧データは削除しません。移行できない場合は画面に知らせます。シミュレーター上の旧版履歴4件、試験日、バックアップの移行を確認済みです。実機での自動移行は未確認です。

Web版の履歴はWeb版の「学習履歴を保存」でJSONを書き出し、ネイティブアプリの設定画面で読み込みます。読み込み前のアプリ履歴と試験日、保存した問題は自動バックアップされ、復元できます。Web版にしかない問題IDも記録には残しますが、販売用220問の進捗には含めません。アプリ削除前には履歴を書き出してください。

## Web版の終了

Web版589問と公開URLは、ネイティブ版の実機確認・履歴移行・App Store公開まで維持します。終了方法は [WEB_RETIREMENT.md](WEB_RETIREMENT.md) に記載します。公開リポジトリのGit履歴や既存クローンから問題を消すことはできません。

## 公開前ゲート

候補296問から `C-SQL-09` と定型・重複の75問を除いた220問です。除外IDと理由は [commercial-exclusions.json](commercial-exclusions.json) に記録しています。Microsoft LearnのURL到達性は正答や著作権の保証ではありません。販売者による原稿・コードの権利証跡の最終確認、実機、署名済みArchive、TestFlight、App Store Connectの契約・価格・審査提出は残っています。詳細は [TEST_REPORT.md](TEST_REPORT.md) と [APP_STORE.md](APP_STORE.md)。

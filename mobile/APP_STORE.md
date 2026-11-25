# App Store提出メモ（2026-11-25）

## 商品と表示

- 名称：DP-700 問題道場
- サブタイトル案：Fabricデータエンジニア演習
- 販売方式：アプリ購入時の買い切り。広告、サブスクリプション、アプリ内課金なし。価格はApp Store Connectで販売者が設定する。
- 説明文案：Microsoft Fabricのデータエンジニアリングを学ぶ日本語iPhoneアプリ。独自演習295問を端末に収録し、通信なしでも解けます。任意の試験日から1日あたりの未着手問題数を示し、期限復習・間違い・未着手の順に今日の演習を案内します。49テーマから次に学ぶ内容を選べます。初級から最上級、分野別、45問模試、コード問題に対応。回答後に正誤と解説を表示し、必要に応じてMicrosoft Learnを開けます。履歴と試験日は端末内に保存し、JSONで持ち出せます。学習目標は合格を保証しません。本アプリはMicrosoftの公式アプリではなく、実試験問題や公式Practice Assessmentの解答は収録しません。
- キーワード案：DP-700,Fabric,データエンジニア,資格,演習,学習
- サポートURL：https://minetoshi.github.io/dp700/mobile-support.html
- プライバシーURL：https://minetoshi.github.io/dp700/mobile-privacy.html
- 問い合わせ：fitmo.app@gmail.com

## スクリーンショット案

1. SwiftUIホーム：試験日、今日の優先演習、進捗
2. テーマ別・段階別の演習入口
3. 複数選択またはコード問題の回答画面
4. 回答後の緑・赤の正誤表示と解説
5. 最終スコアと分野別結果、間違い復習

必要な寸法と端末区分をApp Store Connectで確認し、最終バイナリの実機または適切なiPhoneシミュレーターから作成する。旧Capacitor画面のスクリーンショットを提出素材に混ぜない。

## App Privacyの回答根拠

回答履歴と試験日は端末のApplication Support内のJSONに保存し、運営者サーバーへ送信しない。旧版からの移行時は端末内のWebKitローカルストレージSQLiteを読み、旧データは削除しない。JSONの共有先は利用者が選ぶ。外部資料を開くと各サイトの取り扱いが適用される。アプリに広告・分析SDK、アカウント、通知権限はない。購入・決済はAppleが処理する。App Store Connectの質問票は最終バイナリに照らして回答する。

## 実施済みと残るゲート

- SwiftUI版に295問を収録。XcodeターゲットにCapacitor、WebView、HTML/JavaScript、Webアセットは含めない。無料Web版589問は現時点で公開を維持する。
- 候補296問をID別台帳化し、販売対象295問、保留1問。`C-SQL-09` はUNMASK構文の確証不足で除外。
- 76件のLearn URLは2026-11-23にHTTP 200。これは意味的な正答検証ではない。個別公式解答確認は0件。販売者による原稿・コードの作成経緯と著作権の最終確認は未完了。
- Xcode 26.4でシミュレーター向けDebugビルド、Swift単体テスト4件、XCUITest 1件が成功。Computer Useでネイティブのホーム、演習一覧、コード問題、回答前後の表示を確認。旧版のシミュレーターを複製し、履歴・試験日・バックアップの自動移行を確認。実機、署名済みArchive、TestFlightは未実施。
- 有料アプリ契約、税務・銀行、価格、署名の本人操作、審査への最終提出はApple Developerアカウント保有者が行う。

## Web版の扱い

Web版の終了は [WEB_RETIREMENT.md](WEB_RETIREMENT.md) の順序で進める。公開GitHubリポジトリとGitHub Pagesには問題文・答えが既に存在し、`noindex` やPagesの終了はアクセス制限にならない。既に公開された295問はGit履歴と既存クローンから消せない。新規の販売専用問題は非公開リポジトリで管理し、公開CIやPagesへ出さない。

参照：[Microsoft Learn利用規約](https://learn.microsoft.com/en-us/legal/termsofuse)、[Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)。

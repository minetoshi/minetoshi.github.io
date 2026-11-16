# DP-700 問題道場 品質修正記録（2026-11-16）

対象：minetoshi/minetoshi.github.io の dp700/。基準はPR #15反映後のmain（fe87bc3974b58778ed96ba4442efe7e8e0fca89c）。公式Practice Assessmentの個別解答キーを取得したものではない。

## 件数と範囲

| バンク | ID数 | 判定保留 |
|---|---:|---:|
| 通常バンク（基本221・PA論点50・図解90） | 361 | 4 |
| 初級 | 15 | 0 |
| 中級 | 15 | 0 |
| 上級 | 30 | 0 |
| 最上級 | 18 | 0 |
| PA実戦 2026/11/6 | 50 | 2 |
| PA復習 2026/11/14 | 50 | 6 |
| PDF検証版 2026/11/12 | 50 | 9 |
| 合計 | 589 | 21 |

通常演習・分野別・ジャンル全問・本番模試・PA予行・コード演習はバンクを抽出して出題するモード。図解模試3回は図解90問を30問ずつに分ける。間違い復習・期限復習は全バンクのIDを参照する。これらを重複して総問題数に加算しない。

設問文の変更 **75問**、選択肢または正解の変更 **9問**（正解indexの変更 0問）、解説変更 **65問**、コード変更 **31問**、根拠URL変更 **151問**。同じ問題が複数項目に含まれる。修正は読み込み後のquality-fixes.jsも含む実効データで比較する。

重複IDは0。設問・ケース・コード・選択肢まで一致する再掲載は2組あり、[対応表](audit/duplicates.json)に記録した。復習用途の別バンクとして既存IDを維持している。通常バンクには同じ論点を単一・複数・ケース形式で繰り返す問題がある。589種類の独立論点という意味ではない。

## 教材レビューと根拠の扱い

全バンクを設問・選択肢・想定解・解説の対応として点検し、同一テンプレートの派生もID別台帳に含めた。全問の公式個別解答を確認したという意味ではない。仕様照合済みと表示する問題と、公式資料を根拠にした想定解による独自採点を分ける。後者を公式PAの正解と呼ばない。

[全589問の台帳](audit/question-ledger.json)にはID、バンク、根拠URL、採点状態、変更前後の全文を収録する。[URL確認記録](audit/source-checks.json)には取得日時、HTTPステータス、ページタイトル、内容ハッシュ、対応IDを記録する。HTTP 200は接続確認であり、それだけで意味的検証済みとはしない。

重点確認した仕様：Workspace monitoringのActivityログ列、Notebookの個別タイムアウトとセッション共有条件、Domainへの認定設定委任、WarehouseのSELECT INTOとCTAS、SDK形式Database Project、DeltaコンパクションとVACUUM、ストリームの窓、SQL/RLS/CLS/DDM、Eventstream変換、Mirroring監視。旧名称Always-onをCapacity Planner modeへ変更し、Notebook・Warehouse・Lakehouseの実行エンジンを混同しないよう条件を追加した。

Q11は実KQLの2空欄、Q22は認定と委任先の2グループ、Q47は実行可能なPySpark式4択、Q48はgroupBy/aggの2空欄へ修正。原資料にない条件を加えた再設計は独自練習問題として表示する。元PDFの個別正解を復元したとは扱わない。

## 保留問題

- **ORD-05**：接続設定とDAGの作成の順は実装によって入れ替え可能で、全順序を一意に決める依存条件がない。

- **ORD-15**：OPTIMIZEとVACUUMは異なる目的で、提示条件では両者の実行順を一意に定められない。

- **ORD-18**：アラート条件と通知先の構成順は一意ではなく、テスト前に両方が必要という条件のみである。

- **PA50-36**：配列の実値と渡し方が欠落し、JSON文字列の変換と配列の構築を区別できない。

- **PALIVE-20261106-05**：配列の実値と渡し方が欠落し、JSON文字列の変換と配列の構築を区別できない。

- **PALIVE-20261106-19**：現行のFabric WarehouseはCTASとSELECT INTOの双方に対応する。提示条件では後者を一意に不正解にできない。

- **PA-20261114-11**：約1時間後の更新失敗はオンプレミスゲートウェイのOAuth2トークン更新制限でも発生する（Fabric公式の既知制限）。ゲートウェイのバージョン確認は一般的な確認だが、それだけで障害原因が特定されるとはいえない。選択肢から一意な対処を特定できないため判定保留。【注意】設問に曖昧さがあるため正解候補として扱ってください。

- **PA-20261114-12**：配列の実値とExecute Pipelineの引数式がなく、createArrayによる修正かJSON文字列のjson変換かを決定できない。既存配列を包むと二重配列になる可能性もある。

- **PA-20261114-13**：マイクロバッチとStructured Streamingは対立する方式ではない。遅延条件と現行処理が不明で、選択肢を一意に区別できない。

- **PA-20261114-21**：KQLデータベースはFabric Eventhouseの構成要素であり、Azure Data Explorerは別サービス。両者はKusto系の技術を共有するが、問題はFabricのKQL DBに既にデータが流れている前提なので、選択肢Cをそのまま『正解』と断言できない。設問自体の適合性を要確認。【注意】設問に曖昧さがあるため正解候補として扱ってください。

- **PA-20261114-22**：Bronze/Silver/Goldの段階分離とDataflows Gen2によるクレンジングは妥当。ただしData Factory Pipelineも構成と変換を呼び出せるためCを排除できる条件がなく、2個に絞る根拠が弱い。【注意】設問に曖昧さがあるため正解候補として扱ってください。

- **PA-20261114-29**：FabricのSpark Structured Streamingでストリームを変換可能だが、Azure Stream Analyticsもリアルタイム変換を提供する。LakehouseやDelta保存の要件が問題文にないため、CとDを厳密に一意に識別できない。【注意】設問に曖昧さがあるため正解候補として扱ってください。

- **PA-PDF-20261112-02**：ランタイムエラーの原因を特定するには、Runtime logsを読み、重大度で絞り込みます。原因が変換処理にあればロジックを修正します。変換を丸ごと停止すると必要な加工を失う可能性があります。 試験での見抜き方：「Runtime errors」→ エラーログを絞る／詳細を読む／原因箇所を修正。 資料の注意点：注：AのData insightsも実務では有用です。どの3つを採点上の正解とするかは公式の解答画面で最終確認してください。

- **PA-PDF-20261112-09**：Structured Streamingは通常マイクロバッチで動作するため、両選択肢を対立する方式として採点できない。

- **PA-PDF-20261112-13**：小ファイルの断片化が性能悪化の原因なので、コンパクションが必要です。OPTIMIZEはその実行手段です。V-Orderは読み取り配置の最適化で、ファイル数の削減自体とは異なります。 試験での見抜き方：「Small Parquet files」→ Compaction（具体的にはOPTIMIZE）。 資料の注意点：重要：BのDelta Lake compactionとDのOPTIMIZEは同じ方向の対応です。設問は単一選択なのに概念が重複しており、問題として曖昧です。公式解の確認が必要です。

- **PA-PDF-20261112-14**：単なる可視化（Power BI）やデータ保存（Data Lake）では、ワークフローの診断に直結しません。一方、AのアラートもD の監視基盤も文脈によっては監視に関連するため、設問文は十分に限定していません。 試験での見抜き方：「原因調査・監視」→ 実行ログ・メトリクスを扱う監視機能に着目。 資料の注意点：重要：AとDを完全には区別できない書き方です。これを過去問道場の確定正答として扱わず、公式Show Solution等で要確認とします。

- **PA-PDF-20261112-15**：問題はGateway経由のDataflowであり、Pipeline自身の設定値とは限りません。まずGatewayのサポート・バージョンとログを確認するのが初動です。ただし実務では認証トークンの期限・通信・タイムアウトも原因になります。 試験での見抜き方：「Gateway経由のDataflow」「実行後に失敗」→ Gateway側を調査。 資料の注意点：注：約1時間で必ずGatewayのバージョンが原因という意味ではありません。

- **PA-PDF-20261112-29**：直接抽出とDACPAC経由の両方が候補となり、最小手順などの限定条件がない。

- **PA-PDF-20261112-38**：Event Hubsは受信、Data Factoryは実行制御が中心です。Spark Structured StreamingとDeltaはFabric内で処理と保存を組み合わせる代表構成ですが、CのAzure Stream Analytics自体もリアルタイム変換が可能です。 試験での見抜き方：「IoTリアルタイム変換」「Delta保存を想定」→ Spark Structured Streaming＋Delta。 資料の注意点：重要：設問に「Deltaへ保存すること」は明記されていません。CとDはともに変換でき、完全な一意解には追加条件が必要です。

- **PA-PDF-20261112-45**：Bronzeに生データ、Silverで品質処理、Goldで分析用に整理する設計は整合性に役立ちます。Dataflow Gen2はデータの変換・クリーニングに使用できます。Data Factory Pipelineは通常、変換を実行制御する役割が中心で、Bの変換省略は品質上の問題になり得ます。 試験での見抜き方：「品質を保ちながら増分」→ 層を分けて品質管理＋変換・クレンジング。 資料の注意点：重要：画像にA〜Dの4択が写っていますが、増分ロードの具体的方式（水位管理やCDCなど）が選択肢にありません。A・Dは設問の想定として整理したもので、単独では増分ロードを実装しません。公式の正解画面で要確認です。

- **PA-PDF-20261112-46**：Fabric LakehouseはファイルやDeltaを保存し、SparkとSQL Endpointを利用できます。Azure Synapse Analyticsはストレージ単体ではなくSQLとSparkを含む統合分析サービスです。ADLS Gen2は多様なファイルを保存できますが、それ自体にはSQL/PySpark実行エンジンはありません。EventhouseはKQL中心です。 試験での見抜き方：「ファイルもDeltaも」「PySpark＋SQL」→ Lakehouse。Synapseは統合分析サービスとして比較。 資料の注意点：重要：BのAzure Synapse Analyticsは厳密には「データストア」ではなく統合分析基盤です。問題の分類に曖昧さがあります。

保留問題は参考として閲覧・解答できるが、得点分母・正答数・誤答数・期限復習・誤答復習に含めない。参考候補を緑色の正解として表示しない。過去の履歴は削除せず保持し、現在のホーム集計から保留IDを除く。旧セッション結果の記録は過去時点の記録として保持する。

## 実装と検証

- グループ別選択、空欄別選択、単一・複数・並べ替えの判定を分離。シャッフル表示後も元indexで採点する。
- 回答前のskill名によるヒント漏れをID表示へ変更。BRIDGEの着眼点を解説へ移動。
- 学習履歴キーdp700-dojo-v2と既存589IDを維持。未知の旧IDも消さない。
- 構造検査：node dp700/tests/validate.cjs。全589問、重複ID、空欄・選択数・正解範囲・出典・解説・グループ・保留状態を検査。
- 実コード：python -P dp700/tests/pyspark.py。PySpark 3.5.3でQ47の正解と全誤答肢、Q48の境界値・除外条件・集計を実行。Fabricサービスの実ワークスペースでは未実行。
- 操作検査：node dp700/tests/browser.cjs。1280pxと390px。全バンクモードで589問すべてを操作し、主要各モードも開始から最終スコアまで実行。正答・誤答・保留・グループ・順序・解説リンク・JavaScript例外、全バンクの誤答/期限復習と既存履歴保持を確認。
- 最新の合否・実行ログ・スクリーンショットは[PR #16](https://github.com/minetoshi/minetoshi.github.io/pull/16)のChecksを参照。基準コミット44319d2の実行[run #5](https://github.com/minetoshi/minetoshi.github.io/actions/runs/43837281848)は成功。追加教材修正後も同じCIを実行する。

## 残る制約

公式個別解答の確認件数は0。SQL/KQLの全コードをFabric実サービスで実行した検証ではなく、公式構文・条件の照合とブラウザ上の採点検証である。設問を読んで選択肢を比較する意味的レビューは行ったが、人間の第三者レビュアーによる独立監査ではない。製品仕様・プレビュー・UI名は変わるため、各根拠ページの継続確認が必要。保留21問は原設問・公式解答の追加資料か独自設問への再設計が必要で、確定正答として使わない。

## ID別変更履歴

表中の項目名はデータのフィールド名。具体的な変更前後は上記JSON台帳で同じIDを参照する。記載のないIDは実効データを保持した。

| ID | 変更した項目 | 採点 |
|---|---|---|
| O02-A | source | 独自演習 |
| O02-B | source | 独自演習 |
| O02-C | source | 独自演習 |
| O03-A | source | 独自演習 |
| O03-B | source | 独自演習 |
| O03-C | source | 独自演習 |
| O04-A | source | 独自演習 |
| O04-B | source | 独自演習 |
| O04-C | source | 独自演習 |
| O05-A | source | 独自演習 |
| O05-B | source | 独自演習 |
| O05-C | source | 独自演習 |
| O07-A | source | 独自演習 |
| O07-B | source | 独自演習 |
| O07-C | source | 独自演習 |
| O08-A | source | 独自演習 |
| O08-B | source | 独自演習 |
| O08-C | source | 独自演習 |
| O09-A | source | 独自演習 |
| O09-B | source | 独自演習 |
| O09-C | source | 独自演習 |
| O12-A | source | 独自演習 |
| O12-B | source | 独自演習 |
| O12-C | source | 独自演習 |
| O13-A | source | 独自演習 |
| O13-B | source | 独自演習 |
| O13-C | source | 独自演習 |
| O19-A | source | 独自演習 |
| O19-B | source | 独自演習 |
| O19-C | source | 独自演習 |
| O23-A | source | 独自演習 |
| O23-B | source | 独自演習 |
| O23-C | source | 独自演習 |
| O30-A | source | 独自演習 |
| O30-B | source | 独自演習 |
| O30-C | source | 独自演習 |
| O31-A | source | 独自演習 |
| O31-B | source | 独自演習 |
| O31-C | source | 独自演習 |
| O34-A | source | 独自演習 |
| O34-B | source | 独自演習 |
| O34-C | source | 独自演習 |
| O36-A | source | 独自演習 |
| O36-B | source | 独自演習 |
| O36-C | source | 独自演習 |
| O37-A | source | 独自演習 |
| O37-B | source | 独自演習 |
| O37-C | source | 独自演習 |
| O40-A | source | 独自演習 |
| O40-B | source | 独自演習 |
| O40-C | source | 独自演習 |
| O43-A | source | 独自演習 |
| O43-B | source | 独自演習 |
| O43-C | source | 独自演習 |
| O44-A | source | 独自演習 |
| O44-B | source | 独自演習 |
| O44-C | source | 独自演習 |
| O46-A | source | 独自演習 |
| O46-B | source | 独自演習 |
| O46-C | source | 独自演習 |
| O49-A | source | 独自演習 |
| O49-B | source | 独自演習 |
| O49-C | source | 独自演習 |
| O53-A | source | 独自演習 |
| O53-B | source | 独自演習 |
| O53-C | source | 独自演習 |
| C-SQL-01 | code, source | 独自演習 |
| C-SQL-02 | code, source | 独自演習 |
| C-SQL-03 | code, source | 独自演習 |
| C-SQL-04 | code, source | 独自演習 |
| C-SQL-05 | code, source | 独自演習 |
| C-SQL-06 | code | 独自演習 |
| C-SQL-07 | code, source | 独自演習 |
| C-SQL-08 | explanation, source | 独自演習 |
| C-PY-01 | source | 独自演習 |
| C-PY-02 | source | 独自演習 |
| C-PY-03 | code, source | 独自演習 |
| C-PY-04 | code, source | 独自演習 |
| C-PY-05 | code, source | 独自演習 |
| C-PY-06 | source | 独自演習 |
| C-PY-07 | source | 独自演習 |
| C-PY-08 | code, source | 独自演習 |
| C-PY-09 | question, code | 独自演習 |
| C-PY-10 | source | 独自演習 |
| C-KQL-01 | code, source | 独自演習 |
| C-KQL-02 | code, source | 独自演習 |
| C-KQL-03 | code, source | 独自演習 |
| C-KQL-04 | code, source | 独自演習 |
| C-KQL-05 | code, source | 独自演習 |
| C-KQL-06 | code, source | 独自演習 |
| C-KQL-07 | code, source | 独自演習 |
| C-KQL-08 | code, source | 独自演習 |
| C-KQL-09 | code, source | 独自演習 |
| C-KQL-10 | source | 独自演習 |
| ORD-01 | source | 独自演習 |
| ORD-03 | source | 独自演習 |
| ORD-05 | reviewStatus, scorable, holdReason | 採点保留 |
| ORD-15 | reviewStatus, scorable, holdReason | 採点保留 |
| ORD-17 | source | 独自演習 |
| ORD-18 | reviewStatus, scorable, holdReason | 採点保留 |
| O02-D | source | 独自演習 |
| O03-D | source | 独自演習 |
| O04-D | source | 独自演習 |
| O05-D | source | 独自演習 |
| O07-D | source | 独自演習 |
| O08-D | source | 独自演習 |
| O09-D | source | 独自演習 |
| O12-D | source | 独自演習 |
| O13-D | source | 独自演習 |
| O40-D | source | 独自演習 |
| O43-D | source | 独自演習 |
| O44-D | source | 独自演習 |
| O46-D | source | 独自演習 |
| O49-D | source | 独自演習 |
| PA50-07 | source | 独自演習 |
| PA50-09 | source | 独自演習 |
| PA50-12 | source | 独自演習 |
| PA50-29 | question, code, choices, explanation, source, reviewStatus, scorable, holdReason | 独自演習 |
| PA50-36 | reviewStatus, scorable, holdReason | 採点保留 |
| PA50-46 | code | 独自演習 |
| PDF-M1-04 | source | 独自演習 |
| PDF-M1-20 | source | 独自演習 |
| PDF-M1-24 | source | 独自演習 |
| PDF-M1-27 | source | 独自演習 |
| PDF-M2-02 | source | 独自演習 |
| PDF-M2-03 | source | 独自演習 |
| PDF-M2-04 | source | 独自演習 |
| PDF-M2-11 | source | 独自演習 |
| PDF-M2-13 | source | 独自演習 |
| PDF-M2-14 | source | 独自演習 |
| PDF-M2-15 | source | 独自演習 |
| PDF-M2-19 | source | 独自演習 |
| PDF-M2-20 | source | 独自演習 |
| PDF-M2-23 | source | 独自演習 |
| PDF-M2-26 | source | 独自演習 |
| PDF-M2-30 | source | 独自演習 |
| PDF-M3-02 | code | 独自演習 |
| PDF-M3-07 | source | 独自演習 |
| PDF-M3-13 | source | 独自演習 |
| PDF-M3-15 | source | 独自演習 |
| PDF-M3-24 | source | 独自演習 |
| PDF-M3-25 | source | 独自演習 |
| PDF-M3-30 | source | 独自演習 |
| BASIC-5 | source | 独自演習 |
| BASIC-6 | question | 独自演習 |
| BRIDGE-1 | caseText, explanation | 独自演習 |
| BRIDGE-2 | caseText, explanation | 独自演習 |
| BRIDGE-3 | caseText, explanation | 独自演習 |
| BRIDGE-10 | caseText, explanation | 独自演習 |
| BRIDGE-11 | caseText, explanation | 独自演習 |
| BRIDGE-12 | caseText, explanation | 独自演習 |
| PALIVE-20261106-01 | question, explanation | 独自演習 |
| PALIVE-20261106-03 | question, explanation | 独自演習 |
| PALIVE-20261106-05 | reviewStatus, scorable, holdReason | 採点保留 |
| PALIVE-20261106-11 | question, explanation | 独自演習 |
| PALIVE-20261106-17 | question, code, choices, explanation, source | 独自演習 |
| PALIVE-20261106-19 | explanation, reviewStatus, scorable, holdReason | 採点保留 |
| PALIVE-20261106-21 | question | 独自演習 |
| PALIVE-20261106-22 | question, explanation | 独自演習 |
| PALIVE-20261106-24 | source | 独自演習 |
| PALIVE-20261106-26 | source | 独自演習 |
| PALIVE-20261106-27 | question, code, choices, explanation, type, reviewStatus, scorable, holdReason | 独自演習 |
| PALIVE-20261106-29 | question, code, choices, explanation, source | 独自演習 |
| PALIVE-20261106-34 | question, explanation, source | 独自演習 |
| PALIVE-20261106-38 | choices, explanation | 独自演習 |
| PA-20261114-01 | question, explanation | 独自演習 |
| PA-20261114-02 | question, explanation | 独自演習 |
| PA-20261114-07 | question, explanation | 独自演習 |
| PA-20261114-10 | question | 独自演習 |
| PA-20261114-12 | reviewStatus, scorable, holdReason | 採点保留 |
| PA-20261114-13 | source, reviewStatus, scorable, holdReason | 採点保留 |
| PA-20261114-14 | question | 独自演習 |
| PA-20261114-16 | question, code, choices, explanation, source, type, reviewStatus, scorable, holdReason | 独自演習 |
| PA-20261114-17 | question | 独自演習 |
| PA-20261114-18 | question | 独自演習 |
| PA-20261114-19 | question, source | 独自演習 |
| PA-20261114-20 | source | 独自演習 |
| PA-20261114-25 | question | 独自演習 |
| PA-20261114-26 | source | 独自演習 |
| PA-20261114-27 | question, source | 独自演習 |
| PA-20261114-29 | source | 採点保留 |
| PA-20261114-30 | question | 独自演習 |
| PA-20261114-33 | question | 独自演習 |
| PA-20261114-34 | question | 独自演習 |
| PA-20261114-38 | question, choices, explanation | 独自演習 |
| PA-20261114-39 | question | 独自演習 |
| PA-20261114-46 | question | 独自演習 |
| PA-20261114-47 | question | 独自演習 |
| PA-20261114-48 | question | 独自演習 |
| PA-20261114-49 | question | 独自演習 |
| PA-PDF-20261112-01 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-02 | question, explanation, instruction | 採点保留 |
| PA-PDF-20261112-03 | explanation, instruction | 独自演習 |
| PA-PDF-20261112-04 | explanation, type, groups, instruction | 独自演習 |
| PA-PDF-20261112-05 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-06 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-07 | question, instruction | 独自演習 |
| PA-PDF-20261112-08 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-09 | explanation, holdReason, instruction | 採点保留 |
| PA-PDF-20261112-10 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-11 | question, code, explanation, type, groups, instruction | 独自演習 |
| PA-PDF-20261112-12 | question, choices, explanation, instruction | 独自演習 |
| PA-PDF-20261112-13 | question, explanation, instruction | 採点保留 |
| PA-PDF-20261112-14 | question, explanation, instruction | 採点保留 |
| PA-PDF-20261112-15 | question, explanation, instruction | 採点保留 |
| PA-PDF-20261112-16 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-17 | question, explanation, type, groups, instruction | 独自演習 |
| PA-PDF-20261112-18 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-19 | question, instruction | 独自演習 |
| PA-PDF-20261112-20 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-21 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-22 | question, type, groups, instruction | 独自演習 |
| PA-PDF-20261112-23 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-24 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-25 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-26 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-27 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-28 | explanation, instruction | 独自演習 |
| PA-PDF-20261112-29 | question, explanation, reviewStatus, scorable, holdReason, instruction | 採点保留 |
| PA-PDF-20261112-30 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-31 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-32 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-33 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-34 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-35 | question, type, groups, instruction | 独自演習 |
| PA-PDF-20261112-36 | question, instruction | 独自演習 |
| PA-PDF-20261112-37 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-38 | question, explanation, instruction | 採点保留 |
| PA-PDF-20261112-39 | explanation, instruction | 独自演習 |
| PA-PDF-20261112-40 | question, instruction | 独自演習 |
| PA-PDF-20261112-41 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-42 | question, source, instruction | 独自演習 |
| PA-PDF-20261112-43 | explanation, instruction | 独自演習 |
| PA-PDF-20261112-44 | explanation, instruction | 独自演習 |
| PA-PDF-20261112-45 | question, explanation, instruction | 採点保留 |
| PA-PDF-20261112-46 | question, explanation, instruction | 採点保留 |
| PA-PDF-20261112-47 | question, code, choices, explanation, source, type, instruction | 独自演習 |
| PA-PDF-20261112-48 | question, code, source, type, groups, instruction | 独自演習 |
| PA-PDF-20261112-49 | question, explanation, instruction | 独自演習 |
| PA-PDF-20261112-50 | question, explanation, type, groups, instruction | 独自演習 |

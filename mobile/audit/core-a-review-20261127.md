# 基本単一選択の選択肢改訂（2026-11-27）

販売対象の `Oxx-A` 49問を一覧で点検したところ、複数の問題で誤答肢が分野外の語や不自然な操作になっていた。最初の10問について、同じ製品領域の機能を比較しないと選べない選択肢に改訂した。`O03-A` は二つの権限面を明示するため設問も具体化し、`O04-A` は現行の「Apache Airflow job」表記と、DAG作成・実行の説明がある公式ページへ根拠を更新した。正答インデックスは維持し、販売用は220問のまま。

| ID | 判断する違い | 仕様確認元 |
| --- | --- | --- |
| O02-A | ドメインによる部門整理と、認定・機密分類・アクセス権の違い | [Learn](https://learn.microsoft.com/en-us/fabric/governance/domains) |
| O03-A | アイテム操作を扱う制御面と、OneLakeデータ閲覧を扱う制御面 | [Learn](https://learn.microsoft.com/en-us/fabric/onelake/security/get-started-security) |
| O04-A | Python DAGを管理するApache Airflow jobと、Fabric Pipelineなどの実行機能 | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/create-apache-airflow-jobs) |
| O05-A | Git連携による版管理と、Deployment pipelineによる配布 | [Learn](https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration) |
| O06-A | Warehouseデータベースプロジェクトのビルド・公開と、Git・配布機能 | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project) |
| O07-A | Deployment pipelineのステージと、Gitブランチ・Copy activity | [Learn](https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines) |
| O08-A | ワークスペースロールと、データ行制御・個別アイテム共有 | [Learn](https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces) |
| O09-A | Lakehouseのアイテム共有と、ワークスペース全体の権限 | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sharing) |
| O10-A | 行・列・オブジェクトごとのOneLakeセキュリティ | [Learn](https://learn.microsoft.com/en-us/fabric/onelake/security/table-column-row-security) |
| O11-A | Dynamic Data Maskingのマスク表示と、行・列のアクセス制限 | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking) |

各問の設問、選択肢、正答、解説を読んで上記の公式仕様と照合した。これはMicrosoftによる個別解答確認ではない。元原稿の作成経緯と権利の最終確認は販売者に残る。

## 正答の長さで推測しやすい11問の追加改訂

販売用の単一選択問題で、正答文がほかのすべての選択肢の2倍以上の長さだった `Oxx-A` 11問を抽出した。選択肢の長さだけが手掛かりにならないよう、同じ論点で比較できる誤答肢へ改訂した。`O18-A` と `O52-A` は公式仕様の範囲に合わせて正答文も具体化し、各問の解説を更新した。正答インデックスと販売用220問は維持。

| ID | 判断する違い | 仕様確認元 |
| --- | --- | --- |
| O12-A | 機密ラベルと認定・ワークスペース権限・ドメイン | [Learn](https://learn.microsoft.com/en-us/fabric/governance/information-protection) |
| O18-A | Pipelineの実行時パラメーターと固定値・複製 | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/parameters) |
| O19-A | watermarkによる差分読取と、全件コピー・進捗の先行確定 | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse) |
| O20-A | Factの粒度・Dimensionキーと列名・行数だけの整合 | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview) |
| O22-A | 保存先をワークロードで選ぶことと、単一エンジンへの一律統一 | [Learn](https://learn.microsoft.com/en-us/fabric/fundamentals/store-data) |
| O30-A | 重複・欠損・遅延到着それぞれの品質処理とcheckpoint | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing) |
| O40-A | Semantic modelの更新履歴と容量・レポート応答時間 | [Learn](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) |
| O42-A | 失敗Activityの入力・出力・エラー詳細と全体時間・Retry | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-troubleshoot-guide) |
| O50-A | Activity別の所要時間とCopy設定・容量 | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory) |
| O51-A | Warehouseの統計・キャッシュ・結合と初回実行時間 | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance) |
| O52-A | Eventhouseの取り込み・容量・Premium cacheとソース件数のみの監視 | [Learn](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse) |

これらもMicrosoftによる個別解答確認ではない。独立の教材品質確認として、設問・全選択肢・正答・解説をID別に見直した。

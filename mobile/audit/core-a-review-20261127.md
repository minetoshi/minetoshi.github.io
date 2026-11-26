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

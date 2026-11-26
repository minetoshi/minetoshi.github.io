# 基本問題の定型設問改訂（2026-11-27）

販売対象の49テーマにある `Oxx-B` 49問を点検したところ、47問は同じテーマの `Oxx-A` の正答を第1正答として再利用し、「適切な実装・判断を2つ選べ」という定型文だった。選択肢も分野外の語で消去しやすい。これは販売用教材としての学習価値を下げるため、まず8問をテーマ内の別の判断へ改訂した。残る39問は継続監査の対象とする。改訂後も販売対象は220問。

| ID | 確認した論点 | 改訂内容 |
| --- | --- | --- |
| O01-A | Sparkのワークスペース設定画面はData Engineering/ScienceのSpark Compute | 旧「Spark settings」を現行の画面名へ直し、既定プールに設問を絞った |
| O01-B | Starter PoolとCustom Poolの構成・起動時間・容量側の許可 | Aの操作を再掲せず、プール選択の留意点を問う |
| O02-B | ドメインは分類・発見を助けるが、割り当て自体はアクセス権を変えない | 権限との区別を問う |
| O03-B | ワークスペース・アイテム権限とOneLakeのデータ権限は制御対象が違う | 行・列の制限を含む二層を問う |
| O04-B | Airflow Starter Poolは低頻度用途、Custom Poolは常時運用に向く | 起動待ちと基本コストを含む選択を問う |
| O05-B | Fabric Git連携はワークスペース単位で対応アイテムを版管理する | ブランチ・復元と対応範囲を問う |
| O06-B | Fabric WarehouseプロジェクトはSynapse Data WarehouseターゲットとSDK形式を使う | 具体的なプロジェクト設定を問う。機能はプレビュー |
| O07-B | Deployment pipelineは対応アイテムのステージ間配布、Gitは版管理 | 両者の役割を比較する |
| O08-B | Warehouseの作成・変更はContributor以上、Git接続はAdmin | ロール表の具体的権限を問う |

正答数はAが1、Bが各2で、正答インデックスは維持した。設問・選択肢・解説をID単位で読み、公式仕様と照合した。これはMicrosoftによる個別解答確認ではない。元原稿を含む作成経緯と権利の最終確認は販売者に残る。

## 仕様確認元

- [Microsoft Learn: Spark workspace administration settings](https://learn.microsoft.com/en-us/fabric/data-engineering/workspace-admin-settings)
- [Microsoft Learn: Fabric domains](https://learn.microsoft.com/en-us/fabric/governance/domains)
- [Microsoft Learn: Data security in OneLake](https://learn.microsoft.com/en-us/fabric/onelake/security/get-started-security)
- [Microsoft Learn: Apache Airflow compute in Fabric](https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-compute)
- [Microsoft Learn: Fabric Git integration](https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration)
- [Microsoft Learn: Develop warehouse projects](https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project)
- [Microsoft Learn: Deployment pipelines](https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines)
- [Microsoft Learn: Roles in workspaces](https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces)

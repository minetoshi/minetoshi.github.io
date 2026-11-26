# 基本問題の定型設問改訂（2026-11-27）

販売対象の49テーマにある `Oxx-B` 49問を点検したところ、47問は同じテーマの `Oxx-A` の正答を第1正答として再利用し、「適切な実装・判断を2つ選べ」という定型文だった。選択肢も分野外の語で消去しやすい。販売用教材としての学習価値を上げるため、47問すべてをテーマ内の別の判断へ改訂した。既に独立した `O16-B` と `O23-B` は維持した。改訂後も販売対象は220問。

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

## 追加39問のID別確認

| ID | 確認した仕様と新しい判断 | 仕様確認元 |
| --- | --- | --- |
| O09-B | Lakehouse共有は関連SQL endpointのReadを含むが、ワークスペース所属・書き込みは与えない | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sharing) |
| O10-B | CLSは列、RLSは行を絞る。別経路の許可を拒否できず、管理系ロールには適用されない | [Learn](https://learn.microsoft.com/en-us/fabric/onelake/security/table-column-row-security) |
| O11-B | DDMは結果をマスクし保存値は変えない。網羅的照会への防御を単独では保証しない | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking) |
| O12-B | Purviewの保護ポリシーと関連付くラベルは条件によりアクセスを制御できる | [Learn](https://learn.microsoft.com/en-us/fabric/governance/information-protection) |
| O13-B | Promotedは書き込み権限者、Certifiedは管理者指定の認定者が付与する | [Learn](https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview) |
| O17-B | 定期実行は開始・終了日時、頻度、タイムゾーンを設定し、イベント実行はファイル到着などを起点にする | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs) |
| O18-B | Pipelineパラメーターは実行時に渡し、その実行中は値が一定 | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/parameters) |
| O19-B | 前回と今回のwatermarkで増分範囲を決め、コピー後に今回値を保存する | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse) |
| O20-B | Factは観測値・数値・Dimensionキー、Dimensionは分析対象の説明属性を持つ | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview) |
| O21-B | Structured Streamingは常時処理とavailable-nowの定期処理を同じAPI・互換チェックポイントで扱える | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview) |
| O22-B | LakehouseはファイルとDeltaテーブル、Warehouseは構造化データのSQL分析に向く | [Learn](https://learn.microsoft.com/en-us/fabric/fundamentals/store-data) |
| O24-B | Shortcut削除は参照先を消さないが、参照先パス変更はリンクを壊し得る | [Learn](https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts) |
| O25-B | Mirroringは対応ソースへの接続を作り、全DBまたは選択テーブルを継続同期する | [Learn](https://learn.microsoft.com/en-us/fabric/mirroring/overview) |
| O26-B | Pipelineはデータ移動・変換・制御活動をまとめてスケジュールする | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-overview) |
| O27-B | NotebookはSpark DataFrameの変換とPipelineからの実行に対応する | [Learn](https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data) |
| O28-B | Dimensionの非正規化は通常有利だが、非常に大きい場合などはsnowflake構造も検討する | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables) |
| O29-B | Dataflow Gen2の画面操作とNotebookのSpark DataFrameの両方で集計できる | [Learn](https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data) |
| O30-B | ストリーム重複排除はキーを状態保持し、チェックポイントは進捗と状態を保存する | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing) |
| O31-B | Eventstreamはコード不要でソース・変換・宛先を構成し、Kafka endpointも提供する | [Learn](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview) |
| O34-B | EventstreamのFilterはイベントを、Manage fieldsは列を調整する | [Learn](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview) |
| O35-B | バッチDataFrameの全操作がストリーミング入力に対応するわけではなく、開始時に計画検証される | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview) |
| O36-B | KQLのwhereは行、projectは列を絞り、topとの順序で結果が変わり得る | [Learn](https://learn.microsoft.com/en-us/kusto/query/tutorials/learn-common-operators) |
| O37-B | Fabric Eventstreamの時間窓はGROUP BYで用い、tumbling windowは開始を含まず終了を含む | [Learn](https://learn.microsoft.com/en-us/stream-analytics-query/windowing-azure-stream-analytics) |
| O38-B | Monitoring hubはワークスペース横断、Workspace monitoringはEventhouseへ実行ログを保存する | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory) |
| O39-B | Legacy Monitoring hubは活動実行の絞り込み、Capacity Metrics appは容量消費の確認に使う | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory) |
| O40-B | Importモデルはデータ更新が必要、DirectQueryは照会時に元ソースへ問い合わせる | [Learn](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data) |
| O41-B | PipelineアラートはMonitoring hub、活動単位の通知はOutlook/Teams活動でも構成できる | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/create-alerts-for-pipeline-runs) |
| O42-B | Pipelineエラー2103は必須値不足、2104はプロパティ型違い | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-troubleshoot-guide) |
| O43-B | Dataflow Gen2更新履歴はテーブル・活動詳細とMashup詳細ログを提供する | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor) |
| O44-B | Spark失敗時はMonitoring hub、Driverログ、Job・Stageの順に掘り下げる | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices) |
| O45-B | Eventhouse System overviewは容量・取り込みを示し、監視用EventhouseをKQLで照会できる | [Learn](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse) |
| O46-B | Eventstream Data insightsは入出力件数、Runtime logsは構成に応じたログを示す | [Learn](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor) |
| O47-B | Warehouse接続にはFabric Readが必要で、接続後の細かな権限はT-SQLでも管理できる | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/security) |
| O49-B | OPTIMIZEは小ファイルをまとめ、VACUUMは保持条件より古い未参照ファイルを消す | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance) |
| O50-B | Copy parallelismは単一活動内の並列数上限、throughput optimizationは別の設定 | [Learn](https://learn.microsoft.com/en-us/fabric/data-factory/copy-activity-performance-and-scalability-guide) |
| O51-B | Warehouseの統計は計画選択に使われ、結合・比較列の型をそろえると変換を減らせる | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance) |
| O52-B | Eventhouse System overviewは取り込み・使用量・上位DBを示す | [Learn](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse) |
| O53-B | Sparkのスキューはタスク時間の中央値と最大値の差やshuffle集中で調べる | [Learn](https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices) |
| O54-B | Warehouseの初回遅延はqueryinsightsのremote scan量と後続実行で判断する | [Learn](https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance) |

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

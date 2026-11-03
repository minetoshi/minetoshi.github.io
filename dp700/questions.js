// DP-700 Dojo v2 question bank
// Original practice questions mapped to the official DP-700 skills measured as of 2026-10-19.
// These are NOT leaked, recalled, or reproduced live exam questions.
(() => {
"use strict";
const S={
GUIDE:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700",
SPARK:"https://learn.microsoft.com/en-us/fabric/data-engineering/workspace-admin-settings",
DOMAIN:"https://learn.microsoft.com/en-us/fabric/governance/onelake-catalog-manage-settings",
AIRFLOW:"https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-jobs-migrate-azure-workflow-orchestration-manager",
GIT:"https://learn.microsoft.com/en-us/fabric/data-engineering/environment-git-and-deployment-pipeline",
DBPROJ:"https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project",
SECURITY:"https://learn.microsoft.com/en-us/fabric/data-warehouse/security",
ONELAKESEC:"https://learn.microsoft.com/en-us/fabric/onelake/security/table-column-row-security",
DDM:"https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking",
PIPELINE:"https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-overview",
TRIGGERS:"https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs",
PARAM:"https://learn.microsoft.com/en-us/fabric/data-factory/parameters",
STORE:"https://learn.microsoft.com/en-us/fabric/fundamentals/store-data",
SHORTCUT:"https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts",
MIRROR:"https://learn.microsoft.com/en-us/fabric/mirroring/overview",
ACCEL:"https://learn.microsoft.com/en-us/fabric/real-time-intelligence/query-acceleration-overview",
MONITOR:"https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
PIPEERR:"https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-troubleshoot-guide",
EVENTMON:"https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse",
PERF:"https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance",
VACUUM:"https://learn.microsoft.com/en-us/fabric/data-engineering/delta-lake-vacuum"
};
const D1="分析ソリューションの実装と管理",D2="データの取り込みと変換",D3="分析ソリューションの監視と最適化";
const O=[
["O01",D1,"Microsoft Fabric ワークスペース設定","Spark workspace settings","複数Notebookが使うSparkの既定ランタイムやプールをワークスペース単位で統一したい。","Workspace settings の Data Engineering/Science > Spark settings を構成する","必要に応じて既定環境・カスタムプールやリソース設定も管理する",["PipelineのScheduleだけ変更する","Power BIテーマを変更する","OneLake shortcutを作成する"],S.SPARK],
["O02",D1,"Microsoft Fabric ワークスペース設定","Domain workspace settings","部門別にFabricアイテムを整理し、データ所有責任を明確にしたい。","OneLake catalog の Govern > Domains でドメインを構成する","ドメイン所有者や対象ワークスペースを適切に割り当てる",["全アイテムを1つの個人Workspaceへ移す","Notebookの変数名だけ統一する","各テーブルにDynamic Data Maskingを設定する"],S.DOMAIN],
["O03",D1,"Microsoft Fabric ワークスペース設定","OneLake workspace settings","ワークスペースのOneLake利用とアクセス境界を統制したい。","ワークスペース/OneLake関連設定とOneLakeセキュリティを確認して構成する","アクセスは必要最小限とし、アイテム/データ粒度の権限も合わせて設計する",["データを毎回CSVへコピーして回避する","全ユーザーをWorkspace Adminにする","Sparkのexecutor数だけ変更する"],S.GUIDE],
["O04",D1,"Microsoft Fabric ワークスペース設定","Apache Airflow workspace settings","Python DAGをFabric上でスケジュール・監視したい。","Apache Airflow job（Data Workflow）の設定・ランタイム・接続を構成する","DAG、プール/ランタイム、認証接続、トリガー設定を要件に合わせる",["Dataflow Gen2だけでDAGを実行する","WarehouseのRLSでスケジュールする","Sensitivity labelでタスク依存を定義する"],S.AIRFLOW],
["O05",D1,"ライフサイクル管理","Version control","Notebookや対応Fabricアイテムの変更履歴をGitで管理したい。","Fabric Git integrationでワークスペースとリポジトリを接続する","ブランチ、コミット、PRレビューを用いて変更を統制する",["本番でのみ直接編集する","監査ログをソースコード代わりにする","Eventstreamに変更履歴を送る"],S.GIT],
["O06",D1,"ライフサイクル管理","Database projects","Fabric Warehouseのスキーマをコードとして管理・ビルド・公開したい。","SQL Database Projectを使ってスキーマを定義しビルド/公開する","Gitでプロジェクトを版管理し、デプロイ前にビルド検証する",["Lakehouse shortcutだけでDDLを管理する","Dynamic Data Maskingだけでスキーマを配布する","Power BI semantic modelをDatabase Projectとして扱う"],S.DBPROJ],
["O07",D1,"ライフサイクル管理","Deployment pipelines","開発→テスト→本番へFabricアイテムを段階的に昇格したい。","Deployment pipelineを作成し各ステージへワークスペースを割り当てる","環境差分はデプロイルールや接続再バインドで管理する",["1つのWorkspaceを全環境で共有する","本番だけGitを無効化する","毎回手作業でアイテムを作り直す"],S.GIT],
["O08",D1,"セキュリティとガバナンス","Workspace-level access controls","ワークスペース全体の編集者と閲覧者を分離したい。","Admin/Member/Contributor/ViewerなどWorkspaceロールを要件に合わせて付与する","最小権限でロールを割り当て、広すぎるロールを避ける",["全員Adminにする","RLSだけでWorkspace編集権限も制御する","Sensitivity labelだけで編集権限を制御する"],S.SECURITY],
["O09",D1,"セキュリティとガバナンス","Item-level access controls","特定Lakehouseだけを一部ユーザーに共有したい。","Workspace全体の権限を広げず、対象Item単位で共有/権限を付与する","必要なItemと操作だけを許可する",["Workspace Adminを付与する","Tenant Adminを付与する","すべてのItemを公開する"],S.SECURITY],
["O10",D1,"セキュリティとガバナンス","Row/column/object/folder/file access controls","同じデータ資産でも行・列・テーブル・フォルダー単位で可視範囲を変えたい。","要件に応じてRLS/CLS/OLSやOneLakeのテーブル・フォルダー権限を使い分ける","複数の粒度を組み合わせる場合は権限モデルの相互作用も確認する",["Workspace名を変更する","PipelineのRetry回数で可視範囲を制御する","Gitブランチ名でデータを隠す"],S.ONELAKESEC],
["O11",D1,"セキュリティとガバナンス","Dynamic data masking","SELECT権限は維持しつつ機密列を非特権ユーザーにはマスク表示したい。","Dynamic Data Maskingを対象列へ設定する","DDMだけを完全な防御とせず、RLS/CLS/SQL権限などと組み合わせる",["元データ自体を書き換えて伏字にする","全員にUNMASKを付与する","Eventstreamで列を非表示にする"],S.DDM],
["O12",D1,"セキュリティとガバナンス","Sensitivity labels","機密度を分類し、派生コンテンツにも情報保護方針を反映したい。","Sensitivity labelを適切なFabricアイテムへ適用する","ラベル伝播や組織の情報保護ポリシーを確認する",["Lakehouseを削除する","Spark poolを変更する","Pipelineの並列度だけ下げる"],S.GUIDE],
["O13",D1,"セキュリティとガバナンス","Endorse items","利用者に信頼できる公式データ資産を識別させたい。","Promoted/CertifiedなどのEndorsementを適切に使う","認定プロセスと所有者を定め、信頼性を維持する",["Sensitivity labelを信頼度の代わりに使う","Shortcutを作れば自動でCertifiedになる","全Itemを無条件にCertifiedにする"],S.GUIDE],
["O14",D1,"セキュリティとガバナンス","Fabric audit logs","誰がいつどの操作をしたか監査可能にしたい。","Microsoft Fabricの監査ログを有効活用して操作履歴を追跡する","監査対象・保持・調査手順を運用設計に含める",["Notebook出力だけを監査証跡とする","ログを無効化して性能を優先する","Gitだけでユーザー操作を監査する"],S.SECURITY],
["O15",D1,"セキュリティとガバナンス","OneLake security","OneLake内のデータアクセスをデータ粒度で制御したい。","OneLake security rolesと対応する行/列/オブジェクト制御を構成する","他の権限モデルから得たアクセスと競合しないか確認する",["Workspace名だけでアクセス制御する","Pipeline parameterでRLSを代替する","全ユーザーに同じRoleを付与する"],S.ONELAKESEC],
["O16",D1,"プロセスのオーケストレーション","Choose Dataflow Gen2 vs pipeline vs notebook","GUI変換、処理のオーケストレーション、複雑なSpark処理を要件ごとに使い分けたい。","GUI変換はDataflow Gen2、複数処理の制御はPipeline、コード中心の分散処理はNotebookを基本に選ぶ","保守者のスキル、データ量、再利用性、オーケストレーション要件も判断材料にする",["すべてNotebookに統一する","すべてDataflow Gen2に統一する","すべてDeployment pipelineで変換する"],S.PIPELINE],
["O17",D1,"プロセスのオーケストレーション","Schedules and event-based triggers","毎日定刻またはファイル到着時に処理を開始したい。","時間要件はSchedule、イベント起点はEvent triggerを使い分ける","タイムゾーン、開始/終了日、イベント種別、失敗通知も確認する",["RLSで実行時刻を設定する","Sensitivity labelでファイル到着を検知する","Shortcutでスケジュールを定義する"],S.TRIGGERS],
["O18",D1,"プロセスのオーケストレーション","Notebook/pipeline parameters and dynamic expressions","同じPipelineを複数テーブル・環境で再利用したい。","Pipeline/NotebookのパラメーターとDynamic expressionsを使ってハードコードを減らす","依存関係、実行時値、接続やパスの差分を安全に渡す",["テーブルごとにPipelineを完全複製する","本番値をコードへ直書きする","毎回手作業でJSONを書き換える"],S.PARAM],

["O19",D2,"読み込みパターン","Full and incremental loads","初回は全件、以降は変更分だけ効率よく読み込みたい。","初回Full load後、watermark/変更検知を使ったIncremental loadを設計する","再実行時の冪等性とwatermark更新タイミングを設計する",["毎回必ず全件削除して再ロードする","変更判定を持たずランダムに抽出する","RLSで変更行を推定する"],S.GUIDE],
["O20",D2,"読み込みパターン","Prepare data for dimensional model","分析用のFact/Dimensionモデルへロードする前処理を行いたい。","粒度を定義し、ディメンションキー・重複・履歴・データ型を整える","FactとDimensionの関係、サロゲートキーや遅延到着ディメンションを考慮する",["すべてを1列のJSONにする","主キーを削除して関係をなくす","集計粒度を毎回変える"],S.GUIDE],
["O21",D2,"読み込みパターン","Streaming loading pattern","イベントを継続的に低遅延で取り込みたい。","ストリーミングソース→処理エンジン→保存先の連続パターンを設計する","スループット、遅延、再送、順序、ウィンドウ、チェックポイントを考慮する",["毎晩CSVを1回だけFull loadする","Deployment pipelineでイベントを受信する","Sensitivity labelをストリームエンジンにする"],S.GUIDE],
["O22",D2,"バッチ取り込みと変換","Choose appropriate data store","Spark/Delta、SQL分析、リアルタイムイベントなど用途に合う保存先を選びたい。","Lakehouse/Warehouse/Eventhouse/Mirrored database等をワークロード特性で選ぶ","SQL中心かSpark中心か、リアルタイム性、レプリケーション要否を比較する",["常にWarehouseだけを選ぶ","常にLakehouseだけを選ぶ","保存先を選ばずCSVだけにする"],S.STORE],
["O23",D2,"バッチ取り込みと変換","Choose Dataflows Gen2/notebooks/KQL/T-SQL","変換処理に最適なエンジンと言語を選びたい。","GUIはDataflow Gen2、大規模SparkはNotebook/PySpark、リレーショナルはT-SQL、RTIはKQLを目安に選ぶ","データ形状、開発者スキル、遅延、保守性を考慮する",["言語を無視して常に同じ手段を使う","Gitを変換エンジンとして使う","Sensitivity labelで集計する"],S.GUIDE],
["O24",D2,"バッチ取り込みと変換","OneLake shortcuts","データを複製せず別OneLake/外部ストレージを参照したい。","OneLake shortcutを作成してゼロコピー参照する","呼び出しユーザーのアクセス権、スキーマ、リージョン、性能を確認する",["Mirroringで必ず物理コピーする","毎回Copy activityで全件複製する","Deployment pipelineでデータを移送する"],S.SHORTCUT],
["O25",D2,"バッチ取り込みと変換","Mirroring","業務DBの変更をOneLakeへほぼリアルタイムに継続レプリケーションしたい。","Fabric Mirroringを対応ソースに構成する","ソース対応状況、レプリケーション遅延、接続、監視を確認する",["Shortcutで変更履歴を複製する","毎日手動CSVエクスポートする","RLSでCDCを代替する"],S.MIRROR],
["O26",D2,"バッチ取り込みと変換","Ingest using pipelines","複数ソースから定期的にデータをコピーし、後続処理を制御したい。","Fabric Data Factory PipelineのCopy activity等で取り込みを実装する","依存関係、Retry、パラメーター、トリガーを設計する",["Sensitivity labelでデータをコピーする","Git PRでデータを転送する","Viewerロールで取り込みを実行する"],S.PIPELINE],
["O27",D2,"バッチ取り込みと変換","Transform using PySpark/SQL/KQL","データ形状とエンジンに応じてSQL、PySpark、KQLで変換したい。","SQL/PySpark/KQLそれぞれの得意領域と実行先に合わせて変換する","フィルター、結合、集計、欠損/重複処理を各言語で実装できるようにする",["すべての変換をDAXだけで行う","HTMLでデータ変換する","Git commitで行を集計する"],S.GUIDE],
["O28",D2,"バッチ取り込みと変換","Denormalize data","分析クエリで結合回数を減らし読み取りを単純化したい。","用途に応じて正規化データを適切に非正規化する","重複増加、更新整合性、ストレージとのトレードオフを考慮する",["すべてのテーブルを無条件に1列へ圧縮する","主キーをランダム化する","RLSを削除する"],S.GUIDE],
["O29",D2,"バッチ取り込みと変換","Group and aggregate data","売上を日付・商品別に集計したい。","SQL GROUP BY、PySpark groupBy、KQL summarizeなどでグループ化・集計する","集計粒度とNULL、重複、時刻境界を確認する",["ORDER BYだけで集計する","Sensitivity labelでSUMを計算する","Deployment pipelineでGROUP BYする"],S.GUIDE],
["O30",D2,"バッチ取り込みと変換","Duplicates, missing, late-arriving data","重複・欠損・遅延到着があるデータを品質維持しながら処理したい。","重複排除、NULL処理、watermark/遅延許容などを要件に応じて実装する","再送・冪等性・遅延到着ディメンションの扱いを設計する",["エラー行をすべて黙って削除する","全列を文字列にするだけ","Git履歴でNULLを補完する"],S.GUIDE],
["O31",D2,"ストリーミング取り込みと変換","Choose streaming engine","イベント量・遅延・分析方式に応じてストリーミングエンジンを選びたい。","Eventstream/Eventhouse/KQLまたはSpark Structured Streamingを要件で選ぶ","低コードルーティングかコード中心処理か、保存先とレイテンシを比較する",["WarehouseのDeployment pipelineをストリームエンジンにする","Sensitivity labelでイベントを処理する","Gitをメッセージブローカーにする"],S.GUIDE],
["O32",D2,"ストリーミング取り込みと変換","Native tables vs OneLake shortcuts in RTI","Eventhouseへ直接取り込むかOneLake上の既存データを参照するか選びたい。","高性能な直接取り込みはNative table、ゼロコピー参照はOneLake shortcutを使い分ける","データ重複、性能、鮮度、ストレージコストを比較する",["常にNative tableだけを使う","常にShortcutだけを使う","Deployment pipelineのステージ数で決める"],S.ACCEL],
["O33",D2,"ストリーミング取り込みと変換","Query acceleration for OneLake shortcuts","OneLake shortcutのデータをEventhouseから高性能に照会したい。","必要な範囲でQuery accelerationを有効化する","キャッシュ期間、SSD/容量消費、スキーマ変更、制限事項を確認する",["データを自動的にWarehouseへ移動する","RLSを無効化すれば同等になる","Git integrationを有効化するだけ"],S.ACCEL],
["O34",D2,"ストリーミング取り込みと変換","Process data using Eventstream","イベントを取り込み、変換し、Eventhouse等へルーティングしたい。","Eventstreamでソース、変換、宛先を構成する","スループット、変換、ルーティング、障害時の監視を設計する",["Deployment pipelineでイベント本文を変換する","Workspace Viewerでストリームを作る","Sensitivity labelを宛先にする"],S.GUIDE],
["O35",D2,"ストリーミング取り込みと変換","Spark Structured Streaming","コードでステートフルなストリーム変換やチェックポイントを管理したい。","Spark Structured StreamingのreadStream/writeStreamとcheckpointを使う","出力モード、トリガー、watermark、状態管理を考慮する",["通常のspark.readだけで無限ストリームを管理する","SQL WarehouseだけでSpark checkpointを作る","RLSでmicro-batchを制御する"],S.GUIDE],
["O36",D2,"ストリーミング取り込みと変換","Process data using KQL","Eventhouseのイベントを低遅延でフィルター・集計したい。","KQLのwhere/project/summarize等で処理する","時間フィルターを早期適用し、必要列だけ扱うなどクエリ効率も考慮する",["DAXだけでEventhouseを処理する","Gitでイベントをフィルターする","Deployment pipelineでKQLを置換する"],S.EVENTMON],
["O37",D2,"ストリーミング取り込みと変換","Windowing functions","ストリームを5分単位などの時間窓で集計したい。","tumbling/hopping等の時間窓またはKQL bin()等を要件に応じて使う","イベント時刻、遅延到着、窓幅、オーバーラップを設計する",["ORDER BYだけで時間窓を作る","Sensitivity labelで窓幅を設定する","Workspaceロールで5分間隔を作る"],S.GUIDE],

["O38",D3,"Fabricアイテムの監視","Monitor data ingestion","取り込み件数・速度・失敗・遅延を継続監視したい。","Monitoring hubや各アイテムの実行詳細で取り込み実行を監視する","実行時間、行数、スループット、失敗傾向を確認する",["Git commit数だけを見る","Sensitivity label数を監視指標にする","Workspace名を毎日変える"],S.MONITOR],
["O39",D3,"Fabricアイテムの監視","Monitor data transformation","Notebook/Dataflow/Pipelineの変換処理の成功率と所要時間を追跡したい。","Monitoring hubやジョブ実行詳細・ログで変換処理を監視する","失敗箇所、処理時間、入力/出力、リソース使用を比較する",["本番でログを無効化する","Git branchだけで成功判定する","全処理を手動実行にする"],S.MONITOR],
["O40",D3,"Fabricアイテムの監視","Monitor semantic model refresh","Semantic modelの更新失敗や長時間化を検知したい。","更新履歴/Monitoring hub等でrefresh状態・時間・失敗を監視する","失敗通知や傾向監視を運用へ組み込む",["RLSを解除して監視する","Gitでrefreshを代替する","Shortcutを削除する"],S.MONITOR],
["O41",D3,"Fabricアイテムの監視","Configure alerts","Pipeline失敗や長時間実行を人手確認より早く検知したい。","Monitoring hubや対応機能でアラート/失敗通知を構成する","通知先、条件、ノイズ、テスト方法を決める",["全員Adminにする","ログを削除する","Eventstreamを停止する"],"https://learn.microsoft.com/en-us/fabric/data-factory/create-alerts-for-pipeline-runs"],
["O42",D3,"エラーの特定と解決","Pipeline errors","Pipelineが失敗した原因を特定して再実行したい。","Monitoring hubで失敗Activity、入力/出力、エラー詳細を確認して修正する","Retry可能な一時障害か、設定/データ不備かを切り分ける",["最初にWorkspaceを削除する","すぐ全データを消去する","エラーを見ずに無限Retryする"],S.PIPEERR],
["O43",D3,"エラーの特定と解決","Dataflow Gen2 errors","Dataflow Gen2の更新が失敗した。","更新履歴・エラー詳細・Power Queryステップ・接続/スキーマを順に確認する","Query folding、資格情報、型変換、宛先マッピングも疑う",["Notebookのセル色を変える","Warehouseを削除する","Gitブランチ名を短くする"],S.MONITOR],
["O44",D3,"エラーの特定と解決","Notebook errors","Fabric Notebookが実行時例外で失敗した。","失敗セル、例外メッセージ、Sparkジョブ/セッションログを確認する","入力スキーマ、ライブラリ、権限、リソース不足を切り分ける",["最初に全員Adminへ変更する","ログを消して再実行する","RLSを無効化するだけ"],S.SPARK],
["O45",D3,"エラーの特定と解決","Eventhouse errors","Eventhouseで取り込み/クエリエラーが発生した。","System overviewやKQL管理情報・取り込み状態を確認する","スキーマ、容量、取り込み率、接続、クエリを切り分ける",["Git履歴だけを見る","Sensitivity labelを外す","Workspaceを削除する"],S.EVENTMON],
["O46",D3,"エラーの特定と解決","Eventstream errors","Eventstreamのイベントが宛先へ届かない。","ソース接続、変換、ルーティング、宛先、実行状態を順に確認する","スキーマ不一致、認証、スループット/バックログを確認する",["Deployment pipelineの色を変える","RLSでルーティングを直す","Git commitを増やす"],S.GUIDE],
["O47",D3,"エラーの特定と解決","T-SQL errors","WarehouseのT-SQLが構文/オブジェクト/権限エラーで失敗した。","エラーメッセージと行番号、オブジェクト名、データ型、権限を確認する","最小再現クエリで切り分け、実行計画は性能問題時に確認する",["最初にcapacityだけ増やす","Git branchを変更する","Eventstreamを再起動する"],S.SECURITY],
["O48",D3,"エラーの特定と解決","OneLake shortcut errors","Shortcutの参照が失敗または遅い。","ターゲットパス、接続、呼び出しユーザー権限、スキーマ/リージョンを確認する","外部ソース制限やショートカット連鎖、認識遅延も確認する",["RLSをすべて削除する","Deployment pipelineを再作成する","Notebookテーマを変更する"],S.SHORTCUT],
["O49",D3,"パフォーマンス最適化","Optimize Lakehouse table","Lakehouseに小さなDeltaファイルが増えクエリが遅い。","OPTIMIZE/適切なパーティションやZORDER等でテーブルレイアウトを改善する","VACUUMは古いファイルのクリーンアップ目的で保持期間に注意して使う",["VACUUMだけで必ずクエリ性能が上がると考える","全列を文字列にする","RLSを解除する"],S.PERF],
["O50",D3,"パフォーマンス最適化","Optimize pipeline","Pipeline全体の所要時間が長い。","Activityごとの時間を計測し、ボトルネック・並列化・Copy設定を最適化する","不要な直列依存を減らし、Retry/データ量/ソース制約を確認する",["計測せずcapacityだけ最大化する","全Activityを1つにまとめる","ログを無効化する"],S.MONITOR],
["O51",D3,"パフォーマンス最適化","Optimize data warehouse","Warehouseクエリが遅い。","クエリパターン、フィルター、結合、データ量、実行特性を確認して最適化する","不要列/不要行のスキャンを減らし、データモデルも見直す",["最初にRLSをすべて削除する","Gitを無効化する","毎回SELECT *を推奨する"],S.PERF],
["O52",D3,"パフォーマンス最適化","Optimize Eventstream and Eventhouse","リアルタイム処理の遅延とEventhouseクエリ時間を下げたい。","取り込み率・バックログ・Eventhouse状態を測り、早期filterや適切な保存/アクセラレーションを使う","KQLの対象期間/列を絞り、RTIの容量とストレージ設計も確認する",["常に全期間全列を読む","Git commit数を増やす","Sensitivity labelを外す"],S.EVENTMON],
["O53",D3,"パフォーマンス最適化","Optimize Spark performance","Sparkの一部Taskだけ極端に遅くshuffle量も多い。","データスキュー、パーティション、shuffle、join戦略、cacheを計測して最適化する","小さい参照表ではbroadcast、偏りがあればrepartition等を検討する",["すべてcollect()してdriverへ集める","常に1partitionへcoalesceする","ログを見ずにexecutorを最大化する"],S.SPARK],
["O54",D3,"パフォーマンス最適化","Optimize query performance","SQL/KQL等のクエリで不要なデータを大量スキャンしている。","必要な期間・行・列へ早い段階で絞り、実行特性を測定して最適化する","partition pruning、query folding、適切なjoin/集計、キャッシュ等を状況で使う",["常にSELECT *を使う","フィルターは必ず最後に行う","全データをクライアントへ転送してから絞る"],S.PERF]
];

const q=[];
const push=(x)=>q.push(x);
for(const o of O){
  const [oid,domain,group,skill,scenario,correct,related,wrongs,source]=o;
  push({id:oid+"-A",objectiveId:oid,domain,group,skill,difficulty:"Medium",type:"single",
    question:scenario+" 最も適切な対応はどれか。",choices:[correct,...wrongs],answers:[0],
    explanation:correct+"。"+related+"。",source});
  push({id:oid+"-B",objectiveId:oid,domain,group,skill,difficulty:"Hard",type:"multi",selectCount:2,
    question:skill+"について、適切な実装・判断を2つ選べ。",choices:[correct,related,wrongs[0],wrongs[1]],answers:[0,1],
    explanation:"正解は「"+correct+"」と「"+related+"」。要件に直接対応し、公式スキルの意図にも合う。",source});
  push({id:oid+"-C",objectiveId:oid,domain,group,skill,difficulty:"Hard",type:"case",
    caseText:"ある企業がFabricを本番導入している。変更は監査可能で、運用負荷を増やさず、最小権限と再現性を重視する。",
    question:scenario+" このケースで最初に選ぶべき方針はどれか。",choices:[correct,...wrongs],answers:[0],
    explanation:correct+"。ケース条件を満たすうえで最も直接的な選択。"+related+"も実装時に重要。",source});
}

const codeQ=(id,domain,skill,lang,code,question,choices,answer,explanation,source)=>{
  push({id,objectiveId:"CODE",domain,group:"コード読解",skill,difficulty:"Hard",type:"code",language:lang,code,question,choices,answers:[answer],explanation,source});
};
// SQL 10
codeQ("C-SQL-01",D2,"SQL集計","sql","SELECT ProductId, SUM(Amount) AS Total\\nFROM Sales\\n_____ ProductId;","商品別合計を得るため空欄に入る句はどれか。",["GROUP BY","ORDER BY","PARTITION BY","HAVING"],0,"集計関数と非集計列を組み合わせるためProductIdでGROUP BYする。",S.GUIDE);
codeQ("C-SQL-02",D2,"NULL処理","sql","SELECT CustomerId, COALESCE(City, 'Unknown') AS City\\nFROM Customers;","COALESCEの目的はどれか。",["NULLを代替値に置換する","重複行を削除する","行を時系列に並べる","列を暗号化する"],0,"COALESCEは最初のNULLでない値を返し、欠損値処理に使える。",S.GUIDE);
codeQ("C-SQL-03",D2,"重複排除","sql","WITH x AS (\\n SELECT *, ROW_NUMBER() OVER(PARTITION BY BusinessKey ORDER BY UpdatedAt DESC) rn\\n FROM Source\\n)\\nSELECT * FROM x WHERE rn = 1;","このクエリの主な目的はどれか。",["BusinessKeyごとに最新行を1件残す","全行をランダム抽出する","NULLだけを削除する","テーブルを物理分割する"],0,"ROW_NUMBERでキーごとに更新日時降順の番号を振り、最新1行を残す。",S.GUIDE);
codeQ("C-SQL-04",D2,"ディメンション準備","sql","SELECT f.OrderId, d.CustomerKey, f.Amount\\nFROM StgFact f\\nLEFT JOIN DimCustomer d ON f.CustomerCode=d.CustomerCode;","このLEFT JOINを使う狙いとして最も適切なのはどれか。",["Fact候補へDimensionキーを付与しつつ未一致行も保持する","未一致行を必ず捨てる","CustomerCodeを暗号化する","ストリームを5分窓にする"],0,"LEFT JOINならステージング側を保持したままDimensionキーを引けるため、未一致の検知にも使える。",S.GUIDE);
codeQ("C-SQL-05",D2,"条件変換","sql","SELECT Amount, CASE WHEN Amount >= 100000 THEN 'High' ELSE 'Normal' END AS Tier\\nFROM Sales;","CASE式の役割はどれか。",["条件に応じて派生値を作る","テーブルをVACUUMする","権限を付与する","Gitへコミットする"],0,"CASEは条件分岐で派生列を作る。",S.GUIDE);
codeQ("C-SQL-06",D3,"Query performance","sql","SELECT OrderId, Amount\\nFROM Sales\\nWHERE OrderDate >= '2026-11-01';","日付パーティション/クラスタリングが適切な場合、このWHEREの利点はどれか。",["不要期間の読み取り削減が期待できる","必ず全表スキャンになる","RLSが無効になる","VACUUMが自動実行される"],0,"早期に日付で絞ることでスキャン量を減らせる。",S.PERF);
codeQ("C-SQL-07",D2,"Group and aggregate","sql","SELECT Region, COUNT(*) AS Orders, AVG(Amount) AS AvgAmount\\nFROM Sales\\nGROUP BY Region;","結果の粒度はどれか。",["Regionごとに1行","Sales全体で必ず1行","OrderIdごとに1行","列ごとに1行"],0,"GROUP BY Regionなので地域単位の集計結果になる。",S.GUIDE);
codeQ("C-SQL-08",D3,"T-SQL troubleshooting","sql","SELECT CustomerId Amount FROM Sales;","CustomerIdとAmountの2列を選択したかった。最初に確認すべき問題はどれか。",["列区切りのカンマ欠落","GROUP BYの過剰指定","VACUUM不足","Spark pool不足"],0,"構文/意図の確認ではSELECT列の区切りをまず確認する。",S.SECURITY);
codeQ("C-SQL-09",D1,"Dynamic data masking","sql","GRANT UNMASK ON OBJECT::dbo.Customers TO Analyst;","この権限の意味として最も近いものはどれか。",["対象オブジェクトのマスク済み値を非マスクで参照可能にする","RLSを自動作成する","Workspace Adminにする","データを暗号化する"],0,"UNMASKはマスクされた値を見られる権限。最小権限で付与する。",S.DDM);
codeQ("C-SQL-10",D3,"列削減","sql","SELECT OrderId, Amount FROM Sales WHERE Status='Open';","SELECT *よりこの形が望ましい場合がある理由はどれか。",["必要な列・行に絞りI/Oを減らせる可能性がある","必ずRLSを無効化する","Git差分が消える","Eventhouseへ自動複製される"],0,"必要な列/行だけ取得することは一般的なクエリ最適化。",S.PERF);
// PySpark 10
codeQ("C-PY-01",D2,"PySpark重複排除","python","clean = df.dropDuplicates(['BusinessKey'])","この処理の目的はどれか。",["BusinessKey基準で重複行を除く","NULLを0で埋める","行を5分窓で集計する","列名を暗号化する"],0,"dropDuplicatesにキー列を渡すとそのキー基準で重複排除できる。",S.GUIDE);
codeQ("C-PY-02",D2,"PySpark欠損処理","python","clean = df.fillna({'City':'Unknown','Amount':0})","この処理の目的はどれか。",["指定列のNULLを既定値で補完する","重複を削除する","Spark poolを変更する","RLSを作る"],0,"fillnaは欠損値の補完に使う。",S.GUIDE);
codeQ("C-PY-03",D2,"PySpark集計","python","from pyspark.sql import functions as F\\nagg = df.groupBy('Region').agg(F.sum('Amount').alias('Total'))","結果は何を表すか。",["Region別のAmount合計","全行の重複排除","Region列の削除","ストリームの停止"],0,"groupByとsumで地域別合計を作る。",S.GUIDE);
codeQ("C-PY-04",D3,"PySpark filter pushdown","python","recent = df.filter(F.col('OrderDate') >= '2026-11-01').select('OrderId','Amount')","性能面で期待する効果はどれか。",["早い段階で不要行・列を減らす","全列全行を必ず保持する","Git同期を高速化する","RLSを解除する"],0,"早期filter/selectで後続処理量を減らせる。",S.PERF);
codeQ("C-PY-05",D2,"PySpark派生列","python","result = df.withColumn('Net', F.col('Amount') - F.col('Discount'))","withColumnの役割はどれか。",["派生列Netを追加/置換する","テーブルをVACUUMする","Workspace roleを変更する","Eventstreamを作る"],0,"withColumnは列の追加/置換に使う。",S.GUIDE);
codeQ("C-PY-06",D2,"Delta書き込み","python","df.write.format('delta').mode('append').saveAsTable('Sales')","このコードの挙動はどれか。",["Delta形式でSalesへ追記する","Salesを必ず全件置換する","Salesを削除する","KQL tableを作る"],0,"format delta + appendで既存データに追記する。",S.GUIDE);
codeQ("C-PY-07",D3,"Spark partitioning","python","balanced = df.repartition(32, 'CustomerId')","主な狙いはどれか。",["CustomerIdを基準にデータ分布/並列度を再調整する","RLSを作る","NULLを補完する","Git branchを作る"],0,"repartitionはshuffleを伴いパーティションを再構成する。",S.SPARK);
codeQ("C-PY-08",D3,"Broadcast join","python","result = fact.join(F.broadcast(dim), 'ProductId')","dimが十分小さい場合の狙いはどれか。",["小テーブルを配布して大規模shuffleを減らす","factを1行にする","Eventhouseへ複製する","RLSを解除する"],0,"小さい参照表のbroadcast joinはshuffle削減に有効な場合がある。",S.SPARK);
codeQ("C-PY-09",D2,"Structured Streaming","python","stream = spark.readStream.format('delta').table('Incoming')\\nquery = stream.writeStream.option('checkpointLocation','Files/chk').start()","checkpointLocationの主な目的はどれか。",["ストリーム処理の進捗/状態を復元できるようにする","Workspace roleを保存する","Git commitを保存する","DDMポリシーを保存する"],0,"Structured Streamingではcheckpointが障害復旧や進捗管理に重要。",S.GUIDE);
codeQ("C-PY-10",D2,"Watermark","python","events.withWatermark('eventTime','10 minutes')","この指定が関係する課題はどれか。",["遅延到着イベントと状態保持の管理","SQL列マスキング","Git merge","Workspace共有"],0,"watermarkは遅延到着をどこまで許容するか等の状態管理に関係する。",S.GUIDE);
// KQL 10
codeQ("C-KQL-01",D2,"KQL filter","kusto","Events\\n| where Timestamp > ago(1h)","このクエリは何をするか。",["直近1時間のイベントに絞る","1時間ごとに必ず集計する","全期間を削除する","列をマスクする"],0,"whereで時間条件を適用している。",S.EVENTMON);
codeQ("C-KQL-02",D2,"KQL summarize","kusto","Events\\n| summarize Errors=count() by Service","結果はどれか。",["Service別イベント件数","全イベントを1行ずつ表示","Service列を削除","Git履歴を集計"],0,"summarize count() by Serviceでサービス単位に集計する。",S.GUIDE);
codeQ("C-KQL-03",D2,"KQL average","kusto","Metrics\\n| summarize AvgCpu=avg(Cpu) by Host","このクエリの目的はどれか。",["Host別平均CPUを計算する","CPU列を削除する","Hostを暗号化する","Eventstreamを停止する"],0,"avg(Cpu)をHost単位で集計する。",S.GUIDE);
codeQ("C-KQL-04",D3,"KQL project","kusto","Events\\n| project Timestamp, Service, Message","性能/可読性面の意図はどれか。",["必要列だけに絞る","全列を複製する","行を削除する","RLSを作る"],0,"projectは出力列を選択する。",S.EVENTMON);
codeQ("C-KQL-05",D2,"KQL window","kusto","Events\\n| summarize Count=count() by bin(Timestamp, 5m)","このクエリはどの集計か。",["5分単位の時間窓集計","5行ごとの集計","5列ごとの集計","5MBごとの集計"],0,"bin(Timestamp,5m)で5分単位に丸めて集計する。",S.GUIDE);
codeQ("C-KQL-06",D2,"KQL latest row","kusto","Events\\n| summarize arg_max(Timestamp, *) by DeviceId","主な結果はどれか。",["DeviceIdごとの最新イベント","DeviceIdごとの最古イベント","全イベントの削除","DeviceIdのマスキング"],0,"arg_maxはグループごとに最大値を持つ行を取得するのに使える。",S.GUIDE);
codeQ("C-KQL-07",D2,"OneLake shortcut from Eventhouse","kusto","external_table('SalesShortcut')\\n| take 100","external_tableを使う理由はどれか。",["EventhouseからOneLake shortcutの外部Deltaテーブルを照会する","WarehouseのRLSを作る","Gitリポジトリを読む","Spark poolを作る"],0,"RTIではOneLake shortcutをexternal_table()で参照する。",S.ACCEL);
codeQ("C-KQL-08",D3,"KQL query performance","kusto","Events\\n| where Timestamp > ago(1d)\\n| project Timestamp, DeviceId, Value","この順序の利点として最も適切なのはどれか。",["早期に期間・列を絞りスキャン/後続処理を減らせる","必ず全データをメモリへ載せる","Git同期が高速化する","DDMが有効になる"],0,"KQLでも必要期間/列へ早く絞るのが基本。",S.EVENTMON);
codeQ("C-KQL-09",D2,"KQL join","kusto","Events\\n| join kind=inner Devices on DeviceId","結果に残るものはどれか。",["両側でDeviceIdが一致する行","Eventsの全行だけ","Devicesの全行だけ","一致しない行だけ"],0,"inner joinは両側でキーが一致する行を返す。",S.GUIDE);
codeQ("C-KQL-10",D3,"Query acceleration monitoring","kusto",".show external table SalesShortcut operations query_acceleration statistics","この管理コマンドの用途はどれか。",["ShortcutのQuery acceleration状態/進捗を確認する","RLSを無効にする","WarehouseをVACUUMする","Git branchを作る"],0,"公式ドキュメントでQuery accelerationの監視に使うコマンドとして案内されている。",S.ACCEL);

const orderQ=(id,domain,skill,items,explanation,source)=>push({id,objectiveId:"ORDER",domain,group:"並べ替え",skill,difficulty:"Hard",type:"order",question:"正しい実施順に並べ替えよ。",orderItems:items,explanation,source});
orderQ("ORD-01",D1,"Git lifecycle",["ワークスペースをGitリポジトリ/ブランチへ接続","開発変更をコミット","PRでレビューしてmainへ統合","検証済み変更を本番ステージへデプロイ"],"版管理→レビュー→デプロイの順で変更統制する。",S.GIT);
orderQ("ORD-02",D1,"Database project",["Database Projectを作成/既存Warehouseから抽出","テーブル・ビュー等のスキーマを編集","プロジェクトをビルドして検証","対象WarehouseへPublish"],"コード化したスキーマはビルド検証後に公開する。",S.DBPROJ);
orderQ("ORD-03",D1,"Deployment pipeline",["開発ステージで変更を完成","テストステージへデプロイ","テスト結果を確認","本番ステージへデプロイ"],"段階的な昇格で本番リスクを下げる。",S.GIT);
orderQ("ORD-04",D1,"Least privilege",["必要な利用者と操作を特定","適切な権限レイヤーを選択","最小限の権限を付与","実ユーザーでアクセスを検証"],"要件→権限→検証の順で最小権限を実装する。",S.SECURITY);
orderQ("ORD-05",D1,"Apache Airflow",["Apache Airflow jobを作成","必要な接続/認証を構成","DAGを作成して保存","実行し結果/ログを監視"],"実行環境と接続を整えてからDAGを実行・監視する。",S.AIRFLOW);
orderQ("ORD-06",D1,"Pipeline parameters",["Pipeline parameterを定義","Activityでdynamic expressionから参照","実行/スケジュール時に値を渡す","実行結果で値の適用を検証"],"定義→参照→値渡し→検証の順。",S.PARAM);
orderQ("ORD-07",D2,"Incremental load",["前回watermarkを取得","watermark以降の変更データを抽出","宛先へupsert/追記","成功後にwatermarkを更新"],"watermarkはロード成功後に更新するのが安全。",S.GUIDE);
orderQ("ORD-08",D2,"Medallion",["Bronzeへ原本に近いデータを取り込む","Silverで重複/型/欠損を整える","Goldで業務向けに集約する","分析/レポートでGoldを利用"],"段階的に品質と業務意味を高める。",S.GUIDE);
orderQ("ORD-09",D2,"OneLake shortcut",["参照したいターゲットを決める","接続/権限を準備","Shortcutを作成","呼び出しユーザーでクエリを検証"],"Shortcutはターゲットと権限を確認してから作成・検証する。",S.SHORTCUT);
orderQ("ORD-10",D2,"Mirroring",["対応ソースと要件を確認","ソース接続を構成","Mirroringを開始","レプリケーション遅延/状態を監視"],"ソース・接続を整えてからレプリケーションを開始する。",S.MIRROR);
orderQ("ORD-11",D2,"Streaming pipeline",["イベントソースへ接続","Eventstreamで取り込み","必要な変換/ウィンドウを適用","Eventhouse等の宛先へ送信"],"ストリームはソース→処理→宛先の順で構成する。",S.GUIDE);
orderQ("ORD-12",D2,"Data quality",["入力データをプロファイル","重複/欠損/型異常を処理","必要な結合/集計を実行","品質確認後にcurated領域へ書き込む"],"まず品質を把握してからクリーニングし、下流へ渡す。",S.GUIDE);
orderQ("ORD-13",D3,"Pipeline troubleshooting",["Monitoring hubで失敗Runを開く","失敗Activityを特定","入力/出力とエラー詳細を確認","原因を修正して再実行"],"観測→切り分け→修正→再実行の順。",S.PIPEERR);
orderQ("ORD-14",D3,"Performance tuning",["現状の処理時間/リソースを計測","ボトルネックを特定","対象箇所だけ最適化","同条件で再計測"],"最適化は計測と再計測をセットにする。",S.PERF);
orderQ("ORD-15",D3,"Lakehouse maintenance",["テーブル健全性/小ファイル状況を確認","必要ならOPTIMIZEを実行","保持要件を確認して必要ならVACUUM","クエリ性能とストレージを再確認"],"OPTIMIZEとVACUUMは目的が違い、状態確認と保持要件が先。",S.VACUUM);
orderQ("ORD-16",D3,"Eventhouse tuning",["System overviewで取り込み/容量/クエリ状況を確認","遅いクエリの期間・列・演算を特定","KQLや保存/アクセラレーションを最適化","同じ負荷で再確認"],"Eventhouseでも計測→原因→改善→検証が基本。",S.EVENTMON);
orderQ("ORD-17",D3,"Spark skew",["Spark UI/ログで遅いTaskとデータ分布を確認","キー偏りによるskewか確認","repartition/broadcast等の対策を適用","再実行してshuffle/時間を比較"],"推測でリソース増強する前にskewを観測する。",S.SPARK);
orderQ("ORD-18",D3,"Alerts",["監視対象と失敗/遅延条件を決める","Monitoring/Alert機能で条件を設定","通知先を構成","テストRunで通知を検証"],"アラートは条件と通知先を定義して実際にテストする。","https://learn.microsoft.com/en-us/fabric/data-factory/create-alerts-for-pipeline-runs");


const extraTargets=[
  ...O.filter(x=>x[1]===D1).slice(0,14),
  ...O.filter(x=>x[1]===D3).slice(0,14)
];
for(const o of extraTargets){
  const [oid,domain,group,skill,scenario,correct,related,wrongs,source]=o;
  push({
    id:oid+"-D",objectiveId:oid,domain,group,skill,difficulty:"Hard",type:"case",
    caseText:"本番運用中のFabric環境で、変更統制・再現性・最小権限・運用効率を重視する。",
    question:scenario+" 制約を踏まえ、最も妥当な設計・対応はどれか。",
    choices:[correct,...wrongs],answers:[0],
    explanation:correct+"。加えて「"+related+"」も実装時の重要な確認点となる。",
    source
  });
}

const weak=/壁紙|画面テーマ|セル色|Notebookテーマ|Workspaceを削除|全員Admin|Git履歴を消|Gitを削除|ログを削除|Sensitivity labelでSUM|HTMLで|Gitをメッセージブローカー|Gitでイベント|Power BIテーマ|Deployment pipelineの色|ブラウザ履歴/;
const plausiblePools={
  [D1]:[
    "Workspaceロールだけでデータ行・列レベルの制御まで完結させる",
    "Deployment pipelineだけでデータ変換ロジックそのものを実行する",
    "Sensitivity labelだけで実際のアクセス権限を制御する",
    "Git integrationだけで実行時資格情報も自動同期されると考える",
    "監査ログをアクセス制御そのものの代わりに使う",
    "本番Workspaceで直接変更し、後から開発環境へ合わせる"
  ],
  [D2]:[
    "Deployment pipelineをデータ取り込みエンジンとして使用する",
    "Sensitivity labelをデータ変換ロジックとして使用する",
    "Workspace roleで集計・変換処理を実行する",
    "Git integrationをストリーミング処理エンジンとして使用する",
    "OneLake shortcutを常に物理コピーとして扱う",
    "Mirroringを単発の手動ファイルコピーとして運用する"
  ],
  [D3]:[
    "計測せずに最初からcapacityだけ増強する",
    "実行ログを確認せず再実行だけを繰り返す",
    "RLS/CLS解除を性能改善の第一手にする",
    "Git履歴だけで実行時エラー原因を判定する",
    "Workspace role変更だけで処理性能を改善する",
    "Sensitivity label変更を障害解析の第一手にする"
  ]
};
for(const item of q){
  if(!Array.isArray(item.choices)) continue;
  const pool=plausiblePools[item.domain]||plausiblePools[D1];
  item.choices=item.choices.map((choice,idx)=>{
    if(item.answers&&item.answers.includes(idx)) return choice;
    if(!weak.test(choice)) return choice;
    let repl=pool[(idx+item.id.length)%pool.length],tries=0;
    while(item.choices.includes(repl)&&tries<pool.length){
      tries++;
      repl=pool[(idx+item.id.length+tries)%pool.length];
    }
    return repl;
  });
}


const CURRENT_EXCLUDED_OBJECTIVES=new Set(["O14","O15","O32","O33","O48"]);
const CURRENT_SOURCE_OVERRIDES={
  O03:"https://learn.microsoft.com/en-us/fabric/admin/service-admin-portal-onelake",
  O12:"https://learn.microsoft.com/en-us/fabric/fundamentals/apply-sensitivity-labels",
  O13:"https://learn.microsoft.com/en-us/fabric/fundamentals/endorsement-promote-certify",
  O19:"https://learn.microsoft.com/en-us/training/modules/load-data-into-microsoft-fabric-data-warehouse/",
  O20:"https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview",
  O21:"https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
  O23:"https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data",
  O29:"https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data",
  O30:"https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables",
  O34:"https://learn.microsoft.com/en-us/fabric/real-time-hub/process-data-streams-using-transformations",
  O35:"https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
  O43:"https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-overview",
  O46:"https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/fabric-workspace-monitoring"
};

for(let i=q.length-1;i>=0;i--){
  if(CURRENT_EXCLUDED_OBJECTIVES.has(q[i].objectiveId)) q.splice(i,1);
}

for(const item of q){
  if(CURRENT_SOURCE_OVERRIDES[item.objectiveId]) item.source=CURRENT_SOURCE_OVERRIDES[item.objectiveId];

  if(item.objectiveId==="O04"){
    item.skill="Data workflow workspace settings";
  }

  if(item.objectiveId==="O16"){
    item.skill="Choose between a pipeline and a notebook";
    if(item.type==="multi"){
      item.question="PipelineとNotebookの使い分けについて、適切な説明を2つ選べ。";
      item.choices=[
        "複数ActivityやNotebookの依存関係、再試行、実行順を制御するならPipelineが適する",
        "複雑なPySparkやコード中心の変換ロジックを実装するならNotebookが適する",
        "データ変換は常にPipelineだけで実装すべきである",
        "Notebookはオーケストレーション用途でPipelineを完全に置き換える"
      ];
      item.answers=[0,1];
      item.selectCount=2;
      item.explanation="Pipelineは処理のオーケストレーション、Notebookはコード中心の変換・分析に適する。";
    }else{
      item.question="複数のCopy activityとNotebookを依存関係付きで順番に実行し、失敗時のRetryも一元管理したい。最も適切なのはどれか。";
      item.choices=["Pipeline","Notebook","Dataflow Gen2","Deployment pipeline"];
      item.answers=[0];
      item.explanation="複数処理の依存関係、実行順、Retryをまとめて制御する要件はPipelineに適する。";
    }
  }

  if(item.objectiveId==="O23"){
    item.skill="Choose between dataflows, notebooks, and T-SQL for data transformation";
    if(item.type==="multi"){
      item.question="変換手段の使い分けとして適切な説明を2つ選べ。";
      item.choices=[
        "Power Queryの低コード変換を保守したい場合はDataflow Gen2が適する",
        "Warehouseでリレーショナルなセットベース変換を行う場合はT-SQLが適する",
        "すべての大規模Spark変換をDataflow Gen2だけで実装する",
        "T-SQLはWarehouseのデータ変換には使用できない"
      ];
      item.answers=[0,1];
      item.selectCount=2;
      item.explanation="低コードのPower Query変換はDataflow Gen2、Warehouse内のリレーショナル変換はT-SQLが代表的な選択肢。";
    }else{
      item.question="業務担当者がPower QueryのGUIで保守できるデータ変換を構築したい。最も適切なのはどれか。";
      item.choices=["Dataflow Gen2","Notebook","T-SQL","KQL"];
      item.answers=[0];
      item.explanation="GUIベースでPower Queryを使う低コード変換にはDataflow Gen2が適する。";
    }
  }

  if(item.type==="case" && /-D$/.test(item.id)){
    item.type="single";
    delete item.caseText;
  }
}

for(const item of q){
  if(item.type!=="case") continue;
  if(item.domain===D1){
    item.caseText="複数チームが同一のFabricテナントを利用している。"+item.skill+"を導入するにあたり、本番変更を最小化し、権限は必要最小限に保つ必要がある。";
  }else if(item.domain===D2){
    item.caseText="オンプレミスとクラウドのデータをFabricへ統合中である。"+item.skill+"について、データ量が増えても再実行可能で、運用しやすい設計が求められている。";
  }else{
    item.caseText="本番Fabric環境でSLA超過または処理失敗が発生している。"+item.skill+"を対象に、証拠から原因を切り分け、再発防止まで行う必要がある。";
  }
}

const CURRENT_SKILL_NAMES={
  "O01": "Configure Spark workspace settings",
  "O02": "Configure domain workspace settings",
  "O03": "Configure OneLake workspace settings",
  "O04": "Configure data workflow workspace settings",
  "O05": "Configure version control",
  "O06": "Implement database projects",
  "O07": "Create and configure deployment pipelines",
  "O08": "Implement workspace-level access controls",
  "O09": "Implement item-level access controls",
  "O10": "Implement row-level, column-level, object-level, and file-level access controls",
  "O11": "Implement dynamic data masking",
  "O12": "Apply sensitivity labels to items",
  "O13": "Endorse items",
  "O16": "Choose between a pipeline and a notebook",
  "O17": "Design and implement schedules and event-based triggers",
  "O18": "Implement orchestration patterns with notebooks and pipelines, including parameters and dynamic expressions",
  "O19": "Design and implement full and incremental data loads",
  "O20": "Prepare data for loading into a dimensional model",
  "O21": "Design and implement a loading pattern for streaming data",
  "O22": "Choose an appropriate data store",
  "O23": "Choose between dataflows, notebooks, and T-SQL for data transformation",
  "O24": "Create and manage shortcuts to data",
  "O25": "Implement mirroring",
  "O26": "Ingest data by using pipelines",
  "O27": "Transform data by using PySpark, SQL, and KQL",
  "O28": "Denormalize data",
  "O29": "Group and aggregate data",
  "O30": "Handle duplicate, missing, and late-arriving data",
  "O31": "Choose an appropriate streaming engine",
  "O34": "Process data by using eventstreams",
  "O35": "Process data by using Spark structured streaming",
  "O36": "Process data by using KQL",
  "O37": "Create windowing functions",
  "O38": "Monitor data ingestion",
  "O39": "Monitor data transformation",
  "O40": "Monitor semantic model refresh",
  "O41": "Configure alerts",
  "O42": "Identify and resolve pipeline errors",
  "O43": "Identify and resolve dataflow errors",
  "O44": "Identify and resolve notebook errors",
  "O45": "Identify and resolve eventhouse errors",
  "O46": "Identify and resolve eventstream errors",
  "O47": "Identify and resolve T-SQL errors",
  "O49": "Optimize a lakehouse table",
  "O50": "Optimize a pipeline",
  "O51": "Optimize a data warehouse",
  "O52": "Optimize eventstreams and eventhouses",
  "O53": "Optimize Spark performance",
  "O54": "Optimize query performance"
};
for(const item of q){ if(CURRENT_SKILL_NAMES[item.objectiveId]) item.skill=CURRENT_SKILL_NAMES[item.objectiveId]; }

const CURRENT_OBJECTIVES=O
  .filter(x=>!CURRENT_EXCLUDED_OBJECTIVES.has(x[0]))
  .map(x=>{
    const obj={id:x[0],domain:x[1],group:x[2],skill:CURRENT_SKILL_NAMES[x[0]]||x[3],source:CURRENT_SOURCE_OVERRIDES[x[0]]||x[8]};
    return obj;
  });

window.DP700_META={
 title:"DP-700 過去問道場",
 version:"2026.11.03-v3",
 officialGuide:S.GUIDE,
 objectiveCount:49,
 questionCount:q.length,
 skillsMeasuredAsOf:"2026-10-19",
 guideLastChecked:"2026-11-03",
 disclaimer:"Microsoft公式Study Guide（2026-10-30更新、skills measured as of 2026-10-19）に基づく独自問題です。実試験の流出問題・再現問題ではありません。"
};
window.DP700_OBJECTIVES=CURRENT_OBJECTIVES;
window.DP700_QUESTIONS=q;
})();
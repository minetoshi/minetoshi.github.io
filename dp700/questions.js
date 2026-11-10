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

// 50 Japanese original questions re-authored from user-provided Practice Assessment screenshots.
// They preserve the tested concepts but do not reproduce the original assessment wording.
const PA50_REAUTHORED=[
  {
    "id": "PA50-01",
    "objectiveId": "O17",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Blob Storage の /retail 配下に CSV が到着したときだけ Pipeline1 を開始し、Pipeline1 が成功した後に Dataflow1 を実行したい。適切な設定を2つ選べ。",
    "choices": [
      "Pipeline1 に Blob created イベントを設定し、フォルダー /retail と拡張子 .csv の両方で絞り込む",
      "Dataflow1 を Pipeline1 の成功後に実行されるよう依存関係を設定する",
      "Pipeline1 は /retail だけで絞り込み、拡張子は指定しない",
      "Dataflow1 自身の成功イベントをトリガーにする"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "イベント条件は対象ファイルを十分に絞り込み、後続処理は前段成功への依存関係で接続する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-02",
    "objectiveId": "O01",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Starter pool では計算資源が不足する大規模 Spark ジョブがある。一方でセッション開始時間は極端に長くしたくない。適切な対策を2つ選べ。",
    "choices": [
      "Autoscale を有効にしたカスタム Spark pool を作成する",
      "Dynamic Allocation を有効にして executor 数を負荷に応じて調整する",
      "Starter pool を無効化するだけで解決する",
      "ジョブの partition 数だけを増やせば計算資源不足は必ず解消する"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "大きなジョブではカスタム pool の autoscale と Dynamic Allocation を組み合わせ、必要時だけリソースを拡張できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/configure-starter-pools",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-03",
    "objectiveId": "O16",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "ADLS Gen2 上の CSV を Lakehouse に取り込みながら、開発者同士で対話的にコードを検証・共有したい。最も適切な Fabric アイテムはどれか。",
    "choices": [
      "Data Factory pipeline",
      "Dataflow Gen2",
      "Notebook",
      "Deployment pipeline"
    ],
    "answers": [
      2
    ],
    "explanation": "対話的なコード実行、共同開発、Spark を使った取り込み・変換には Notebook が適する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-04",
    "objectiveId": "O01",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Spark ジョブごとに必要な executor 数が大きく変動し、固定 executor 数がボトルネックになっている。最も直接的な改善策はどれか。",
    "choices": [
      "Dynamic Allocation を有効化する",
      "Workspace Viewer を増やす",
      "Notebook の AutoSave を無効化する",
      "OneLake shortcut を追加する"
    ],
    "answers": [
      0
    ],
    "explanation": "Dynamic Allocation は負荷に応じて executor 数を動的に調整する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/configure-starter-pools",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-05",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Pipeline の文字列パラメーター RunDate を Notebook の process_date に毎回渡し、Notebook の既定値を上書きしたい。必要な設定を2つ選べ。",
    "choices": [
      "Notebook で process_date を parameter cell の変数として定義する",
      "Notebook activity の Base parameters で process_date に @pipeline().parameters.RunDate を渡す",
      "process_date を Markdown セルに記載する",
      "前の Activity の出力を必ず process_date として使用する"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "Notebook 側でパラメーター化し、Pipeline の Notebook activity から Base parameters で実行時値を渡す。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-06",
    "objectiveId": "O06",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "既存の Fabric Warehouse のスキーマをコードとして管理し、Git で変更レビューしたい。最も適切な開始方法はどれか。",
    "choices": [
      "既存 Warehouse から Database Project を作成・抽出する",
      "Warehouse を CSV に書き出して管理する",
      "Semantic model を Database Project に変換する",
      "OneLake shortcut を作る"
    ],
    "answers": [
      0
    ],
    "explanation": "Database Project は Warehouse のスキーマをソース管理可能な形で扱うために使用できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-07",
    "objectiveId": "O10",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Warehouse の Sales テーブルを、ログインユーザーの部門に対応する行だけ参照できるようにしたい。RLS 実装に必要なものを2つ選べ。",
    "choices": [
      "ユーザーと行を判定する predicate function",
      "FILTER PREDICATE を含む SECURITY POLICY",
      "Dynamic Data Masking",
      "全ユーザーへの Workspace Admin 付与"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "RLS は predicate function と security policy を用いて、行単位の参照範囲を制御する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-08",
    "objectiveId": "O06",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "VS Code で既存 Warehouse の現在のスキーマを取り込み、既存データベースを変更せずに Database Project を開始したい。適切な操作はどれか。",
    "choices": [
      "Create Project From Database",
      "Publish Project",
      "Drop and Recreate Database",
      "Create OneLake Shortcut"
    ],
    "answers": [
      0
    ],
    "explanation": "既存データベースからプロジェクトを生成すれば、現在のスキーマをプロジェクトへ取り込める。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-09",
    "objectiveId": "O10",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Employees テーブルの MedicalHistory 列だけを、許可されたユーザーに限定して参照させたい。最も適切な制御はどれか。",
    "choices": [
      "Row-Level Security",
      "Column-Level Security",
      "Sensitivity label だけを設定",
      "Workspace Viewer"
    ],
    "answers": [
      1
    ],
    "explanation": "特定列そのものへのアクセスを制御する要件には Column-Level Security が適する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-10",
    "objectiveId": "O11",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Dynamic Data Masking を設定した列について、承認済みユーザーだけ元の値を参照させたい。付与すべき権限はどれか。",
    "choices": [
      "SELECT ALL USER SECURABLES",
      "CONTROL SERVER",
      "UNMASK",
      "ALTER ANY MASK"
    ],
    "answers": [
      2
    ],
    "explanation": "DDM のマスク前の値を参照させるには、必要な範囲で UNMASK 権限を付与する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-11",
    "objectiveId": "O07",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Deployment pipeline の Test から Production へ、変更された一部の Fabric アイテムだけを昇格したい。最も適切な方法はどれか。",
    "choices": [
      "Workspace 全体を毎回再作成する",
      "Git 接続を切断する",
      "Selective deployment を使用する",
      "全アイテムを手動コピーする"
    ],
    "answers": [
      2
    ],
    "explanation": "Selective deployment を使うと、対象アイテムを選んでステージ間へデプロイできる。",
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/deploy-content",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-12",
    "objectiveId": "O10",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "従業員テーブルで Salary と SocialSecurityNumber は HR のみ参照可能にしたい。既存の一般ロールにはテーブル参照権限がある。適切な対策を3つ選べ。",
    "choices": [
      "HR 用のデータベースロールを作成して HR ユーザーを所属させる",
      "HR ロールに機密列の SELECT を許可する",
      "一般ロールには機密列の SELECT を許可しない、または必要に応じて明示的に拒否する",
      "全ユーザーに UNMASK を付与する",
      "全員を Workspace Admin にする"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "列レベルの権限と専用ロールを使い、HR だけに機密列の参照権限を与える。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security",
    "origin": "pa50-ja",
    "selectCount": 3
  },
  {
    "id": "PA50-13",
    "objectiveId": "O11",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "クレジットカード番号の末尾4桁だけを表示し、それ以外を固定文字で隠したい。DDM のマスクとして最も適切なのはどれか。",
    "choices": [
      "partial(0,\"XXXX-XXXX-XXXX-\",4)",
      "default()",
      "email()",
      "random(1,4)"
    ],
    "answers": [
      0
    ],
    "explanation": "partial は先頭・置換文字列・末尾表示文字数を指定できる。末尾4桁だけ残す要件に合う。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-14",
    "objectiveId": "O13",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "品質検証済みの Lakehouse を組織の信頼できるデータ資産として示し、認定管理をドメイン単位で委任したい。適切な設定を2つ選べ。",
    "choices": [
      "Lakehouse を Certified にする",
      "Domain administrator に certification の管理を委任する",
      "Promoted だけを設定し、認定プロセスは不要とする",
      "Workspace Viewer に tenant 全体の認定権限を与える"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "検証済み資産には Certified を使い、認定可否の管理は適切な管理者へ委任できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/admin/endorsement-certification-enable",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-15",
    "objectiveId": "O01",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "複数 Notebook で同じ Spark セッションを効率的に共有し、高コンカレンシーを利用したい。設定場所として最も適切なのはどれか。",
    "choices": [
      "Workspace settings の Data Engineering/Science > Spark settings > High concurrency",
      "Power BI tenant settings",
      "Deployment pipeline のルール",
      "OneLake catalog の endorsement"
    ],
    "answers": [
      0
    ],
    "explanation": "High concurrency の既定動作は Workspace の Spark settings で管理する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/configure-high-concurrency-session-notebooks",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-16",
    "objectiveId": "O10",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "あるグループには Warehouse の Read 権限があるが、dbo.FactSales だけをクエリできるよう SQL 権限を絞りたい。最も適切な方法はどれか。",
    "choices": [
      "Workspace Member を付与する",
      "UNMASK を付与する",
      "dbo.FactSales に必要な SELECT 権限だけを付与する",
      "Fabric administrator にする"
    ],
    "answers": [
      2
    ],
    "explanation": "SQL のオブジェクト/列レベル権限で、必要なテーブルだけに SELECT を限定する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-17",
    "objectiveId": "O11",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "code",
    "question": "カード番号列の末尾4桁だけを表示する DDM を設定したい。正しい T-SQL はどれか。",
    "choices": [
      "ALTER TABLE dbo.Payments ALTER COLUMN CardNo ADD MASKED WITH (FUNCTION = 'partial(0,\"XXXX-XXXX-XXXX-\",4)');",
      "ALTER TABLE dbo.Payments ALTER COLUMN CardNo ADD MASKED WITH (FUNCTION = 'email()');",
      "GRANT UNMASK TO public;",
      "ALTER TABLE dbo.Payments DROP COLUMN CardNo;"
    ],
    "answers": [
      0
    ],
    "explanation": "末尾4桁を残すには partial マスクを指定する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking",
    "origin": "pa50-ja",
    "code": "-- CardNo: 1234-5678-9012-3456\n-- 期待表示: XXXX-XXXX-XXXX-3456"
  },
  {
    "id": "PA50-18",
    "objectiveId": "O08",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "本番ステージに割り当てた Workspace で、一般利用者が Fabric アイテムを編集できないようにしたい。最も直接的に見直すべきものはどれか。",
    "choices": [
      "Workspace ロールとアクセス権",
      "Sensitivity label の色",
      "Pipeline の Retry 回数",
      "Spark executor 数"
    ],
    "answers": [
      0
    ],
    "explanation": "Workspace 全体の編集可否は Workspace ロールとアクセス権で制御する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-19",
    "objectiveId": "O11",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Dynamic Data Masking の運用として適切なものを3つ選べ。",
    "choices": [
      "機密列へ要件に合うマスク関数を定義する",
      "元値が必要な承認済みユーザーだけに UNMASK を付与する",
      "非特権ユーザーで実際の表示結果をテストする",
      "DDM を設定すれば他のアクセス制御は不要と考える",
      "全ユーザーに UNMASK を付与する"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "DDM はマスク定義、最小限の UNMASK、非特権ユーザーでの検証を組み合わせて運用する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking",
    "origin": "pa50-ja",
    "selectCount": 3
  },
  {
    "id": "PA50-20",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "同じ Pipeline を複数環境・複数テーブルで再利用し、接続先やテーブル名のハードコードを減らしたい。適切な手法を2つ選べ。",
    "choices": [
      "Pipeline parameters を定義する",
      "Dynamic expressions で実行時値を参照する",
      "環境ごとに Pipeline を完全複製する",
      "本番値を各 Activity に直接入力する"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "パラメーターと動的式を使うと、同じオーケストレーションを実行時値で再利用できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-21",
    "objectiveId": "O35",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "IoT イベントを継続的に変換し、Lakehouse の Delta テーブルへ低遅延で書き込みたい。最も適切な処理方式はどれか。",
    "choices": [
      "毎晩のバッチ Copy activity",
      "Spark Structured Streaming",
      "Deployment pipeline",
      "Database Project"
    ],
    "answers": [
      1
    ],
    "explanation": "継続的なストリーム変換と Delta への書き込みには Spark Structured Streaming が適する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-22",
    "objectiveId": "O19",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Blob Storage に多数の CSV があり、Fabric Warehouse へ効率的に一括ロードしたい。運用性も考慮した適切な設計を3つ選べ。",
    "choices": [
      "COPY INTO を使用する",
      "ファイルパスに wildcard を使用して複数ファイルを対象にする",
      "必要に応じて rejected row の出力先を設定する",
      "1ファイルずつ手動 INSERT する",
      "Workspace Admin を増やす"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Warehouse の大量ファイル取り込みでは COPY INTO と wildcard が有効で、拒否行の扱いも設計できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-copy",
    "origin": "pa50-ja",
    "selectCount": 3
  },
  {
    "id": "PA50-23",
    "objectiveId": "O19",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Lakehouse の /Files/sales/ に継続的に新規ファイルが追加される。処理済みファイルを毎回読み直さず、障害後も続きから処理したい。最も適切な設計はどれか。",
    "choices": [
      "Structured Streaming のファイルソースと永続的な checkpoint を使用する",
      "毎回フォルダー全件をバッチ読み込みする",
      "Deployment pipeline を使って差分検知する",
      "RLS で処理済みファイルを除外する"
    ],
    "answers": [
      0
    ],
    "explanation": "ストリーミング処理では checkpoint に進捗を保持することで、再起動時に継続処理しやすくなる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-24",
    "objectiveId": "O22",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "半構造化ファイルを含む多様なデータを保存し、PySpark と SQL の両方で加工・分析したい。最も適切なデータストアはどれか。",
    "choices": [
      "Lakehouse",
      "Deployment pipeline",
      "Dataflow のみ",
      "Sensitivity label"
    ],
    "answers": [
      0
    ],
    "explanation": "Lakehouse は OneLake/Delta を基盤に、Spark と SQL の両方からデータを扱える。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/store-data",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-25",
    "objectiveId": "O34",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Azure Event Hubs から受け取るイベントを、不要フィールド削除や計算列追加を行ってから KQL Database に保存したい。最も適切な Fabric 機能はどれか。",
    "choices": [
      "Database Project",
      "Deployment pipeline",
      "Eventstream",
      "Workspace role"
    ],
    "answers": [
      2
    ],
    "explanation": "Eventstream はストリーミングデータの取り込み、変換、ルーティングを低コードで構成できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-hub/process-data-streams-using-transformations",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-26",
    "objectiveId": "O27",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "code",
    "question": "sales_df から status='Completed' の行だけを対象に、region・channel 別に amount を合計し、合計が 50000 を超えるグループだけ残したい。正しい PySpark はどれか。",
    "choices": [
      "sales_df.filter(F.col('status')=='Completed').groupBy('region','channel').agg(F.sum('amount').alias('total_sales')).filter(F.col('total_sales')>50000)",
      "sales_df.groupBy('status').count().filter(F.col('amount')>50000)",
      "sales_df.select('region','channel').distinct()",
      "sales_df.orderBy('amount').limit(50000)"
    ],
    "answers": [
      0
    ],
    "explanation": "filter→groupBy→agg→集計結果への filter の順で要件を満たす。",
    "source": "https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-notebooks/",
    "origin": "pa50-ja",
    "code": "from pyspark.sql import functions as F"
  },
  {
    "id": "PA50-27",
    "objectiveId": "O22",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "1日5TB規模を取り込み、高い同時実行性で Power BI から SQL 分析し、T-SQL ストアドプロシージャも利用したい。最も適切なデータストアはどれか。",
    "choices": [
      "Warehouse",
      "Eventstream",
      "Notebook",
      "Deployment pipeline"
    ],
    "answers": [
      0
    ],
    "explanation": "SQL 中心・高並行分析・T-SQL の要件には Warehouse が適する。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/store-data",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-28",
    "objectiveId": "O35",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Structured Streaming の結果を Delta テーブルへ継続追記し、障害後も重複や読み飛ばしを抑えて再開したい。適切な設定を2つ選べ。",
    "choices": [
      "出力モードを append とする",
      "永続的な checkpointLocation を設定する",
      "毎回 checkpoint を削除する",
      "Complete モードだけを使用し続ける"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "追記型ストリームでは append と永続 checkpoint の組み合わせが基本となる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-29",
    "objectiveId": "O37",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "code",
    "question": "同じストリームで1分Tumblingと15分・30分・60分Hopping（各ホップは1分）を同時集計し、結果にどのウィンドウかを識別する値も出したい。適切な構文はどれか。",
    "choices": [
      "GROUP BY Windows(Window('1 min',TumblingWindow(minute,1)), Window('15 min',HoppingWindow(minute,15,1)), Window('30 min',HoppingWindow(minute,30,1)), Window('60 min',HoppingWindow(minute,60,1))) とし、SELECT で System.Window().Id を参照する",
      "複数ウィンドウは1クエリでは定義できない",
      "ORDER BY だけでウィンドウを作る",
      "Workspace role をウィンドウ ID として使う"
    ],
    "answers": [
      0
    ],
    "explanation": "Windows() に一意のIDを付けた1分Tumblingと15/30/60分Hoppingを指定し、SELECT の System.Window().Id で由来のウィンドウを識別する。",
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/windows-azure-stream-analytics",
    "origin": "pa50-ja",
    "code": "-- 複数の時間ウィンドウを1つのクエリで扱う"
  },
  {
    "id": "PA50-30",
    "objectiveId": "O36",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Eventhouse で取り込んだ生イベントをそのまま保持しつつ、正規化・派生列を付けた別テーブルも自動維持したい。最も適切な設計はどれか。",
    "choices": [
      "生テーブルを上書きして派生列だけ保存する",
      "生テーブルをソースにした KQL update policy を派生テーブルへ設定する",
      "Deployment pipeline で行ごとにコピーする",
      "Power BI レポート更新で変換する"
    ],
    "answers": [
      1
    ],
    "explanation": "Update policy を使うと、ソーステーブルへの取り込みを契機に KQL 変換した結果を別テーブルへ取り込める。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/table-update-policy",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-31",
    "objectiveId": "O34",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "毎秒大量の JSON イベントを取り込み、KQL Database へ保存する前に必要なフィールドだけへ整形したい。最も適切なのはどれか。",
    "choices": [
      "Eventstream で変換してから送信する",
      "Database Project でストリームを処理する",
      "Deployment pipeline でリアルタイム変換する",
      "Sensitivity label で列を削除する"
    ],
    "answers": [
      0
    ],
    "explanation": "Eventstream はリアルタイム取り込み経路上でフィルターや変換を適用できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-hub/process-data-streams-using-transformations",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-32",
    "objectiveId": "O35",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Kafka の既存メッセージは初回に読み飛ばし、開始後に到着した新規メッセージだけ処理したい。再起動後は前回の続きから再開する必要がある。最も適切な構成はどれか。",
    "choices": [
      "startingOffsets='earliest' と毎回新しい checkpoint",
      "startingOffsets='latest' と永続 checkpoint を使用し、出力は append とする",
      "毎回全トピックをバッチ読み込みする",
      "checkpoint を無効化する"
    ],
    "answers": [
      1
    ],
    "explanation": "初回を最新位置から始め、以降は checkpoint が進捗を保持する構成が要件に合う。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-33",
    "objectiveId": "O25",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Azure SQL Database の変更を大きな ETL を作らず、ほぼリアルタイムに OneLake へ反映したい。最も適切な機能はどれか。",
    "choices": [
      "毎日 CSV エクスポート",
      "Fabric Mirroring",
      "Deployment pipeline",
      "Dynamic Data Masking"
    ],
    "answers": [
      1
    ],
    "explanation": "Mirroring は対応データベースの変更を継続的に Fabric/OneLake 側へ複製する用途に適する。",
    "source": "https://learn.microsoft.com/en-us/fabric/mirroring/overview",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-34",
    "objectiveId": "O28",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Product→Subcategory→Category の正規化された商品階層を、分析用 Gold 層で結合回数を減らして使いたい。最も適切な形はどれか。",
    "choices": [
      "ProductKey を粒度にし、Product/Subcategory/Category 属性を1つのディメンションへ展開する",
      "階層の各テーブルをさらに細分化する",
      "すべて JSON 文字列1列にする",
      "主キーを削除する"
    ],
    "answers": [
      0
    ],
    "explanation": "分析用ディメンションでは階層属性を適切に非正規化し、使いやすい粒度へ整える。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-35",
    "objectiveId": "O35",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "イベントをリアルタイム変換しながら Lakehouse に保存し、Delta の信頼性も利用したい。最も適切な組み合わせはどれか。",
    "choices": [
      "Spark Structured Streaming + Delta",
      "Git integration + CSV",
      "Deployment pipeline + DDM",
      "Database Project + Eventstream"
    ],
    "answers": [
      0
    ],
    "explanation": "Spark Structured Streaming と Delta の組み合わせで継続処理とトランザクション対応の保存を構成できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-36",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "親 Pipeline から子 Pipeline へ配列パラメーターを渡したつもりだが、子の ForEach では String と評価されて失敗する。親側で配列値を構築する方法として適切なのはどれか。",
    "choices": [
      "createArray() を用いて配列としてパラメーターを渡す",
      "文字列をさらに concat する",
      "ForEach を削除する",
      "値を Markdown に記載する"
    ],
    "answers": [
      0
    ],
    "explanation": "Execute Pipeline で配列が文字列化されるケースでは、親側で createArray() を使って配列として渡す方法がある。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-troubleshoot-guide",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-37",
    "objectiveId": "O44",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "特定 Notebook が非アクティブ後にセッション切れとなる。Workspace 全体は変えず、その Notebook だけタイムアウトを延ばして管理負荷を抑えたい。どこで変更するか。",
    "choices": [
      "Notebook の Session ready indicator から session timeout を変更する",
      "Fabric administrator に capacity 再開を毎回依頼する",
      "AutoSave を有効にする",
      "Deployment pipeline の stage timeout を変更する"
    ],
    "answers": [
      0
    ],
    "explanation": "Notebook 単位の timeout は Session ready indicator から調整できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-science/fabric-notebooks-troubleshooting-guide",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-38",
    "objectiveId": "O42",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Pipeline が断続的に失敗する。失敗した Run と Activity、入出力、エラー詳細を追跡して原因を切り分けたい。まず使うべきものはどれか。",
    "choices": [
      "Monitoring hub",
      "Sensitivity label",
      "Database Project",
      "OneLake shortcut"
    ],
    "answers": [
      0
    ],
    "explanation": "Pipeline の実行履歴と Activity 詳細の確認には Monitoring hub を使用する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-39",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "子 Pipeline の TableList パラメーターには JSON 配列を表す文字列が渡される。ForEach の items が配列を要求している場合、最も適切な式はどれか。",
    "choices": [
      "@json(pipeline().parameters.TableList)",
      "@string(pipeline().parameters.TableList)",
      "@concat(pipeline().parameters.TableList)",
      "@base64(pipeline().parameters.TableList)"
    ],
    "answers": [
      0
    ],
    "explanation": "json() で JSON 文字列を配列/オブジェクトとして解釈すれば ForEach の items に渡せる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-40",
    "objectiveId": "O52",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Eventhouse がアイドル時に自動休止し、次回クエリ時の再開待ちが許容できない。常時利用可能性を優先したい。現在の名称で最も適切な設定はどれか。",
    "choices": [
      "Capacity Planner mode を使用する（旧 Always-on）",
      "Query acceleration だけを有効化する",
      "Power BI レポートを5分ごとに空実行する",
      "Workspace Viewer を増やす"
    ],
    "answers": [
      0
    ],
    "explanation": "現在は Capacity Planner mode（旧 Always-on）を使用して、Eventhouse の自動スケーリング/休止動作を制御できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/eventhouse-smart-capacity-control",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-41",
    "objectiveId": "O39",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "取り込み・変換の遅延によりデータ提供が遅れている。原因特定と改善のため適切な対応を2つ選べ。",
    "choices": [
      "監視画面で実行状態・開始時刻・処理時間を確認する",
      "ボトルネックとなる変換処理や構成を特定して最適化する",
      "監視せず capacity だけ増やす",
      "Sensitivity label を変更する"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "まず監視データで遅延箇所を特定し、対象の変換や実行構成を最適化する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-42",
    "objectiveId": "O19",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Blob Storage にある大量の CSV を Fabric Warehouse にロードしたい。ファイル名パターンで複数ファイルをまとめて取り込むのに適した方法はどれか。",
    "choices": [
      "COPY INTO で wildcard を使用する",
      "1行ずつ INSERT する",
      "Deployment pipeline を使用する",
      "Dynamic Data Masking を使用する"
    ],
    "answers": [
      0
    ],
    "explanation": "Warehouse のファイル取り込みでは COPY INTO で複数ファイルを効率的にロードできる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-copy",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-43",
    "objectiveId": "O38",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "データ取り込み処理が時々失敗し、レポートへの反映が遅れる。失敗 Run を状態や開始時刻で絞り込みたい。最も適切な機能はどれか。",
    "choices": [
      "Monitoring hub",
      "Database Project",
      "Deployment pipeline",
      "Sensitivity label"
    ],
    "answers": [
      0
    ],
    "explanation": "Monitoring hub ではデータ処理の実行状況を確認・絞り込みできる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-44",
    "objectiveId": "O39",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Pipeline は成功しているが、Lakehouse へのロード時間が想定より長い。どの実行や Activity が時間を使っているか確認したい。最も適切なのはどれか。",
    "choices": [
      "Dataflow を新規作成する",
      "Pipeline を複製する",
      "Activator",
      "Monitoring hub"
    ],
    "answers": [
      3
    ],
    "explanation": "成功/失敗にかかわらず実行時間や Activity の状況を調べるには Monitoring hub が適する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-45",
    "objectiveId": "O43",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "オンプレミス データ ゲートウェイを使う Dataflow Gen2 が、およそ1時間実行した後に失敗する。原因切り分けの最初の確認として適切なのはどれか。",
    "choices": [
      "オンプレミス データ ゲートウェイがサポート対象の最新バージョンか確認する",
      "Pipeline の最大パラメーター数を確認する",
      "Workspace の色テーマを確認する",
      "Semantic model の endorsement を変更する"
    ],
    "answers": [
      0
    ],
    "explanation": "ゲートウェイ利用時の長時間実行問題では、まずサポート対象バージョンかを確認する。",
    "source": "https://learn.microsoft.com/en-us/data-integration/gateway/service-gateway-tshoot",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-46",
    "objectiveId": "O39",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "code",
    "question": "Workspace monitoring を有効化した環境で、Pipeline1 内の Notebook Activity のうち、過去24時間で実行時間が長い上位5件を確認したい。正しい KQL はどれか。",
    "choices": [
      "FabricDataPipelinesActivityRunsLogs\n| where ItemName == 'Pipeline1' and ActivityType == 'Notebook'\n| where OperationStartTime >= ago(24h)\n| top 5 by DurationMs desc",
      "EventhouseQueryLogs\n| where ItemName == 'Pipeline1'\n| take 5",
      "ItemJobEventLogs\n| where Status == 'Failed'\n| top 5 by Timestamp asc",
      "FabricDataPipelinesActivityRunsLogs\n| summarize count() by ItemName"
    ],
    "answers": [
      0
    ],
    "explanation": "Pipeline Activity の詳細は FabricDataPipelinesActivityRunsLogs を使い、対象 Activity・期間を絞って DurationMs の降順上位5件を取る。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/workspace-monitoring",
    "origin": "pa50-ja",
    "code": "-- Workspace monitoring の KQL"
  },
  {
    "id": "PA50-47",
    "objectiveId": "O38",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Lakehouse へのデータ取り込み処理の実行状況を Fabric 上で確認したい。最も適切な監視先はどれか。",
    "choices": [
      "Monitor hub",
      "Fabric Capacity Metrics app だけ",
      "Real-Time hub だけ",
      "Azure Monitor だけ"
    ],
    "answers": [
      0
    ],
    "explanation": "Fabric の各種ジョブ/Activity の実行監視には Monitor hub が中心的な入口となる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-48",
    "objectiveId": "O21",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "リアルタイム分析で、データ到着から利用可能になるまでの遅延が問題になっている。継続的な低遅延取り込み・処理へ移行したい。最も適切な方式はどれか。",
    "choices": [
      "日次 Full load",
      "Spark Structured Streaming",
      "Deployment pipeline",
      "データを手動でパーティション分割するだけ"
    ],
    "answers": [
      1
    ],
    "explanation": "継続的なストリーム処理には Spark Structured Streaming が適する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa50-ja"
  },
  {
    "id": "PA50-49",
    "objectiveId": "O43",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Dataflow Gen2 の公開時に、Orders は DestinationQueryNotFound、Customers は MultipleDestinationQueries で検証エラーとなった。意図した宛先を維持して直す方法を2つ選べ。",
    "choices": [
      "Orders は既存の壊れたデータ宛先設定を削除し、正しい宛先を再構成する",
      "Customers は重複したデータ宛先を削除し、1つの有効な宛先設定にする",
      "Orders はゲートウェイを再認証するだけ",
      "Customers はすべての宛先を追加して数を増やす"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "DestinationQueryNotFound は宛先設定の再構成、MultipleDestinationQueries は重複宛先を1つに整理するのが基本。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflow-gen2-data-destinations-validation-rules",
    "origin": "pa50-ja",
    "selectCount": 2
  },
  {
    "id": "PA50-50",
    "objectiveId": "O49",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment論点再構成",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Lakehouse テーブルで小さい Parquet ファイルが大量に生成され、クエリ性能が低下している。最も直接的な改善策はどれか。",
    "choices": [
      "V-Order だけを適用する",
      "OPTIMIZE を実行して小さいファイルをコンパクションする",
      "Lakehouse API で手動削除する",
      "VACUUM だけを実行する"
    ],
    "answers": [
      1
    ],
    "explanation": "OPTIMIZE は小さいファイルをより大きなファイルへ統合し、読み取り効率を改善する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance",
    "origin": "pa50-ja"
  }
];
for(const item of PA50_REAUTHORED) q.push(item);


// Japanese original practice set re-authored from the user's DP-700 Practice Assessment session on 2026-11-06.
// It preserves the tested concepts without reproducing the original assessment wording.
const PA_LIVE_20261106=[
  {
    "id": "PALIVE-20261106-01",
    "objectiveId": "O44",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Notebook を実行すると「非アクティブのためセッションがタイムアウトした」と表示されるが、Notebook上で手動でセッションを開始すると正常に実行できる。管理負荷を最小にして改善するには何をするか。",
    "choices": [
      "Fabric 管理者に Capacity の再開を依頼する",
      "Workspace 全体のセッションタイムアウトを延長する",
      "AutoSave を有効にする",
      "Session ready インジケーターからセッションタイムアウト時間を変更する"
    ],
    "answers": [
      3
    ],
    "explanation": "手動でセッションを開始すれば動くため、Notebook固有のセッション設定が論点。Session ready インジケーターからタイムアウト時間を調整する。",
    "memoryTip": "手動Session開始で動く → Session ready の timeout",
    "source": "https://learn.microsoft.com/en-us/fabric/data-science/fabric-notebooks-troubleshooting-guide",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-02",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "子 Pipeline の ForEach に JSON 配列を表す文字列パラメーター TableList が渡される。ForEach の items が配列を要求している場合、最も適切な式はどれか。",
    "choices": [
      "@string(pipeline().parameters.TableList)",
      "@json(pipeline().parameters.TableList)",
      "@concat(pipeline().parameters.TableList)",
      "@base64(pipeline().parameters.TableList)"
    ],
    "answers": [
      1
    ],
    "explanation": "JSON文字列を配列として解釈するには json() を使用する。",
    "memoryTip": "JSON文字列を読む → json()",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-03",
    "objectiveId": "O53",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Delta データに対する複雑な変換・集計を行う Spark ジョブを、既存コードを変更せず高速化したい。最も適切な機能はどれか。",
    "choices": [
      "Adaptive Query Execution",
      "Dynamic Allocation",
      "High concurrency mode",
      "Native execution engine"
    ],
    "answers": [
      3
    ],
    "explanation": "Native execution engine は Delta/Parquet を使う複雑な変換・集計をネイティブ実行で高速化でき、コード変更を抑えられる。",
    "memoryTip": "Delta + 複雑集計 + コード変更なし → Native engine",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/native-execution-engine-overview",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-04",
    "objectiveId": "O41",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Dataflow Gen2 の取り込み遅延や失敗を、変化するデータの条件に応じて自動検知し通知したい。何を使うか。",
    "choices": [
      "Activator",
      "Capacity",
      "Monitor hub",
      "OneLake"
    ],
    "answers": [
      0
    ],
    "explanation": "Activator はデータを監視し、条件成立時に通知やアクションを自動実行する用途に適する。",
    "memoryTip": "条件成立で自動通知 → Activator",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/data-activator/activator-introduction",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-05",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "親 Pipeline から子 Pipeline の Array 型パラメーター tables に値を渡す際、String と評価されて ForEach が失敗する。親側で配列として渡すには何を使うか。",
    "choices": [
      "子側を String 型へ変更する",
      "@string(...) を使う",
      "Execute Pipeline の値を createArray(...) で構築する",
      "ForEach に実行IDを渡す"
    ],
    "answers": [
      2
    ],
    "explanation": "親側で createArray() を使い、配列として子 Pipeline に渡す。",
    "memoryTip": "配列を作って渡す → createArray()",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-06",
    "objectiveId": "O46",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Eventstream のランタイムエラーを調査し、原因を特定したい。診断のために有効な対応を3つ選べ。",
    "choices": [
      "Data insights でイベント処理メトリクスを確認する",
      "データ変換をすべて無効化する",
      "Runtime logs をエラー重大度で絞り込む",
      "原因を確認せず変換ロジックを書き換える",
      "Runtime logs でエラー詳細を確認する"
    ],
    "answers": [
      0,
      2,
      4
    ],
    "explanation": "まず Data insights で処理状況やメトリクスを把握し、Runtime logs で詳細を確認して severity などで絞り込む。原因特定前に変換ロジックを変更するのは一般的な診断手順ではない。",
    "memoryTip": "Eventstream診断 → Data insights → Runtime logs → severityで絞る",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor",
    "origin": "pa-live-20261106",
    "selectCount": 3
  },
  {
    "id": "PALIVE-20261106-07",
    "objectiveId": "O39",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Lakehouse のデータ変換処理でボトルネックや失敗を検出し、性能改善につなげたい。最も適切な対応はどれか。",
    "choices": [
      "失敗通知だけを設定する",
      "詳細ログを有効にして性能分析する",
      "原因を調べず自動スケールだけ有効にする",
      "基本監視だけに限定する"
    ],
    "answers": [
      1
    ],
    "explanation": "性能問題の特定には詳細ログを使い、処理時間やエラーの手掛かりを得る必要がある。",
    "memoryTip": "遅い理由を探す → 詳細ログ",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-08",
    "objectiveId": "O43",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Dataflow Gen2 で Orders は DestinationQueryNotFound、Customers は MultipleDestinationQueries となった。適切な修正を2つ選べ。",
    "choices": [
      "Orders の宛先を再構成する",
      "Customers の重複した宛先を削除する",
      "Orders は接続再認証だけ行う",
      "Customers の宛先をさらに追加する"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "見つからない宛先設定は再構成し、複数宛先競合は重複を取り除く。",
    "memoryTip": "NotFound → 再設定 / Multiple → 重複削除",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflow-gen2-data-destinations-validation-rules",
    "origin": "pa-live-20261106",
    "selectCount": 2
  },
  {
    "id": "PALIVE-20261106-09",
    "objectiveId": "O21",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "リアルタイム分析でデータ利用可能になるまでの遅延が問題になっている。継続的な低遅延処理に適するものはどれか。",
    "choices": [
      "パーティション分割だけ行う",
      "データノードを増やすだけ",
      "日次バッチに切り替える",
      "Spark Structured Streaming"
    ],
    "answers": [
      3
    ],
    "explanation": "継続的に到着するデータを増分処理するには Structured Streaming が適する。",
    "memoryTip": "リアルタイム継続処理 → Structured Streaming",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-10",
    "objectiveId": "O42",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Data Pipeline が断続的に失敗している。失敗 Run の詳細や Activity のエラーを確認して根本原因を調べるには何を使うか。",
    "choices": [
      "Timeout を延長する",
      "調べず再実行する",
      "サードパーティ製監視だけを使う",
      "Monitoring hub"
    ],
    "answers": [
      3
    ],
    "explanation": "Monitoring hub から Pipeline Run と Activity の状態・エラー詳細を追跡できる。",
    "memoryTip": "Pipeline失敗の原因調査 → Monitoring hub",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-11",
    "objectiveId": "O42",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Lookup で対象データが0件だった場合に、指定したエラー内容で Pipeline を終了させたい。必要な対応を2つ選べ。",
    "choices": [
      "Lookup 後に Fail activity を配置する",
      "Retry activity を追加する",
      "Wait activity を追加する",
      "Fail activity に独自のエラーコード/メッセージを設定する",
      "Retry だけで処理する"
    ],
    "answers": [
      0,
      3
    ],
    "explanation": "意図的に失敗終了させるには Fail activity を使い、明確なコードとメッセージを設定する。",
    "memoryTip": "理由付きで意図的に失敗 → Fail activity",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/fail-activity",
    "origin": "pa-live-20261106",
    "selectCount": 2
  },
  {
    "id": "PALIVE-20261106-12",
    "objectiveId": "O42",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Lookup でデータソース欠落を検知した際、分かりやすいエラーコードとメッセージを残して Pipeline を終了したい。最適な方法はどれか。",
    "choices": [
      "条件分岐だけ作る",
      "Fail activity にカスタムエラーを設定する",
      "ログだけ残して続行する",
      "自動Retryだけ行う"
    ],
    "answers": [
      1
    ],
    "explanation": "Fail activity は明示的なエラーコードとメッセージで Pipeline を失敗終了できる。",
    "memoryTip": "明確な失敗理由 → Fail activity",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/fail-activity",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-13",
    "objectiveId": "O39",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Pipeline は成功しているが Lakehouse へのロードが想定より遅い。実行時間や遅い Activity を特定するには何を使うか。",
    "choices": [
      "Dataflow を新規作成する",
      "Pipeline を複製する",
      "Activator",
      "Monitoring hub"
    ],
    "answers": [
      3
    ],
    "explanation": "成功した Run でも Monitoring hub で実行時間や Activity 状況を確認できる。",
    "memoryTip": "成功してるけど遅い → Monitoring hub",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-14",
    "objectiveId": "O49",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Structured Streaming が毎分 Delta テーブルへ書き込み、小さい Parquet ファイルが大量発生している。書き込み時の小ファイルを減らし、残りも自動統合したい。何を有効にするか。",
    "choices": [
      "V-Order だけ",
      "RDD へ変更",
      "各バッチ後に VACUUM",
      "Optimize Write と Auto Compact"
    ],
    "answers": [
      3
    ],
    "explanation": "Optimize Write は書き込み時に適切なサイズへまとめ、Auto Compact は残った小ファイルを自動統合する。",
    "memoryTip": "予防 = Optimize Write / 後処理 = Auto Compact",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/table-maintenance-optimization",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-15",
    "objectiveId": "O39",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "データ取り込み・変換が遅延している。原因を特定して改善するために優先すべき対応を2つ選べ。",
    "choices": [
      "Activity を状態と開始時刻で絞り込む",
      "ストレージ容量だけ増やす",
      "遅い変換処理を特定し最適化する",
      "通知だけ設定する"
    ],
    "answers": [
      0,
      2
    ],
    "explanation": "まず監視情報で遅い処理を絞り込み、その処理自体を最適化する。",
    "memoryTip": "遅延 → 絞り込み → 最適化",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory",
    "origin": "pa-live-20261106",
    "selectCount": 2
  },
  {
    "id": "PALIVE-20261106-16",
    "objectiveId": "O35",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "IoT ストリーミングデータを Fabric でリアルタイム変換し、Delta テーブルへ保存したい。最適なものはどれか。",
    "choices": [
      "Azure Data Factory のみ",
      "Event Hubs のみ",
      "Azure Stream Analytics のみ",
      "Spark Structured Streaming + Delta"
    ],
    "answers": [
      3
    ],
    "explanation": "Fabric で Spark を使い継続変換し、Delta に保存する構成が要件に合う。",
    "memoryTip": "Fabricストリーム変換 → Structured Streaming + Delta",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-17",
    "objectiveId": "O27",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "code",
    "question": "sales_df から Completed の行だけを対象に region・channel ごとの amount 合計を求め、50000超のみ残したい。正しい処理はどれか。",
    "choices": [
      "filter → groupBy(region,channel) → sum(amount) → total_sales>50000 でfilter",
      "groupBy(status) → count → amountでfilter",
      "region,channelのdistinctだけ",
      "amountで並べて50000件取得"
    ],
    "answers": [
      0
    ],
    "explanation": "条件で絞り、region/channel で集計し、合計値に対して再度 filter する。",
    "memoryTip": "filter → groupBy → sum → filter",
    "source": "https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-notebooks/",
    "origin": "pa-live-20261106",
    "code": "sales_df.filter(...).groupBy(...).agg(...).filter(...)"
  },
  {
    "id": "PALIVE-20261106-18",
    "objectiveId": "O35",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "ストリーミングデータを Lakehouse に保存する前に、無効な行を除外し計算列を追加したい。適切な対応を3つ選べ。",
    "choices": [
      "Spark SQL 式で計算列を追加する",
      "重要列が NULL の行を除外する",
      "CSVへ書き出して後でバッチ処理する",
      "バッチ変換だけにする",
      "Spark Structured Streaming でストリームを読む"
    ],
    "answers": [
      0,
      1,
      4
    ],
    "explanation": "Structured Streaming で読み、無効行を filter し、必要な計算列を追加する。",
    "memoryTip": "読む → Filter → 列追加",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa-live-20261106",
    "selectCount": 3
  },
  {
    "id": "PALIVE-20261106-19",
    "objectiveId": "O23",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Warehouse と Lakehouse のデータを結合し、その結果を新しい Warehouse テーブルとして作成したい。開発工数を最小化する方法として最も適切なのはどれか。",
    "choices": [
      "Azure Data Factory で個別のコピー処理を作成する",
      "CTAS（CREATE TABLE AS SELECT）でクロスデータベースクエリの結果からテーブルを作成する",
      "Dataflow Gen2 で別の変換フローを新規作成する",
      "SELECT INTO のみを使用する"
    ],
    "answers": [
      1
    ],
    "explanation": "Fabric Warehouse では Lakehouse と Warehouse をクロスデータベースクエリで参照できる。結果をそのまま新規テーブルへ物理化する要件なら CTAS が簡潔で、追加のETLフローを作るより開発工数を抑えやすい。",
    "memoryTip": "Warehouse + Lakehouse をSQLで結合して新表作成 → CTAS",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-tsql",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-20",
    "objectiveId": "O34",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "PlantA と PlantB の2ストリームを、equipmentId・temperature・eventTime の3列だけに揃え、入力イベント1件につき出力1件として縦に統合したい。適切な順序はどれか。",
    "choices": [
      "PlantBをExpand → Join",
      "PlantBをFilter → Join",
      "PlantBをManage fieldsで列名・型・不要列を整える → Union",
      "PlantBをJoin → Manage fields"
    ],
    "answers": [
      2
    ],
    "explanation": "まず Manage fields でスキーマを揃え、その後 Union でストリームを縦結合する。",
    "memoryTip": "列を揃える → Manage fields / 縦結合 → Union",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-21",
    "objectiveId": "O28",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Product→Subcategory→Category の階層を Gold 層で使いやすくし、Sales から1回の Join で商品・サブカテゴリ・カテゴリ名を取得したい。最適な設計はどれか。",
    "choices": [
      "1商品1行で商品・サブカテゴリ・カテゴリの説明属性を持つ",
      "商品バージョンごとに1行",
      "Sales明細ごとに1行",
      "サブカテゴリごとに1行"
    ],
    "answers": [
      0
    ],
    "explanation": "現在値だけ必要なら商品粒度で階層属性を非正規化すると、Salesから ProductKey で1回Joinできる。",
    "memoryTip": "Goldの階層 → 商品粒度で非正規化",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-22",
    "objectiveId": "O19",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "完全なカテゴリスナップショットは毎回全置換し、Customer は既存行を更新・新規行を追加したい。正しい組み合わせはどれか。",
    "choices": [
      "Category=DELETE / Customer=UPDATE",
      "Category=INSERT INTO / Customer=INSERT INTO",
      "Category=INSERT OVERWRITE / Customer=MERGE",
      "Category=MERGE / Customer=DELETE"
    ],
    "answers": [
      2
    ],
    "explanation": "全置換は INSERT OVERWRITE、既存更新＋新規追加は MERGE が適する。",
    "memoryTip": "全部入替 → INSERT OVERWRITE / あれば更新・なければ追加 → MERGE",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-and-delta-tables",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-23",
    "objectiveId": "O35",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Kafka の既存イベントは初回に読み込まず、開始後の新規イベントだけ Delta に追記し、中断後は前回の続きから再開したい。適切な構成はどれか。",
    "choices": [
      "earliest + append + durable checkpoint",
      "latest + append + durable checkpoint",
      "latest + append + 毎回新checkpoint",
      "latest + append + checkpointなし"
    ],
    "answers": [
      1
    ],
    "explanation": "初回は latest、出力は append、再開位置の保持には永続 checkpoint を使う。",
    "memoryTip": "今後だけ=latest / 追記=append / 再開=durable checkpoint",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-24",
    "objectiveId": "O19",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "毎回フルリロードしている大量Factロードの時間とリソースを削減したい。効果的な対策を2つ選べ。",
    "choices": [
      "計算資源だけ増やしてフルロード継続",
      "増分ロードを導入する",
      "手動パーティションだけ行う",
      "別ETL製品へ変えるだけ",
      "CDCで変更を追跡する"
    ],
    "answers": [
      1,
      4
    ],
    "explanation": "変更分だけ処理する増分ロードと、変更検出のCDCを組み合わせるとフルロードを避けられる。",
    "memoryTip": "フルロードが重い → Incremental + CDC",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/load-data",
    "origin": "pa-live-20261106",
    "selectCount": 2
  },
  {
    "id": "PALIVE-20261106-25",
    "objectiveId": "O22",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "構造化・半構造化・非構造化データを扱い、Fabric 上で PySpark と SQL の両方を使って分析・変換したい。最も適切な Fabric データストアはどれか。",
    "choices": [
      "Warehouse",
      "Eventhouse",
      "Lakehouse",
      "SQL database"
    ],
    "answers": [
      2
    ],
    "explanation": "Lakehouse は多様なデータ形式を扱い、Spark/PySpark と SQL analytics endpoint の両方を利用できる。",
    "memoryTip": "多様な形式 + Spark + SQL → Lakehouse",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/store-data",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-26",
    "objectiveId": "O20",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "ADLS Gen2 や SQL Server など複数ソースから取り込み、ディメンショナルモデル向けに効率よくETLしたい。適切な対応を3つ選べ。",
    "choices": [
      "ステージングを使わず直接ロードする",
      "品質確認を省略する",
      "ロード前にステージングする",
      "モデルに合わせて変換する",
      "自動化のない基本ETLだけ使う",
      "Data Factory pipeline でオーケストレーションする"
    ],
    "answers": [
      2,
      3,
      5
    ],
    "explanation": "複数ソースをステージングし、モデルに合わせて変換し、Pipeline で順序や依存関係を自動化する。",
    "memoryTip": "Stage → Transform → Pipeline",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/load-data",
    "origin": "pa-live-20261106",
    "selectCount": 3
  },
  {
    "id": "PALIVE-20261106-27",
    "objectiveId": "O37",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "同一クエリで1分Tumblingと15/30/60分Hoppingを集計し、出力にどのWindowの結果か識別子も出したい。適切な方法はどれか。",
    "choices": [
      "Windowsに各Windowを置くだけでIDは不要",
      "すべてTumblingWindowにする",
      "各Windowを Window('ラベル', ...) で定義し System.Window().Id を取得する",
      "別クエリを4本作る"
    ],
    "answers": [
      2
    ],
    "explanation": "複数Windowを同一クエリで識別するには各WindowへIDを付与し、System.Window().Id を参照する。",
    "memoryTip": "複数Window識別 → Window('名前',...) + System.Window().Id",
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/windows-azure-stream-analytics",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-28",
    "objectiveId": "O27",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "大規模な Delta データセットを機械学習前処理向けに柔軟に変換したい。Fabric で最も適したアイテムはどれか。",
    "choices": [
      "Notebook",
      "Azure Data Factory",
      "Power BI Dataflow",
      "SQL Server Management Studio"
    ],
    "answers": [
      0
    ],
    "explanation": "Notebook なら Spark/PySpark により大規模Deltaデータを分散処理できる。",
    "memoryTip": "大規模Delta + ML前処理 → Notebook/Spark",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-29",
    "objectiveId": "O27",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "code",
    "question": "orders から status='F' の行だけを対象に、priority ごとの件数 n_orders を求め、件数降順にしたい。正しい流れはどれか。",
    "choices": [
      "filter(status='F') → groupBy(priority) → count(orderkey) as n_orders → n_orders desc",
      "filter → groupBy(priority) → count(totalprice) → priority desc",
      "groupBy(priority,status) → count → desc",
      "groupBy → count → 後からstatusでfilter"
    ],
    "answers": [
      0
    ],
    "explanation": "集計前に対象行を絞り、priorityでグループ化して注文キーを数え、集計結果で降順にする。",
    "memoryTip": "絞る → まとめる → 数える → 並べる",
    "source": "https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-notebooks/",
    "origin": "pa-live-20261106",
    "code": "df.filter(...).groupBy(...).agg(count(...).alias('n_orders')).sort(col('n_orders').desc())"
  },
  {
    "id": "PALIVE-20261106-30",
    "objectiveId": "O35",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "近リアルタイムのストリームを本番ジョブとして取り込み、Delta テーブルへ保存し、障害後も再開したい。必要な要素を3つ選べ。",
    "choices": [
      "Structured Streaming の Python を含む Spark Job Definition",
      "永続 checkpoint location",
      "JSONファイルだけへ保存",
      "バッチ処理だけにする",
      "Delta table を sink にする"
    ],
    "answers": [
      0,
      1,
      4
    ],
    "explanation": "本番実行は Spark Job Definition、再開性は checkpoint、保存先は Delta が適する。",
    "memoryTip": "本番Streaming → SJD + checkpoint + Delta",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-job-definition",
    "origin": "pa-live-20261106",
    "selectCount": 3
  },
  {
    "id": "PALIVE-20261106-31",
    "objectiveId": "O16",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "ADLS Gen2 の CSV を Lakehouse にロードする処理を、対話的に試しながら共同開発したい。最も適切な Fabric アイテムはどれか。",
    "choices": [
      "Data pipeline",
      "Dataflow",
      "Notebook",
      "Spark Job Definition"
    ],
    "answers": [
      2
    ],
    "explanation": "Notebook は対話的実行と共同開発に適し、Sparkを使った取り込み・変換も行える。",
    "memoryTip": "対話的に試す・共同開発 → Notebook",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-32",
    "objectiveId": "O06",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "SDK-style SQL Database Project をCIで検証し、DBへ接続せず後続デプロイ用の dacpac を生成したい。使うコマンドはどれか。",
    "choices": [
      "dotnet build",
      "SqlPackage /Action:DeployReport",
      "SqlPackage /Action:Publish",
      "SqlPackage /Action:Script"
    ],
    "answers": [
      0
    ],
    "explanation": "SDK-style project は dotnet build でビルド検証と dacpac 生成ができる。",
    "memoryTip": "CIで検証＋dacpac → dotnet build",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-33",
    "objectiveId": "O09",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Workspace から外したユーザーに、Lakehouse1 の読み取りだけを最小権限で与えたい。最適な方法はどれか。",
    "choices": [
      "Contributor を付与",
      "Member を付与",
      "Viewer を付与",
      "Lakehouse1 の item permissions を設定"
    ],
    "answers": [
      3
    ],
    "explanation": "Workspace全体ではなく対象アイテムだけに権限を付与する方が最小権限。",
    "memoryTip": "特定アイテムだけ → Item permissions",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-34",
    "objectiveId": "O01",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Notebook が複数同時利用者で Spark セッションを共有できる High concurrency mode を使うようにしたい。Workspace のどこで設定するか。",
    "choices": [
      "Data Engineering/Science > Spark settings",
      "Data Factory",
      "Data Warehouse",
      "Delegated Settings"
    ],
    "answers": [
      0
    ],
    "explanation": "High concurrency は Workspace の Spark settings から構成する。",
    "memoryTip": "Notebookのセッション共有 → Spark settings",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/configure-starter-pools",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-35",
    "objectiveId": "O26",
    "domain": "データの取り込みと変換",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Data Factory Pipeline の Copy Data activity の主目的はどれか。",
    "choices": [
      "取り込んだデータを複雑変換する",
      "ソースから宛先へデータをコピーする",
      "Spark Notebookを実行する",
      "SQLコードを実行する"
    ],
    "answers": [
      1
    ],
    "explanation": "Copy Data activity はソースから宛先へのデータ移動を担当する。",
    "memoryTip": "Copy Data = データ移動",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/copy-data-activity",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-36",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "データソースやテーブル名を実行時に切り替えながら、1つの Pipeline を再利用して Lakehouse へロードしたい。最適な設計はどれか。",
    "choices": [
      "ソースごとに個別Pipelineを作る",
      "Pipeline parameters と dynamic expressions を使う",
      "パラメーターなしNotebookに全部書く",
      "固定値だけを使う"
    ],
    "answers": [
      1
    ],
    "explanation": "パラメーターと動的式により同じPipelineを実行時値で再利用できる。",
    "memoryTip": "動的・再利用 → Parameters + Dynamic expressions",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-37",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "毎日01:00に、Copy Data → Dataflow Gen2 → Spark Notebook を前段成功後に順番に実行したい。最も適切なものはどれか。",
    "choices": [
      "Data Factory pipeline",
      "Eventstream",
      "Notebook単体",
      "Semantic model"
    ],
    "answers": [
      0
    ],
    "explanation": "複数処理の依存関係とスケジュール実行をまとめて制御するには Pipeline が適する。",
    "memoryTip": "複数処理を順番に自動実行 → Pipeline",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-38",
    "objectiveId": "O06",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "既存 Fabric Warehouse のスキーマを VS Code の Database Project に取り込み、作成時には既存DBを変更したくない。最初に何をするか。",
    "choices": [
      "Manage Packages",
      "Warehouse接続を右クリックして Create Project From Database",
      "New Query",
      "Create Project From Scratch"
    ],
    "answers": [
      1
    ],
    "explanation": "Create Project From Database で既存スキーマをプロジェクトとして抽出でき、元DBは変更しない。",
    "memoryTip": "既存DBをプロジェクト化 → Create Project From Database",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-39",
    "objectiveId": "O02",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Fabric の Data Mesh で業務部門へガバナンスを委任したい。基本構成として適切なものを3つ選べ。",
    "choices": [
      "ドメイン固有のSensitivity labelだけ設定",
      "Workspace を Domain に割り当てる",
      "Tenant settings を Domain に委任する",
      "Domain-level sensitivity labelsだけを有効化する",
      "RLSだけ実装する",
      "Domain administrators を指定する"
    ],
    "answers": [
      1,
      2,
      5
    ],
    "explanation": "WorkspaceをDomainに所属させ、Domain adminを指定し、委任可能なTenant settingをDomainへ委任する。",
    "memoryTip": "Data Mesh → Workspace→Domain / Domain Admin / 設定委任",
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains",
    "origin": "pa-live-20261106",
    "selectCount": 3
  },
  {
    "id": "PALIVE-20261106-40",
    "objectiveId": "O17",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Blob Storage の /sales/daily/ にファイルが作成された瞬間、Pipeline を自動起動したい。最適な設定はどれか。",
    "choices": [
      "毎回手動実行",
      "Scheduled runの失敗通知",
      "定期スケジュール実行",
      "/sales/daily/ を絞り込む storage event trigger"
    ],
    "answers": [
      3
    ],
    "explanation": "ファイル作成イベントで起動し、対象パスをフィルターする。",
    "memoryTip": "ファイル到着で起動 → Storage event trigger",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-41",
    "objectiveId": "O01",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "共有リソース需要の変動で Spark ジョブが遅延している。Custom Spark pool でピーク時だけノードを増やしたい。何を使うか。",
    "choices": [
      "Autoscaling を有効にし最大ノードをピークに合わせる",
      "静的ノード割当",
      "静的executor割当",
      "固定ノード数"
    ],
    "answers": [
      0
    ],
    "explanation": "Autoscaling により需要に応じてノード数を増減できる。",
    "memoryTip": "負荷変動 → Custom pool + Autoscale",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/configure-starter-pools",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-42",
    "objectiveId": "O07",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Deployment pipeline で、検証済みの変更だけを Production へ昇格したい。最も適切な機能はどれか。",
    "choices": [
      "同じWorkspaceを全Stageへ割当",
      "Deployment rulesだけ",
      "全Stageへ同時Deploy",
      "Selective deployment"
    ],
    "answers": [
      3
    ],
    "explanation": "Selective deployment なら対象アイテムを選び、検証済み変更だけ昇格できる。",
    "memoryTip": "検証済みだけ本番へ → Selective deployment",
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/deploy-content",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-43",
    "objectiveId": "O10",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Warehouse の Salary と SocialSecurityNumber を HR だけが参照できるようにしたい。適切な対応を3つ選べ。",
    "choices": [
      "Viewだけ作る",
      "HR用ロールを作成しHRを所属させる",
      "他ロールの機密列SELECTを許可しない/必要に応じて拒否する",
      "HRロールに機密列のSELECTを付与する",
      "Dynamic Data Maskingだけに頼る"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "専用ロールと列レベルSELECT権限で、HRだけが機密列へアクセスできるようにする。",
    "memoryTip": "特定列を特定部署だけ → Role + 列SELECT",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/column-level-security",
    "origin": "pa-live-20261106",
    "selectCount": 3
  },
  {
    "id": "PALIVE-20261106-44",
    "objectiveId": "O53",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Spark のリソースをワークロード需要に応じて自動調整し、無駄と遅延を減らしたい。何を有効にするか。",
    "choices": [
      "Autoscaling",
      "Fixed resource allocation",
      "固定executor数",
      "常にLargeノード"
    ],
    "answers": [
      0
    ],
    "explanation": "需要変動へ追随するには Autoscaling が適する。",
    "memoryTip": "負荷に応じて増減 → Autoscaling",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/configure-starter-pools",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-45",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "入力パラメーターに応じて複数データセットを効率よく処理し、Pipelineを再利用したい。何を実装するか。",
    "choices": [
      "データセットごとに別Pipeline",
      "Parameterized pipelines",
      "パラメーターなしの単一Pipeline",
      "ハードコード"
    ],
    "answers": [
      1
    ],
    "explanation": "Pipelineをパラメーター化することで同一処理を異なる入力で再利用できる。",
    "memoryTip": "動的処理・再利用 → Parameterized Pipeline",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-46",
    "objectiveId": "O18",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Pipeline の RunDate を Notebook の process_date の既定値へ上書きして渡したい。正しい組み合わせはどれか。",
    "choices": [
      "NotebookはMarkdown cell / 値は@variables('RunDate')",
      "NotebookはParameters cell / 値は@pipeline().parameters.RunDate",
      "NotebookはLocked cell / 値はprocess_date",
      "NotebookはFrozen cell / 値はActivity出力"
    ],
    "answers": [
      1
    ],
    "explanation": "Notebook側は Parameters cell とし、Notebook activity の base parameter に Pipeline の RunDate を渡す。",
    "memoryTip": "Notebookへ値を渡す → Parameters cell + pipeline parameter",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-47",
    "objectiveId": "O17",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "/retail 配下に追加された CSV だけで Pipeline1 を起動し、Pipeline1 成功後に Dataflow1 を起動したい。適切な設定を2つ選べ。",
    "choices": [
      "Pipeline1: Blob created + .csvのみ",
      "Pipeline1: Blob created + /retailのみ",
      "Pipeline1: Blob created + /retail + .csv",
      "Dataflow1: Job created; Pipeline1",
      "Dataflow1: Job succeeded; Pipeline1"
    ],
    "answers": [
      2,
      4
    ],
    "explanation": "Pipeline1はパスと拡張子の両方で絞り込み、Dataflow1はPipeline1成功を条件にする。",
    "memoryTip": "入口は Blob条件 / 後段は Job succeeded",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs",
    "origin": "pa-live-20261106",
    "selectCount": 2
  },
  {
    "id": "PALIVE-20261106-48",
    "objectiveId": "O05",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Notebook の変更履歴を管理し、任意の過去状態へ戻せるようにしたい。最も適切な方法はどれか。",
    "choices": [
      "Data Factory pipelineへ追加",
      "WorkspaceをGit repositoryへ接続",
      "Deployment pipelineだけ作成",
      "Workspace内でbranch名だけ作成"
    ],
    "answers": [
      1
    ],
    "explanation": "Git integration により変更をコミットとして管理し、過去状態へ戻せる。",
    "memoryTip": "過去状態へ戻す → Git",
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration",
    "origin": "pa-live-20261106"
  },
  {
    "id": "PALIVE-20261106-49",
    "objectiveId": "O44",
    "domain": "分析ソリューションの監視と最適化",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "multi",
    "question": "Spark runtime 更新後にライブラリ互換性が崩れてジョブが失敗する。根本対応として適切なものを2つ選べ。",
    "choices": [
      "executor memoryだけ変更",
      "非互換ライブラリを除去してEnvironmentを再Publish",
      "必ず旧runtimeへ戻す",
      "新runtimeに対応するライブラリ版へ更新",
      "古いライブラリを使い続ける"
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "新runtimeへライブラリを合わせ、不要な非互換ライブラリを削除したうえでEnvironmentを再Publishする。",
    "memoryTip": "Runtimeを上げたらLibraryも合わせる → 再Publish",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/environment-manage-library",
    "origin": "pa-live-20261106",
    "selectCount": 2
  },
  {
    "id": "PALIVE-20261106-50",
    "objectiveId": "O10",
    "domain": "分析ソリューションの実装と管理",
    "group": "Practice Assessment実戦論点 2026-11-06",
    "skill": "",
    "difficulty": "Hard",
    "type": "single",
    "question": "Patients テーブルの MedicalHistory 列だけを、許可された医療従事者に限定したい。最も適切な制御はどれか。",
    "choices": [
      "Column-Level Security",
      "Dynamic Data Masking",
      "Row-Level Security",
      "Workspace Roles"
    ],
    "answers": [
      0
    ],
    "explanation": "特定列へのアクセス可否を制御する要件には Column-Level Security が適する。",
    "memoryTip": "列=CLS / 行=RLS / 見せるが隠す=DDM",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/column-level-security",
    "origin": "pa-live-20261106"
  }
];
for(const item of PA_LIVE_20261106){ if(CURRENT_SKILL_NAMES[item.objectiveId]) item.skill=CURRENT_SKILL_NAMES[item.objectiveId]; }
window.DP700_PA_LIVE_20261106=PA_LIVE_20261106;

for(const item of q){ if(CURRENT_SKILL_NAMES[item.objectiveId]) item.skill=CURRENT_SKILL_NAMES[item.objectiveId]; }

const CURRENT_OBJECTIVES=O
  .filter(x=>!CURRENT_EXCLUDED_OBJECTIVES.has(x[0]))
  .map(x=>{
    const obj={id:x[0],domain:x[1],group:x[2],skill:CURRENT_SKILL_NAMES[x[0]]||x[3],source:CURRENT_SOURCE_OVERRIDES[x[0]]||x[8]};
    return obj;
  });


const FINAL_SOURCE_MAP={
  O27:"https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data",
  O28:"https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables",
  O31:"https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/fabric-analytical-data-stores",
  O37:"https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
};
const FINAL_CODE_SOURCE_BY_PREFIX={
  "C-SQL":"https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-tsql/",
  "C-PY":"https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-notebooks/",
  "C-KQL":"https://learn.microsoft.com/en-us/training/modules/query-data-kql-database-microsoft-fabric/"
};
const FINAL_ORDER_SOURCE_BY_ID={
  "ORD-07":"https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse",
  "ORD-08":"https://learn.microsoft.com/en-us/fabric/onelake/onelake-medallion-lakehouse-architecture",
  "ORD-11":"https://learn.microsoft.com/en-us/fabric/real-time-hub/process-data-streams-using-transformations",
  "ORD-12":"https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-notebooks/"
};
for(const item of q){
  if(FINAL_SOURCE_MAP[item.objectiveId]) item.source=FINAL_SOURCE_MAP[item.objectiveId];
  for(const prefix of Object.keys(FINAL_CODE_SOURCE_BY_PREFIX)){
    if(item.id.startsWith(prefix)) item.source=FINAL_CODE_SOURCE_BY_PREFIX[prefix];
  }
  if(FINAL_ORDER_SOURCE_BY_ID[item.id]) item.source=FINAL_ORDER_SOURCE_BY_ID[item.id];

  if(item.id==="C-SQL-04") item.source="https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables";
  if(item.id==="C-PY-09" || item.id==="C-PY-10") item.source="https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview";
  if(item.id==="C-KQL-05") item.source="https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/query-fabric-workspace-monitoring-data";
}

window.DP700_META={
 title:"DP-700 過去問道場",
 version:"2026.11.06-v6.1",
 officialGuide:S.GUIDE,
 objectiveCount:49,
 questionCount:q.length,
 skillsMeasuredAsOf:"2026-10-19",
 guideLastChecked:"2026-11-03",
 practiceAssessmentUrl:"https://learn.microsoft.com/en-us/credentials/certifications/fabric-data-engineer-associate/?practice-assessment-type=certification",
 practiceAssessmentNote:"新版Practice AssessmentはAI Skills Navigator上で提供される。ユーザー提供スクリーンショットで確認した50問の論点は、原文を転載せず日本語オリジナル問題として再構成している。",
 paReauthoredCount:50,
 practiceLive20261106Count:50,
 disclaimer:"Microsoft公式Study Guide（2026-10-30更新、skills measured as of 2026-10-19）に基づく独自問題です。実試験の流出問題・再現問題ではありません。"
};
window.DP700_OBJECTIVES=CURRENT_OBJECTIVES;
window.DP700_QUESTIONS=q;
})();
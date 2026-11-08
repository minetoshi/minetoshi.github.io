(() => {
"use strict";

const G = [
  {term:"OneLake",aliases:["ワンレイク"],category:"基礎",definition:"Microsoft Fabric 全体で共通して使う統合データレイク。Fabric の各ワークロードが同じストレージ層を共有する。",use:"Fabric 内のデータをコピーしすぎず、複数のエンジンから同じデータを利用したいときの土台。",compare:"Lakehouse や Warehouse は分析用アイテム。OneLake はそれらを支える共通ストレージ層。",memory:"OneLake = Fabric 全体の共通ストレージ",source:"https://learn.microsoft.com/en-us/fabric/onelake/onelake-overview"},
  {term:"Lakehouse",aliases:["レイクハウス"],category:"基礎",definition:"データレイクの柔軟性と、テーブルとして扱える分析機能を組み合わせた Fabric のデータストア。Spark と SQL の両方から扱いやすい。",use:"Delta テーブル、ファイル、Notebook、PySpark を中心にデータエンジニアリングしたいとき。",compare:"Warehouse は T-SQL 中心。Lakehouse は Spark とファイル/Delta を中心に扱う。",memory:"Spark・Delta・ファイル → Lakehouse",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-overview"},
  {term:"Warehouse",aliases:["Data Warehouse","ウェアハウス"],category:"基礎",definition:"リレーショナル分析向けの Fabric データストア。T-SQL を中心に、テーブル・ビュー・SQL 分析を行う。",use:"SQL 中心の分析、ディメンショナルモデル、BI 向けの定型的な分析基盤に向く。",compare:"Lakehouse は Spark/Delta が得意。Warehouse は T-SQL とリレーショナル分析が得意。",memory:"T-SQL 中心 → Warehouse",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/data-warehousing"},
  {term:"Delta table",aliases:["Delta","Delta Lake","デルタテーブル"],category:"基礎",definition:"Parquet ファイルとトランザクションログを組み合わせ、更新・履歴・整合性を扱いやすくしたテーブル形式。",use:"Lakehouse で信頼性の高いテーブルを作り、Spark や SQL から参照するとき。",compare:"Parquet はファイル形式。Delta table は Parquet にトランザクション管理を加えたテーブル形式。",memory:"Parquet + 履歴/整合性 = Delta",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-and-delta-tables"},
  {term:"Shortcut",aliases:["OneLake shortcut","ショートカット"],category:"取り込み・変換",definition:"データをコピーせず、別の OneLake や外部ストレージ上のデータを参照する仕組み。",use:"既存データを複製せずに Fabric から使いたいとき。",compare:"Shortcut は参照。Mirroring は継続レプリケーション。",memory:"コピーしない → Shortcut",source:"https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"},
  {term:"Mirroring",aliases:["ミラーリング","Mirrored database"],category:"取り込み・変換",definition:"対応する外部データソースの変更を Fabric の OneLake へ継続的にレプリケーションする機能。",use:"業務 DB の最新データを低遅延で Fabric に持ってきたいとき。",compare:"Shortcut は元データをその場で参照。Mirroring は Fabric 側へ継続的に複製する。",memory:"継続コピー → Mirroring",source:"https://learn.microsoft.com/en-us/fabric/mirroring/overview"},
  {term:"Dataflow Gen2",aliases:["データフロー Gen2","Dataflow"],category:"取り込み・変換",definition:"Power Query ベースのローコードなデータ準備・変換機能。接続、クレンジング、結合、変換、出力を GUI で構築できる。",use:"コード量を抑えて複数ソースを整形・結合したいとき。",compare:"Pipeline は処理全体の制御。Dataflow Gen2 はデータ変換そのものが得意。",memory:"GUI/Power Query で変換 → Dataflow Gen2",source:"https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-overview"},
  {term:"Pipeline",aliases:["Data Factory pipeline","パイプライン"],category:"取り込み・変換",definition:"複数の Activity を順序・条件・依存関係付きで実行するオーケストレーション機能。",use:"Copy、Notebook、Dataflow など複数処理を一連の流れとして自動実行したいとき。",compare:"Pipeline は指揮者。Notebook/Dataflow は実際の処理担当。",memory:"複数処理をつなぐ → Pipeline",source:"https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-overview"},
  {term:"Copy activity",aliases:["Copy Data","コピーアクティビティ"],category:"取り込み・変換",definition:"Pipeline 内でソースから宛先へデータをコピーする Activity。",use:"ファイル、DB、Lakehouse、Warehouse などの間でデータを移送するとき。",compare:"Copy は主に移送。複雑な変換は Dataflow Gen2 や Notebook が適する。",memory:"運ぶだけなら Copy",source:"https://learn.microsoft.com/en-us/fabric/data-factory/copy-data-activity"},
  {term:"Notebook",aliases:["Fabric Notebook","ノートブック"],category:"取り込み・変換",definition:"コードセルを対話的に実行できる Fabric の開発アイテム。PySpark、Spark SQL などを使った変換・分析に向く。",use:"複雑なロジック、大規模分散処理、探索的なデータ処理をコードで実装するとき。",compare:"Dataflow Gen2 は GUI。Notebook はコード中心。",memory:"複雑な Spark 処理 → Notebook",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/how-to-use-notebook"},
  {term:"PySpark",aliases:["Spark","Apache Spark"],category:"取り込み・変換",definition:"Apache Spark を Python から操作する API。分散処理で大量データを変換・集計する。",use:"Lakehouse の大規模データ変換、集計、Join、機械学習前処理など。",compare:"T-SQL はリレーショナル SQL。PySpark は分散データ処理向け。",memory:"大規模分散処理 → PySpark",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/spark-compute"},
  {term:"T-SQL",aliases:["SQL","Transact-SQL"],category:"取り込み・変換",definition:"Microsoft 系の SQL 方言。Fabric Warehouse や SQL analytics endpoint でクエリや DDL/DML を記述する。",use:"Warehouse のテーブル操作、集計、Join、CTAS、セキュリティ設定など。",compare:"KQL はイベント・ログ分析。T-SQL はリレーショナル分析。",memory:"Warehouse の言語 → T-SQL",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/tsql-surface-area"},
  {term:"KQL",aliases:["Kusto Query Language"],category:"ストリーミング",definition:"イベント、ログ、時系列データを高速に検索・集計するためのクエリ言語。",use:"Eventhouse のリアルタイムデータを where、project、summarize などで分析するとき。",compare:"T-SQL は表形式のリレーショナル分析。KQL はイベント・ログ分析に強い。",memory:"Eventhouse の言語 → KQL",source:"https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-language"},
  {term:"Eventstream",aliases:["イベントストリーム"],category:"ストリーミング",definition:"リアルタイムイベントを取り込み、必要な変換を行い、Eventhouse などの宛先へルーティングする機能。",use:"Kafka、Event Hubs などのイベントを低コードで取り込み・振り分けたいとき。",compare:"Eventstream は流す・変換する。Eventhouse は保存して分析する。",memory:"流す → Eventstream / 貯めて分析 → Eventhouse",source:"https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"},
  {term:"Eventhouse",aliases:["イベントハウス","KQL database"],category:"ストリーミング",definition:"大量のイベント・ログ・時系列データを高頻度で取り込み、KQL で高速分析するためのリアルタイムデータストア。",use:"IoT、ログ、テレメトリなどをほぼリアルタイムで分析したいとき。",compare:"Eventstream は入口とルーティング。Eventhouse は蓄積とクエリ。",memory:"リアルタイムの保存・分析 → Eventhouse",source:"https://learn.microsoft.com/en-us/fabric/real-time-intelligence/eventhouse"},
  {term:"Activator",aliases:["Fabric Activator","Data Activator"],category:"ストリーミング",definition:"データを継続監視し、条件が成立したら通知やアクションを起動する機能。",use:"値の異常、遅延、状態変化などを検知して自動通知したいとき。",compare:"Monitoring hub は実行状況を見る。Activator はデータ条件を監視して動作させる。",memory:"条件成立で自動アクション → Activator",source:"https://learn.microsoft.com/en-us/fabric/data-activator/data-activator-introduction"},
  {term:"Spark Structured Streaming",aliases:["Structured Streaming","readStream","writeStream"],category:"ストリーミング",definition:"Spark のストリーミング処理 API。イベントを継続的に読み込み、変換し、出力する。",use:"コード中心で状態管理、checkpoint、watermark を含む高度なストリーム処理をしたいとき。",compare:"Eventstream は低コード。Structured Streaming はコード中心。",memory:"コードでストリーム → Structured Streaming",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/spark-streaming"},
  {term:"Checkpoint",aliases:["checkpointLocation","チェックポイント"],category:"ストリーミング",definition:"ストリーム処理の進捗や状態を保存し、障害後に途中から再開できるようにする仕組み。",use:"Structured Streaming を再起動しても、処理済み位置や状態を引き継ぎたいとき。",compare:"Checkpoint は復旧用の状態保存。Watermark は遅延イベントの許容範囲。",memory:"再開するための記録 → Checkpoint",source:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700"},
  {term:"Watermark",aliases:["ウォーターマーク"],category:"ストリーミング",definition:"遅延到着イベントをどこまで待つかを示す基準。状態をいつ破棄できるかの判断にも使う。",use:"イベント時刻が遅れて届くストリームで、無制限に状態を保持したくないとき。",compare:"Checkpoint は処理状態の復旧。Watermark は遅延到着の管理。",memory:"どこまで遅れを待つか → Watermark",source:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700"},
  {term:"Tumbling window",aliases:["タンブリングウィンドウ"],category:"ストリーミング",definition:"重なりのない固定長の時間窓。例えば 5 分ごとに完全に区切って集計する。",use:"5分ごとの件数、1時間ごとの平均など、区切り単位で集計するとき。",compare:"Hopping window は窓が重なることがある。Tumbling は重ならない。",memory:"重ならない箱 → Tumbling",source:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700"},
  {term:"Hopping window",aliases:["ホッピングウィンドウ"],category:"ストリーミング",definition:"一定幅の時間窓を、窓幅より短い間隔でずらして計算するため、窓同士が重なる。",use:"直近15分の値を1分ごとに更新するような移動集計。",compare:"Tumbling は重ならない。Hopping は重なる。",memory:"重なりながら進む → Hopping",source:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700"},
  {term:"Native execution engine",aliases:["NEE","Native engine"],category:"監視・最適化",definition:"Fabric Spark の一部クエリをネイティブ実行して高速化するベクトル化エンジン。多くの場合コード変更なしで利用できる。",use:"Delta/Parquet を使った複雑な変換、Join、集計、Sort などの性能改善。",compare:"コードを書き換える最適化ではなく、実行エンジン側の高速化。",memory:"コード変更なしで Spark 高速化 → NEE",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/native-execution-engine-overview"},
  {term:"Optimize Write",aliases:["Optimized Write"],category:"監視・最適化",definition:"書き込み時に出力ファイルのサイズや数を調整し、小さなファイルが大量に生まれるのを抑える最適化。",use:"Delta への頻繁な書き込みで small files 問題を減らしたいとき。",compare:"Optimize Write は書き込み時に予防。Auto Compact は書き込み後に圧縮。",memory:"書く時に小ファイルを減らす → Optimize Write",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/table-compaction"},
  {term:"Auto Compact",aliases:["Auto compaction","自動圧縮"],category:"監視・最適化",definition:"書き込み後に小さな Delta ファイルが多い場合、自動的に圧縮してファイル断片化を減らす仕組み。",use:"ストリーミングやマイクロバッチで小ファイルが継続的に増える場合。",compare:"Optimize Write は作る前に抑える。Auto Compact は作った後にまとめる。",memory:"書いた後にまとめる → Auto Compact",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/table-compaction"},
  {term:"OPTIMIZE",aliases:["Delta OPTIMIZE"],category:"監視・最適化",definition:"Delta テーブルの小さなファイルをまとめ、読み取り効率を改善するメンテナンス操作。",use:"small files が増えてクエリ性能が悪化しているとき。",compare:"OPTIMIZE はファイル配置改善。VACUUM は不要になった古いファイル削除。",memory:"速く読むためにまとめる → OPTIMIZE",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/table-compaction"},
  {term:"VACUUM",aliases:["Delta VACUUM"],category:"監視・最適化",definition:"Delta の履歴上不要になった古いデータファイルを保持期間に従って削除する操作。",use:"ストレージをクリーンアップしたいとき。保持期間と time travel への影響に注意する。",compare:"VACUUM は容量整理。OPTIMIZE は読み取り性能改善。",memory:"古いファイルを掃除 → VACUUM",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/delta-lake-vacuum"},
  {term:"Z-Order",aliases:["ZORDER","Z-Ordering"],category:"監視・最適化",definition:"よく絞り込む列の値を近いファイルに寄せ、不要なファイル読み取りを減らすデータ配置最適化。",use:"特定列でのフィルターが多い大規模 Delta テーブル。",compare:"OPTIMIZE はファイル圧縮。Z-Order は検索列のデータ配置も最適化する。",memory:"よく検索する列を近くに寄せる → Z-Order",source:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700"},
  {term:"Monitoring hub",aliases:["モニタリングハブ","Monitor hub"],category:"監視・最適化",definition:"Fabric 上の各種ジョブや実行状況をまとめて確認する監視画面。成功・失敗・実行時間などを追える。",use:"Pipeline、Dataflow、Notebook などの失敗や遅延を横断的に確認するとき。",compare:"Activator はデータ条件でアクション。Monitoring hub は処理実行の監視。",memory:"処理が動いたかを見る → Monitoring hub",source:"https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"},
  {term:"Autoscale",aliases:["Auto scale","自動スケール"],category:"監視・最適化",definition:"負荷に応じて Spark の計算リソース数を自動調整する考え方。",use:"需要が時間帯で変動し、固定ノード数では過不足が出る場合。",compare:"Autoscale はリソース量を調整。コードやクエリの非効率そのものを直す機能ではない。",memory:"負荷に合わせて計算資源を増減 → Autoscale",source:"https://learn.microsoft.com/en-us/fabric/data-engineering/configure-starter-pools"},
  {term:"CTAS",aliases:["CREATE TABLE AS SELECT"],category:"取り込み・変換",definition:"SELECT の結果から新しいテーブルを作成する SQL パターン。",use:"Warehouse で既存テーブルやクロスデータベースクエリの結果を新しい物理テーブルにしたいとき。",compare:"Dataflow Gen2 はローコード変換。CTAS は SQL で一気に新表を作る。",memory:"SELECT結果をそのまま新表 → CTAS",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-tsql"},
  {term:"CDC",aliases:["Change Data Capture","変更データキャプチャ"],category:"取り込み・変換",definition:"データソースで発生した追加・更新・削除などの変更だけを検出して処理する方式。",use:"毎回全件ロードせず、変更分だけ効率よく取り込みたいとき。",compare:"Full load は全件。CDC/Incremental load は変更分中心。",memory:"変わった分だけ追う → CDC",source:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700"},
  {term:"Incremental load",aliases:["増分ロード","Incremental"],category:"取り込み・変換",definition:"前回以降に追加・変更されたデータだけを読み込む方式。",use:"大量データを毎回全件読み直すコストを減らしたいとき。",compare:"Full load は全件入れ直し。Incremental load は差分のみ。",memory:"2回目以降は差分だけ → Incremental",source:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700"},
  {term:"Full load",aliases:["全件ロード","フルロード"],category:"取り込み・変換",definition:"対象データを毎回または初回に全件読み込む方式。",use:"初期ロード、データ量が小さい場合、差分判定が難しい場合。",compare:"Incremental load は変更分だけ。",memory:"全部読み込む → Full load",source:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-700"},
  {term:"Query folding",aliases:["クエリフォールディング"],category:"監視・最適化",definition:"Power Query の変換を可能な範囲でソース側のクエリへ変換し、ソース側で処理させる仕組み。",use:"Dataflow Gen2 などで不要なデータ転送やローカル処理を減らしたいとき。",compare:"folding できるほど、ソースで早く絞り込み・集計できる可能性が高い。",memory:"変換をソース側へ押し込む → Query folding",source:"https://learn.microsoft.com/en-us/fabric/data-factory/query-folding-dataflow"},
  {term:"RLS",aliases:["Row-Level Security","行レベルセキュリティ"],category:"セキュリティ・運用",definition:"ユーザーやロールごとに、参照できる行を制限する仕組み。",use:"同じテーブルでも担当部門や地域ごとに見える行を変えたいとき。",compare:"RLS は行。CLS は列。OLS はオブジェクト。",memory:"行を隠す → RLS",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/security"},
  {term:"CLS",aliases:["Column-Level Security","列レベルセキュリティ"],category:"セキュリティ・運用",definition:"ユーザーやロールごとに、参照できる列を制限する仕組み。",use:"給与、SSN など特定列を一部ユーザーだけに見せたいとき。",compare:"CLS は列そのものへのアクセス制御。DDM は値をマスク表示する。",memory:"列を見せない → CLS",source:"https://learn.microsoft.com/en-us/fabric/onelake/security/table-column-row-security"},
  {term:"OLS",aliases:["Object-Level Security","オブジェクトレベルセキュリティ"],category:"セキュリティ・運用",definition:"テーブルやビューなど、オブジェクト単位でアクセスを制御する考え方。",use:"特定のテーブルそのものを特定ユーザーに見せたくないとき。",compare:"RLS は行、CLS は列、OLS はテーブル等のオブジェクト。",memory:"物そのものを隠す → OLS",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/security"},
  {term:"DDM",aliases:["Dynamic Data Masking","動的データマスキング"],category:"セキュリティ・運用",definition:"元データを変更せず、権限の低いユーザーには機密値をマスクして表示する仕組み。",use:"SELECT 権限は維持しつつ、電話番号やメール等を伏字表示したいとき。",compare:"CLS は列にアクセスさせない。DDM は列は見えるが値を隠す。",memory:"見えるけど伏字 → DDM",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking"},
  {term:"Sensitivity label",aliases:["機密ラベル","秘密度ラベル"],category:"セキュリティ・運用",definition:"データやアイテムの機密度を分類し、組織の情報保護ポリシーを適用するためのラベル。",use:"機密・社外秘などの分類を Fabric/Power BI のアイテムに付けたいとき。",compare:"アクセス権そのものとは別。分類・保護方針を示す。",memory:"データの機密度をラベル付け → Sensitivity label",source:"https://learn.microsoft.com/en-us/fabric/governance/information-protection"},
  {term:"Git integration",aliases:["Git連携","Version control"],category:"セキュリティ・運用",definition:"Fabric ワークスペースの対応アイテムを Git リポジトリと同期し、変更履歴をコードとして管理する機能。",use:"変更をコミット、レビュー、PR で管理し、以前の状態へ戻せるようにしたいとき。",compare:"Deployment pipeline は環境間の昇格。Git integration は変更履歴とソース管理。",memory:"履歴を管理 → Git",source:"https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"},
  {term:"Deployment pipeline",aliases:["デプロイメントパイプライン"],category:"セキュリティ・運用",definition:"開発・テスト・本番などのステージ間で Fabric コンテンツを段階的に昇格する仕組み。",use:"検証済みの変更だけを本番へ反映したいとき。",compare:"Data Factory Pipeline はデータ処理。Deployment pipeline は環境間デプロイ。",memory:"Dev→Test→Prod → Deployment pipeline",source:"https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"},
  {term:"Selective deployment",aliases:["選択的デプロイ"],category:"セキュリティ・運用",definition:"Deployment pipeline で変更された一部のアイテムだけを選んで次ステージへ反映する考え方。",use:"検証済みの変更だけを本番に進め、未確認変更を含めたくないとき。",compare:"全体デプロイではなく、必要な変更だけを昇格する。",memory:"確認済みだけ進める → Selective deployment",source:"https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"},
  {term:"Database project",aliases:["SQL Database Project","データベースプロジェクト"],category:"セキュリティ・運用",definition:"データベーススキーマをファイルとして管理し、ビルドして dacpac を作成できる開発方式。",use:"Warehouse の DDL を Git 管理し、CI で構文・依存関係を検証したいとき。",compare:"dotnet build は DB 接続なしでプロジェクトを検証し dacpac を生成できる。",memory:"DBスキーマをコード管理 → Database project",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project"},
  {term:"Semantic model",aliases:["セマンティックモデル"],category:"基礎",definition:"分析用のテーブル、関係、メジャー、ビジネス定義をまとめ、Power BI などから再利用する論理モデル。",use:"利用者が共通の指標・関係で分析できるようにしたいとき。",compare:"Lakehouse/Warehouse はデータ保存。Semantic model は分析の意味付け・モデリング層。",memory:"分析の意味をそろえる → Semantic model",source:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-understand"},
  {term:"Fact table",aliases:["Fact","ファクトテーブル"],category:"基礎",definition:"売上、注文、アクセスなど、業務イベントや数値を分析粒度で保持するテーブル。",use:"売上金額、数量、件数などを集計する中心テーブル。",compare:"Dimension は説明属性。Fact は数値・イベント。",memory:"数える・合計する側 → Fact",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"},
  {term:"Dimension table",aliases:["Dimension","ディメンションテーブル"],category:"基礎",definition:"商品、顧客、日付、地域など、Fact を説明・分類する属性を持つテーブル。",use:"Fact を商品別、顧客別、地域別などで切り分けて分析するとき。",compare:"Fact は出来事。Dimension は説明。",memory:"説明する側 → Dimension",source:"https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"},
  {term:"Parameter",aliases:["パラメーター","Dynamic expression"],category:"取り込み・変換",definition:"Pipeline や Notebook に実行時の値を渡し、同じ処理を複数のテーブル・日付・環境で再利用する仕組み。",use:"RunDate、テーブル名、パスなどをハードコードせず切り替えたいとき。",compare:"固定値を埋め込むより再利用性と保守性が高い。",memory:"同じ処理に違う値を渡す → Parameter",source:"https://learn.microsoft.com/en-us/fabric/data-factory/parameters"}
];

window.DP700_GLOSSARY = G;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));

function searchText(x){
  return [x.term, ...(x.aliases||[]), x.category, x.definition, x.use, x.compare, x.memory].join(" ").toLowerCase();
}
function currentQuestionText(){
  return ["qText","qSkill","qDomain","caseBox","codeBox"].map(id => {
    const el=document.getElementById(id);
    return el && !el.classList.contains("hidden") ? el.textContent : "";
  }).join(" ").toLowerCase();
}
function contextualTerms(){
  const q=currentQuestionText();
  if(!q.trim()) return [];
  return G.filter(x => [x.term,...(x.aliases||[])].some(a => a && q.includes(a.toLowerCase())));
}
function card(x, context=false){
  return `<article class="glossaryCard">
    <div class="glossaryHead"><div><b>${esc(x.term)}</b>${context?'<span class="contextBadge">この問題</span>':''}</div><span class="tag">${esc(x.category)}</span></div>
    ${x.aliases?.length ? '<div class="glossaryAliases">'+x.aliases.map(esc).join(" / ")+'</div>' : ''}
    <p><strong>意味：</strong>${esc(x.definition)}</p>
    <p><strong>使う場面：</strong>${esc(x.use)}</p>
    <p><strong>違い：</strong>${esc(x.compare)}</p>
    <div class="glossaryMemory">覚え方：${esc(x.memory)}</div>
    <a class="glossarySource" href="${esc(x.source)}" target="_blank" rel="noopener">Microsoft Learnで確認 ↗</a>
  </article>`;
}
function render(){
  const input=$("#glossarySearch");
  const sel=$("#glossaryCategory");
  const out=$("#glossaryResults");
  if(!out) return;
  const q=(input?.value||"").trim().toLowerCase();
  const cat=sel?.value||"all";
  const ctx=contextualTerms();
  const ctxSet=new Set(ctx.map(x=>x.term));
  let arr=G.filter(x => (cat==="all"||x.category===cat) && (!q||searchText(x).includes(q)));
  arr.sort((a,b)=>Number(ctxSet.has(b.term))-Number(ctxSet.has(a.term)) || a.term.localeCompare(b.term,"ja"));
  $("#glossaryCount").textContent=arr.length+"語";
  const contextHint=$("#glossaryContextHint");
  if(contextHint){
    contextHint.innerHTML=ctx.length
      ? "この問題に関連しそうな用語： "+ctx.map(x=>'<button type="button" class="termChip" data-term="'+esc(x.term)+'">'+esc(x.term)+"</button>").join(" ")
      : "検索欄に「shortcut」「RLS」「checkpoint」などを入力できます。";
  }
  out.innerHTML=arr.length ? arr.map(x=>card(x,ctxSet.has(x.term))).join("") : '<div class="note">該当する用語がありません。</div>';
  $$(".termChip").forEach(btn=>btn.onclick=()=>{ if(input){input.value=btn.dataset.term;render();} });
}
function openGlossary(){
  const modal=$("#glossaryModal");
  if(!modal) return;
  modal.classList.remove("hidden");
  document.body.classList.add("modalOpen");
  render();
  setTimeout(()=>$("#glossarySearch")?.focus(),0);
}
function closeGlossary(){
  $("#glossaryModal")?.classList.add("hidden");
  document.body.classList.remove("modalOpen");
}
function init(){
  const sel=$("#glossaryCategory");
  if(sel){
    const cats=[...new Set(G.map(x=>x.category))];
    sel.innerHTML='<option value="all">すべてのカテゴリ</option>'+cats.map(c=>'<option value="'+esc(c)+'">'+esc(c)+'</option>').join("");
    sel.onchange=render;
  }
  const input=$("#glossarySearch");
  if(input) input.oninput=render;
  $$("[data-glossary-open]").forEach(x=>x.addEventListener("click",openGlossary));
  $("#glossaryClose")?.addEventListener("click",closeGlossary);
  $("#glossaryModal")?.addEventListener("click",e=>{if(e.target.id==="glossaryModal")closeGlossary();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeGlossary();});
  render();
  const badge=$("#glossaryBankCount");
  if(badge) badge.textContent=G.length+"語収録";
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();
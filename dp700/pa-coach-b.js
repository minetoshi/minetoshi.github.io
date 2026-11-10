window.DP700_PA_COACH=Object.assign(window.DP700_PA_COACH||{},{
  "PA50-26": {
    "cue": "「Completedのみ」「region/channel別合計」「5万超」→filter→groupBy→sum→filter",
    "analysis": "先に行を絞り、指定の2列でまとめ、集計後の合計値を判定する。",
    "choices": [
      "○ 状態を絞る→region/channelでグループ化→sum(amount)→集計結果をfilterする。",
      "× statusごとのcountではregion/channel別金額合計にならない。",
      "× distinctは組み合わせの一覧だけで金額集計しない。",
      "× limit(50000)は5万件取得であり合計金額5万超の判定ではない。"
    ]
  },
  "PA50-27": {
    "cue": "「高並行SQL分析」「T-SQLストアド」→Warehouse",
    "analysis": "容量5TBという数値だけより、SQLを中心にした分析・手続き型処理の要件が決め手。",
    "choices": [
      "○ WarehouseはT-SQL中心のリレーショナル分析と高並列BI向け。",
      "× Eventstreamはイベントの取り込み・転送処理用でSQL分析ストアではない。",
      "× Notebookはコード実行環境であってWarehouseの代替データストアではない。",
      "× Deployment pipelineは環境間配布に使う。"
    ]
  },
  "PA50-28": {
    "cue": "「Deltaへ継続追記」「障害後も再開」→append＋checkpoint",
    "analysis": "出力モードと復旧の仕組みを別々に選ぶ。",
    "choices": [
      "○ appendは新たに確定した結果を追加していく出力モード。",
      "○ 永続checkpointが進捗・状態を保持し、再起動後の継続に必要。",
      "× checkpointを毎回消すと過去の進捗を失い、読み直しの原因になる。",
      "× Completeは集計結果の全体出力向けで、追記要件の一般解ではない。"
    ]
  },
  "PA50-29": {
    "cue": "「複数時間窓を同一クエリ」「窓のIDが必要」→Windows＋System.Window().Id",
    "analysis": "Tumblingは窓が重ならず、Hoppingは重なる。設問は複数種類の窓結果を識別する操作が核。",
    "choices": [
      "○ Windowsにラベル付きの複数Windowを指定し、System.Window().Idで由来を区別できる。窓幅とhopの指定は別途要確認。",
      "× 複数Windowは1クエリで扱えるため『できない』は誤り。",
      "× ORDER BYはソートであり時間窓を作らない。",
      "× Workspace roleは権限で窓の識別子ではない。"
    ]
  },
  "PA50-30": {
    "cue": "「生イベント保持」「加工結果を別テーブルに自動反映」→KQL update policy",
    "analysis": "取り込み時に別テーブルへ変換済みレコードを生成し、生テーブルも保持する。",
    "choices": [
      "× 生テーブル上書きでは元データを保持できない。",
      "○ Update policyはソース取り込みに連動して変換クエリを実行しターゲットへ格納する。",
      "× Deployment pipelineはアイテム昇格用でレコードごとの更新には使わない。",
      "× Power BIレポート更新はEventhouseテーブルへの自動書き込みではない。"
    ]
  },
  "PA50-31": {
    "cue": "「大量JSONイベント」「保存前に列整理」→Eventstreamの変換",
    "analysis": "入口で不要列を除外すると、下流のKQL Databaseに不要な値を送らずに済む。",
    "choices": [
      "○ Eventstreamに取り込み/変換/宛先を構成すればリアルタイムで列を整えられる。",
      "× Database ProjectはDBスキーマの開発用。",
      "× Deployment pipelineはDev/Test/Prod間デプロイ用。",
      "× Sensitivity labelは機密度の分類で、列削除の変換ではない。"
    ]
  },
  "PA50-32": {
    "cue": "「Kafka既存分は読み飛ばす」「再開は前回位置」→latest＋永続checkpoint",
    "analysis": "startingOffsetsは初回の開始点。再起動後の進捗はcheckpointが優先される。",
    "choices": [
      "× earliestは既存イベントまで読む。新checkpointでは進捗も失う。",
      "○ latestで初回既存分を飛ばし、永続checkpointで処理位置を引き継ぐ。",
      "× 毎回バッチ全読込だと既存イベントも再処理する。",
      "× checkpoint無効では障害時に安全な再開が難しい。"
    ]
  },
  "PA50-33": {
    "cue": "「Azure SQLの変更」「ETLなし」「ほぼリアルタイムにOneLake」→Mirroring",
    "analysis": "Shortcutのような外部参照ではなく、変更を継続複製してOneLakeへ同期する。",
    "choices": [
      "× 毎日のCSV出力は低遅延ではない。",
      "○ Mirroringは対応DBの変更をFabric側へ継続複製できる。",
      "× Deployment pipelineはコンテンツの環境移行。",
      "× DDMは値のマスキング機能でDB変更同期ではない。"
    ]
  },
  "PA50-34": {
    "cue": "「Product→Subcategory→Category」「Joinを減らす」→商品粒度で非正規化",
    "analysis": "Gold層では分析クエリのために説明属性をひとつのDimensionへまとめる。",
    "choices": [
      "○ ProductKeyを1商品1行として3階層の説明列を同居させるとSalesから1回Joinで済む。",
      "× さらに正規化するとJoin回数が増える。",
      "× JSON1列化は通常のディメンション検索・集計を扱いにくくする。",
      "× 主キー削除はFactとの関係づけを壊す。"
    ]
  },
  "PA50-35": {
    "cue": "「リアルタイムで変換」＋「Deltaの整合性」→Structured Streaming＋Delta",
    "analysis": "流しながら変換するエンジンと、信頼して保存するテーブル形式を組み合わせる。",
    "choices": [
      "○ Structured Streamingが継続変換、Deltaがトランザクション整合性のある保存を担う。",
      "× Gitは版管理、CSVはファイル形式でリアルタイム変換・Delta信頼性を満たさない。",
      "× Deployment pipelineは環境昇格、DDMは伏字表示でデータ処理に関係しない。",
      "× Database Projectはスキーマ管理、Eventstreamだけでは求めるSpark/Deltaの組み合わせを示せない。"
    ]
  },
  "PA50-36": {
    "cue": "「ForEachがStringで失敗」＋「親側で配列構築」→createArray()",
    "analysis": "ForEach itemsはArrayが必要。文字列化されたJSONをパースするjson()とは別の問題。",
    "choices": [
      "○ createArray()なら値をArray型として構築して子Pipelineへ渡せる。要素ごとの型には注意。",
      "× concat()は文字列連結なのでArray型の問題を解決しない。",
      "× ForEach削除は反復処理の要件を失う。",
      "× Markdownは表示用の記述でパラメーター型は変わらない。"
    ]
  },
  "PA50-37": {
    "cue": "「手動起動なら動く」「Notebookだけタイムアウト」→Session ready設定",
    "analysis": "計算基盤全体の故障よりNotebookセッション固有のタイムアウト設定を疑う。",
    "choices": [
      "○ Session readyインジケーターからセッションタイムアウトを調整する。",
      "× Capacityの再開依頼は毎回の管理負荷が高く、症状の直接対処ではない。",
      "× AutoSaveは編集内容の保存でセッション寿命を延ばさない。",
      "× Deployment stage timeoutはNotebookセッションの設定ではない。"
    ]
  },
  "PA50-38": {
    "cue": "「断続的失敗」「Run・Activity・入出力・エラー」→Monitoring hub",
    "analysis": "まず失敗した実行を特定し、どのActivityが何のエラーで止まったか追う。",
    "choices": [
      "○ Monitoring hubは実行履歴・状態・詳細から失敗箇所を探す入口。",
      "× Sensitivity labelは機密分類で実行障害分析ではない。",
      "× Database ProjectはSQLスキーマ管理用。",
      "× Shortcutは別ストレージ参照用。"
    ]
  },
  "PA50-39": {
    "cue": "「JSON配列を表す文字列」「ForEachに渡す」→json()",
    "analysis": "createArray()は新たに配列を作る。既存のJSON文字列を配列に解釈するならjson()。",
    "choices": [
      "○ json()がJSONテキストを配列/オブジェクトへ解釈する。",
      "× string()は文字列化するため逆方向。",
      "× concat()は文字列結合でArray型に変えない。",
      "× base64()はエンコードでJSONパースではない。"
    ]
  },
  "PA50-40": {
    "cue": "「アイドル休止」「再起動待ち不可」→Capacity Planner mode",
    "analysis": "利用がないときの休止を避けたい問題。容量計画とQuery accelerationは役割が違う。",
    "choices": [
      "○ Capacity Planner mode（旧Always-on）で休止を抑え、再開待ちを避けられる。",
      "× Query accelerationはデータ読取高速化でアイドル休止を防ぐ設定ではない。",
      "× レポートの空実行は非公式な疑似Keep aliveで堅牢でない。",
      "× Viewer人数はEventhouse稼働状態と無関係。"
    ]
  },
  "PA50-41": {
    "cue": "「取り込み/変換が遅延」「原因と改善」→監視で特定＋処理最適化",
    "analysis": "原因調査と対処の2手を分けて選ぶ。",
    "choices": [
      "○ 状態・開始時刻・実行時間から遅いActivityを特定する。",
      "○ 対象変換の処理方法や構成を改善して遅延を減らす。",
      "× 計測せずcapacityだけ増やしても根本原因が分からない。",
      "× Sensitivity label変更は性能改善策ではない。"
    ]
  },
  "PA50-42": {
    "cue": "「Warehouseに大量CSV」「ファイル名パターン」→COPY INTO wildcard",
    "analysis": "SQL一括ロードを使い、パターンに合う外部ファイルを取り込む。",
    "choices": [
      "○ COPY INTOは外部CSVをまとめて高スループットに取り込める。wildcard展開が大きすぎる場合は分割を考える。",
      "× 1行ずつINSERTは大量ロードで非効率。",
      "× Deployment pipelineはテーブルデータの大量取込ではない。",
      "× DDMはマスキングでファイル移送ではない。"
    ]
  },
  "PA50-43": {
    "cue": "「失敗Run」「状態/開始時刻で絞り込む」→Monitoring hub",
    "analysis": "失敗を再現する前に履歴で該当実行を絞って確認する。",
    "choices": [
      "○ Monitoring hubはRunの状態や開始日時で実行履歴を絞り込める。",
      "× Database ProjectはDB定義の開発・ビルド。",
      "× Deployment pipelineは環境間デプロイ。",
      "× Sensitivity labelは情報分類で実行履歴検索ではない。"
    ]
  },
  "PA50-44": {
    "cue": "「Pipeline成功したが遅い」「Activityの時間」→Monitoring hub",
    "analysis": "失敗時だけでなく成功した実行でもボトルネックを追える点がポイント。",
    "choices": [
      "× Dataflow新規作成では既存Pipelineの遅延箇所は分からない。",
      "× Pipeline複製は原因分析をせず処理を増やすだけ。",
      "× Activatorは条件監視と通知に向くが実行時間の詳細分析とは異なる。",
      "○ Monitoring hubから対象RunとActivityの時間を確認する。"
    ]
  },
  "PA50-45": {
    "cue": "「オンプレGateway使用」「約1時間後に失敗」→Gateway版・ログを確認",
    "analysis": "まず依存コンポーネントのサポート状況と実際のGatewayログを確認し、原因を切り分ける。",
    "choices": [
      "○ 対応した最新Gatewayかを確認するのが基本的な初動。合わせて実行ログも確認する。",
      "× パラメーター数はGateway長時間実行の直接的な初動とは言えない。",
      "× 色テーマは実行結果に関係ない。",
      "× Endorsementはデータ資産の認定で障害原因ではない。"
    ]
  },
  "PA50-46": {
    "cue": "「Pipeline1のNotebook Activity」「24h」「長い順5件」→L2ログ＋KQL filter/top",
    "analysis": "Pipeline全体のログL1ではなく、Activity単位のL2ログを使う。",
    "choices": [
      "○ FabricDataPipelinesActivityRunsLogsでPipeline名/Activity種別/24hに絞り、DurationMs降順で5件取る。",
      "× EventhouseQueryLogsはEventhouseのクエリログでPipeline Activity実行一覧ではない。",
      "× ItemJobEventLogsはジョブレベルでActivity単位に絞れず、失敗だけの抽出も要件外。",
      "× count()集計だけでは長時間の個別5実行を特定できない。"
    ]
  },
  "PA50-47": {
    "cue": "「Lakehouse取り込みの実行状況」「Fabric上」→Monitor hub",
    "analysis": "処理Run単位の監視とCapacityメトリクスは粒度が異なる。",
    "choices": [
      "○ Monitor hubは各種Fabricジョブの実行履歴と状態を確認できる。",
      "× Capacity Metrics appだけでは個々の取り込みRunの詳細が不十分。",
      "× Real-Time hubだけでは全種の取込ジョブ実行を網羅しない。",
      "× Azure Monitorだけを使うよりFabricのMonitoring hubが直接的。"
    ]
  },
  "PA50-48": {
    "cue": "「継続的な低遅延」「取り込み/処理」→Structured Streaming",
    "analysis": "日次バッチや単なるパーティション分割は、継続到着するイベントを即時処理しない。",
    "choices": [
      "× 日次Full loadは遅延が大きくなる。",
      "○ Structured Streamingは継続的な増分データを低遅延で処理できる。",
      "× Deployment pipelineは環境間デプロイ。",
      "× 手動partition調整だけではデータ到着後の連続処理にはならない。"
    ]
  },
  "PA50-49": {
    "cue": "「DestinationQueryNotFound」「MultipleDestinationQueries」→再構成＋重複削除",
    "analysis": "NotFoundは参照先がない、Multipleは重複がある、とエラー名を直訳すれば判断できる。",
    "choices": [
      "○ Ordersは破損/不整合の宛先設定を再構成する。",
      "○ Customersは重複した宛先を取り除いて設定を一意にする。",
      "× Ordersの宛先Query不在は認証だけでは直せない。",
      "× Multiple状態にさらに宛先を増やすと競合が悪化する。"
    ]
  },
  "PA50-50": {
    "cue": "「小さいParquet大量」「クエリ性能低下」→OPTIMIZE",
    "analysis": "ファイル数の断片化ならOPTIMIZE。VACUUMは不要履歴ファイルの掃除で目的が違う。",
    "choices": [
      "× V-Orderは読取形式最適化だが小ファイルを直接まとめる主手段ではない。",
      "○ OPTIMIZEは複数小ファイルをコンパクションして読取効率を改善する。",
      "× APIで手動削除するとDeltaログとの整合性を壊す恐れがある。",
      "× VACUUMは古い未参照ファイルの削除で、小ファイルの統合ではない。"
    ]
  }
});

// 2026-11-16: IDを維持した品質修正。公式PA個別正答キーではない。
(()=>{const patches={
  "BRIDGE-1": {
    "caseText": "",
    "explanation": "下限を含めず上限を含めると、9時を再取得せず、10時を今回に含められます。今回が成功したら10時を次回の下限にします。\n着眼点：9時ちょうどは前回処理済みです。境界の重複と漏れを考えましょう。"
  },
  "BRIDGE-2": {
    "caseText": "",
    "explanation": "地域は行、原価は列に対する要件です。各制御を実際の利用者権限で確認します。\n着眼点：制限したい対象を「レコード」と「項目」に分けて考えましょう。"
  },
  "BRIDGE-3": {
    "caseText": "",
    "explanation": "少数のタスクへのデータ集中は偏りの手掛かりです。結合キーの分布と合わせて確認すると原因を絞れます。\n着眼点：全体平均と、個々のタスクの分布は別です。"
  },
  "BRIDGE-10": {
    "caseText": "",
    "explanation": "変換が終わるまでは進捗を進めず、再処理が重複を生まないようにします。\n着眼点：成功した範囲を基準に、再実行と重複防止を考えましょう。"
  },
  "BRIDGE-11": {
    "caseText": "",
    "explanation": "要件はデータ行の制限と編集権限の両方です。実際の閲覧者に近い条件で確認します。\n着眼点：見える行と、できる操作を分けて考えましょう。"
  },
  "BRIDGE-12": {
    "caseText": "",
    "explanation": "全体の件数が同じでも分布が変われば偏りが起こります。キー分布とタスクのデータ量を照合します。\n着眼点：全体の値と、タスクごとの分布を比べましょう。"
  },
  "BASIC-6": {
    "question": "Microsoft Fabricで、PySparkを使ってデータを加工し、セルごとに実行結果を確認したいと考えています。コードの作成・実行に使うアイテムを1つ選んでください。"
  },
  "PA-20261114-10": {
    "question": "Fabricのパイプラインが断続的に失敗しています。失敗した実行を状態と開始時刻で絞り込んで調査するには、どの操作が適切ですか。"
  },
  "PA-20261114-14": {
    "question": "Azure Blob Storage上の複数の大型CSVファイルをFabric Warehouseへ効率的に読み込みます。ファイル名のパターンで対象をまとめて指定できる読み込み方法を1つ選んでください。"
  },
  "PA-20261114-17": {
    "question": "EventhouseのKQLデータベースへ取り込んだデータを、更新ポリシーで別テーブルへ変換して格納します。変換関数を記述する言語を1つ選んでください。"
  },
  "PA-20261114-18": {
    "question": "対応する外部クラウドストレージのファイルをLakehouseから参照します。元データを別の場所へコピーせずに利用する方法を1つ選んでください。"
  },
  "PA-20261114-19": {
    "question": "Fabric内でPySparkを使い、複数ソースのストリーミングデータを継続的に変換してLakehouseのDeltaテーブルへ書き込みます。適切な処理方式を1つ選んでください。"
  },
  "PA-20261114-25": {
    "question": "Event HubsのJSONイベントから不要な列を除き、列名を変更してからKQLデータベースへ送ります。Fabricの画面で変換と送信先を構成する方法を1つ選んでください。"
  },
  "PA-20261114-27": {
    "question": "変更の追跡に対応したソースデータベースからFabric Warehouseへ増分ロードします。追加・更新・削除を取得し、毎回の全件取得と独自の変更記録トリガーの実装を避けたいと考えています。利用する既存の変更検出方式を1つ選んでください。",
    "reconstructed": true
  },
  "PA-20261114-30": {
    "question": "Azure Event Hubsのイベントから不要フィールドを除外し、計算フィールドを追加してからKQLテーブルへ保存します。取り込み前の変換を画面上で構成するFabricアイテムを1つ選んでください。"
  },
  "PA-20261114-33": {
    "question": "Fabricの開発・テスト・本番に別々のワークスペースを割り当てています。テストで検証済みの特定アイテムだけを本番へ配備する機能を1つ選んでください。"
  },
  "PA-20261114-34": {
    "question": "FabricのカスタムSparkプールで、負荷に応じて最小ノード数と最大ノード数の範囲内でノードを増減させます。有効にする設定を1つ選んでください。"
  },
  "PA-20261114-38": {
    "question": "VS Codeに既存Fabric Warehouseの接続プロファイルを登録済みです。既存スキーマを取り込んだSQL Database Projectを作成し、作成時にはデータベースを変更しません。次に行う操作を1つ選んでください。",
    "choices": [
      "別DB1のManage Packagesを開く",
      "Database Projectsペインの［…］→ Create Project From Databaseを選び、既存Warehouseの接続プロファイルを指定する",
      "接続からNew Queryを実行",
      "空プロジェクトをゼロから作成するだけ"
    ],
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project",
    "explanation": "Database Projectsペインから既存データベースを基にプロジェクトを作成します。New Queryはクエリ編集、空プロジェクトの作成だけでは既存スキーマは入りません。Manage Packagesはスキーマ抽出の操作ではありません。抽出とPublishは別操作で、抽出だけでは元データベースを変更しません。",
    "answerEvidence": "spec-verified"
  },
  "PA-20261114-39": {
    "question": "FabricのData Mesh構成で、テナントのうち委任可能なガバナンス設定を部門側で管理させます。設定管理を部門へ移す方法を1つ選んでください。"
  },
  "PA-20261114-46": {
    "question": "Fabric Deployment Pipelineのテストステージから本番へ、指定したアイテムだけを配備します。使用する機能を1つ選んでください。"
  },
  "PA-20261114-47": {
    "question": "FabricのSparkプールで、ジョブの計算負荷に応じてExecutor数を設定範囲内で増減させます。有効にする設定を1つ選んでください。"
  },
  "PA-20261114-49": {
    "question": "複数のソースとテーブルを同じ処理構成でLakehouseへ取り込みます。実行時の入力値で取り込み対象を切り替え、処理定義の複製を減らす設計を1つ選んでください。"
  },
  "PALIVE-20261106-38": {
    "choices": [
      "Manage Packages",
      "Database Projectsペインの［…］→ Create Project From Databaseを選び、既存Warehouseの接続プロファイルを指定する",
      "New Query",
      "Create Project From Scratch"
    ],
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project",
    "explanation": "Database Projectsペインから既存データベースを基にプロジェクトを作成します。New Queryはクエリ編集、空プロジェクトの作成だけでは既存スキーマは入りません。Manage Packagesはスキーマ抽出の操作ではありません。抽出とPublishは別操作で、抽出だけでは元データベースを変更しません。",
    "answerEvidence": "spec-verified"
  },
  "PALIVE-20261106-34": {
    "question": "同じユーザーが同じワークスペースで実行する複数Notebookで、既定LakehouseとSpark設定・ライブラリが一致しています。Sparkセッションを共有する高同時実行モードの設定を行う場所を1つ選んでください。",
    "explanation": "ワークスペースのSpark settingsで高同時実行モードを設定します。共有は同一ユーザー境界内で、既定Lakehouse・Spark設定などが一致する場合に限られます。Data Factory、Data Warehouse、ドメインの委任設定は、このSpark設定の場所ではありません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/high-concurrency-overview",
    "answerEvidence": "spec-verified"
  },
  "PALIVE-20261106-29": {
    "question": "【独自練習問題：元PDFの要約を再設計】既定のLakehouseにDeltaテーブルordersがあります。o_orderkeyはNULLのない注文ID、o_orderstatusとo_orderpriorityは文字列、o_totalpriceは金額です。ステータスがFの注文だけを対象に、優先度ごとの注文件数をn_ordersとして集計し、件数の降順で返すコードを1つ選んでください。",
    "choices": [
      "(orders_df.filter(F.col(\"o_orderstatus\") == \"F\")\n .groupBy(\"o_orderpriority\")\n .agg(F.count(\"o_orderkey\").alias(\"n_orders\"))\n .orderBy(F.col(\"n_orders\").desc()))",
      "(orders_df.filter(F.col(\"o_orderstatus\") == \"F\")\n .groupBy(\"o_orderpriority\")\n .agg(F.count(\"o_orderkey\").alias(\"n_orders\"))\n .orderBy(F.col(\"o_orderpriority\").desc()))",
      "(orders_df.filter(F.col(\"o_orderstatus\") == \"F\")\n .groupBy(\"o_orderpriority\", \"o_orderkey\")\n .agg(F.count(\"o_orderkey\").alias(\"n_orders\"))\n .orderBy(F.col(\"n_orders\").desc()))",
      "(orders_df.groupBy(\"o_orderpriority\")\n .agg(F.count(\"o_orderkey\").alias(\"n_orders\"))\n .orderBy(F.col(\"n_orders\").desc()))"
    ],
    "code": "from pyspark.sql import functions as F\norders_df = spark.table(\"orders\")\n# 以下の選択肢の式を実行する",
    "explanation": "Fの行を先に抽出し、優先度だけで集計して注文IDの件数を求め、件数の降順で並べます。優先度で並べる式は件数順になりません。注文IDもグループ化する式は優先度ごとに1行という粒度を満たしません。フィルターのない式はF以外の注文も含めます。元の選択肢の「Fで絞ってから優先度と状態で集計」は結果として同じ粒度になり得るため、不適切な誤答肢でした。",
    "source": "https://learn.microsoft.com/en-us/azure/databricks/pyspark/basics",
    "reconstructed": true,
    "answerEvidence": "spec-verified"
  },
  "PALIVE-20261106-17": {
    "question": "【独自練習問題：要約形式から再設計】sales_dfのregion・channel・statusは文字列、amountは数値です。Completedの行について地域・チャネル別の金額合計を求め、合計が50000を超える行だけ返すPySparkコードを1つ選んでください。",
    "choices": [
      "sales_df.filter(F.col('status')=='Completed').groupBy('region','channel').agg(F.sum('amount').alias('total_sales')).filter(F.col('total_sales')>50000)",
      "sales_df.groupBy('status').count().filter(F.col('amount')>50000)",
      "sales_df.select('region','channel').distinct()",
      "sales_df.orderBy('amount').limit(50000)"
    ],
    "code": "from pyspark.sql import functions as F",
    "explanation": "filter→groupBy→agg→集計結果への filter の順で要件を満たす。",
    "source": "https://learn.microsoft.com/en-us/azure/databricks/pyspark/basics",
    "reconstructed": true,
    "answerEvidence": "spec-verified"
  },
  "C-PY-04": {
    "code": "from pyspark.sql import functions as F\nrecent = df.filter(F.col('OrderDate') >= '2026-11-01').select('OrderId','Amount')",
    "question": "OrderDateはdate型で有効な日付が入っています。性能面で期待する効果はどれか。",
    "choices": [
      "早い段階で不要行・列を減らす",
      "OrderDateが出力列にないためfilterは適用されない",
      "selectは指定列で行をグループ化する",
      "filterは各行でなくDataFrame全体の集計を返す"
    ],
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "C-PY-05": {
    "code": "from pyspark.sql import functions as F\nresult = df.withColumn('Net', F.col('Amount') - F.col('Discount'))",
    "choices": [
      "AmountからDiscountを引いたNet列を追加または置換する",
      "Amount列をNetへ改名するだけで値は変えない",
      "AmountがDiscountより大きい行だけ残す",
      "Net列が既存の場合は同名の列をもう1つ作る"
    ],
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/4-dataframe"
  },
  "C-PY-08": {
    "code": "from pyspark.sql import functions as F\nresult = fact.join(F.broadcast(dim), 'ProductId')",
    "choices": [
      "小さいdimを各workerへ配布して大きなshuffleを減らす",
      "大きいfactを各workerへ配布する",
      "dimをProductIdごとに必ず1行へ集計する",
      "ProductIdに一致しないfact行も必ず残す"
    ],
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "PA-20261114-16": {
    "reviewStatus": "spec-reviewed",
    "scorable": true,
    "holdReason": "",
    "question": "【独自練習問題：構文を明示して再設計】Azure Stream Analytics互換のストリームSQLで、入力InputのTollIdごとにイベントを集計します。EntryTimeはイベント時刻です。1分の重ならない窓と、1分間隔で動く15分・30分・60分の窓を同時に使い、各結果の窓をWindowIdで区別します。空欄①に入る式を1つ選んでください。",
    "code": "SELECT TollId, System.Window().Id AS WindowId, COUNT(*) AS N\nFROM Input TIMESTAMP BY EntryTime\nGROUP BY TollId, ［①］",
    "choices": [
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', TumblingWindow(minute, 15)), Window('thirty', TumblingWindow(minute, 30)), Window('sixty', TumblingWindow(minute, 60)))",
      "Windows(TumblingWindow(minute, 1), HoppingWindow(minute, 15, 1), HoppingWindow(minute, 30, 1), HoppingWindow(minute, 60, 1))",
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', HoppingWindow(minute, 15, 1)), Window('thirty', HoppingWindow(minute, 30, 1)), Window('sixty', HoppingWindow(minute, 60, 1)))",
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', HoppingWindow(minute, 15, 5)), Window('thirty', HoppingWindow(minute, 30, 5)), Window('sixty', HoppingWindow(minute, 60, 5)))"
    ],
    "type": "code",
    "answers": [
      2
    ],
    "selectCount": 1,
    "reconstructed": true,
    "answerEvidence": "spec-verified",
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/windows-azure-stream-analytics",
    "explanation": "1分窓はTumblingWindow、15・30・60分窓はホップ幅1分のHoppingWindowを指定します。Windowでそれぞれ異なるIDを与えるとSystem.Window().Idで識別できます。IDを付けない式では識別値がNULLになります。すべてTumblingWindowにすると長い窓が1分ごとに移動しません。ホップ幅5分の式も指定された1分間隔を満たしません。"
  },
  "PA-PDF-20261112-29": {
    "reviewStatus": "review",
    "scorable": false,
    "holdReason": "直接抽出とDACPAC経由の両方が候補となり、最小手順などの限定条件がない。"
  },
  "PALIVE-20261106-05": {
    "reviewStatus": "review",
    "scorable": false,
    "holdReason": "配列の実値と渡し方が欠落し、JSON文字列の変換と配列の構築を区別できない。"
  },
  "PA50-36": {
    "reviewStatus": "review",
    "scorable": false,
    "holdReason": "配列の実値と渡し方が欠落し、JSON文字列の変換と配列の構築を区別できない。"
  },
  "PALIVE-20261106-01": {
    "question": "Notebook1を対話的に使用しています。作業を中断すると非アクティブによるセッションタイムアウトが発生しますが、手動で再開すれば処理は成功します。他のNotebookに適用されるワークスペース設定を変更せず、Notebook1のセッションが非アクティブで維持される時間を延ばす操作を1つ選んでください。",
    "reconstructed": true,
    "explanation": "稼働中のNotebookのSession readyインジケーターからタイムアウトを調整します。ワークスペース全体の変更は他のNotebookにも影響するため条件外です。容量再開は容量停止への対処で、AutoSaveは編集内容の保存です。タイムアウトを延ばしても無期限にセッションが維持されるわけではありません。",
    "answerEvidence": "spec-verified",
    "source": "https://learn.microsoft.com/en-us/fabric/data-science/fabric-notebooks-troubleshooting-guide"
  },
  "PA-20261114-01": {
    "question": "Notebook1を対話的に使用しています。作業を中断すると非アクティブによるセッションタイムアウトが発生しますが、手動で再開すれば処理は成功します。他のNotebookに適用されるワークスペース設定を変更せず、Notebook1のセッションが非アクティブで維持される時間を延ばす操作を1つ選んでください。",
    "reconstructed": true,
    "explanation": "稼働中のNotebookのSession readyインジケーターからタイムアウトを調整します。ワークスペース全体の変更は他のNotebookにも影響するため条件外です。容量再開は容量停止への対処で、AutoSaveは編集内容の保存です。タイムアウトを延ばしても無期限にセッションが維持されるわけではありません。",
    "answerEvidence": "spec-verified"
  },
  "PA-PDF-20261112-01": {
    "question": "Notebook1を対話的に使用しています。作業を中断すると非アクティブによるセッションタイムアウトが発生しますが、手動で再開すれば処理は成功します。他のNotebookに適用されるワークスペース設定を変更せず、Notebook1のセッションが非アクティブで維持される時間を延ばす操作を1つ選んでください。",
    "reconstructed": true,
    "explanation": "稼働中のNotebookのSession readyインジケーターからタイムアウトを調整します。ワークスペース全体の変更は他のNotebookにも影響するため条件外です。容量再開は容量停止への対処で、AutoSaveは編集内容の保存です。タイムアウトを延ばしても無期限にセッションが維持されるわけではありません。",
    "answerEvidence": "spec-verified"
  },
  "PALIVE-20261106-19": {
    "reviewStatus": "review",
    "scorable": false,
    "holdReason": "現行のFabric WarehouseはCTASとSELECT INTOの双方に対応する。提示条件では後者を一意に不正解にできない。",
    "explanation": "CTASで結合結果から新しいテーブルを作成できます。一方、現行公式資料ではSELECT INTOもテーブル作成と結果の挿入に対応しています。「開発工数を最小化」だけでは両者を区別できないため、旧想定解CTASによる採点を保留します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-tsql"
  },
  "C-KQL-10": {
    "choices": [
      "ShortcutのQuery acceleration状態や進捗を確認する",
      "Query acceleration policyを新規作成する",
      "ShortcutのDeltaデータを100行返す",
      "キャッシュの保持日数を変更する"
    ],
    "source": "https://learn.microsoft.com/en-us/kusto/management/show-external-table-operations-query-acceleration-statistics?view=microsoft-fabric",
    "answerEvidence": "spec-verified"
  },
  "C-KQL-07": {
    "choices": [
      "EventhouseからOneLake shortcutの外部Deltaテーブルを照会する",
      "ShortcutデータをEventhouseのネイティブテーブルへ取り込む",
      "新しい外部テーブルの定義を作成する",
      "LakehouseのSQL analytics endpointでSQLを実行する"
    ],
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/query-acceleration-overview"
  },
  "C-KQL-05": {
    "source": "https://learn.microsoft.com/en-us/kusto/query/bin-function"
  },
  "PA50-29": {
    "question": "【独自練習問題：構文を明示して再設計】Azure Stream Analytics互換のストリームSQLで、入力InputのTollIdごとにイベントを集計します。EntryTimeはイベント時刻です。1分の重ならない窓と、1分間隔で動く15分・30分・60分の窓を同時に使い、各結果の窓をWindowIdで区別します。空欄①に入る式を1つ選んでください。",
    "code": "SELECT TollId, System.Window().Id AS WindowId, COUNT(*) AS N\nFROM Input TIMESTAMP BY EntryTime\nGROUP BY TollId, ［①］",
    "choices": [
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', HoppingWindow(minute, 15, 1)), Window('thirty', HoppingWindow(minute, 30, 1)), Window('sixty', HoppingWindow(minute, 60, 1)))",
      "Windows(TumblingWindow(minute, 1), HoppingWindow(minute, 15, 1), HoppingWindow(minute, 30, 1), HoppingWindow(minute, 60, 1))",
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', TumblingWindow(minute, 15)), Window('thirty', TumblingWindow(minute, 30)), Window('sixty', TumblingWindow(minute, 60)))",
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', HoppingWindow(minute, 15, 5)), Window('thirty', HoppingWindow(minute, 30, 5)), Window('sixty', HoppingWindow(minute, 60, 5)))"
    ],
    "type": "code",
    "answers": [
      0
    ],
    "selectCount": 1,
    "reconstructed": true,
    "reviewStatus": "spec-reviewed",
    "scorable": true,
    "answerEvidence": "spec-verified",
    "holdReason": "",
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/windows-azure-stream-analytics",
    "explanation": "1分窓はTumblingWindow、15・30・60分窓はホップ幅1分のHoppingWindowを指定します。Windowでそれぞれ異なるIDを与えるとSystem.Window().Idで識別できます。IDを付けない式では識別値がNULLになります。すべてTumblingWindowにすると長い窓が1分ごとに移動しません。ホップ幅5分の式も指定された1分間隔を満たしません。"
  },
  "PALIVE-20261106-27": {
    "question": "【独自練習問題：構文を明示して再設計】Azure Stream Analytics互換のストリームSQLで、入力InputのTollIdごとにイベントを集計します。EntryTimeはイベント時刻です。1分の重ならない窓と、1分間隔で動く15分・30分・60分の窓を同時に使い、各結果の窓をWindowIdで区別します。空欄①に入る式を1つ選んでください。",
    "code": "SELECT TollId, System.Window().Id AS WindowId, COUNT(*) AS N\nFROM Input TIMESTAMP BY EntryTime\nGROUP BY TollId, ［①］",
    "choices": [
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', TumblingWindow(minute, 15)), Window('thirty', TumblingWindow(minute, 30)), Window('sixty', TumblingWindow(minute, 60)))",
      "Windows(TumblingWindow(minute, 1), HoppingWindow(minute, 15, 1), HoppingWindow(minute, 30, 1), HoppingWindow(minute, 60, 1))",
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', HoppingWindow(minute, 15, 1)), Window('thirty', HoppingWindow(minute, 30, 1)), Window('sixty', HoppingWindow(minute, 60, 1)))",
      "Windows(Window('one', TumblingWindow(minute, 1)), Window('fifteen', HoppingWindow(minute, 15, 5)), Window('thirty', HoppingWindow(minute, 30, 5)), Window('sixty', HoppingWindow(minute, 60, 5)))"
    ],
    "type": "code",
    "answers": [
      2
    ],
    "selectCount": 1,
    "reconstructed": true,
    "reviewStatus": "spec-reviewed",
    "scorable": true,
    "answerEvidence": "spec-verified",
    "holdReason": "",
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/windows-azure-stream-analytics",
    "explanation": "1分窓はTumblingWindow、15・30・60分窓はホップ幅1分のHoppingWindowを指定します。Windowでそれぞれ異なるIDを与えるとSystem.Window().Idで識別できます。IDを付けない式では識別値がNULLになります。すべてTumblingWindowにすると長い窓が1分ごとに移動しません。ホップ幅5分の式も指定された1分間隔を満たしません。"
  },
  "PDF-M3-02": {
    "code": "from pyspark.sql.window import Window\nfrom pyspark.sql.functions import col, row_number\n\nw = Window.partitionBy(\"id\").orderBy(col(\"ts\").desc(), col(\"seq\").desc())\nresult = df.withColumn(\"rn\", row_number().over(w)).filter(\"rn = 1\")"
  },
  "PA-20261114-12": {
    "reviewStatus": "review",
    "scorable": false,
    "answerEvidence": "expected",
    "holdReason": "配列の実値とExecute Pipelineの引数式がなく、createArrayによる修正かJSON文字列のjson変換かを決定できない。既存配列を包むと二重配列になる可能性もある。"
  },
  "PA-20261114-13": {
    "reviewStatus": "review",
    "scorable": false,
    "answerEvidence": "expected",
    "holdReason": "マイクロバッチとStructured Streamingは対立する方式ではない。遅延条件と現行処理が不明で、選択肢を一意に区別できない。"
  },
  "PALIVE-20261106-03": {
    "question": "【独自練習問題：実行方式の条件を明確化】Fabricの対応Spark Runtimeで、Deltaテーブルのバッチ集計を実行します。AQEは既に有効で、ノード数を増やさず、対応する演算をJVMからベクトル化されたC++実行へ移して高速化したいと考えています。既存のSpark SQLコードを維持して有効にする機能を1つ選んでください。",
    "explanation": "Native execution engineは対応演算をGluten/Veloxによるネイティブ実行へ移します。AQEは実行計画の適応的最適化で、ここでは既に有効です。Dynamic AllocationはExecutor数の調整、High concurrencyはセッション共有であり、演算をC++へ移す機能ではありません。非対応演算にはフォールバックがあるため、全処理の高速化を保証するものではありません。",
    "reconstructed": true,
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/native-execution-engine-overview"
  },
  "PA-20261114-07": {
    "question": "【独自練習問題：実行方式の条件を明確化】Fabricの対応Spark Runtimeで、Deltaテーブルのバッチ集計を実行します。AQEは既に有効で、ノード数を増やさず、対応する演算をJVMからベクトル化されたC++実行へ移して高速化したいと考えています。既存のSpark SQLコードを維持して有効にする機能を1つ選んでください。",
    "explanation": "Native execution engineは対応演算をGluten/Veloxによるネイティブ実行へ移します。AQEは実行計画の適応的最適化で、ここでは既に有効です。Dynamic AllocationはExecutor数の調整、High concurrencyはセッション共有であり、演算をC++へ移す機能ではありません。非対応演算にはフォールバックがあるため、全処理の高速化を保証するものではありません。",
    "reconstructed": true,
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/native-execution-engine-overview"
  },
  "PALIVE-20261106-11": {
    "question": "Lookupの結果が0件かどうかをIf Conditionで判定済みです。0件の場合だけ、独自のエラーコードとメッセージでPipelineを失敗終了します。0件側の分岐に必要な設定を2つ選んでください。",
    "reconstructed": true,
    "explanation": "0件側の分岐にFail activityを配置し、そのerrorCodeとmessageを設定します。Lookupの直後へ無条件にFailをつなぐと、データがある場合も失敗します。Waitは待機、Retryは再試行で、指定コードによる明示的な失敗終了を代替しません。"
  },
  "PA-20261114-02": {
    "question": "Lookupの結果が0件かどうかをIf Conditionで判定済みです。0件の場合だけ、独自のエラーコードとメッセージでPipelineを失敗終了します。0件側の分岐に必要な設定を2つ選んでください。",
    "reconstructed": true,
    "explanation": "0件側の分岐にFail activityを配置し、そのerrorCodeとmessageを設定します。Lookupの直後へ無条件にFailをつなぐと、データがある場合も失敗します。Waitは待機、Retryは再試行で、指定コードによる明示的な失敗終了を代替しません。"
  },
  "PALIVE-20261106-22": {
    "question": "【独自練習問題：実行エンジンを明確化】Fabric NotebookのSpark SQLでDeltaテーブルを更新します。Categoryは完全なスナップショットで全件置換し、Customerは既存キーを更新、新規キーを追加します。それぞれに使うSQL操作の組み合わせを1つ選んでください。",
    "reconstructed": true,
    "explanation": "Spark SQLのINSERT OVERWRITEは対象データを置換し、MERGEはキー照合で更新と挿入を分けられます。DELETEだけでは新データを入れず、INSERT INTOだけでは旧データを置換せず、UPDATEだけでは新規キーを挿入できません。これはFabric WarehouseのT-SQL構文の問題ではありません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-and-delta-tables"
  },
  "PA-20261114-48": {
    "question": "【独自練習問題：手順の条件を明確化】VS CodeからFabric Warehouseの既存スキーマを直接読み取り、変更のビルドとデプロイに使うDatabase Projectを作成します。中間のDACパッケージのエクスポート・インポートは行わないものとします。適切な方法を1つ選んでください。",
    "reconstructed": true
  },
  "C-SQL-08": {
    "choices": [
      "CustomerIdとAmountの列区切りのカンマがない",
      "CustomerIdを角括弧で囲まないと列として認識されない",
      "Amountの前にASを入れれば2列として取得できる",
      "FROM句でSalesに別名を付けていない"
    ],
    "explanation": "T-SQLではCustomerId AmountはCustomerIdをAmountという別名で返す有効な構文です。2列を取得するにはCustomerId, Amountとカンマで区切ります。ASを追加しても別名指定のままです。",
    "source": "https://learn.microsoft.com/en-us/sql/t-sql/queries/select-clause-transact-sql"
  },
  "PA50-46": {
    "code": "// 以下の選択肢はWorkspace monitoringのKQLクエリです。"
  },
  "ORD-05": {
    "reviewStatus": "review",
    "scorable": false,
    "holdReason": "接続設定とDAGの作成の順は実装によって入れ替え可能で、全順序を一意に決める依存条件がない。"
  },
  "ORD-15": {
    "reviewStatus": "review",
    "scorable": false,
    "holdReason": "OPTIMIZEとVACUUMは異なる目的で、提示条件では両者の実行順を一意に定められない。"
  },
  "ORD-18": {
    "reviewStatus": "review",
    "scorable": false,
    "holdReason": "アラート条件と通知先の構成順は一意ではなく、テスト前に両方が必要という条件のみである。"
  },
  "O01-A": {
    "question": "複数のNotebookで使う既定のSparkプールをワークスペース単位で設定したい。最も適切な操作はどれか。",
    "choices": [
      "Workspace settingsのData Engineering/Science > Spark Computeで既定プールを設定する",
      "各Notebookで同じプールを個別選択すればワークスペースの既定も自動で変わる",
      "容量側でCustom Poolの利用を許可するだけで既定プールが変わる",
      "Starter Poolの最大executor数を変えればCustom Poolが既定になる"
    ],
    "explanation": "ワークスペース管理者はData Engineering/ScienceのSpark Computeで既定プールを選択できます。Notebook個別のプール指定、容量側の許可、Starter Poolの設定だけでは既定プールの選択は変わりません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/workspace-admin-settings"
  },
  "O01-B": {
    "question": "ワークスペースの既定SparkプールをStarter PoolからCustom Poolに変える前に、正しい留意点を2つ選べ。",
    "choices": [
      "Custom Poolではノードサイズや自動スケールを要件に合わせて構成できる",
      "Custom Poolを既定にするとセッション起動が長くなる場合がある",
      "Starter Poolでも任意のノードサイズを必ず選べる",
      "容量側でカスタムプールを無効にしていても必ずCustom Poolを作れる"
    ],
    "explanation": "Custom Poolは計算要件に合わせてノードや自動スケールを構成できます。一方、既定をStarter Poolから変えるとセッション起動が長くなる場合があります。容量側でカスタムプールが許可されていることも確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/workspace-admin-settings"
  },
  "O02-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  },
  "O02-B": {
    "question": "人事ワークスペースを人事ドメインに割り当てた。利用者の閲覧範囲について正しい説明を2つ選べ。",
    "choices": [
      "ドメイン割り当てはコンテンツの分類や発見に役立つ",
      "実際の閲覧可否はワークスペースロールやアイテム権限などで決まる",
      "人事ドメイン外の利用者は自動で全アイテムを閲覧できなくなる",
      "ドメインを設定すると各アイテムの権限が管理者だけにリセットされる"
    ],
    "explanation": "ドメインはワークスペースとそのアイテムに分類情報を付け、カタログで探しやすくします。ドメインへの割り当て自体はアクセス権を変更せず、閲覧可否は別の権限設定で制御します。",
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  },
  "O02-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  },
  "O03-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/security/get-started-security"
  },
  "O03-B": {
    "question": "閲覧者にはLakehouse内の特定の行と列だけを見せたい。権限の役割について正しい説明を2つ選べ。",
    "choices": [
      "ワークスペースロールやアイテム権限はアイテム操作の制御に使う",
      "OneLakeのデータ権限はテーブル・行・列などに範囲を絞れる",
      "ワークスペースのViewerロールだけで行フィルターを定義できる",
      "アイテムの共有設定だけで任意の列を自動的に隠せる"
    ],
    "explanation": "アイテムの管理や共有などはワークスペース・アイテム権限が扱います。データの閲覧範囲はOneLakeセキュリティでテーブル、行、列などへ絞ります。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/security/get-started-security"
  },
  "O03-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/security/get-started-security"
  },
  "O04-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-compute"
  },
  "O04-B": {
    "question": "AirflowのDAGを週1回だけ試す環境と、常時稼働する本番環境を用意する。プール選択について正しい説明を2つ選べ。",
    "choices": [
      "低頻度の開発・テストにはStarter Poolが適する場合がある",
      "起動待ちを抑えたい常時運用にはCustom Poolが適する場合がある",
      "Starter Poolはアイドル後も常に起動したままになる",
      "Custom Poolは停止しなくてもアイドル時の基本コストが発生しない"
    ],
    "explanation": "Starter Poolは低頻度の開発・テストに適し、アイドル後に停止します。Custom Poolは常時稼働する本番用途に向き、起動待ちを抑えますが、稼働中の基本コストがあります。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-compute"
  },
  "O04-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-compute"
  },
  "O05-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  },
  "O05-B": {
    "question": "複数人でFabricの対応アイテムを変更する。Git連携の性質として正しい説明を2つ選べ。",
    "choices": [
      "Git連携はワークスペース単位でアイテムを版管理する",
      "ブランチを使って変更を分け、必要なら以前の状態へ戻せる",
      "Git連携を有効にすると全種類のFabricアイテムが必ず対応する",
      "Git連携はワークスペースの表示名だけを履歴化し、アイテムは対象外"
    ],
    "explanation": "Git連携はワークスペースの対応アイテムを版管理し、ブランチによる共同作業や以前の状態への復元に使えます。すべてのアイテム種別が対応するわけではありません。",
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  },
  "O05-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  },
  "O06-B": {
    "question": "Fabric Warehouse用のデータベースプロジェクトをVS Codeで新規作成する。正しい設定を2つ選べ。",
    "choices": [
      "ターゲットプラットフォームにSynapse Data Warehouse in Microsoft Fabricを選ぶ",
      "Fabric WarehouseではSDK形式のSQLプロジェクトを使う",
      "ターゲットにAzure SQL Databaseだけを選べばFabric Warehouseへ直接公開できる",
      "Fabric Warehouseでは非SDK形式のプロジェクトだけがサポートされる"
    ],
    "explanation": "Microsoft Learnの手順ではターゲットにSynapse Data Warehouse in Microsoft Fabricを選び、Fabric WarehouseでサポートされるSDK形式のプロジェクトを作ります。この機能は現時点でプレビューです。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project"
  },
  "O07-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  },
  "O07-B": {
    "question": "開発から本番への配布をGit連携とDeployment pipelineで管理する。両者の役割について正しい説明を2つ選べ。",
    "choices": [
      "Deployment pipelineはステージ間で対応アイテムを配布する",
      "Git連携は対応アイテムの版管理に使う",
      "Deployment pipelineを作ればGitの履歴やブランチが自動で作られる",
      "Git連携だけでテスト・本番ステージ間の配布が自動的に完了する"
    ],
    "explanation": "Deployment pipelineは対応アイテムを開発・テスト・本番などのステージ間へ配布します。Git連携は変更の版管理を担い、両者の役割は異なります。",
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  },
  "O07-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  },
  "O08-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  },
  "O08-B": {
    "question": "Fabricワークスペースのロールごとの権限について正しい説明を2つ選べ。",
    "choices": [
      "ContributorはWarehouseアイテムを作成・変更できる",
      "AdminはワークスペースをGitリポジトリへ接続できる",
      "Viewerはワークスペースの管理者を追加できる",
      "Contributorはワークスペースの管理者を削除できる"
    ],
    "explanation": "Microsoft Learnのロール表では、Contributor以上がWarehouseを作成・変更でき、Git接続はAdminの権限です。ViewerやContributorに管理者の追加・削除権限はありません。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  },
  "O08-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  },
  "O09-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sharing"
  },
  "O09-B": {
    "question": "Lakehouseをワークスペース非メンバーへ共有する。共有で与えられる権限について正しい説明を2つ選べ。",
    "choices": [
      "共有された利用者はLakehouseと関連SQL analytics endpointへのRead権限を得る",
      "共有だけではワークスペースのメンバー権限や書き込み権限は得ない",
      "共有された利用者にはワークスペースのContributorロールが自動付与される",
      "Read all with Apache Spark権限も共有時に必ず自動付与される"
    ],
    "explanation": "Lakehouseの共有は関連SQL analytics endpointを含むRead権限を与えます。ワークスペースへの参加や書き込みは許可せず、Spark/OneLake APIで全データを読む権限は必要に応じて追加します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sharing"
  },
  "O09-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sharing"
  },
  "O10-B": {
    "question": "OneLakeセキュリティロールで行・列を制御する場合、正しい説明を2つ選べ。",
    "choices": [
      "CLSは許可した列に閲覧範囲を絞る",
      "RLSは許可した行に閲覧範囲を絞る",
      "同じ利用者に別ロールで広い権限があっても、このロールで必ず拒否できる",
      "Workspace AdminにもOneLakeロールの行・列制限が常に適用される"
    ],
    "explanation": "OneLakeのCLSは列、RLSは行の閲覧範囲を制限します。ただし付与モデルなので別の権限経路で許可されたアクセスを拒否できず、Workspace Admin・Member・Contributorにはこれらのロール制限が適用されません。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/security/table-column-row-security"
  },
  "O11-B": {
    "question": "WarehouseのDynamic Data Maskingについて正しい説明を2つ選べ。",
    "choices": [
      "マスクは非特権利用者へ返すクエリ結果に適用され、保存データは変えない",
      "網羅的な問い合わせによる情報推測を単独では防げないため他の権限と組み合わせる",
      "マスクを設定すると対象列の保存値が恒久的に伏字へ書き換わる",
      "マスクを設定すると対象テーブルへのSELECT権限が全利用者から削除される"
    ],
    "explanation": "DDMは非特権利用者へのクエリ結果をマスクし、保存済みの元データは変更しません。直接接続して網羅的に照会する攻撃までは防げないため、列・行の権限などと併用します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking"
  },
  "O12-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/information-protection"
  },
  "O12-B": {
    "question": "Fabricの秘密度ラベルとアクセス制御の関係について、正しい説明を2つ選べ。",
    "choices": [
      "秘密度ラベルはPurview情報保護による分類やポリシー適用に使う",
      "保護ポリシーと関連付いたラベルは条件に応じてアクセスを制御できる",
      "どのラベルも保護ポリシーなしで必ずアクセスを制限する",
      "ラベルを付けるとワークスペースの全利用者が自動でViewerになる"
    ],
    "explanation": "秘密度ラベルはデータの分類と保護方針に使います。Purviewの保護ポリシーと関連付いたラベルは、適用先テナントのアイテムへのアクセス制御にも使われる場合があります。単なるラベル付与だけで全利用者のWorkspaceロールは変わりません。",
    "source": "https://learn.microsoft.com/en-us/fabric/governance/information-protection"
  },
  "O12-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/information-protection"
  },
  "O13-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview"
  },
  "O13-B": {
    "question": "FabricのEndorsementでPromotedとCertifiedを使う。操作権限について正しい説明を2つ選べ。",
    "choices": [
      "アイテムの書き込み権限がある利用者はPromotedを付けられる",
      "Certifiedを実際に付けられるのは管理者が指定した認定者である",
      "アイテムを読める全利用者は自分でCertifiedを付けられる",
      "Shortcutを作成すると認定者の確認なしでCertifiedが付く"
    ],
    "explanation": "Promotedは書き込み権限を持つ利用者が付けられます。Certifiedの申請は誰でもできますが、認定を実施できるのはFabric管理者が指定した利用者です。",
    "source": "https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview"
  },
  "O13-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview"
  },
  "O17-B": {
    "question": "Fabric Pipelineの定期実行とイベント実行について正しい説明を2つ選べ。",
    "choices": [
      "定期実行の設定では開始・終了日時、頻度、タイムゾーンを指定する",
      "イベント実行ではデータレイクへの新規ファイル到着などを起点にできる",
      "定期実行は終了日時を指定せず無期限に設定するのが必須である",
      "イベント実行も必ず定期実行と同じ時刻になるまで待つ"
    ],
    "explanation": "定期実行には開始・終了日時、頻度、タイムゾーンを設定します。イベント実行はファイル到着などのイベントが起点です。定期実行の終了日時は省略できません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs"
  },
  "O18-B": {
    "question": "同じPipelineを実行ごとに別のテーブルへ適用する。パラメーターと式について正しい説明を2つ選べ。",
    "choices": [
      "Pipelineパラメーターは実行時に外部から値を渡せる",
      "一度設定されたパラメーター値はその実行中は変わらない",
      "パラメーター値は各アクティビティが実行中に自由に書き換える",
      "動的式は設計時にしか評価されず実行時値を参照できない"
    ],
    "explanation": "Pipelineパラメーターは実行時に外部から値を渡して再利用するための仕組みで、その実行中は値が一定です。動的式はパラメーターなど実行時の値を参照できます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/parameters"
  },
  "O19-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse"
  },
  "O19-B": {
    "question": "WarehouseからLakehouseへwatermarkで増分コピーする。次回実行までの状態管理について正しい説明を2つ選べ。",
    "choices": [
      "前回のwatermark値を保存して次のコピーの下限に使う",
      "前回値と今回の新しい値で抽出範囲を決め、コピー後に次回用の値を保存する",
      "初回の増分コピー後はwatermark値を保存する必要がない",
      "コピー前に新しいwatermarkへ更新すれば失敗時もデータ欠落は起きない"
    ],
    "explanation": "増分コピーでは前回のwatermarkを保存し、前回値と今回値の間の変更行だけを抽出します。コピー後に今回値を次回用として保存します。失敗前に進捗だけを進めると取りこぼしの原因になります。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse"
  },
  "O19-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse"
  },
  "O20-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"
  },
  "O20-B": {
    "question": "販売分析用の星型スキーマを設計する。FactとDimensionの役割について正しい説明を2つ選べ。",
    "choices": [
      "Factには取引などの観測値や集計できる数値とDimensionキーを置く",
      "Dimensionには商品や日付などの分析対象を説明する属性を置く",
      "Factには商品名などの説明属性だけを置き、数値はDimensionへ置く",
      "Dimensionは必ず1行だけで、Factとの関連を持たない"
    ],
    "explanation": "星型スキーマではFactがイベントや観測値に対応する測定値とDimensionキーを持ち、Dimensionが商品・人・場所・日付などの属性を説明します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"
  },
  "O20-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-overview"
  },
  "O21-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "O21-B": {
    "question": "FabricでSpark Structured Streamingを常時処理と定期増分処理に使う。正しい説明を2つ選べ。",
    "choices": [
      "常時処理ではクエリを稼働させ、新着データを継続的に処理できる",
      "available-nowでは起動時にあるデータを処理して停止し、同じ互換チェックポイントで再開できる",
      "available-nowでは前回の進捗を保存できず毎回全件を再処理する",
      "常時処理と定期処理ではreadStreamとwriteStreamのAPIを共有できない"
    ],
    "explanation": "Structured Streamingは同じreadStream/writeStream APIで常時処理とavailable-nowの定期処理に対応します。互換性のある同じチェックポイントを使えば、定期処理でも進捗と状態を引き継げます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "O21-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "O22-B": {
    "question": "Fabricの保存先を選ぶ際の特徴について正しい説明を2つ選べ。",
    "choices": [
      "LakehouseはファイルとDeltaテーブルを同じ環境で扱える",
      "WarehouseはSQL中心の構造化分析に向く",
      "LakehouseにはSQLでDeltaテーブルを読む入口が存在しない",
      "Eventhouseは通常のWarehouseテーブルにだけデータを保存する"
    ],
    "explanation": "LakehouseはファイルとDeltaテーブルを扱い、SQL analytics endpointも備えます。Warehouseは構造化された関係データのSQL分析に向きます。Eventhouseはリアルタイムイベント向けの別の保存先です。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/store-data"
  },
  "O23-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-overview"
  },
  "O23-B": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-overview"
  },
  "O23-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-overview"
  },
  "O24-B": {
    "question": "OneLake shortcutの参照先と削除について正しい説明を2つ選べ。",
    "choices": [
      "Shortcutを削除しても参照先のデータは残る",
      "参照先のパスを移動・改名・削除するとShortcutが壊れる場合がある",
      "Shortcutを削除すると参照先のストレージも必ず削除される",
      "Shortcutは作成時に参照先データを完全コピーし、その後は参照先と無関係になる"
    ],
    "explanation": "Shortcutは参照先への独立したリンクです。Shortcutの削除は参照先を消しませんが、参照先の移動・改名・削除によってリンクが壊れる場合があります。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  },
  "O25-B": {
    "question": "Fabric Mirroringの同期対象と設定について正しい説明を2つ選べ。",
    "choices": [
      "対応する業務データソースとの安全な接続を作成して有効化する",
      "データベース全体または選択したテーブルを継続レプリケーションできる",
      "同期のたびに手作業でCopy activityを実行することが必須である",
      "Mirrorを作れば元システムのデータベースは自動的に削除される"
    ],
    "explanation": "Mirroringでは対応データソースへの接続を作り、データベース全体または選択したテーブルをOneLakeへ継続的に同期します。元データベースの削除や手動コピーは目的ではありません。",
    "source": "https://learn.microsoft.com/en-us/fabric/mirroring/overview"
  },
  "O26-B": {
    "question": "Fabric Pipelineの活動と実行単位について正しい説明を2つ選べ。",
    "choices": [
      "Copyなどのデータ移動活動を他の活動と組み合わせられる",
      "パイプライン全体をスケジュールし、個々の活動を一連の処理として管理できる",
      "各活動はパイプラインから独立して必ず個別にスケジュールする",
      "パイプラインには条件分岐や失敗処理の活動を置けない"
    ],
    "explanation": "PipelineはCopyなどのデータ移動、変換、制御フロー活動をまとめます。活動ごとではなくパイプラインを実行・スケジュールして一連の処理を管理します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-overview"
  },
  "O27-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data"
  },
  "O27-B": {
    "question": "Fabric Notebookで複雑なデータ変換を行う。実装と運用について正しい説明を2つ選べ。",
    "choices": [
      "Spark DataFrameで結合・集計などのコード処理を実装できる",
      "Data FactoryのNotebook activityからNotebookを実行できる",
      "NotebookはPower Queryの画面操作だけで定義し、コードは書けない",
      "NotebookはLakehouseのデータを読み書きできない"
    ],
    "explanation": "Fabric NotebookではSpark DataFrameなどのコードで結合・集計を行えます。Data Factory PipelineのNotebook activityからオーケストレーションすることもできます。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data"
  },
  "O27-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data"
  },
  "O28-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables"
  },
  "O28-B": {
    "question": "商品・サブカテゴリ・カテゴリを分析するDimension設計について正しい説明を2つ選べ。",
    "choices": [
      "小さめのDimensionでは階層属性を一表へ展開すると結合を減らせる",
      "非常に大きいDimensionなどでは正規化したsnowflake構造が適する場合もある",
      "Dimensionはどんな大きさでも必ず完全正規化するのが推奨される",
      "Snowflake構造にすると商品・カテゴリの関連を定義できなくなる"
    ],
    "explanation": "Dimensionは通常、階層を展開した非正規化で性能と使いやすさを高めます。一方で非常に大きなDimensionなど、ストレージや履歴管理の要件によってsnowflake構造を選ぶ場合があります。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables"
  },
  "O28-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables"
  },
  "O29-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data"
  },
  "O29-B": {
    "question": "Fabricでグループ集計を実装する手段について正しい説明を2つ選べ。",
    "choices": [
      "Dataflow Gen2のPower Query画面ではグループ化・集計を組み立てられる",
      "NotebookではSpark DataFrameを使って集計やウィンドウ処理を実装できる",
      "Dataflow Gen2では集計を行うたびに必ずカスタムPythonコードが必要である",
      "NotebookではDataFrameを使った集計がサポートされない"
    ],
    "explanation": "Dataflow Gen2はPower Queryの視覚的な操作で集計を組み立てられます。NotebookではSpark DataFrameを使うコードで集計やウィンドウ処理を実装できます。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data"
  },
  "O29-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data"
  },
  "O30-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing"
  },
  "O30-B": {
    "question": "Spark Structured Streamingで再送されたイベントを重複排除する。状態管理について正しい説明を2つ選べ。",
    "choices": [
      "ストリームの重複排除は、過去の処理で見たキーを状態として保持する",
      "チェックポイントには進捗と状態ストアのデータを保存できる",
      "mapやfilterは必ず過去のmicrobatchを記憶する状態処理である",
      "別のストリーミングクエリと同じチェックポイントを共有するのが推奨される"
    ],
    "explanation": "ストリームの重複排除は以前のmicrobatchで見たキーを保持する状態処理です。チェックポイントはオフセット、進捗、状態を記録します。異なるクエリで同じチェックポイントを共有してはいけません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing"
  },
  "O30-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing"
  },
  "O31-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  "O31-B": {
    "question": "コードを書かずにイベントを取り込み、複数の宛先へ送る用途でEventstreamを評価する。正しい説明を2つ選べ。",
    "choices": [
      "Eventstreamはソース、任意の変換、宛先を画面で構成できる",
      "EventstreamにはKafkaプロトコルで送受信する入口もある",
      "Eventstreamを作るには各ルートをPySparkで実装することが必須である",
      "Eventstreamは1つの宛先にしかイベントを送れない"
    ],
    "explanation": "Fabric Eventstreamはコード不要でソース・変換・宛先を構成でき、複数宛先へのルーティングも扱えます。Kafka endpointからイベントの送受信も可能です。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  "O31-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  "O34-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  "O34-B": {
    "question": "Eventstreamで取り込んだイベントの列と行を調整する。変換の働きとして正しい説明を2つ選べ。",
    "choices": [
      "Filterはフィールド値の条件でイベントを絞る",
      "Manage fieldsはフィールドの追加・削除・型変更・改名に使える",
      "Filterはイベントを絞らず、宛先の名前だけを変更する",
      "Manage fieldsはイベント内容を変更できず、配信先だけを切り替える"
    ],
    "explanation": "EventstreamのFilterはイベントのフィールド値で行を絞り、Manage fieldsは列の追加・削除・型変更・改名を行います。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  "O34-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  "O35-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "O35-B": {
    "question": "バッチ用のDataFrame処理をSpark Structured Streamingへ移す。実行可能性について正しい説明を2つ選べ。",
    "choices": [
      "バッチで使える全操作がストリーミング入力にも対応するわけではない",
      "Sparkはストリーミングクエリ開始時に実行計画を検証し、非対応操作を報告する",
      "バッチのDataFrameコードは検証なしですべてストリームに移せる",
      "非対応操作でもチェックポイントを作れば必ず実行可能になる"
    ],
    "explanation": "Streaming DataFrameはバッチと似たAPIを使いますが、すべてのバッチ操作が対応するわけではありません。Sparkはクエリ開始時に計画を検証し、非対応操作を報告します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "O35-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "O36-A": {
    "source": "https://learn.microsoft.com/en-us/kusto/query/tutorials/learn-common-operators"
  },
  "O36-B": {
    "question": "KQLで条件に合う上位5件を取得する。演算子の働きとして正しい説明を2つ選べ。",
    "choices": [
      "whereは条件に合う行を絞る",
      "projectは出力する列を選ぶ",
      "projectは条件に合う行だけを選び、whereは列だけを選ぶ",
      "topをwhereより前に置いても結果は必ず同じになる"
    ],
    "explanation": "KQLのwhereは行を絞り、projectは列を選びます。topの前後でwhereの位置を変えると、上位を選ぶ母集団が変わり結果も変わり得ます。",
    "source": "https://learn.microsoft.com/en-us/kusto/query/tutorials/learn-common-operators"
  },
  "O36-C": {
    "source": "https://learn.microsoft.com/en-us/kusto/query/tutorials/learn-common-operators"
  },
  "O37-A": {
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/windowing-azure-stream-analytics"
  },
  "O37-B": {
    "question": "Fabric Eventstreamで5分のtumbling windowを使う。窓の時刻と集計について正しい説明を2つ選べ。",
    "choices": [
      "時間窓はGROUP BYで使用する",
      "12:00～12:05の窓は開始時刻を含まず、12:05ちょうどのイベントを含む",
      "12:05ちょうどのイベントは必ず12:05～12:10の窓に入る",
      "窓集計の出力時刻は常に窓の開始時刻になる"
    ],
    "explanation": "窓関数はGROUP BYで使います。Microsoft Learnの境界規則では5分tumbling windowは(12:00, 12:05]のように開始を含まず終了を含み、集計結果の時刻は窓の終了時刻です。",
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/windowing-azure-stream-analytics"
  },
  "O37-C": {
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/windowing-azure-stream-analytics"
  },
  "O38-B": {
    "question": "複数ワークスペースのPipeline取り込み実行を監視する。監視手段について正しい説明を2つ選べ。",
    "choices": [
      "Monitoring hubではワークスペースをまたぐ実行の健全性や履歴を確認できる",
      "Workspace monitoringでは実行ログをEventhouseに保存してKQLで分析できる",
      "Pipelineの実行履歴はワークスペース内からしか閲覧できない",
      "Workspace monitoringはログを保存せず、直近の状態アイコンだけを変える"
    ],
    "explanation": "Monitoring hubは複数ワークスペースの実行履歴や失敗調査に使えます。Workspace monitoringはPipelineと活動のログをEventhouseに保存し、KQLで分析できます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"
  },
  "O39-B": {
    "question": "Pipeline内の変換活動が遅くなった。監視手段について正しい説明を2つ選べ。",
    "choices": [
      "Legacy Monitoring hubでは活動実行を絞り込み、監視データをエクスポートできる",
      "Capacity Metrics appではPipelineの容量消費や負荷の高いアイテムを確認できる",
      "Legacy Monitoring hubでは失敗した活動を絞り込めない",
      "Capacity Metrics appは個々の変換結果の行値を必ず表示する"
    ],
    "explanation": "活動実行の履歴・絞り込み・エクスポートにはMonitoring hubを使えます。容量の逼迫やリソース消費を調べるにはCapacity Metrics appが役立ちます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"
  },
  "O40-A": {
    "source": "https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data"
  },
  "O40-B": {
    "question": "Semantic modelの更新履歴を読む際、保存モードの違いについて正しい説明を2つ選べ。",
    "choices": [
      "Importモデルは元データの変更を取り込むためデータ更新が必要になる",
      "DirectQueryモデルは通常データを取り込まず、レポートの照会時に元ソースへ問い合わせる",
      "DirectQueryモデルは必ずImportモデルと同じデータ更新処理を定期実行する",
      "Importモデルは取り込んだ時点のデータを持たず、毎回元ソースだけを照会する"
    ],
    "explanation": "Importはデータをモデルに取り込むため、元データの変更を反映する更新が必要です。DirectQueryはデータを取り込まず照会時に元ソースへ問い合わせます。ただしタイルやレポートの更新は別に起こり得ます。",
    "source": "https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data"
  },
  "O40-C": {
    "source": "https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data"
  },
  "O41-B": {
    "question": "Fabric Pipelineの失敗通知を設定する。監視と通知の機能について正しい説明を2つ選べ。",
    "choices": [
      "Monitoring hubのAlertsタブでPipelineのアラートを管理できる",
      "活動レベルでは後続にOutlookやTeamsの活動を配置して通知できる",
      "アラートはPipeline全体では使えず、個々の活動だけが対象である",
      "失敗通知はPipelineを毎回手動で開いて確認する場合だけ機能する"
    ],
    "explanation": "Pipeline全体のアラートはMonitoring hubから管理できます。活動単位の通知には後続のOutlookまたはTeams活動を配置する方法があります。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/create-alerts-for-pipeline-runs"
  },
  "O42-B": {
    "question": "Fabric Pipelineの活動でエラー2103または2104が出た。対処の対応関係として正しい説明を2つ選べ。",
    "choices": [
      "2103で必須プロパティの値が欠けている場合は、その値を指定する",
      "2104でプロパティの型が違う場合は、期待される型に直す",
      "2103は必ず容量不足なのでスケールアップだけで直す",
      "2104は必ず一時的なネットワーク断なので再試行だけで直す"
    ],
    "explanation": "公式のトラブルシューティング表では2103は必須プロパティの値不足、2104はプロパティの型違いです。エラー内容に合う設定修正が必要です。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-troubleshoot-guide"
  },
  "O43-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  },
  "O43-B": {
    "question": "Dataflow Gen2の更新失敗を詳しく調べる。履歴とログについて正しい説明を2つ選べ。",
    "choices": [
      "更新履歴から対象実行のテーブルや活動の詳細へ進める",
      "Power Query Mashup engineの詳細ログを対象実行からダウンロードできる",
      "詳細ログは更新が終わる前から永久にダウンロードできる",
      "更新履歴には開始時刻や状態が表示されない"
    ],
    "explanation": "Dataflow Gen2の更新履歴には開始時刻、状態、所要時間などがあり、テーブルや活動へ掘り下げられます。詳細ログは終了後数分で利用可能になり、利用期間は限定されます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  },
  "O43-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  },
  "O44-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "O44-B": {
    "question": "夜間のSpark Notebookが失敗した。Fabricの監視画面での調査として正しい手順を2つ選べ。",
    "choices": [
      "Monitoring hubで失敗した実行を開き、エラー概要を確認する",
      "Driverログや失敗したJob・Stageの詳細を調べる",
      "ログが存在しなければ必ずNotebookコードの構文だけが原因と断定する",
      "失敗の種類を調べる前にすべてのSparkプールを最大へ増強する"
    ],
    "explanation": "まずMonitoring hubの失敗実行とエラー概要を確認し、DriverログやJob・Stageの詳細で原因を絞ります。ログがない場合はクラスター作成や容量など基盤側も確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "O44-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "O45-B": {
    "question": "Eventhouseの取り込み率と容量を確認したい。監視画面について正しい説明を2つ選べ。",
    "choices": [
      "System overviewにはストレージ・計算使用量や取り込み率が表示される",
      "Workspace monitoringを有効化すると監視用Eventhouseの読み取り専用表をKQLで照会できる",
      "System overviewはテーブルのスキーマだけを表示し、取り込み率は示さない",
      "監視用Eventhouseの表は監視設定を変えるため自由に書き換えることが推奨される"
    ],
    "explanation": "EventhouseのSystem overviewは容量と取り込みの状況を示します。Workspace monitoringを有効にすると監視用Eventhouseの読み取り専用データをKQLで分析できます。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse"
  },
  "O46-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor"
  },
  "O46-B": {
    "question": "Eventstreamの宛先に届くイベントが減った。監視機能について正しい説明を2つ選べ。",
    "choices": [
      "Data insightsでIncomingMessagesとOutgoingMessagesなどの件数を比較できる",
      "Runtime logsを使える構成ではログやエラーを確認できる",
      "Data insightsは宛先の名称を変えるだけで件数を示さない",
      "Runtime logsはすべてのソース・宛先で常に同じ内容を表示する"
    ],
    "explanation": "EventstreamのData insightsは入出力メッセージ数などを示します。Runtime logsも構成によって利用でき、ログやエラーを確認できます。表示できる監視ビューはソース・宛先で異なります。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor"
  },
  "O46-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor"
  },
  "O47-B": {
    "question": "Fabric WarehouseのT-SQLで権限エラーが起きた。アクセス経路について正しい説明を2つ選べ。",
    "choices": [
      "Warehouseへの接続には少なくともFabricのRead権限が必要である",
      "接続後の対象オブジェクトへの権限はT-SQLの細かな権限でも管理できる",
      "FabricアイテムのRead権限がなくてもSQLの列権限だけで必ず接続できる",
      "ワークスペースロール以外ではWarehouseの権限を一切設定できない"
    ],
    "explanation": "Warehouseへ接続するにはFabricのRead権限が必要です。接続後の利用者権限はアイテム権限やT-SQLの細かな権限と組み合わせて管理します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security"
  },
  "O49-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  },
  "O49-B": {
    "question": "LakehouseのDeltaテーブルを保守する。OPTIMIZEとVACUUMの用途について正しい説明を2つ選べ。",
    "choices": [
      "OPTIMIZEは小さなParquetファイルをまとめて読み取り効率を改善する",
      "VACUUMは保持条件より古い参照されないファイルを削除する",
      "OPTIMIZEは全データを元ソースから再取り込みするための命令である",
      "VACUUMはすべての現行ファイルを圧縮して新しいデータを作る"
    ],
    "explanation": "OPTIMIZEは小ファイルの圧縮などを行い、VACUUMはDeltaログが参照しない古いファイルを保持条件に従って削除します。VACUUMの短すぎる保持期間は履歴や同時利用に影響します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  },
  "O49-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  },
  "O50-B": {
    "question": "Copy activityの転送が遅い。並列処理の調整について正しい説明を2つ選べ。",
    "choices": [
      "Degree of copy parallelismは単一Copy activity内の並列スレッド数の上限を指定する",
      "Intelligent throughput optimizationと並列コピーは別の調整項目である",
      "Degree of copy parallelismを2にすると実行時も必ずちょうど2スレッドになる",
      "Intelligent throughput optimizationは並列コピーと同じ設定名で、片方しか使えない"
    ],
    "explanation": "Copy activityには並列コピーの上限とIntelligent throughput optimizationという別の調整があります。実行時の並列数は設定した上限以下で、ソース・宛先・ネットワーク制約も考慮します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/copy-activity-performance-and-scalability-guide"
  },
  "O51-B": {
    "question": "Fabric Warehouseの結合クエリが遅い。統計と列型について正しい説明を2つ選べ。",
    "choices": [
      "統計情報はオプティマイザーの行数推定と実行計画の選択に使われる",
      "結合や比較に使う列のデータ型をそろえると不要な変換を避けやすい",
      "統計情報はクエリ計画に一切使われない",
      "結合列の型を意図的に毎回変えるほど変換コストは必ず下がる"
    ],
    "explanation": "Warehouseのオプティマイザーは列統計でクエリ計画のコストを見積もります。結合・比較する列の型はできるだけ一致させ、明示的な型変換を避けます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance"
  },
  "O52-B": {
    "question": "Eventhouseの遅延を調査する。System overviewで見られる情報として正しい説明を2つ選べ。",
    "choices": [
      "取り込み率と計算・ストレージ使用量を確認できる",
      "よく照会されるデータベースや取り込みの多いデータベースを確認できる",
      "System overviewから個々のKQLクエリの実行計画を自動で書き換えられる",
      "Eventhouseの状態は表示されず、常にKQLで全テーブルを手動走査する必要がある"
    ],
    "explanation": "EventhouseのSystem overviewには取り込み率、計算・ストレージ使用量、照会や取り込みが多いデータベースなどの情報があり、遅延や負荷の把握に使えます。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse"
  },
  "O53-A": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "O53-B": {
    "question": "Sparkの一部タスクだけ極端に遅い。データスキューの診断について正しい説明を2つ選べ。",
    "choices": [
      "Stageのタスク実行時間で中央値と最大値の差を確認する",
      "特定のパーティションにshuffleの読み書きが集中していないか確認する",
      "全タスクの時間が同じなら必ずスキューがあると判断する",
      "Driverのメモリ量だけを見ればキーの偏りを特定できる"
    ],
    "explanation": "スキューでは一部タスクの時間が長くなり、中央値と最大値に大きな差が出たり、shuffle量が少数のパーティションへ集中したりします。StageやSpark UIのタスク指標で確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "O53-C": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "O54-B": {
    "question": "Fabric Warehouseで初回のクエリだけ遅い。コールドスタートの確認について正しい説明を2つ選べ。",
    "choices": [
      "queryinsights.exec_requests_historyのdata_scanned_remote_storage_mbを確認する",
      "初回が遅いだけで恒常的な性能問題と断定せず、後続実行とも比較する",
      "初回が遅ければ必ずインデックスを削除してから再実行する",
      "data_scanned_remote_storage_mbが0以外ならキャッシュだけで全データを読めたと判断する"
    ],
    "explanation": "初回の遅延にはOneLakeからの読み込みなどのコールドスタートが関わります。queryinsightsのdata_scanned_remote_storage_mbが0以外ならリモートから読んだことを示します。後続実行も比較して判断します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance"
  },
  "O02-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  },
  "O03-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/security/get-started-security"
  },
  "O04-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-compute"
  },
  "O05-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  },
  "O07-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  },
  "O08-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  },
  "O09-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sharing"
  },
  "O12-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/information-protection"
  },
  "O13-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/endorsement-overview"
  },
  "O40-D": {
    "source": "https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data"
  },
  "O43-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  },
  "O44-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "O46-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor"
  },
  "O49-D": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  },
  "PA50-11": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/deploy-content"
  },
  "PA50-14": {
    "source": "https://learn.microsoft.com/en-us/fabric/admin/endorsement-certification-enable"
  },
  "PA50-18": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security"
  },
  "PA50-21": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PA50-22": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-copy"
  },
  "PA50-23": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PA50-25": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-hub/process-data-streams-using-transformations"
  },
  "PA50-26": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/prepare-transform-data"
  },
  "PA50-28": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PA50-30": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/table-update-policy"
  },
  "PA50-31": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-hub/process-data-streams-using-transformations"
  },
  "PA50-32": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PA50-34": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables"
  },
  "PA50-35": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PA50-37": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-science/fabric-notebooks-troubleshooting-guide"
  },
  "PA50-42": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-copy"
  },
  "PA50-45": {
    "source": "https://learn.microsoft.com/en-us/data-integration/gateway/service-gateway-tshoot"
  },
  "PA50-48": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PA50-49": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflow-gen2-data-destinations-validation-rules"
  },
  "PA50-50": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-table-maintenance"
  },
  "PALIVE-20261106-06": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor"
  },
  "PALIVE-20261106-08": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflow-gen2-data-destinations-validation-rules"
  },
  "PALIVE-20261106-09": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PALIVE-20261106-14": {
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/table-maintenance-optimization"
  },
  "PALIVE-20261106-16": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PALIVE-20261106-18": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PALIVE-20261106-20": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  "PALIVE-20261106-21": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables",
    "question": "Product→Subcategory→Categoryの階層について、過去属性の履歴は不要で現在値だけをGold層で使います。SalesはProductKeyで商品を参照します。商品キーごとに1回のJoinで商品・サブカテゴリ・カテゴリ名を取得するには、どの粒度のディメンションを作成しますか。",
    "reconstructed": true
  },
  "PALIVE-20261106-23": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  "PALIVE-20261106-24": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/load-data"
  },
  "PALIVE-20261106-26": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/load-data"
  },
  "PALIVE-20261106-28": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook"
  },
  "PALIVE-20261106-30": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-job-definition"
  },
  "PALIVE-20261106-33": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/security"
  },
  "PALIVE-20261106-39": {
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  },
  "PALIVE-20261106-42": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/deploy-content"
  },
  "PALIVE-20261106-44": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/configure-starter-pools"
  },
  "PALIVE-20261106-48": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  },
  "PALIVE-20261106-49": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/environment-manage-library"
  },
  "C-SQL-01": {
    "source": "https://learn.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql"
  },
  "C-SQL-02": {
    "choices": [
      "CityがNULLのときだけUnknownを返す",
      "CityがNULLの行を結果から除外する",
      "CityがNULL以外でもUnknownに置き換える",
      "直前行のCityでNULLを埋める"
    ],
    "source": "https://learn.microsoft.com/en-us/sql/t-sql/language-elements/coalesce-transact-sql"
  },
  "C-SQL-05": {
    "choices": [
      "Amountに応じてTier列の値を作る",
      "Highに該当する行だけを返す",
      "Amount列をHighという文字列に変える",
      "HighとNormalの件数を集計する"
    ],
    "source": "https://learn.microsoft.com/en-us/sql/t-sql/language-elements/case-transact-sql"
  },
  "C-SQL-06": {
    "choices": [
      "不要期間の読み取り削減が期待できる",
      "OrderDateをSELECT列に含めないとWHEREは適用されない",
      "2026-11-01より前の分割だけを読む",
      "OrderDateが分割列でも必ず全期間を読む"
    ]
  },
  "C-SQL-10": {
    "choices": [
      "必要な列・行に絞りI/Oを減らせる可能性がある",
      "Status条件は行の絞り込みには使われない",
      "SELECT *でもこの2列だけが自動で返る",
      "選択列を減らすとWHERE条件は無視される"
    ]
  },
  "C-SQL-07": {
    "source": "https://learn.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql"
  },
  "C-KQL-01": {
    "question": "Timestampに未来時刻の行も含み得ます。次のwhere条件で残る行はどれか。",
    "choices": [
      "1時間前より後の行。未来時刻の行も条件を満たす",
      "現在から1時間前までの行だけ。未来時刻は自動で除かれる",
      "1時間前ちょうどの行だけ",
      "Timestampを1時間単位に集計した行"
    ],
    "explanation": "ago(1h)は現在から1時間前の時刻を返し、whereはそれより後かどうかを比較します。上限条件がないため未来時刻の行も残り得ます。",
    "source": "https://learn.microsoft.com/en-us/kusto/query/where-operator"
  },
  "C-KQL-03": {
    "choices": [
      "Host別のCpu平均を計算する",
      "Host別のCpu合計を計算する",
      "全HostをまとめてCpu平均を1行で返す",
      "Host別の最新Cpu値を返す"
    ],
    "source": "https://learn.microsoft.com/en-us/kusto/query/avg-aggregation-function"
  },
  "C-KQL-06": {
    "explanation": "arg_maxはDeviceIdごとに最大Timestampを持つ行の列を返します。同時刻の行が複数ある場合、どの行を返すかはこのコードだけでは指定していません。",
    "source": "https://learn.microsoft.com/en-us/kusto/query/arg-max-aggregation-function"
  },
  "C-KQL-08": {
    "choices": [
      "早期に期間・列を絞りスキャンや後続処理を減らせる",
      "whereがなくてもprojectだけで直近1日に絞られる",
      "projectによりEventsの保存列が削除される",
      "whereは行ではなく出力列だけを限定する"
    ],
    "source": "https://learn.microsoft.com/en-us/kusto/query/best-practices"
  },
  "C-KQL-09": {
    "source": "https://learn.microsoft.com/en-us/kusto/query/join-inner"
  },
  "C-PY-02": {
    "choices": [
      "指定した列のNULLを既定値で補完する",
      "CityかAmountがNULLの行を削除する",
      "NULL以外のCityもUnknownに置き換える",
      "元のdfを直接書き換え、戻り値は作らない"
    ],
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/4-dataframe"
  },
  "C-PY-03": {
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/4-dataframe"
  },
  "ORD-17": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "C-PY-06": {
    "question": "Salesは互換スキーマのDeltaテーブルとして既に存在します。このコードの挙動はどれか。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-and-delta-tables"
  },
  "C-PY-10": {
    "choices": [
      "遅延到着イベントと状態保持の管理",
      "ストリームの処理間隔を必ず10分にする",
      "入力元から10分より古い行を削除する",
      "5分窓の集計を自動で作成する"
    ],
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing"
  },
  "ORD-01": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration"
  },
  "C-SQL-03": {
    "question": "BusinessKeyが同じ行にUpdatedAtの同時刻がある。このクエリの結果について正しい説明はどれか。",
    "choices": [
      "各BusinessKeyの最新時刻から1行を残すが、同時刻のどの行かは確定しない",
      "同時刻の行をすべて残す",
      "各BusinessKeyの最も古い行を残す",
      "同時刻の行があると必ずエラーになる"
    ],
    "explanation": "ROW_NUMBERはキー内でUpdatedAtの降順に番号を振り、rn=1だけを残します。同時刻の並びを一意に決める列がないため、同時刻のどの行が残るかは保証されません。",
    "source": "https://learn.microsoft.com/en-us/sql/t-sql/functions/row-number-transact-sql"
  },
  "C-SQL-04": {
    "question": "DimCustomerに同じCustomerCodeが2行ある場合、このLEFT JOINの結果はどうなる可能性があるか。",
    "choices": [
      "対応するStgFactの行が2行に増える",
      "対応するStgFactの行が自動で1行に重複排除される",
      "未一致のStgFactの行だけが削除される",
      "結合前にDimCustomerの2行が自動で集計される"
    ],
    "explanation": "LEFT JOINは左側の行を保持しますが、右側に一致行が複数あればその数だけ結果行が増えます。Dimension側のキー一意性を確認する必要があります。",
    "source": "https://learn.microsoft.com/en-us/sql/t-sql/queries/from-transact-sql"
  },
  "C-PY-01": {
    "question": "BusinessKeyが同じでUpdatedAtだけ異なる2行がある。この処理について正しい説明はどれか。",
    "choices": [
      "1行に減るが、UpdatedAtが新しい行を選ぶ保証はない",
      "UpdatedAtが新しい行を必ず残す",
      "UpdatedAtが異なるため2行とも残す",
      "2行のUpdatedAtを平均して1行にする"
    ],
    "explanation": "dropDuplicates(['BusinessKey'])は比較対象をBusinessKeyに限定します。残す行をUpdatedAtで指定していないため、最新行を選ぶ処理ではありません。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/4-dataframe"
  },
  "C-PY-07": {
    "question": "CustomerIdに偏りがあるデータで、次のコードについて保証される内容はどれか。",
    "choices": [
      "CustomerIdを分割キーとする32個のパーティションを作る",
      "32個のパーティションの行数が必ず等しくなる",
      "同じCustomerIdの行を32個へ均等に分散する",
      "CustomerIdが異なる行を必ず別々のパーティションに置く"
    ],
    "explanation": "repartition(32, 'CustomerId')は指定列でハッシュ分割します。同じキーの行は同じ分割先になり、キーの偏りだけでは行数の均等化は保証されません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  "C-PY-09": {
    "code": "stream = spark.readStream.format(\"delta\").table(\"Incoming\")\nquery = (stream.writeStream.format(\"delta\")\n    .outputMode(\"append\")\n    .option(\"checkpointLocation\", \"Files/chk/incoming-to-sales\")\n    .toTable(\"Sales\"))",
    "question": "既定LakehouseのIncomingは追記専用のDeltaテーブルで、Salesと互換性のあるスキーマです。次のストリームでcheckpointLocationを指定する主な目的を1つ選んでください。",
    "choices": [
      "停止後に同じチェックポイントから処理の進捗や状態を復元する",
      "任意の非冪等な書き込みでも重複を必ず防ぐ",
      "チェックポイント位置を変えても前回の進捗を復元できる",
      "既存のSales行を削除して全件を再作成する"
    ],
    "explanation": "checkpointLocationには処理済み入力の位置や状態などが保存され、同じクエリを同じ場所のチェックポイントから再開するときの復元に使われます。場所を変えると前回の進捗は引き継がれず、任意の非冪等な書き込みの重複防止を単独で保証するものでもありません。"
  },
  "C-KQL-02": {
    "question": "Errorsという列には何が記録されるか。",
    "choices": [
      "Serviceごとの全イベント件数",
      "Serviceごとのエラーイベントだけの件数",
      "全Serviceをまとめた1件の合計行数",
      "Serviceごとの異なるDeviceIdの数"
    ],
    "explanation": "count()は各Serviceの全入力行を数えます。Errorsは出力列の別名であり、エラー条件による絞り込みは行っていません。",
    "source": "https://learn.microsoft.com/en-us/kusto/query/summarize-operator"
  },
  "C-KQL-04": {
    "question": "このprojectの結果について正しい説明はどれか。",
    "choices": [
      "出力を指定した3列に絞り、行を条件で除外しない",
      "先頭の3行だけを残す",
      "指定した3列を削除して他の列を残す",
      "Service別にMessageの件数を集計する"
    ],
    "explanation": "projectは出力する列を指定します。このクエリに行の抽出条件や集計はありません。",
    "source": "https://learn.microsoft.com/en-us/kusto/query/project-operator"
  },
  "ORD-03": {
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines"
  },
  "PDF-M1-04": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables"
  },
  "PDF-M2-03": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables"
  },
  "PDF-M3-13": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables"
  },
  "PDF-M1-27": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/apache-airflow-compute"
  },
  "PDF-M2-04": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/query-insights"
  },
  "PDF-M2-11": {
    "source": "https://learn.microsoft.com/en-us/kusto/query/arg-max-aggregation-function"
  },
  "PDF-M2-13": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/column-level-security"
  },
  "PDF-M2-14": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/delta-lake-schema-evolution"
  },
  "PDF-M2-15": {
    "source": "https://learn.microsoft.com/en-us/kusto/management/ingestion-failures"
  },
  "PDF-M2-19": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/high-concurrency-overview"
  },
  "PDF-M3-15": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/high-concurrency-overview"
  },
  "PDF-M2-20": {
    "source": "https://learn.microsoft.com/en-us/fabric/mirroring/monitor"
  },
  "PDF-M3-24": {
    "source": "https://learn.microsoft.com/en-us/fabric/mirroring/monitor"
  },
  "PDF-M2-23": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project"
  },
  "PDF-M2-26": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/notebook-activity"
  },
  "PDF-M2-30": {
    "source": "https://learn.microsoft.com/en-us/kusto/query/functions/user-defined-functions"
  },
  "PDF-M3-07": {
    "source": "https://learn.microsoft.com/en-us/kusto/management/materialized-views/materialized-view-overview"
  },
  "PDF-M3-25": {
    "source": "https://learn.microsoft.com/en-us/fabric/admin/service-admin-portal-onelake"
  },
  "PDF-M1-20": {
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/tumbling-window-azure-stream-analytics"
  },
  "PDF-M2-02": {
    "source": "https://learn.microsoft.com/en-us/stream-analytics-query/hopping-window-azure-stream-analytics"
  },
  "PDF-M1-24": {
    "source": "https://learn.microsoft.com/en-us/power-query/power-query-folding"
  },
  "PDF-M3-30": {
    "source": "https://learn.microsoft.com/en-us/power-query/power-query-folding"
  },
  "PA50-07": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  },
  "PA50-09": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/column-level-security"
  },
  "PA50-12": {
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/column-level-security"
  },
  "PA-PDF-20261112-30": {
    "question": "【独自練習問題：権限対象を明確化】Fabric Deployment Pipeline自体の設定を編集する担当者を限定します。対象パイプラインで担当者に割り当てる、製品固有の権限名を1つ選んでください。",
    "explanation": "Deployment Pipelineの設定管理にはPipeline admin権限が必要です。Workspaceの権限はコンテンツ側の操作権限であり、Pipeline自体の設定権限とは別です。Environmentアイテムの権限も対象が異なります。RBACはアクセス管理の一般概念で、ここで求める製品固有の権限名ではありません。",
    "reconstructed": true,
    "answerEvidence": "spec-verified"
  },
  "PA-PDF-20261112-09": {
    "holdReason": "Structured Streamingは通常マイクロバッチで動作するため、両選択肢を対立する方式として採点できない。"
  }
};
const currentRevisions=new Set(["C-SQL-02","C-SQL-03","C-SQL-04","C-SQL-05","C-SQL-06","C-SQL-08","C-SQL-10","C-PY-01","C-PY-02","C-PY-04","C-PY-05","C-PY-06","C-PY-07","C-PY-08","C-PY-09","C-PY-10","C-KQL-01","C-KQL-02","C-KQL-03","C-KQL-04","C-KQL-06","C-KQL-07","C-KQL-08","C-KQL-10"]);
const coreRevisions=new Set(["O01-A","O01-B","O02-B","O03-B","O04-B","O05-B","O06-B","O07-B","O08-B"]);
const remainingCoreRevisions=new Set(["O09-B","O10-B","O11-B","O12-B","O13-B","O17-B","O18-B","O19-B","O20-B","O21-B","O22-B","O24-B","O25-B","O26-B","O27-B","O28-B","O29-B","O30-B","O31-B","O34-B","O35-B","O36-B","O37-B","O38-B","O39-B","O40-B","O41-B","O42-B","O43-B","O44-B","O45-B","O46-B","O47-B","O49-B","O50-B","O51-B","O52-B","O53-B","O54-B"]);
for(const name of ["DP700_QUESTIONS","DP700_BASICS","DP700_INTERMEDIATE","DP700_ADVANCED","DP700_BRIDGE","DP700_PA_LIVE_20261106","DP700_PA_20261114","DP700_PA_PDF_20261112"]){for(const q of window[name]||[]){if(patches[q.id])Object.assign(q,patches[q.id],{qualityRevision:coreRevisions.has(q.id)||remainingCoreRevisions.has(q.id)?"2026-11-27":currentRevisions.has(q.id)?"2026-11-26":"2026-11-16"});
const urlFixes={"https://learn.microsoft.com/en-us/fabric/data-engineering/spark-streaming-overview":"https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview","https://learn.microsoft.com/en-us/fabric/data-factory/cdc-overview":"https://learn.microsoft.com/en-us/fabric/data-factory/cdc-copy-job","https://learn.microsoft.com/en-us/fabric/data-warehouse/load-data":"https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-copy","https://learn.microsoft.com/en-us/fabric/fundamentals/monitoring-hub":"https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"};
if(urlFixes[q.source])q.source=urlFixes[q.source];}}
})();

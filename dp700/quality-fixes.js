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
    "question": "変更の追跡に対応したソースデータベースからFabric Warehouseへ増分ロードします。追加・更新・削除を取得し、毎回の全件取得を避けるために使う変更検出方式を1つ選んでください。"
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
  "C-PY-09": {
    "code": "stream = spark.readStream.format(\"delta\").table(\"Incoming\")\nquery = (stream.writeStream.format(\"delta\")\n    .outputMode(\"append\")\n    .option(\"checkpointLocation\", \"Files/chk/incoming-to-sales\")\n    .toTable(\"Sales\"))",
    "question": "既定LakehouseのIncomingは追記専用のDeltaテーブルで、Salesと互換性のあるスキーマです。次のストリームでcheckpointLocationを指定する主な目的を1つ選んでください。"
  },
  "C-PY-04": {
    "code": "from pyspark.sql import functions as F\nrecent = df.filter(F.col('OrderDate') >= '2026-11-01').select('OrderId','Amount')"
  },
  "C-PY-05": {
    "code": "from pyspark.sql import functions as F\nresult = df.withColumn('Net', F.col('Amount') - F.col('Discount'))"
  },
  "C-PY-08": {
    "code": "from pyspark.sql import functions as F\nresult = fact.join(F.broadcast(dim), 'ProductId')"
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
    "answerEvidence": "spec-verified"
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
    "source": "https://learn.microsoft.com/en-us/kusto/management/show-external-table-operations-query-acceleration-statistics?view=microsoft-fabric",
    "answerEvidence": "spec-verified"
  },
  "C-KQL-07": {
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/query-acceleration-overview"
  },
  "C-KQL-05": {
    "source": "https://learn.microsoft.com/en-us/kusto/query/bin-function?view=microsoft-fabric"
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
  }
};
for(const name of ["DP700_QUESTIONS","DP700_BASICS","DP700_INTERMEDIATE","DP700_ADVANCED","DP700_BRIDGE","DP700_PA_LIVE_20261106","DP700_PA_20261114","DP700_PA_PDF_20261112"]){for(const q of window[name]||[]){if(patches[q.id])Object.assign(q,patches[q.id],{qualityRevision:"2026-11-16"});
const urlFixes={"https://learn.microsoft.com/en-us/fabric/data-engineering/spark-streaming-overview":"https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview","https://learn.microsoft.com/en-us/fabric/data-factory/cdc-overview":"https://learn.microsoft.com/en-us/fabric/data-factory/cdc-copy-job","https://learn.microsoft.com/en-us/fabric/data-warehouse/load-data":"https://learn.microsoft.com/en-us/fabric/data-warehouse/ingest-data-copy","https://learn.microsoft.com/en-us/fabric/fundamentals/monitoring-hub":"https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"};
if(urlFixes[q.source])q.source=urlFixes[q.source];}}
})();

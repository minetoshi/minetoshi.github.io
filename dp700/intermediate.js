window.DP700_INTERMEDIATE=[
  {
    "id": "MID-1",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ4 · 増分取り込み",
    "difficulty": "Medium",
    "type": "single",
    "question": "最終成功時刻は9時。9時以降の変更をコピーしたが、保存先への書き込みが失敗した。最終成功時刻はどうする？",
    "choices": [
      "9時のままにする",
      "コピー開始時刻に進める",
      "書き込みに失敗した時刻に進める"
    ],
    "answers": [
      0
    ],
    "explanation": "成功した範囲だけを記録します。失敗時に時刻を進めると、再実行で未保存の行を読み飛ばす恐れがあります。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse"
  },
  {
    "id": "MID-2",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ4 · 再実行",
    "difficulty": "Medium",
    "type": "single",
    "question": "一部の行を書き込んだ後に処理が失敗した。同じデータを再実行しても重複しないようにするには？",
    "choices": [
      "業務キーで一致を判定し、更新または挿入する",
      "毎回すべての行を追記する",
      "読み取り件数を増やす"
    ],
    "answers": [
      0
    ],
    "explanation": "同じキーを更新として扱えば、同じ入力を再処理しても行が増え続ける設計を避けられます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/tsql-surface-area"
  },
  {
    "id": "MID-3",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ4 · Shortcutとコピー",
    "difficulty": "Medium",
    "type": "single",
    "question": "参照元にあるファイルを使いたいが、参照元で削除されても自分の保存先にデータを残したい。どちらを選ぶ？",
    "choices": [
      "別の保存先にコピーする",
      "Shortcutだけを作る",
      "Pipelineの名前を変える"
    ],
    "answers": [
      0
    ],
    "explanation": "コピーなら保存先に独立したデータが残ります。Shortcutは参照元を指すリンクです。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  },
  {
    "id": "MID-4",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ4 · 処理の依存関係",
    "difficulty": "Medium",
    "type": "single",
    "question": "コピーに失敗した日は、Notebookによる集計を実行させたくない。どうつなぐ？",
    "choices": [
      "コピーが成功した場合だけNotebookを実行する",
      "コピーの完了だけを条件にする",
      "コピーとNotebookを並列に実行する"
    ],
    "answers": [
      0
    ],
    "explanation": "成功を条件にすると、失敗した入力を後続の集計に渡すのを防げます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-overview"
  },
  {
    "id": "MID-5",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ4 · Lakehouseの更新",
    "difficulty": "Medium",
    "type": "single",
    "question": "LakehouseのDeltaテーブルに新しい行を書き込みたい。SQL分析エンドポイントとSpark Notebookのどちらを使う？",
    "choices": [
      "Spark NotebookからDeltaテーブルに書き込む",
      "SQL分析エンドポイントでINSERTする",
      "監視ハブから行を追加する"
    ],
    "answers": [
      0
    ],
    "explanation": "LakehouseのSQL分析エンドポイントはDeltaテーブルの読み取りに使います。テーブルへの書き込みはSparkなどから行います。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sql-analytics-endpoint"
  },
  {
    "id": "MID-6",
    "origin": "mid15",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ5 · 権限の切り分け",
    "difficulty": "Medium",
    "type": "single",
    "question": "営業担当に同じ売上テーブルを見せたいが、担当外の地域の売上行は見せたくない。どの制御を選ぶ？",
    "choices": [
      "行レベルのセキュリティ",
      "列レベルのセキュリティ",
      "データマスキングのみ"
    ],
    "answers": [
      0
    ],
    "explanation": "地域ごとに絞る対象は行です。列制御は項目の参照を制限し、マスキングは値の表示を隠します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  },
  {
    "id": "MID-7",
    "origin": "mid15",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ5 · 最小権限",
    "difficulty": "Medium",
    "type": "single",
    "question": "担当者は共有されたレポートの閲覧だけが必要。編集できるワークスペースロールの付与も検討中。最初に考えるべき方針は？",
    "choices": [
      "必要な閲覧アクセスだけを付与する",
      "編集が不要でもContributorを付与する",
      "アクセスできるよう全員をAdminにする"
    ],
    "answers": [
      0
    ],
    "explanation": "必要な操作は閲覧だけです。不要な編集・管理権限を付けず、対象アイテムの閲覧に必要なアクセスを確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  },
  {
    "id": "MID-8",
    "origin": "mid15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ5 · 障害の切り分け",
    "difficulty": "Medium",
    "type": "single",
    "question": "毎日成功していたコピーが今日だけ失敗し、エラーはソースへのアクセス拒否。最初に見るのは？",
    "choices": [
      "接続の認証情報とソース側のアクセス権",
      "宛先テーブルの行数だけ",
      "後続Notebookの集計式"
    ],
    "answers": [
      0
    ],
    "explanation": "エラーは読み取り側のアクセスを指しています。実行に使った接続とソースの権限から確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"
  },
  {
    "id": "MID-9",
    "origin": "mid15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ5 · Sparkの性能",
    "difficulty": "Medium",
    "type": "single",
    "question": "Sparkの加工時間が急に増えた。原因を絞る前に最初に比較する情報は？",
    "choices": [
      "前回と今回の実行時間・入力データ量・遅いステージ",
      "Notebookのタイトル",
      "出力ファイル名の文字数"
    ],
    "answers": [
      0
    ],
    "explanation": "入力増加と処理自体の遅延を切り分け、時間のかかっているステージを特定してから対策します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-overview"
  },
  {
    "id": "MID-10",
    "origin": "mid15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ5 · リアルタイム処理の確認",
    "difficulty": "Medium",
    "type": "single",
    "question": "ダッシュボードに最新イベントが出ない。まずデータ経路のどこで止まったかを切り分けるには？",
    "choices": [
      "Eventstreamの入力と出力を確認し、宛先テーブルの最新時刻も調べる",
      "ダッシュボードの色を変える",
      "古いイベントをすべて削除する"
    ],
    "answers": [
      0
    ],
    "explanation": "入力、処理、書き込みの順に確認すると、イベントが到達した地点と問題の範囲を絞れます。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  {
    "id": "MID-11",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ6 · SQLの集計",
    "difficulty": "Medium",
    "type": "code",
    "question": "売上行が3件あり、地域と金額が「東10、西20、東30」です。下のSQLが返す値は？",
    "choices": [
      "東40、西20",
      "東10、東30、西20",
      "東60、西60"
    ],
    "answers": [
      0
    ],
    "explanation": "GROUP BYで地域ごとにまとめ、SUMで各グループ内の金額を合計します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/tsql-surface-area",
    "code": "SELECT region, SUM(amount) AS total\nFROM Sales\nGROUP BY region;"
  },
  {
    "id": "MID-12",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ6 · PySparkの絞り込み",
    "difficulty": "Medium",
    "type": "code",
    "question": "amountが90、100、120の3行。下のPySparkで残るのは？",
    "choices": [
      "100と120",
      "120だけ",
      "90と100"
    ],
    "answers": [
      0
    ],
    "explanation": ">=は100を含みます。filterは条件を満たす行だけを残します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-compute",
    "code": "df.filter(df.amount >= 100)"
  },
  {
    "id": "MID-13",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ6 · PySparkの列選択",
    "difficulty": "Medium",
    "type": "code",
    "question": "下のPySparkを実行すると、行と列はどう変わる？",
    "choices": [
      "条件で行が絞られ、出力列はregionだけになる",
      "すべての行が残り、列だけ減る",
      "地域別に行数を集計する"
    ],
    "answers": [
      0
    ],
    "explanation": "filterは行を絞り、selectは出力列を選びます。グループ集計はしていません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-compute",
    "code": "df.filter(df.amount >= 100).select(\"region\")"
  },
  {
    "id": "MID-14",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ6 · KQLの件数集計",
    "difficulty": "Medium",
    "type": "code",
    "question": "DeviceIdがA、B、Aの3件。下のKQLの結果は？",
    "choices": [
      "Aが2件、Bが1件",
      "A、B、Aが1行ずつ",
      "全体の件数3を1行だけ返す"
    ],
    "answers": [
      0
    ],
    "explanation": "summarizeのbyでデバイス別にグループを分け、count()で各グループの件数を数えます。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set",
    "code": "Events\n| summarize Count = count() by DeviceId"
  },
  {
    "id": "MID-15",
    "origin": "mid15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ6 · KQLの絞り込みと集計",
    "difficulty": "Medium",
    "type": "code",
    "question": "Aの温度が70、90、Bが85。下のKQLの結果は？",
    "choices": [
      "Aが1件、Bが1件",
      "Aが2件、Bが1件",
      "Aが1件だけ"
    ],
    "answers": [
      0
    ],
    "explanation": "whereが先に実行され、70は除外されます。残った90と85をDeviceId別に数えます。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set",
    "code": "Events\n| where Temperature >= 80\n| summarize Count = count() by DeviceId"
  }
];

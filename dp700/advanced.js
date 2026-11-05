window.DP700_ADVANCED=[
  {
    "id": "ADV-1",
    "origin": "adv15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ7 · 増分と再実行",
    "difficulty": "Hard",
    "type": "single",
    "question": "同じ変更バッチが再送される。宛先には顧客ごとに最新の1行だけ残し、古い再送で上書きさせたくない。どうする？",
    "choices": [
      "顧客IDで照合し、受信版が新しい場合だけ更新する",
      "毎回追記して、更新時刻だけ記録する",
      "顧客IDで照合し、到着順で常に上書きする"
    ],
    "answers": [
      0
    ],
    "explanation": "キーで重複挿入を防ぎ、版の比較で古い再送による巻き戻りも防ぎます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/tsql-surface-area"
  },
  {
    "id": "ADV-2",
    "origin": "adv15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ7 · コピーと参照",
    "difficulty": "Hard",
    "type": "single",
    "question": "他チームのデータを参照したい。更新を参照先に反映し、追加コピーを作らないことが要件。対応する保存先同士で何を使う？",
    "choices": [
      "OneLake Shortcut",
      "毎晩の全件コピー",
      "一度だけのスナップショット"
    ],
    "answers": [
      0
    ],
    "explanation": "Shortcutは元データへの参照です。コピーとスナップショットは別の保存物を作ります。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  },
  {
    "id": "ADV-3",
    "origin": "adv15",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ7 · 役割分担",
    "difficulty": "Hard",
    "type": "single",
    "question": "開発者はNotebookを編集するが、利用者は集計結果の閲覧だけを行う。権限をどう分ける？",
    "choices": [
      "開発と閲覧に必要な権限を別々に付与する",
      "全員をContributorにする",
      "閲覧者も開発者のアカウントを共有する"
    ],
    "answers": [
      0
    ],
    "explanation": "編集者と閲覧者で必要な操作が異なります。別々に付与すれば、閲覧者への過剰な編集権限を避けられます。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  },
  {
    "id": "ADV-4",
    "origin": "adv15",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ7 · 行と列の保護",
    "difficulty": "Hard",
    "type": "single",
    "question": "担当外の地域の行に加え、担当内の行でも原価列を参照できないようにしたい。どの組み合わせが要件に合う？",
    "choices": [
      "行レベルのセキュリティと列レベルのアクセス制御",
      "行レベルのセキュリティだけ",
      "データマスキングだけ"
    ],
    "answers": [
      0
    ],
    "explanation": "地域の条件は行、原価の参照制限は列に適用します。行制御だけでは担当内の原価列は隠れません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  },
  {
    "id": "ADV-5",
    "origin": "adv15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ7 · 処理方式の選択",
    "difficulty": "Hard",
    "type": "single",
    "question": "センサー値を連続で受け取り、数秒単位で絞り込んだ結果をKQLで分析したい。どの構成が合う？",
    "choices": [
      "EventstreamからEventhouseに配信する",
      "夜間の全件コピーでWarehouseに保存する",
      "Notebookの手動実行だけでイベントを読む"
    ],
    "answers": [
      0
    ],
    "explanation": "継続的な取り込み・配信をEventstreamに任せ、Eventhouse内のKQLデータベースで分析します。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  {
    "id": "ADV-6",
    "origin": "adv15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ8 · 障害の境界",
    "difficulty": "Hard",
    "type": "single",
    "question": "コピーは成功。Notebookの実行ログには入力パスが見つからないとある。最初に突き合わせる情報は？",
    "choices": [
      "コピーの実際の出力先とNotebookに渡された入力パス",
      "コピーの並列数と監視画面の表示件数",
      "Notebookの集計式とWarehouseの利用者数"
    ],
    "answers": [
      0
    ],
    "explanation": "成功したコピーがどこに書いたかと、失敗した処理がどこを読んだかを照合すると、受け渡しの不整合を調べられます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"
  },
  {
    "id": "ADV-7",
    "origin": "adv15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ8 · Sparkの偏り",
    "difficulty": "Hard",
    "type": "single",
    "question": "同じ結合ステージで大半のタスクは早く終わるが、数個だけ処理データ量が大きく長時間残る。まず何を疑う？",
    "choices": [
      "結合キーのデータ偏り",
      "すべてのタスクで同程度にCPUが不足",
      "コピー元の認証期限切れ"
    ],
    "answers": [
      0
    ],
    "explanation": "一部タスクに入力が集中しているなら、特定キーへの偏りが手掛かりです。キーの分布とタスク指標で確かめます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-overview"
  },
  {
    "id": "ADV-8",
    "origin": "adv15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ8 · 小さなファイル",
    "difficulty": "Hard",
    "type": "single",
    "question": "Deltaテーブルに小さなファイルが多数でき、読み取りが遅い。現在の行を保ったままファイルをまとめたい。何を選ぶ？",
    "choices": [
      "OPTIMIZEによるコンパクション",
      "VACUUMだけを実行する",
      "元テーブルを削除する"
    ],
    "answers": [
      0
    ],
    "explanation": "コンパクションは有効なデータをより大きなファイルにまとめます。VACUUMは保持条件を満たした未参照ファイルの除去です。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/delta-optimization-and-v-order"
  },
  {
    "id": "ADV-9",
    "origin": "adv15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ8 · 遅延の切り分け",
    "difficulty": "Hard",
    "type": "single",
    "question": "宛先のKQLテーブルを直接照会すると最新イベントがあるが、ダッシュボードには出ない。次に確認するのは？",
    "choices": [
      "ダッシュボードの時間範囲・フィルター・更新条件",
      "入力イベントをすべて再送する",
      "宛先テーブルを作り直す"
    ],
    "answers": [
      0
    ],
    "explanation": "宛先までの到達は確認済みです。表示側がどの期間・条件でデータを読んでいるかを切り分けます。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/dashboard-real-time-create"
  },
  {
    "id": "ADV-10",
    "origin": "adv15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ8 · 再開地点",
    "difficulty": "Hard",
    "type": "single",
    "question": "ストリーミング処理の再起動後に、処理済みオフセットや状態を引き継ぎたい。何を維持する？",
    "choices": [
      "対応するクエリのチェックポイント",
      "ダッシュボードのタイトル",
      "結果テーブルの列の並び順"
    ],
    "answers": [
      0
    ],
    "explanation": "チェックポイントは処理の進み具合や状態の復旧に使われます。互換性のある再起動では同じ場所を維持します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview"
  },
  {
    "id": "ADV-11",
    "origin": "adv15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ9 · SQLのJOINとCOUNT",
    "difficulty": "Hard",
    "type": "code",
    "question": "CustomersにはAとB、OrdersにはAの注文が2行だけある。下のSQLが返す件数は？",
    "choices": [
      "Aが2件、Bが0件",
      "Aが2件、Bが1件",
      "Aが2件だけでBは消える"
    ],
    "answers": [
      0
    ],
    "explanation": "LEFT JOINでBも残りますが、注文がないBのo.order_idはNULLです。COUNT(列)はNULLを数えません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/tsql-surface-area",
    "code": "SELECT c.id, COUNT(o.order_id) AS orders\nFROM Customers c LEFT JOIN Orders o ON c.id=o.customer_id\nGROUP BY c.id;"
  },
  {
    "id": "ADV-12",
    "origin": "adv15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ9 · SQLの最新行",
    "difficulty": "Hard",
    "type": "code",
    "question": "Aに更新時刻9:00と10:00、Bに9:30の行がある。下のSQLで残るのは？",
    "choices": [
      "Aの10:00とBの9:30",
      "Aの10:00だけ",
      "Aの9:00とBの9:30"
    ],
    "answers": [
      0
    ],
    "explanation": "PARTITION BYで顧客ごとに順位を付け、DESCで新しい順に並べ、rn=1で各顧客の先頭を取ります。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/tsql-surface-area",
    "code": "WITH ranked AS (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY updated_at DESC) AS rn\n  FROM Changes\n)\nSELECT * FROM ranked WHERE rn=1;"
  },
  {
    "id": "ADV-13",
    "origin": "adv15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ9 · PySparkのフィルター",
    "difficulty": "Hard",
    "type": "code",
    "question": "東の金額が60と70、西が150。下のPySparkで得られる集計は？",
    "choices": [
      "西が150だけ",
      "東が130、西が150",
      "東が70、西が150"
    ],
    "answers": [
      0
    ],
    "explanation": "filterは各明細を先に絞ります。東の2行はそれぞれ100未満なので、集計の前に除外されます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-compute",
    "code": "df.filter(df.amount >= 100).groupBy('region').sum('amount')"
  },
  {
    "id": "ADV-14",
    "origin": "adv15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ9 · KQLの条件付き集計",
    "difficulty": "Hard",
    "type": "code",
    "question": "Aに温度70と90、Bに70がある。下のKQLの結果は？",
    "choices": [
      "Aが1件、Bが0件",
      "Aが1件だけ",
      "Aが2件、Bが1件"
    ],
    "answers": [
      0
    ],
    "explanation": "countifはグループ内で条件を満たす件数を数えます。入力にBがあるため、Bのグループは0件として残ります。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set",
    "code": "Events\n| summarize Hot=countif(Temperature >= 80) by DeviceId"
  },
  {
    "id": "ADV-15",
    "origin": "adv15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ9 · KQLの時間窓",
    "difficulty": "Hard",
    "type": "code",
    "question": "Aのイベント時刻が10:01、10:04、10:05（UTC）。下のKQLで、10:00と10:05のグループはそれぞれ何件？",
    "choices": [
      "10:00が2件、10:05が1件",
      "10:00が3件、10:05が0件",
      "10:00が1件、10:05が2件"
    ],
    "answers": [
      0
    ],
    "explanation": "binは時刻を5分の境界に切り下げます。10:05ちょうどは次のグループに入ります。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set",
    "code": "Events\n| summarize N=count() by DeviceId, bin(EventTime, 5m)"
  }
];

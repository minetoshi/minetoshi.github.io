window.DP700_BASICS=[
  {
    "id": "BASIC-1",
    "origin": "basic15",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ1 · OneLake",
    "difficulty": "Easy",
    "type": "single",
    "question": "Fabric内の複数の処理からデータを共有するための、組織全体の論理データレイクは？",
    "choices": [
      "OneLake",
      "Eventstream",
      "Notebook"
    ],
    "answers": [
      0
    ],
    "explanation": "OneLakeは共通のデータ格納層です。Eventstreamはイベント処理、Notebookはコードを実行する作業場所です。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-overview"
  },
  {
    "id": "BASIC-2",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ1 · Lakehouse",
    "difficulty": "Easy",
    "type": "single",
    "question": "CSVなどのファイルとDeltaテーブルを扱い、Sparkで加工したい。最初に選ぶ保存先は？",
    "choices": [
      "Lakehouse",
      "Pipeline",
      "Eventstream"
    ],
    "answers": [
      0
    ],
    "explanation": "Lakehouseはファイルとテーブルを扱う保存先です。Pipelineは処理をつなぎ、Eventstreamは流れてくるイベントを扱います。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-overview"
  },
  {
    "id": "BASIC-3",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ1 · Warehouse",
    "difficulty": "Easy",
    "type": "single",
    "question": "SQL中心で分析用のテーブルを管理・加工したい。どれが候補？",
    "choices": [
      "Warehouse",
      "Monitoring hub",
      "Notebook"
    ],
    "answers": [
      0
    ],
    "explanation": "WarehouseはT-SQL中心の分析用ストアです。Monitoring hubは監視、Notebookはコード実行に使います。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/data-warehousing"
  },
  {
    "id": "BASIC-4",
    "origin": "basic15",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ1 · Pipeline",
    "difficulty": "Easy",
    "type": "single",
    "question": "コピーが終わってから集計を開始するように、処理の順番を組みたい。どれを使う？",
    "choices": [
      "Pipeline",
      "OneLake",
      "Warehouse"
    ],
    "answers": [
      0
    ],
    "explanation": "Pipelineは処理の実行順や依存関係を管理します。OneLakeとWarehouseはデータを扱う保存先です。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-overview"
  },
  {
    "id": "BASIC-5",
    "origin": "basic15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ1 · Monitoring hub",
    "difficulty": "Easy",
    "type": "single",
    "question": "昨日のデータ処理が成功したかを一覧から調べたい。最初に見る場所は？",
    "choices": [
      "Monitoring hub",
      "OneLakeのファイル一覧",
      "Gitのブランチ一覧"
    ],
    "answers": [
      0
    ],
    "explanation": "Monitoring hubで実行状態を確認します。ファイル一覧は保存物、Gitは変更履歴を確認する場所です。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/monitoring-hub"
  },
  {
    "id": "BASIC-6",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ2 · Notebook",
    "difficulty": "Easy",
    "type": "single",
    "question": "前のステップでPipelineは処理をつなぐと学びました。PySparkの加工コードを書く場所は？",
    "choices": [
      "Notebook",
      "Monitoring hub",
      "Gitのブランチ一覧"
    ],
    "answers": [
      0
    ],
    "explanation": "NotebookでPySparkを実行し、必要ならPipelineからそのNotebookを呼び出します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/how-to-use-notebook"
  },
  {
    "id": "BASIC-7",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ2 · Dataflow Gen2",
    "difficulty": "Easy",
    "type": "single",
    "question": "Power Queryの画面操作で列を削除し、データ型を変換したい。どれが向いている？",
    "choices": [
      "Dataflow Gen2",
      "Eventhouse",
      "Monitoring hub"
    ],
    "answers": [
      0
    ],
    "explanation": "Dataflow Gen2はPower Queryで取り込み・変換を組み立てます。Eventhouseはイベントの保存・分析、Monitoring hubは実行監視に使います。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-overview"
  },
  {
    "id": "BASIC-8",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ2 · 増分取り込み",
    "difficulty": "Easy",
    "type": "single",
    "question": "初回に全件を取り込んだ。翌日から追加・更新された分だけ取り込む方法は？",
    "choices": [
      "増分取り込み",
      "毎回の全件取り込み",
      "実行履歴の確認"
    ],
    "answers": [
      0
    ],
    "explanation": "増分取り込みでは前回以降の変更を処理します。更新時刻など、変更を判定できる情報が必要です。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse"
  },
  {
    "id": "BASIC-9",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ2 · Eventstream",
    "difficulty": "Easy",
    "type": "single",
    "question": "機器から途切れず届くイベントを受け取り、条件に合うデータだけ次へ送りたい。どれが候補？",
    "choices": [
      "Eventstream",
      "夜間にだけ動くバッチ",
      "Gitのブランチ"
    ],
    "answers": [
      0
    ],
    "explanation": "Eventstreamは継続して届くイベントの取り込みやフィルター、宛先への配信に使います。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  {
    "id": "BASIC-10",
    "origin": "basic15",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ2 · Shortcut",
    "difficulty": "Easy",
    "type": "single",
    "question": "別の場所にある対応データを、同じデータをコピーせずLakehouseから参照したい。どれを使う？",
    "choices": [
      "OneLake Shortcut",
      "全件コピー",
      "Warehouseのテーブル削除"
    ],
    "answers": [
      0
    ],
    "explanation": "Shortcutは参照元を指すリンクです。コピーを作る方法とは異なり、参照には必要なアクセス権が関係します。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  },
  {
    "id": "BASIC-11",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ3 · バッチの組み立て",
    "difficulty": "Easy",
    "type": "single",
    "question": "毎晩、売上CSVを取り込み、PySparkで加工してLakehouseに保存する。自然な組み合わせは？",
    "choices": [
      "Pipelineで取り込みとNotebookを順に実行",
      "Notebookで加工してから元のCSVを取り込む",
      "Monitoring hubだけで加工する"
    ],
    "answers": [
      0
    ],
    "explanation": "入力が先、加工が後です。Pipelineで順序を制御し、Notebookに加工を任せます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-overview"
  },
  {
    "id": "BASIC-12",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ3 · SQLとSparkの使い分け",
    "difficulty": "Easy",
    "type": "single",
    "question": "担当者はSQLに慣れていて、集計済み売上をSQLで管理したい。生ファイルをSparkで加工する要件はない。候補は？",
    "choices": [
      "Warehouse",
      "Eventstream",
      "Git"
    ],
    "answers": [
      0
    ],
    "explanation": "SQL中心の分析テーブル管理にはWarehouseが候補です。Eventstreamは連続イベントの処理、Gitは変更管理に使います。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/data-warehousing"
  },
  {
    "id": "BASIC-13",
    "origin": "basic15",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ3 · 失敗の切り分け",
    "difficulty": "Easy",
    "type": "single",
    "question": "コピーが失敗して、後続の集計が実行されなかった。原因を追う最初の一手は？",
    "choices": [
      "失敗したコピー処理の実行詳細とエラーを確認",
      "集計SQLを先に書き換える",
      "Gitのブランチを先に削除する"
    ],
    "answers": [
      0
    ],
    "explanation": "実際に失敗した処理から調べます。先にコピーの接続、権限、入力パスなどをエラーに沿って確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"
  },
  {
    "id": "BASIC-14",
    "origin": "basic15",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ3 · 行レベルのアクセス制御",
    "difficulty": "Easy",
    "type": "single",
    "question": "同じ売上テーブルでも、営業担当には自分の地域の行だけ見せたい。何を検討する？",
    "choices": [
      "行レベルのセキュリティ（RLS）",
      "列の表示順を変更する",
      "処理の実行時刻を変える"
    ],
    "answers": [
      0
    ],
    "explanation": "RLSは利用者などの条件に応じて表示する行を絞ります。列の順やスケジュールは行へのアクセスを制御しません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  },
  {
    "id": "BASIC-15",
    "origin": "basic15",
    "domain": "データの取り込みと変換",
    "skill": "ステップ3 · リアルタイム分析",
    "difficulty": "Easy",
    "type": "single",
    "question": "センサーイベントを受け取り、KQLで時系列を分析したい。どの組み合わせが自然？",
    "choices": [
      "Eventstreamで受け取り、Eventhouseで分析する",
      "Warehouseの表をGitに保存して分析する",
      "Monitoring hubでセンサー値を集計する"
    ],
    "answers": [
      0
    ],
    "explanation": "Eventstreamでイベントを取り込み、Eventhouse内のKQLデータベースに送り、KQLで問い合わせます。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/eventhouse"
  }
];

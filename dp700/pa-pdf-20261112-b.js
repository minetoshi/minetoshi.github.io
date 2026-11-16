// 学習用再構成。公式PA個別正答キーではありません。
window.DP700_PA_PDF_20261112=(window.DP700_PA_PDF_20261112||[]).concat([
  {
    "id": "PA-PDF-20261112-26",
    "objectiveId": "PDF-PA-20261112",
    "domain": "分析ソリューションの実装と管理",
    "group": "11月12日PDF検証版",
    "skill": "Data Meshの管理対象・設定・責任者",
    "difficulty": "Medium",
    "type": "multi",
    "question": "Fabricで業務部門ごとのDomainを使用します。部門のWorkspaceを分類し、委任可能なガバナンス設定を部門側へ移し、その設定を管理する責任者を置く必要があります。この構成に必要な操作を3つ選んでください。",
    "choices": [
      "ドメイン固有の機密ラベルを割り当てる。",
      "WorkspaceをDomainへ割り当てる。",
      "テナント設定をDomainへ委任する。",
      "ドメインレベルの機密ラベルを有効にする。",
      "RLSを実装する。",
      "Domain administratorsを指定する。"
    ],
    "answers": [
      1,
      2,
      5
    ],
    "selectCount": 3,
    "explanation": "独立管理には、何を管理するか（WorkspaceのDomain所属）、どの設定を任せるか（テナント設定の委任）、誰が管理するか（Domain admin）の3つが必要です。Sensitivity labelやRLSはデータ保護ですが、組織管理の委任そのものではありません。\n試験での見抜き方：「管理対象」「管理権限」「管理責任者」→ Workspace割当／設定委任／Domain admin。",
    "source": "https://learn.microsoft.com/en-us/fabric/admin/delegate-settings",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 54,
    "pdfAnswer": "B・C・F",
    "answerEvidence": "expected",
    "instruction": "選択肢から3つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-27",
    "objectiveId": "PDF-PA-20261112",
    "domain": "分析ソリューションの実装と管理",
    "group": "11月12日PDF検証版",
    "skill": "DB接続なしでSDK-style SQLプロジェクトを検証",
    "difficulty": "Medium",
    "type": "single",
    "question": "Fabric SQL Database用SDK-style SQL Database Projectで、Viewが参照する列名を変更しました。CIでプロジェクトを検証し、後でデプロイする成果物を生成します。このステップはDBへ接続してはいけません。どのコマンドを使いますか？",
    "choices": [
      "dotnet build",
      "SqlPackage /Action:DeployReport",
      "SqlPackage /Action:Publish",
      "SqlPackage /Action:Script"
    ],
    "answers": [
      0
    ],
    "selectCount": 1,
    "explanation": "必要なのはソースだけから検証しDACPACを作る「ビルド」。PublishはDBへ変更を反映し、DeployReportやScriptは一般にデプロイ先との差分を扱います。なおビルドで全てのランタイム不整合を検出できるわけではありません。\n試験での見抜き方：「CI」「DBに接続禁止」「成果物を作成」→ dotnet build。",
    "source": "https://learn.microsoft.com/en-us/sql/tools/visual-studio-code-extensions/sql-database-projects/build-database-project-from-command-line?view=sql-server-ver17",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 56,
    "pdfAnswer": "A",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-28",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "Copy Data Activityの主目的",
    "difficulty": "Medium",
    "type": "single",
    "question": "Lakehouseを含むWorkspaceでPipelineを作成し、Copy Data Activityを追加しました。このActivityの目的は何ですか？",
    "choices": [
      "取り込んだデータへデータ変換を適用する。",
      "データをSourceからDestinationへコピーする。",
      "Apache Spark Notebookを実行する。",
      "SQLコードを実行する。"
    ],
    "answers": [
      1
    ],
    "selectCount": 1,
    "explanation": "Copy Dataの主役はデータ移送です。列マッピング等の一部変換は可能ですが、複雑な加工はDataflow・Notebookが担当し、SQL実行はScript Activityなど別の役割です。\n試験での見抜き方：Copy Data＝運ぶ／Notebook＝コードで加工／Pipeline＝処理を制御。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/copy-data-activity",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 58,
    "pdfAnswer": "B",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-29",
    "objectiveId": "PDF-PA-20261112",
    "domain": "分析ソリューションの実装と管理",
    "group": "11月12日PDF検証版",
    "skill": "Warehouseの既存スキーマをSDK-style Projectへ",
    "difficulty": "Medium",
    "type": "single",
    "question": "Warehouse DB1にスキーマ変更をデプロイするため、Database Projectを用意します。どの方法でプロジェクトを構成すべきですか？",
    "choices": [
      "新しいDatabase Projectを作るだけ。",
      "新しいDatabase Projectを作り、DB1からDACをエクスポートしてインポートする。",
      "新しいSDK-style Projectを作り、DB1のスキーマをプロジェクトへインポートする。",
      "新しいSDK-style Projectを作り、DB1からDACをエクスポートしてインポートする。"
    ],
    "answers": [
      2
    ],
    "selectCount": 1,
    "explanation": "既存DBの構造をソース管理するにはSDK-styleプロジェクトへ既存のスキーマを取り込みます。単に空プロジェクトを作るだけでは現在のDB定義がありません。DACを経由する案は余分な手順となる可能性があります。\n試験での見抜き方：「既存DB」「SDK-style」「スキーマを管理」→ 既存スキーマを直接インポート。\n資料の注意点：注意：原文のDACエクスポートとDACPACスキーマ抽出は厳密に同一ではありません。用語を混同しないこと。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/develop-warehouse-project",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 60,
    "pdfAnswer": "C（想定）",
    "auditDate": "2026-11-16",
    "auditNote": "Microsoft Learnの仕様と再監査結果を照合済み。Microsoft公式Practice Assessmentの個別解答キーではない。",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-30",
    "objectiveId": "PDF-PA-20261112",
    "domain": "分析ソリューションの実装と管理",
    "group": "11月12日PDF検証版",
    "skill": "Deployment Pipelineの設定変更権限",
    "difficulty": "Medium",
    "type": "single",
    "question": "Development・Test・Productionの各ステージを持つFabric Deployment Pipelineで、Pipeline設定を編集できるユーザーを権限者だけに限定します。どの方法を使いますか？",
    "choices": [
      "Pipeline admin rolesを割り当てる。",
      "Workspace permissionsを設定する。",
      "EnvironmentアイテムのItem permissionsを設定する。",
      "RBACを実装する。"
    ],
    "answers": [
      0
    ],
    "selectCount": 1,
    "explanation": "問題はWorkspaceやEnvironmentアイテムではなくDeployment Pipeline自体の設定編集権限です。対象となるPipelineの管理権限を限定する方向が最も具体的です。ただしRBACとPipeline adminは概念上関連し、設問の製品固有ロール名を公式資料で確認する必要があります。\n試験での見抜き方：「設定を誰が編集できるか」→ 編集対象そのものに対応する権限。\n資料の注意点：注意：AとDの関係および実際のロール名称は公式仕様に照らして要検証。",
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/understand-the-deployment-process",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 62,
    "pdfAnswer": "Aを想定（公式解未確認）",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-31",
    "objectiveId": "PDF-PA-20261112",
    "domain": "分析ソリューションの実装と管理",
    "group": "11月12日PDF検証版",
    "skill": "Gitの過去の正常コミットへ復元",
    "difficulty": "Medium",
    "type": "single",
    "question": "Azure DevOps Gitに接続されたSales-Dev WorkspaceにNotebookとLakehouseがあります。最近のNotebook変更でオーケストレーションが壊れました。正常だった過去のコミットがGitにあります。Workspaceのアイテムを以前のコミット版へ戻すにはどうしますか？",
    "choices": [
      "NotebookでUndoし、変更をGitへコミットする。",
      "Deployment PipelineでDevelopmentからTestへ再デプロイする。",
      "Git内のアイテムフォルダーをコピーしlogicalIdと表示名を変更して同期する。",
      "Gitでrevertまたはresetして以前の状態へ戻し、Workspaceをソース管理から同期する。"
    ],
    "answers": [
      3
    ],
    "selectCount": 1,
    "explanation": "「過去の正常版がGitにある」ので、Git側で必要な状態を復元したあとWorkspaceへ同期します。Deployment Pipelineは環境間デプロイで、履歴上の任意版への復元の主役ではありません。\n試験での見抜き方：「過去の正常Commit」「Git連携」→ Gitで復元してWorkspace同期。\n資料の注意点：注意：共有ブランチでは履歴を書き換えるresetよりrevertが安全なことが多い。",
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/git-integration-process",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 64,
    "pdfAnswer": "D",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-32",
    "objectiveId": "PDF-PA-20261112",
    "domain": "分析ソリューションの実装と管理",
    "group": "11月12日PDF検証版",
    "skill": "Notebookの任意の過去版へ戻す仕組み",
    "difficulty": "Medium",
    "type": "single",
    "question": "Workspace1にNotebook1があります。Notebook1のバージョン管理を導入し、過去の任意の保存済み状態へ戻せるようにするには何を行いますか？",
    "choices": [
      "Notebook1をAzure Data Factory Pipelineに追加する。",
      "Workspace1をGitリポジトリに接続する。",
      "Deployment Pipelineを作成する。",
      "Workspaceでブランチを作成し切り替える。"
    ],
    "answers": [
      1
    ],
    "selectCount": 1,
    "explanation": "Notebookの履歴をコミット単位で残すにはGit連携が必要です。Branchだけ作っても変更をコミットしなければ履歴は残りません。Deployment Pipelineは環境間の展開を目的とします。\n試験での見抜き方：「Version control」「Revert to previous state」→ Git integration。\n資料の注意点：注意：コミットされていない全ての編集状態を復元できることまでは保証されません。",
    "source": "https://learn.microsoft.com/en-us/fabric/cicd/git-integration/git-integration-process",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 66,
    "pdfAnswer": "B",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-33",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "対話的・共同開発のCSV取り込み",
    "difficulty": "Medium",
    "type": "single",
    "question": "Lakehouse1のあるFabric Workspaceで、Azure Data Lake Storage Gen2のCSVを取り込みます。ソリューションには、対話的な実行と共同作業への対応が必要です。どのアイテムを作成しますか？",
    "choices": [
      "Data Pipeline",
      "Dataflow",
      "Notebook",
      "Apache Spark Job Definition"
    ],
    "answers": [
      2
    ],
    "selectCount": 1,
    "explanation": "CSV取り込み自体はDataflowやPipelineでも可能ですが、「対話的・共同開発」の条件でNotebookが適します。セル単位に読み込み・変換・検証し、そのコードを共同で管理できます。\n試験での見抜き方：「interactive」「collaboration」→ Notebook。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 68,
    "pdfAnswer": "C",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-34",
    "objectiveId": "PDF-PA-20261112",
    "domain": "分析ソリューションの実装と管理",
    "group": "11月12日PDF検証版",
    "skill": "ファイル作成をトリガーにPipelineを起動",
    "difficulty": "Medium",
    "type": "single",
    "question": "Fabric Data FactoryのIngestSales PipelineはAzure Blob Storageのlandingコンテナー配下/sales/daily/へCSVが作成されたときに動かしたいと考えています。到着したファイル名も処理に使います。自動起動の設定は何ですか？",
    "choices": [
      "ファイル到着ごとに手動オンデマンド起動する。",
      "スケジュールPipelineの失敗通知を設定する。",
      "Pipelineに実行頻度・タイムゾーンを設定したスケジュールを作る。",
      "ファイル作成イベントを監視し、/sales/daily/で絞るStorage Event Triggerを作る。"
    ],
    "answers": [
      3
    ],
    "selectCount": 1,
    "explanation": "条件は「毎日一定時刻」ではなく「ファイルが作成された瞬間」です。ファイル作成イベントとパスフィルターで起動対象を限定し、必要に応じてイベントのファイル名をパラメーターへ渡します。\n試験での見抜き方：「When a CSV file is created」「automatically」→ Storage Event Trigger。",
    "source": "https://learn.microsoft.com/ja-jp/fabric/data-factory/pipeline-runs",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 70,
    "pdfAnswer": "D",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-35",
    "objectiveId": "PDF-PA-20261112",
    "domain": "分析ソリューションの実装と管理",
    "group": "11月12日PDF検証版",
    "skill": "PipelineのRunDateでNotebook既定値を上書き",
    "difficulty": "Medium",
    "type": "group",
    "question": "Fabric Pipelineは文字列パラメーターRunDateを持ち、TransformOrdersというNotebook Activityがあります。 Notebookはprocess_dateの既定値で行を絞ります。Pipeline実行ごとにRunDateでprocess_dateを上書きするため、セル設定とBase parameter値を選びます。",
    "choices": [
      "Cell configuration｜Frozen cell",
      "Cell configuration｜Locked cell",
      "Cell configuration｜Markdown cell",
      "Cell configuration｜Parameters cell",
      "Base parameter value｜@activity('TransformOrders').output.RunDate",
      "Base parameter value｜@pipeline().parameters.process_date",
      "Base parameter value｜@pipeline().parameters.RunDate",
      "Base parameter value｜@variables('RunDate')"
    ],
    "answers": [
      3,
      6
    ],
    "selectCount": 2,
    "explanation": "値を受け取る側ではprocess_dateをParameters cellに置き、渡す側ではPipelineのRunDateを式で参照します。 process_dateはNotebook側の名前であり、Pipelineのパラメーター名ではありません。\n試験での見抜き方：「既定値を上書き」→ Parameters cell／「PipelineのRunDate」→ @pipeline().parameters.RunDate。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 72,
    "pdfAnswer": "① Parameters cell ／ ② @pipeline().parameters.RunDate",
    "answerEvidence": "expected",
    "instruction": "各グループから1つずつ選んでください。",
    "groups": [
      {
        "label": "process_dateを宣言するセルの設定",
        "indices": [
          0,
          1,
          2,
          3
        ],
        "answer": 3
      },
      {
        "label": "process_dateへ渡すBase parameterの値",
        "indices": [
          4,
          5,
          6,
          7
        ],
        "answer": 6
      }
    ]
  },
  {
    "id": "PA-PDF-20261112-36",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "KQL Database取り込み後に変換して生データを維持",
    "difficulty": "Medium",
    "type": "single",
    "question": "Azure Event Hubsから大量のIoTテレメトリーを受信し、Fabric EventhouseのKQL Databaseへ取り込みます。監査のため生イベントは無変更で残し、分析用には正規化した列と派生列が必要です。KQL Databaseに到着した後で変換し、 Rawデータも保持するには何を使いますか？",
    "choices": [
      "EventstreamのDerived Streamだけを出力先とする。",
      "Eventstream内で変換し、変換後だけKQL Databaseへ転送する。",
      "Event HubsからRawテーブルへ取り込み、KQL Update Policyで変換済みテーブルへ反映する。",
      "Lakehouseへ取り込み、Spark Structured StreamingでKQL Databaseへ書き込む。"
    ],
    "answers": [
      2
    ],
    "selectCount": 1,
    "explanation": "条件は「Rawを残す」と「KQL Databaseに着地した後に変換する」の2つです。Rawテーブルへの取り込みにUpdate Policy を連動させて分析テーブルを生成します。Eventstream内の加工だけを保存するとRaw保持の条件に反します。\n試験での見抜き方：「after it lands in KQL DB」「keep raw data」→ Update Policy。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/table-update-policy",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 74,
    "pdfAnswer": "C",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-37",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "KQL Databaseへの取り込み時変換",
    "difficulty": "Medium",
    "type": "single",
    "question": "Fabric EventhouseのKQL Database DB1に複数ソースから取り込みます。データ取り込み時に変換を行い、開発工数を最小限にするにはどのツールを使いますか？",
    "choices": [
      "Dataflows",
      "KQL",
      "Notebooks",
      "T-SQL"
    ],
    "answers": [
      1
    ],
    "selectCount": 1,
    "explanation": "既にKQL Databaseがあり、取り込みに連動した変換を構成したい条件です。KQLを使う変換やUpdate Policyなどの仕組みを使うと、別途Notebookや外部ETLを作らずに済むことがあります。\n試験での見抜き方：「KQL Database」「during ingestion」→ KQLベースの変換。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/table-update-policy",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 76,
    "pdfAnswer": "B",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-38",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "IoTストリームのリアルタイム変換",
    "difficulty": "要検証",
    "type": "single",
    "question": "FabricでIoTデバイスのストリーミングデータを処理しています。分析のため、到着するデータをリアルタイムに変換するには何を使いますか？",
    "choices": [
      "Azure Data Factory（処理オーケストレーション）",
      "Azure Event Hubs（リアルタイム取り込み）",
      "Azure Stream Analytics（リアルタイム処理）",
      "Spark Structured Streaming with Delta tables"
    ],
    "answers": [
      3
    ],
    "selectCount": 1,
    "explanation": "Event Hubsは受信、Data Factoryは実行制御が中心です。Spark Structured StreamingとDeltaはFabric内で処理と保存を組み合わせる代表構成ですが、CのAzure Stream Analytics自体もリアルタイム変換が可能です。\n試験での見抜き方：「IoTリアルタイム変換」「Delta保存を想定」→ Spark Structured Streaming＋Delta。\n資料の注意点：重要：設問に「Deltaへ保存すること」は明記されていません。CとDはともに変換でき、完全な一意解には追加条件が必要です。",
    "source": "https://learn.microsoft.com/en-us/azure/stream-analytics/streaming-technologies",
    "reviewStatus": "review",
    "origin": "pa-pdf-20261112",
    "sourcePage": 78,
    "pdfAnswer": "D（FabricのSpark/Delta想定。ただしCも技術的に可）",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-39",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "ストリーミングの無効値除外と計算列",
    "difficulty": "Medium",
    "type": "multi",
    "question": "Fabricで複数ソースから大量のストリーミングデータを処理します。Lakehouseに保存する前に、不正データを除外し、 計算列を追加するための3つの操作は何ですか？",
    "choices": [
      "Spark SQL式で計算列を追加する。",
      "重要列がNULLの行を除外する。",
      "CSVファイルを使ってバッチ処理する。",
      "データ変換をバッチ処理に切り替える。",
      "Spark Structured Streamingでデータストリームを読み取る。"
    ],
    "answers": [
      0,
      1,
      4
    ],
    "selectCount": 3,
    "explanation": "Structured Streamingで継続的に読み取り、重要列がNULLの行をfilterで除き、Spark SQLの式で計算列を追加します。CSVへの退避やバッチだけへの切り替えは、継続的なストリーム処理という条件を満たしません。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 80,
    "pdfAnswer": "A・B・E",
    "answerEvidence": "expected",
    "instruction": "選択肢から3つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-40",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "ML向け大規模Deltaデータの変換",
    "difficulty": "Medium",
    "type": "single",
    "question": "Fabric Lakehouseで、大規模なDelta形式のデータセットを機械学習向けに変換したいと考えています。Fabricツールを使って効率よく処理するには何を使いますか？",
    "choices": [
      "Notebooks",
      "Azure Data Factory",
      "Power BI Dataflows",
      "SQL Server Management Studio"
    ],
    "answers": [
      0
    ],
    "selectCount": 1,
    "explanation": "大量Deltaデータを柔軟に加工して特徴量を作るには、NotebookでSpark/PySparkを使う構成が適しています。Data Factory はオーケストレーション、Power BI DataflowsはPower Queryベースの変換、SSMSはSQL Server系の管理が中心です。\n試験での見抜き方：「large Delta datasets」「machine learning」「transform」→ Notebook／Spark。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/author-execute-notebook",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 82,
    "pdfAnswer": "A",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-41",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "Delta保存前に不要なIoT列を削除",
    "difficulty": "Medium",
    "type": "single",
    "question": "FabricでAzure Event Hubsを通じてIoTデバイスのリアルタイムデータを取り込み、Microsoft Delta Lake形式で保存しています。保存前にsensor IDなど不要な列を削除するため、どの操作を行いますか？",
    "choices": [
      "一時ステージング領域へ置き、最終保存前に列を削除する。",
      "バッチ処理システムを使い転送前にデータをクリーニングする。",
      "取り込み前にSparkジョブで前処理する。",
      "Event processorで不要な列を削除する。"
    ],
    "answers": [
      3
    ],
    "selectCount": 1,
    "explanation": "要件はリアルタイムで到着するイベントから「保存前」に不要列を取り除くことです。ストリームの途中で列を選択・除外すれば、追加のステージング工程やバッチを必要としません。Sparkでも列操作はできますが、選択肢におけるイベント処理がより直接的です。\n試験での見抜き方：「リアルタイム」＋「保存前に列を落とす」→ Event processor。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 84,
    "pdfAnswer": "D",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-42",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "SCD Type 1～4の違い",
    "difficulty": "Medium",
    "type": "single",
    "question": "Fabricで新しいデータウェアハウスを構築します。Dimensionテーブルの値が変更されても過去データを保持したいと考えています。新しい行を作成することで変更履歴を残すSCD（Slowly Changing Dimension）はどのタイプですか？",
    "choices": [
      "SCD Type 1",
      "SCD Type 2",
      "SCD Type 3",
      "SCD Type 4"
    ],
    "answers": [
      1
    ],
    "selectCount": 1,
    "explanation": "Type 2は、部署や住所が変わったとき、新しい行を作り、過去行も残す方式です。通常は有効期間やCurrentフラグ、 Surrogate keyも管理します。Type 4は別の履歴テーブルを使います。\n試験での見抜き方：1＝上書き／2＝行追加／3＝列追加／4＝履歴を別表。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 86,
    "pdfAnswer": "B",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-43",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "KQLでdynamic JSONを展開して5分以内の行を取得",
    "difficulty": "Medium",
    "type": "single",
    "question": "EventhouseのKQL DatabaseにRawTelemetryテーブルがあります。列はTimeGenerated（datetime）、Message（string）、 AdditionalContext（dynamic）です。AdditionalContextにはLevel（int）とDeviceId（string）のJSON値が含まれます。過去5分で DeviceId=\"device1\"の行だけを取得し、TimeGenerated・Message・Level・DeviceIdの4列を返すKQLを選びます。",
    "choices": [
      "RawTelemetry | summarize count() by DeviceId | where TimeGenerated > ago(5m) and DeviceId == \"device1\" | project TimeGenerated, Message, Level, DeviceId",
      "RawTelemetry | where TimeGenerated > ago(5m) | extend Level = toint(AdditionalContext.Level), DeviceId = tostring(AdditionalContext.DeviceId) | where DeviceId == \"device1\" | project TimeGenerated, Message, Level, DeviceId",
      "RawTelemetry | where TimeGenerated > ago(5m) | project TimeGenerated, Message | extend Level = toint(AdditionalContext.Level), DeviceId = tostring(AdditionalContext.DeviceId) | where DeviceId == \"device1\"",
      "RawTelemetry | where TimeGenerated between (ago(5m) .. now()) | extend Level = toint(AdditionalContext.Level), DeviceId = tostring(AdditionalContext.DeviceId) | project TimeGenerated, Message, Level, DeviceId | where DeviceId == \"device1\" | count"
    ],
    "answers": [
      1
    ],
    "selectCount": 1,
    "explanation": "時間で絞った後、extendでdynamic値のLevelとDeviceIdを型変換して列化し、DeviceIdで絞り、projectで4列を返します。先にsummarizeする式は必要な明細列を失います。先にTimeGeneratedとMessageだけをprojectする式はAdditionalContextを失います。最後がcountの式は明細4列ではなく件数を返します。JSONのキーはDeviceIdで、大文字小文字も一致させます。",
    "source": "https://learn.microsoft.com/en-us/kusto/query/scalar-data-types/dynamic?view=microsoft-fabric",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 88,
    "pdfAnswer": "B（クエリ構造として。ただしJSONキーの綴り不一致あり）",
    "auditDate": "2026-11-16",
    "auditNote": "Microsoft Learnの仕様と再監査結果を照合済み。Microsoft公式Practice Assessmentの個別解答キーではない。",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-44",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "Azure SQL DatabaseをOneLakeへ継続複製",
    "difficulty": "Medium",
    "type": "single",
    "question": "Azure SQL Databaseを含む複数のデータをFabricで分析します。Azure SQL Databaseの内容を、分析できる形式で OneLakeへ継続的・ほぼリアルタイムに複製し、複雑なETL Pipelineは作りたくありません。何を使いますか？",
    "choices": [
      "継続的取り込みのDataflowを作成する。",
      "定期取り込みのDataflowを作成する。",
      "Database Mirroringを実装する。",
      "継続的取り込みのPipelineを使用する。"
    ],
    "answers": [
      2
    ],
    "selectCount": 1,
    "explanation": "継続的にDBの変更を取り込み、複雑なETLを自作しない要件にMirroringが合います。Dataflow・Pipelineによる定期取り込みも可能ですが、変更追従の仕組みを自作する負荷が大きくなります。\n試験での見抜き方：「Azure SQL DB」「OneLake」「継続複製」「ETL不要」→ Mirroring。",
    "source": "https://learn.microsoft.com/en-us/fabric/mirroring/azure-sql-database-tutorial",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 90,
    "pdfAnswer": "C",
    "answerEvidence": "expected",
    "instruction": "選択肢から1つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-45",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "増分ロードとデータ品質を両立",
    "difficulty": "要検証",
    "type": "multi",
    "question": "Fabric Lakehouseに複数地域の大量の売上取引を保存しています。データの整合性と一貫性を維持しつつ、増分ロードを支援する方法を2つ選びます。",
    "choices": [
      "Medallion Architectureでデータを整理する。",
      "変換なしでDimensional Modelへ直接ロードする。",
      "Data Factory Pipelineをデータ変換に使う。",
      "Dataflow Gen2で変換とクレンジングを行う。"
    ],
    "answers": [
      0,
      3
    ],
    "selectCount": 2,
    "explanation": "Bronzeに生データ、Silverで品質処理、Goldで分析用に整理する設計は整合性に役立ちます。Dataflow Gen2はデータの変換・クリーニングに使用できます。Data Factory Pipelineは通常、変換を実行制御する役割が中心で、Bの変換省略は品質上の問題になり得ます。\n試験での見抜き方：「品質を保ちながら増分」→ 層を分けて品質管理＋変換・クレンジング。\n資料の注意点：重要：画像にA〜Dの4択が写っていますが、増分ロードの具体的方式（水位管理やCDCなど）が選択肢にありません。A・Dは設問の想定として整理したもので、単独では増分ロードを実装しません。公式の正解画面で要確認です。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflow-gen2-incremental-refresh",
    "reviewStatus": "review",
    "origin": "pa-pdf-20261112",
    "sourcePage": 92,
    "pdfAnswer": "A・Dを想定（原画像は4択まで。公式解未確認）",
    "answerEvidence": "expected",
    "instruction": "選択肢から2つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-46",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "多様な形式＋PySpark/SQLのデータ基盤",
    "difficulty": "要検証",
    "type": "multi",
    "question": "Fabricで構造化・半構造化・非構造化データをさまざまなソースから取り込みます。多様な形式を扱い、データ変換・分析にPySparkとSQLの両方を使える「データストア」を2つ選びます。各選択肢は単独で完全なソリューションとされます。",
    "choices": [
      "Azure Data Lake Storage Gen2",
      "Azure Synapse Analytics",
      "Microsoft Fabric Eventhouse",
      "Microsoft Lakehouse"
    ],
    "answers": [
      1,
      3
    ],
    "selectCount": 2,
    "explanation": "Fabric LakehouseはファイルやDeltaを保存し、SparkとSQL Endpointを利用できます。Azure Synapse Analyticsはストレージ単体ではなくSQLとSparkを含む統合分析サービスです。ADLS Gen2は多様なファイルを保存できますが、それ自体にはSQL/PySpark実行エンジンはありません。EventhouseはKQL中心です。\n試験での見抜き方：「ファイルもDeltaも」「PySpark＋SQL」→ Lakehouse。Synapseは統合分析サービスとして比較。\n資料の注意点：重要：BのAzure Synapse Analyticsは厳密には「データストア」ではなく統合分析基盤です。問題の分類に曖昧さがあります。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sql-analytics-endpoint",
    "reviewStatus": "review",
    "origin": "pa-pdf-20261112",
    "sourcePage": 94,
    "pdfAnswer": "B・Dが設問の想定（選択肢の分類が不整合）",
    "answerEvidence": "expected",
    "instruction": "選択肢から2つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-47",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "PySparkで確定注文を優先度別に件数集計",
    "difficulty": "Medium",
    "type": "code",
    "question": "【独自練習問題：元PDFの要約を再設計】既定のLakehouseにDeltaテーブルordersがあります。o_orderkeyはNULLのない注文ID、o_orderstatusとo_orderpriorityは文字列、o_totalpriceは金額です。ステータスがFの注文だけを対象に、優先度ごとの注文件数をn_ordersとして集計し、件数の降順で返すコードを1つ選んでください。",
    "choices": [
      "(orders_df.filter(F.col(\"o_orderstatus\") == \"F\")\n .groupBy(\"o_orderpriority\")\n .agg(F.count(\"o_orderkey\").alias(\"n_orders\"))\n .orderBy(F.col(\"n_orders\").desc()))",
      "(orders_df.filter(F.col(\"o_orderstatus\") == \"F\")\n .groupBy(\"o_orderpriority\")\n .agg(F.count(\"o_orderkey\").alias(\"n_orders\"))\n .orderBy(F.col(\"o_orderpriority\").desc()))",
      "(orders_df.filter(F.col(\"o_orderstatus\") == \"F\")\n .groupBy(\"o_orderpriority\", \"o_orderkey\")\n .agg(F.count(\"o_orderkey\").alias(\"n_orders\"))\n .orderBy(F.col(\"n_orders\").desc()))",
      "(orders_df.groupBy(\"o_orderpriority\")\n .agg(F.count(\"o_orderkey\").alias(\"n_orders\"))\n .orderBy(F.col(\"n_orders\").desc()))"
    ],
    "answers": [
      0
    ],
    "selectCount": 1,
    "explanation": "Fの行を先に抽出し、優先度だけで集計して注文IDの件数を求め、件数の降順で並べます。優先度で並べる式は件数順になりません。注文IDもグループ化する式は優先度ごとに1行という粒度を満たしません。フィルターのない式はF以外の注文も含めます。元の選択肢の「Fで絞ってから優先度と状態で集計」は結果として同じ粒度になり得るため、不適切な誤答肢でした。",
    "source": "https://learn.microsoft.com/en-us/azure/databricks/pyspark/basics",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 96,
    "pdfAnswer": "A",
    "auditDate": "2026-11-16",
    "auditNote": "Microsoft Learnの仕様と再監査結果を照合済み。Microsoft公式Practice Assessmentの個別解答キーではない。",
    "answerEvidence": "spec-verified",
    "instruction": "選択肢から1つ選んでください。",
    "code": "from pyspark.sql import functions as F\norders_df = spark.table(\"orders\")\n# 以下の選択肢の式を実行する",
    "reconstructed": true
  },
  {
    "id": "PA-PDF-20261112-48",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "PySparkで地域×チャネルごとの売上合計",
    "difficulty": "Medium",
    "type": "group",
    "question": "sales_dfはregion・channel・statusが文字列、amountが数値のDataFrameです。statusがCompletedの行について、地域と販売チャネルの組み合わせごとに売上合計を求め、合計が50,000を超える行だけ返します。次のPySparkコードの空欄①と②に入る式を、それぞれ選んでください。",
    "choices": [
      "groupBy｜\"channel\"",
      "groupBy｜\"region\"",
      "groupBy｜\"region\", \"channel\"",
      "groupBy｜\"region\", \"status\"",
      "agg｜F.avg(\"amount\")",
      "agg｜F.count(\"amount\")",
      "agg｜F.max(\"amount\")",
      "agg｜F.sum(\"amount\")"
    ],
    "answers": [
      2,
      7
    ],
    "selectCount": 2,
    "explanation": "地域とチャネルの2列がグループの粒度です。求めるのは件数や最大額ではなく売上の合計なのでsumを使います。最初の filterは取引の状態、最後のfilterは集計済みの合計額を条件にしています。\n試験での見抜き方：「Each region and channel」→ 2列groupBy／「Total amount」→ sum／「exceeds 50,000」→ 集計後filter。",
    "source": "https://learn.microsoft.com/en-us/azure/databricks/pyspark/basics",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 98,
    "pdfAnswer": "① \"region\", \"channel\" ／ ② F.sum(\"amount\")",
    "code": "from pyspark.sql import functions as F\n\nresult = (\n    sales_df.filter(F.col(\"status\") == \"Completed\")\n    .groupBy(［①］)\n    .agg(［②］.alias(\"total_sales\"))\n    .filter(F.col(\"total_sales\") > 50000)\n)",
    "answerEvidence": "spec-verified",
    "instruction": "各グループから1つずつ選んでください。",
    "groups": [
      {
        "label": "① グループ化する列",
        "indices": [
          0,
          1,
          2,
          3
        ],
        "answer": 2
      },
      {
        "label": "② 集計式",
        "indices": [
          4,
          5,
          6,
          7
        ],
        "answer": 7
      }
    ]
  },
  {
    "id": "PA-PDF-20261112-49",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "重いFull Reloadを増分ロード＋CDCに変更",
    "difficulty": "Medium",
    "type": "multi",
    "question": "Fabric Warehouseの売上Factテーブルへ大量データを投入するETLで、毎回Full Reloadしているため、時間も計算資源も大量に使います。性能と資源効率を高める2つの方法は何ですか？",
    "choices": [
      "計算資源を増やしてFull Reloadを続ける。",
      "Incremental Loadを実装する。",
      "Factテーブルを手動でパーティション分割する。",
      "ETLをAzure Data Factoryへ切り替える。",
      "Change Data Capture（CDC）で変更を追跡する。"
    ],
    "answers": [
      1,
      4
    ],
    "selectCount": 2,
    "explanation": "処理する件数自体を減らすことが根本対策です。Incremental Loadで差分だけ取り込み、CDCで変更内容を検出します。計算資源の増強は不要な全件処理を維持し、ETL製品の変更だけでも処理量は減りません。\n試験での見抜き方：「Full Reloadが重い」→ Incremental Load＋変更の検出にCDC。\n資料の注意点：注：増分ロードはCDC以外に更新日時・ウォーターマークを用いる方法もあります。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/cdc-copy-job",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 100,
    "pdfAnswer": "B・E",
    "answerEvidence": "expected",
    "instruction": "選択肢から2つ選んでください。"
  },
  {
    "id": "PA-PDF-20261112-50",
    "objectiveId": "PDF-PA-20261112",
    "domain": "データの取り込みと変換",
    "group": "11月12日PDF検証版",
    "skill": "Eventstreamの異なるスキーマを整理し統合",
    "difficulty": "Medium",
    "type": "group",
    "question": "Fabric EventstreamにPlantAとPlantBがあります。PlantAはequipmentId(text)・temperature(decimal)・ eventTime(datetime)。PlantBはsensorKey(integer)・temperature(decimal)・eventTime(datetime)・quality(text)・ diagnostics(array)。sensorKeyはequipmentIdと同じ設備を表します。入力1件につき出力1件を維持し、 equipmentId(text)・temperature・eventTimeだけを持つ1つのストリームを作ります。 この要件を満たすため、PlantBを整形する操作と、その後に2つのストリームを統合する操作をそれぞれ選んでください。",
    "choices": [
      "Expand：配列要素を展開する。",
      "Filter：条件で行を除外する。",
      "Join：共通キーで横方向に結合する。",
      "Manage fields：列名・型・不要列を整理する。",
      "Union：同じスキーマの複数ストリームを縦に結合する。"
    ],
    "answers": [
      3,
      4
    ],
    "selectCount": 2,
    "explanation": "PlantBではsensorKeyをequipmentIdへ名称変更し、整数から文字列へ型を揃え、qualityとdiagnosticsを落とします。次に PlantAとPlantBのイベントを縦にUnionします。Joinは入力件数を減らしたり増やしたりし得て、「入力1件→出力1件」の要件に合いません。\n試験での見抜き方：「列名・型が違う」→ Manage fields／「行を縦にまとめる」→ Union。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview",
    "reviewStatus": "pdf-reviewed",
    "origin": "pa-pdf-20261112",
    "sourcePage": 102,
    "pdfAnswer": "Step 1（PlantB）：Manage fields ／ Step 2（PlantAと変換済みPlantB）：Union",
    "answerEvidence": "expected",
    "instruction": "各グループから1つずつ選んでください。",
    "groups": [
      {
        "label": "手順1：PlantBのスキーマ整理",
        "indices": [
          0,
          1,
          2,
          3,
          4
        ],
        "answer": 3
      },
      {
        "label": "手順2：2つのストリームを統合",
        "indices": [
          0,
          1,
          2,
          3,
          4
        ],
        "answer": 4
      }
    ]
  }
]);

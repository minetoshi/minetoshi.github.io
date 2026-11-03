// DP-700 Dojo question bank
// Original practice questions based on the official DP-700 skills measured.
// These are NOT leaked or reproduced exam questions.
window.DP700_META = {
  "title": "DP-700 過去問道場",
  "version": "2026.11.03",
  "officialGuide": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700",
  "disclaimer": "公式試験範囲に基づく独自問題です。実試験の流出問題・再現問題ではありません。"
};
window.DP700_QUESTIONS = [
  {
    "id": "DP700-001",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Workspace設計",
    "difficulty": "Easy",
    "question": "開発・テスト・本番を分離し、各環境で同じFabricアイテム群を管理したい。最も適切な設計はどれか。",
    "choices": [
      "1つのWorkspaceに全環境を混在させる",
      "環境ごとにWorkspaceを分ける",
      "各ユーザーごとにWorkspaceを作る",
      "OneLakeを環境ごとに無効化する"
    ],
    "answer": 1,
    "explanation": "環境ごとにWorkspaceを分けると、権限・ライフサイクル・デプロイを整理しやすい。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-002",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Deployment pipeline",
    "difficulty": "Easy",
    "question": "Fabricの開発環境からテスト、本番へアイテムを段階的に昇格させたい。最も適切な機能はどれか。",
    "choices": [
      "Deployment pipeline",
      "Eventstream",
      "Shortcut",
      "Dataflow Gen2"
    ],
    "answer": 0,
    "explanation": "Deployment pipelineは開発→テスト→本番の昇格を管理するための機能。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-003",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Git統合",
    "difficulty": "Easy",
    "question": "Notebookなどの変更履歴をソース管理し、ブランチ運用したい。何を使うべきか。",
    "choices": [
      "Git integration",
      "Mirroring",
      "Eventstream",
      "Semantic model refresh"
    ],
    "answer": 0,
    "explanation": "FabricのGit統合を使うと、対応アイテムをGitベースで版管理できる。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-004",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Workspaceロール",
    "difficulty": "Medium",
    "question": "利用者にWorkspace内のコンテンツを閲覧させたいが、作成や削除はさせたくない。最も適切なWorkspaceロールはどれか。",
    "choices": [
      "Admin",
      "Member",
      "Contributor",
      "Viewer"
    ],
    "answer": 3,
    "explanation": "Viewerは主に閲覧・利用向けで、編集権限を与えない要件に合う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-005",
    "domain": "分析ソリューションの実装と管理",
    "skill": "最小権限",
    "difficulty": "Medium",
    "question": "あるエンジニアに特定Lakehouseだけ利用させたい。Workspace全体への広い権限を避けたい。最適な考え方はどれか。",
    "choices": [
      "Workspace Adminを付与",
      "Item単位の共有・権限を使う",
      "Tenant Adminにする",
      "全員Memberにする"
    ],
    "answer": 1,
    "explanation": "必要なItem単位の権限だけを付与するのが最小権限の原則。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-006",
    "domain": "分析ソリューションの実装と管理",
    "skill": "OneLake security",
    "difficulty": "Medium",
    "question": "OneLake上のデータに対してユーザーごとに細かなアクセス制御をしたい。重点的に確認すべき機能はどれか。",
    "choices": [
      "OneLake security",
      "Deployment pipeline",
      "Copy activity",
      "Power BI theme"
    ],
    "answer": 0,
    "explanation": "OneLake securityはFabricデータへのアクセス制御で重要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-007",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Row-level security",
    "difficulty": "Medium",
    "question": "同じテーブルを使いつつ、営業担当者ごとに自分の担当地域の行だけ見せたい。適切な制御はどれか。",
    "choices": [
      "Row-level security",
      "Column rename",
      "Partition pruning",
      "Shortcut"
    ],
    "answer": 0,
    "explanation": "行単位の可視範囲を制限する要件はRLSが適する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-008",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Column-level security",
    "difficulty": "Medium",
    "question": "顧客テーブルの氏名は見せるが、個人番号列だけ一部ユーザーに見せたくない。適切な制御はどれか。",
    "choices": [
      "Row-level security",
      "Column-level security",
      "Notebook parameter",
      "Eventstream filter"
    ],
    "answer": 1,
    "explanation": "列単位のアクセス制御にはColumn-level securityを使う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-009",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Dynamic data masking",
    "difficulty": "Medium",
    "question": "ユーザーにクエリ権限は与えるが、機密列の値をマスク表示したい。適切な機能はどれか。",
    "choices": [
      "Dynamic data masking",
      "Deployment rule",
      "Shortcut cache",
      "Spark pool"
    ],
    "answer": 0,
    "explanation": "動的データマスクは機密値をマスク表示する用途。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-010",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Sensitivity label",
    "difficulty": "Easy",
    "question": "機密データを含むFabricアイテムに分類ラベルを付与したい。何を使うか。",
    "choices": [
      "Sensitivity label",
      "Pipeline trigger",
      "KQL function",
      "Shortcut"
    ],
    "answer": 0,
    "explanation": "秘密度ラベルはデータ分類と情報保護の文脈で使う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-011",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Endorsement",
    "difficulty": "Easy",
    "question": "利用者に『このデータは組織として信頼できる』と示したい。最も適切な機能はどれか。",
    "choices": [
      "Endorsement",
      "Mirroring",
      "Eventhouse",
      "Spark job definition"
    ],
    "answer": 0,
    "explanation": "EndorsementはPromoted/Certifiedなど信頼度を示す用途。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-012",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Audit logs",
    "difficulty": "Medium",
    "question": "誰がどのFabric操作を行ったかを後から確認したい。最も関連するものはどれか。",
    "choices": [
      "Audit logs",
      "Notebook output",
      "Eventstream destination",
      "Lakehouse shortcut"
    ],
    "answer": 0,
    "explanation": "監査ログは操作履歴・監査可能性を高める。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-013",
    "domain": "分析ソリューションの実装と管理",
    "skill": "接続資格情報",
    "difficulty": "Medium",
    "question": "データソース接続で個人のパスワードをコードに埋め込みたくない。最も適切な方針はどれか。",
    "choices": [
      "Notebookに直書き",
      "管理された接続・資格情報を使う",
      "CSVに保存",
      "Gitへ平文保存"
    ],
    "answer": 1,
    "explanation": "接続情報は管理された接続や資格情報で扱い、コードに直書きしない。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-014",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Gateway",
    "difficulty": "Medium",
    "question": "オンプレミスSQL ServerのデータをFabricから取得したい。ネットワーク上直接到達できない。何を検討するか。",
    "choices": [
      "On-premises data gateway",
      "Shortcutだけ",
      "Eventhouseだけ",
      "Deployment pipeline"
    ],
    "answer": 0,
    "explanation": "オンプレミスデータソースへの接続ではデータゲートウェイが代表的な選択肢。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-015",
    "domain": "分析ソリューションの実装と管理",
    "skill": "環境パラメータ",
    "difficulty": "Medium",
    "question": "開発・テスト・本番で接続先だけ切り替えたい。コードを複製せずに運用するには何が有効か。",
    "choices": [
      "パラメーターやデプロイルール",
      "Workspace名を直書き",
      "毎回手修正",
      "Git履歴を削除"
    ],
    "answer": 0,
    "explanation": "環境差分はパラメーターやDeployment rulesで吸収する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-016",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ブランチ戦略",
    "difficulty": "Hard",
    "question": "本番安定性を優先しつつ複数機能を並行開発したい。最も妥当なGit運用はどれか。",
    "choices": [
      "全員mainへ直接push",
      "機能ブランチで開発しレビュー後にmainへ統合",
      "Gitを使わず手動コピー",
      "本番Workspaceを開発用に兼用"
    ],
    "answer": 1,
    "explanation": "機能ブランチ＋レビューは変更の隔離と品質管理に適する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-017",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Deployment rules",
    "difficulty": "Hard",
    "question": "開発から本番へデプロイする際、接続先やパラメータだけ環境ごとに変えたい。最適な方法はどれか。",
    "choices": [
      "同じ値を全環境に固定",
      "Deployment rulesで差分を設定",
      "本番後に毎回手作業変更",
      "Workspaceを1つに統合"
    ],
    "answer": 1,
    "explanation": "環境固有差分はDeployment rulesで管理する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-018",
    "domain": "分析ソリューションの実装と管理",
    "skill": "権限設計",
    "difficulty": "Hard",
    "question": "WorkspaceのMember権限では広すぎる。要件は特定Warehouseへの読み取りだけ。最善策はどれか。",
    "choices": [
      "Memberのまま",
      "Item単位の共有と必要最小限のSQL権限",
      "Adminにする",
      "Tenant設定を変更"
    ],
    "answer": 1,
    "explanation": "広いWorkspaceロールではなくItem単位とデータベース権限の組合せで最小権限にする。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-019",
    "domain": "分析ソリューションの実装と管理",
    "skill": "管理境界",
    "difficulty": "Medium",
    "question": "異なる部門が独立運用し、障害時の影響範囲も分けたい。最も適切な構成はどれか。",
    "choices": [
      "全社で1つのWorkspace",
      "部門・用途ごとにWorkspaceを分離",
      "すべてPersonal Workspace",
      "1つのNotebookに統合"
    ],
    "answer": 1,
    "explanation": "管理境界・権限・障害影響を分けるならWorkspace分離が有効。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-020",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Capacity割当",
    "difficulty": "Medium",
    "question": "特定Workspaceの処理負荷を別のFabric capacityへ移したい。主に何を変更するか。",
    "choices": [
      "Workspaceのcapacity割り当て",
      "Notebookのセル色",
      "SQL列名",
      "Gitブランチ名"
    ],
    "answer": 0,
    "explanation": "Workspaceはcapacityに割り当てて実行リソースを管理する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-021",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Tenant settings",
    "difficulty": "Hard",
    "question": "組織全体で外部共有機能を制限したい。個別Workspaceより上位で検討すべきものはどれか。",
    "choices": [
      "Tenant settings",
      "Notebook variable",
      "Eventstream window",
      "Lakehouse table propertyだけ"
    ],
    "answer": 0,
    "explanation": "組織全体の挙動はTenant settingsで管理する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-022",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ラベル伝播",
    "difficulty": "Medium",
    "question": "機密度ラベルを付けたデータが他の分析アイテムへ派生する。運用上重要な考え方はどれか。",
    "choices": [
      "分類を無視",
      "ラベルの伝播・保護ポリシーを確認",
      "毎回CSVへ書き出す",
      "Shortcutを削除"
    ],
    "answer": 1,
    "explanation": "情報保護ではラベルの伝播や派生データへの適用を確認する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-023",
    "domain": "分析ソリューションの実装と管理",
    "skill": "共有設計",
    "difficulty": "Medium",
    "question": "社内ユーザーにFabricアイテムを共有する際、最初に確認すべきものはどれか。",
    "choices": [
      "必要なアクセスレベルと最小権限",
      "ユーザーの壁紙",
      "ブラウザ履歴",
      "Notebookテーマ"
    ],
    "answer": 0,
    "explanation": "共有設計は最小権限・役割・データ範囲から決める。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-024",
    "domain": "分析ソリューションの実装と管理",
    "skill": "サービス認証",
    "difficulty": "Medium",
    "question": "サービス間の自動処理で個人ユーザーの認証に依存したくない。最適な方向性はどれか。",
    "choices": [
      "サービスプリンシパル等を検討",
      "個人パスワードを共有",
      "全員Admin",
      "匿名アクセス"
    ],
    "answer": 0,
    "explanation": "自動処理では非対話型のサービス認証を検討し、個人資格情報への依存を避ける。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-025",
    "domain": "分析ソリューションの実装と管理",
    "skill": "本番変更管理",
    "difficulty": "Hard",
    "question": "本番Workspaceへの直接編集を避けたい。最も適切な運用はどれか。",
    "choices": [
      "本番で直接修正",
      "開発Workspaceで変更し検証後デプロイ",
      "全員Admin付与",
      "Git無効化"
    ],
    "answer": 1,
    "explanation": "変更は開発環境で行い、検証後にデプロイする方が統制しやすい。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-026",
    "domain": "分析ソリューションの実装と管理",
    "skill": "命名標準",
    "difficulty": "Easy",
    "question": "複数Workspaceを長期運用する際、保守性向上に最も役立つものはどれか。",
    "choices": [
      "一貫した命名規則と説明",
      "ランダムな名前",
      "個人名だけ",
      "説明を残さない"
    ],
    "answer": 0,
    "explanation": "一貫した命名・説明は管理性と引き継ぎを改善する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-027",
    "domain": "分析ソリューションの実装と管理",
    "skill": "DevOps",
    "difficulty": "Medium",
    "question": "Fabricの変更をPRレビューしてから反映したい。中心となる組合せはどれか。",
    "choices": [
      "Git integration + Pull Request運用",
      "Mirroring + Eventstream",
      "Shortcut + RLS",
      "Warehouse + Labelのみ"
    ],
    "answer": 0,
    "explanation": "Git統合とPRレビューの組合せで変更管理を実現できる。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-028",
    "domain": "分析ソリューションの実装と管理",
    "skill": "本番保護",
    "difficulty": "Hard",
    "question": "本番Workspaceは少人数だけが編集でき、利用者は閲覧のみとしたい。妥当な構成はどれか。",
    "choices": [
      "全員Member",
      "運用者をContributor/Member、利用者をViewer",
      "全員Admin",
      "全員Contributor"
    ],
    "answer": 1,
    "explanation": "編集権限と閲覧権限をロールで分離する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-029",
    "domain": "分析ソリューションの実装と管理",
    "skill": "Git対応確認",
    "difficulty": "Medium",
    "question": "Git統合を導入する前に最も重要な確認事項はどれか。",
    "choices": [
      "対象FabricアイテムがGit統合をサポートしているか",
      "画面の色",
      "PCの壁紙",
      "SQLの大文字小文字"
    ],
    "answer": 0,
    "explanation": "FabricアイテムごとにGit対応可否が異なるため確認が必要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-030",
    "domain": "分析ソリューションの実装と管理",
    "skill": "構成ドリフト",
    "difficulty": "Hard",
    "question": "緊急障害対応で本番へ直接修正した。再発防止として最も重要なのはどれか。",
    "choices": [
      "修正内容をGit/開発側へ戻し正式履歴へ反映",
      "本番だけ直して終わる",
      "履歴を削除",
      "全員Admin"
    ],
    "answer": 0,
    "explanation": "本番のホットフィックスもソース管理へ反映し、構成ドリフトを防ぐ。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-031",
    "domain": "データの取り込みと変換",
    "skill": "Lakehouse",
    "difficulty": "Easy",
    "question": "SparkとDeltaテーブルを中心に、構造化・半構造化データを扱いたい。最適なFabricアイテムはどれか。",
    "choices": [
      "Lakehouse",
      "Warehouse",
      "Deployment pipeline",
      "Dashboard"
    ],
    "answer": 0,
    "explanation": "LakehouseはSpark/DeltaとOneLakeを中心に柔軟なデータ処理を行う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-032",
    "domain": "データの取り込みと変換",
    "skill": "Warehouse",
    "difficulty": "Easy",
    "question": "主にT-SQLでリレーショナル分析を行い、SQL中心のデータウェアハウスを構築したい。何を使うか。",
    "choices": [
      "Warehouse",
      "Eventstream",
      "Notebookのみ",
      "Shortcutのみ"
    ],
    "answer": 0,
    "explanation": "SQL中心の構造化分析にはWarehouseが適する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-033",
    "domain": "データの取り込みと変換",
    "skill": "Shortcut",
    "difficulty": "Easy",
    "question": "別のOneLake領域や外部ストレージのデータをコピーせず参照したい。何を使うか。",
    "choices": [
      "Shortcut",
      "Mirroring",
      "Pipeline copy",
      "Dataflow Gen2"
    ],
    "answer": 0,
    "explanation": "Shortcutはデータを複製せず論理的に参照する用途。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-034",
    "domain": "データの取り込みと変換",
    "skill": "Mirroring",
    "difficulty": "Easy",
    "question": "業務DBの変更をFabricへ継続的に反映したい。最も適切なのはどれか。",
    "choices": [
      "Mirroring",
      "Shortcut",
      "Manual CSV export",
      "Deployment pipeline"
    ],
    "answer": 0,
    "explanation": "Mirroringは対応ソースのデータを継続的にFabricへ複製する用途。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-035",
    "domain": "データの取り込みと変換",
    "skill": "Dataflow Gen2",
    "difficulty": "Easy",
    "question": "Power QueryのGUIを使い、コードをほぼ書かずにデータ変換したい。何を使うか。",
    "choices": [
      "Dataflow Gen2",
      "PySpark Notebook",
      "KQL Queryset",
      "Deployment pipeline"
    ],
    "answer": 0,
    "explanation": "Power Queryベースの視覚的変換にはDataflow Gen2が適する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-036",
    "domain": "データの取り込みと変換",
    "skill": "Notebook",
    "difficulty": "Easy",
    "question": "大量データに複雑なPySparkロジックを適用したい。最も適切なのはどれか。",
    "choices": [
      "Notebook",
      "Sensitivity label",
      "Viewer role",
      "Shortcut"
    ],
    "answer": 0,
    "explanation": "PySparkによる複雑な変換にはNotebookが代表的な選択肢。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-037",
    "domain": "データの取り込みと変換",
    "skill": "Pipeline",
    "difficulty": "Easy",
    "question": "複数のCopy、Notebook、Dataflow処理を順番に実行したい。何を使うか。",
    "choices": [
      "Pipeline",
      "Shortcut",
      "Semantic model",
      "Label"
    ],
    "answer": 0,
    "explanation": "Pipelineは複数アクティビティのオーケストレーションに使う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-038",
    "domain": "データの取り込みと変換",
    "skill": "Incremental load",
    "difficulty": "Medium",
    "question": "初回は全件、その後は更新分だけ取り込みたい。適切なパターンはどれか。",
    "choices": [
      "Incremental load",
      "Full loadのみ",
      "毎回手動CSV",
      "Shortcutだけ"
    ],
    "answer": 0,
    "explanation": "変更分のみを取り込む増分ロードで処理量と時間を削減できる。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-039",
    "domain": "データの取り込みと変換",
    "skill": "Full load",
    "difficulty": "Medium",
    "question": "ソースの件数が少なく、更新判定ロジックを持たず毎回完全置換したい。適切なパターンはどれか。",
    "choices": [
      "Full load",
      "Streaming window",
      "Mirroring必須",
      "RLS"
    ],
    "answer": 0,
    "explanation": "データ量が小さく単純性を優先する場合はFull loadが妥当なことがある。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-040",
    "domain": "データの取り込みと変換",
    "skill": "Eventstream",
    "difficulty": "Easy",
    "question": "IoTイベントをリアルタイムに取り込み、複数の宛先へルーティングしたい。何を使うか。",
    "choices": [
      "Eventstream",
      "Deployment pipeline",
      "Shortcut",
      "Sensitivity label"
    ],
    "answer": 0,
    "explanation": "Eventstreamはリアルタイムイベントの取り込み・変換・ルーティングに使う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-041",
    "domain": "データの取り込みと変換",
    "skill": "Eventhouse",
    "difficulty": "Easy",
    "question": "KQLで大量のログ・イベントを低遅延分析したい。何を使うか。",
    "choices": [
      "Eventhouse",
      "Warehouseのみ",
      "Dataflow Gen2のみ",
      "Deployment pipeline"
    ],
    "answer": 0,
    "explanation": "EventhouseはReal-Time IntelligenceでKQLベース分析の中核。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-042",
    "domain": "データの取り込みと変換",
    "skill": "KQL",
    "difficulty": "Medium",
    "question": "イベントテーブルから直近1時間のエラー件数を集計したい。最も適した言語はどれか。",
    "choices": [
      "KQL",
      "DAXのみ",
      "HTML",
      "Bicep"
    ],
    "answer": 0,
    "explanation": "Eventhouseやリアルタイム分析ではKQLが主要言語。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-043",
    "domain": "データの取り込みと変換",
    "skill": "T-SQL",
    "difficulty": "Medium",
    "question": "Warehouseのテーブルを結合し、集計ビューを作成したい。主に使う言語はどれか。",
    "choices": [
      "T-SQL",
      "KQLのみ",
      "CSS",
      "YAMLのみ"
    ],
    "answer": 0,
    "explanation": "Warehouseのリレーショナル処理ではT-SQLが中心。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-044",
    "domain": "データの取り込みと変換",
    "skill": "PySpark",
    "difficulty": "Medium",
    "question": "LakehouseのDeltaテーブルを大規模に変換したい。最も適切な言語はどれか。",
    "choices": [
      "PySpark",
      "PowerShellのみ",
      "DAXのみ",
      "HTML"
    ],
    "answer": 0,
    "explanation": "Sparkベースの大規模変換ではPySparkが適する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-045",
    "domain": "データの取り込みと変換",
    "skill": "Schedule trigger",
    "difficulty": "Medium",
    "question": "毎日午前2時にデータ取り込み処理を自動実行したい。何を使うか。",
    "choices": [
      "Schedule trigger",
      "Shortcut",
      "RLS",
      "Sensitivity label"
    ],
    "answer": 0,
    "explanation": "定期実行にはスケジュールトリガーを使う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-046",
    "domain": "データの取り込みと変換",
    "skill": "Event trigger",
    "difficulty": "Medium",
    "question": "ファイル到着を契機に処理を開始したい。どの考え方が適切か。",
    "choices": [
      "Event-based trigger",
      "固定Full loadのみ",
      "Viewer role",
      "Deployment rule"
    ],
    "answer": 0,
    "explanation": "イベント到着をトリガーにした処理開始が要件に合う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-047",
    "domain": "データの取り込みと変換",
    "skill": "パラメータ化",
    "difficulty": "Medium",
    "question": "同じPipelineを複数テーブルに再利用したい。何を使うべきか。",
    "choices": [
      "Parameters + dynamic expressions",
      "テーブルごとに完全複製",
      "Workspaceを毎回作成",
      "Gitを無効化"
    ],
    "answer": 0,
    "explanation": "パラメータ化で再利用性と保守性を高められる。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-048",
    "domain": "データの取り込みと変換",
    "skill": "Copy activity",
    "difficulty": "Medium",
    "question": "ソースから宛先へデータをほぼそのまま移送したい。変換は最小限。最も適切な選択はどれか。",
    "choices": [
      "PipelineのCopy activity",
      "Notebookで全件手作業",
      "Sensitivity label",
      "RLS"
    ],
    "answer": 0,
    "explanation": "単純なデータ移送にはCopy activityが適する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-049",
    "domain": "データの取り込みと変換",
    "skill": "Dataflow vs Notebook",
    "difficulty": "Hard",
    "question": "業務担当者がGUIで保守できる単純変換が中心で、PySparkスキルはない。最も適切な選択はどれか。",
    "choices": [
      "Dataflow Gen2",
      "Notebook + PySpark",
      "Eventhouse",
      "Git branch"
    ],
    "answer": 0,
    "explanation": "GUI中心でPower Queryを使えるDataflow Gen2が保守要件に合う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-050",
    "domain": "データの取り込みと変換",
    "skill": "Notebook vs Dataflow",
    "difficulty": "Hard",
    "question": "数十億行に複雑な分散処理と独自ライブラリを使いたい。最も適切な選択はどれか。",
    "choices": [
      "Notebook + PySpark",
      "Dataflow Gen2のみ",
      "Shortcutのみ",
      "Sensitivity label"
    ],
    "answer": 0,
    "explanation": "大規模・複雑な分散処理はNotebook/PySparkが適する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-051",
    "domain": "データの取り込みと変換",
    "skill": "Shortcut vs Mirroring",
    "difficulty": "Hard",
    "question": "データを複製せず参照したい。ソースの変更を別コピーとして継続同期する必要はない。何を選ぶか。",
    "choices": [
      "Shortcut",
      "Mirroring",
      "Pipeline Full load",
      "Warehouse viewだけ"
    ],
    "answer": 0,
    "explanation": "コピー不要の参照が目的ならShortcut。Mirroringは継続複製。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-052",
    "domain": "データの取り込みと変換",
    "skill": "Mirroring vs Shortcut",
    "difficulty": "Hard",
    "question": "業務DBの変更をFabric側に継続複製し、Fabric内で分析したい。どちらを選ぶか。",
    "choices": [
      "Mirroring",
      "Shortcut",
      "Deployment pipeline",
      "Sensitivity label"
    ],
    "answer": 0,
    "explanation": "継続複製が要件なのでMirroringが適する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-053",
    "domain": "データの取り込みと変換",
    "skill": "Late-arriving data",
    "difficulty": "Hard",
    "question": "イベントが遅れて到着することがある。時間窓集計で欠落を減らすために考慮すべき概念はどれか。",
    "choices": [
      "Watermark / 遅延許容",
      "Viewer role",
      "Deployment rule",
      "Shortcut permission"
    ],
    "answer": 0,
    "explanation": "ストリーミングでは遅延到着とwatermark/遅延許容の考慮が重要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-054",
    "domain": "データの取り込みと変換",
    "skill": "Windowing",
    "difficulty": "Medium",
    "question": "ストリームを5分ごとに集計したい。重要な概念はどれか。",
    "choices": [
      "Windowing",
      "RLS",
      "Git merge",
      "Sensitivity label"
    ],
    "answer": 0,
    "explanation": "時間窓でイベントをまとめるwindowingが必要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-055",
    "domain": "データの取り込みと変換",
    "skill": "重複排除",
    "difficulty": "Medium",
    "question": "再送により同じレコードが複数回到着する。変換処理で最も重要なのはどれか。",
    "choices": [
      "重複排除ロジック",
      "全員Admin化",
      "Workspace削除",
      "ラベル変更"
    ],
    "answer": 0,
    "explanation": "再送があるパイプラインでは重複排除や冪等性が重要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-056",
    "domain": "データの取り込みと変換",
    "skill": "欠損値",
    "difficulty": "Medium",
    "question": "一部列にNULLが多く、分析前に補完・除外したい。どの工程で対処するか。",
    "choices": [
      "データ変換",
      "Deployment pipeline",
      "Git branch保護",
      "Workspaceロール"
    ],
    "answer": 0,
    "explanation": "欠損値処理はデータ変換工程の代表的処理。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-057",
    "domain": "データの取り込みと変換",
    "skill": "Schema evolution",
    "difficulty": "Hard",
    "question": "ソースに列追加が頻繁に発生する。パイプライン停止を減らしたい。設計上最も重要な観点はどれか。",
    "choices": [
      "Schema evolutionへの対応",
      "RLSだけ",
      "Sensitivity labelだけ",
      "Viewer roleだけ"
    ],
    "answer": 0,
    "explanation": "スキーマ変更を許容・検知する設計が運用安定性に重要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-058",
    "domain": "データの取り込みと変換",
    "skill": "Delta Lake",
    "difficulty": "Medium",
    "question": "LakehouseでACIDトランザクションや履歴管理を活用したい。基盤となるテーブル形式はどれか。",
    "choices": [
      "Delta Lake",
      "CSVのみ",
      "HTML table",
      "YAML"
    ],
    "answer": 0,
    "explanation": "Fabric LakehouseではDelta Lakeが中心的なテーブル形式。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-059",
    "domain": "データの取り込みと変換",
    "skill": "Medallion architecture",
    "difficulty": "Medium",
    "question": "Bronze/Silver/Goldに分けてデータ品質を段階的に高めたい。この設計パターンは何か。",
    "choices": [
      "Medallion architecture",
      "Star-only architecture",
      "Zero-copy only",
      "Tenant architecture"
    ],
    "answer": 0,
    "explanation": "Bronze/Silver/GoldはMedallion architectureの代表パターン。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-060",
    "domain": "データの取り込みと変換",
    "skill": "依存関係",
    "difficulty": "Hard",
    "question": "Copy完了後のみNotebookを実行し、Notebook失敗時は後続処理を止めたい。何を使うか。",
    "choices": [
      "Pipelineの依存関係と条件",
      "Shortcut",
      "RLS",
      "Sensitivity label"
    ],
    "answer": 0,
    "explanation": "Pipelineでアクティビティ依存関係や成功/失敗条件を設定する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-061",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Monitoring hub",
    "difficulty": "Easy",
    "question": "Fabric内の複数ジョブの実行状況を横断的に確認したい。何を使うか。",
    "choices": [
      "Monitoring hub",
      "Shortcut",
      "Sensitivity label",
      "Git branch"
    ],
    "answer": 0,
    "explanation": "Monitoring hubは実行中・完了した処理の監視に使う。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-062",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Pipeline障害",
    "difficulty": "Easy",
    "question": "Pipelineが失敗した。最初に行うべきことはどれか。",
    "choices": [
      "失敗したActivityとエラー詳細を確認",
      "Workspaceを削除",
      "全員Adminにする",
      "Git履歴を消す"
    ],
    "answer": 0,
    "explanation": "まず失敗箇所とエラー内容を特定して原因を切り分ける。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-063",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Notebook障害",
    "difficulty": "Medium",
    "question": "Notebookが失敗した。最も有用な初動はどれか。",
    "choices": [
      "セル/ジョブログと例外メッセージを確認",
      "すぐcapacityを最大化",
      "Gitを削除",
      "データを全削除"
    ],
    "answer": 0,
    "explanation": "ジョブログと例外から原因を特定してから対処する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-064",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Spark最適化",
    "difficulty": "Medium",
    "question": "Sparkジョブが遅い。データスキューが疑われる。最も関連する対策はどれか。",
    "choices": [
      "パーティション分布を確認し再分割を検討",
      "RLSを追加",
      "Sensitivity labelを外す",
      "ViewerをAdminにする"
    ],
    "answer": 0,
    "explanation": "データスキューは一部パーティションに負荷が偏るため、分割設計の見直しが有効。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-065",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Small files",
    "difficulty": "Medium",
    "question": "Lakehouseに小さなDeltaファイルが大量にでき、クエリ性能が悪化している。何を検討するか。",
    "choices": [
      "OPTIMIZEなどによるファイル最適化",
      "Workspaceを増やすだけ",
      "RLS解除",
      "Git無効化"
    ],
    "answer": 0,
    "explanation": "小さいファイル問題ではDeltaの最適化でファイルをまとめる。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-066",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "VACUUM",
    "difficulty": "Medium",
    "question": "Deltaテーブルの古い不要ファイルをクリーンアップしたい。何を使うか。",
    "choices": [
      "VACUUM",
      "Shortcut",
      "Deployment pipeline",
      "Viewer role"
    ],
    "answer": 0,
    "explanation": "VACUUMは保持期間を考慮して不要な古いファイルを削除する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-067",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Warehouse性能",
    "difficulty": "Medium",
    "question": "Warehouseクエリが遅い。最初に確認するのに適切なのはどれか。",
    "choices": [
      "実行計画/クエリ特性とボトルネック",
      "Sensitivity label",
      "Git branch名",
      "画面テーマ"
    ],
    "answer": 0,
    "explanation": "SQL性能問題ではクエリ実行特性やボトルネックの特定が先。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-068",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Filter pushdown",
    "difficulty": "Hard",
    "question": "大量データを読み込んでからフィルターしているため処理が遅い。改善策として有効なのはどれか。",
    "choices": [
      "可能な限りソース側/早い段階でフィルター",
      "最後に全件削除",
      "RLSを外す",
      "Workspaceを統合"
    ],
    "answer": 0,
    "explanation": "不要データを早期に除外してI/Oと処理量を減らす。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-069",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Partition pruning",
    "difficulty": "Medium",
    "question": "日付でパーティションされたデータに対し、特定日のみクエリしたい。性能向上に有効な考え方はどれか。",
    "choices": [
      "Partition pruning",
      "全表スキャン固定",
      "Sensitivity label解除",
      "Git merge"
    ],
    "answer": 0,
    "explanation": "パーティション条件を使うと不要パーティションの読み取りを避けられる。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-070",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Capacity監視",
    "difficulty": "Medium",
    "question": "多くの処理が同時実行され、Fabric capacityの負荷が高い。何を確認すべきか。",
    "choices": [
      "Capacity使用状況とスロットリング",
      "Notebookの色",
      "Git commit message",
      "ラベル名"
    ],
    "answer": 0,
    "explanation": "リソース飽和やスロットリングの確認が必要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-071",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Throttling",
    "difficulty": "Medium",
    "question": "capacity制限により処理が遅延している。最も適切な対応はどれか。",
    "choices": [
      "負荷平準化やcapacity見直し",
      "RLSを解除",
      "Gitを削除",
      "全員Viewer"
    ],
    "answer": 0,
    "explanation": "同時実行を平準化し、必要ならcapacityや処理時間帯を見直す。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-072",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Retry policy",
    "difficulty": "Medium",
    "question": "一時的なネットワークエラーで外部ソース接続が失敗する。Pipeline設計で有効なのはどれか。",
    "choices": [
      "Retry policy",
      "Sensitivity label",
      "Shortcut permission",
      "Git squash"
    ],
    "answer": 0,
    "explanation": "一時障害には再試行ポリシーが有効。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-073",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Timeout",
    "difficulty": "Medium",
    "question": "長時間クエリが一定時間で失敗する。最初にすべきことはどれか。",
    "choices": [
      "処理時間・ボトルネック・タイムアウト設定を確認",
      "RLSを解除",
      "全員Admin",
      "ログを削除"
    ],
    "answer": 0,
    "explanation": "単純にタイムアウトを延ばす前に根本原因と設定を確認する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-074",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Alerting",
    "difficulty": "Medium",
    "question": "ジョブ失敗を人が画面確認する前に検知したい。最も適切な考え方はどれか。",
    "choices": [
      "監視と通知/アラートを構成",
      "毎朝手作業確認のみ",
      "Gitを削除",
      "ラベル変更"
    ],
    "answer": 0,
    "explanation": "自動通知・アラートで障害検知を早める。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-075",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Semantic model refresh",
    "difficulty": "Medium",
    "question": "セマンティックモデルの更新失敗を追跡したい。どの領域のタスクか。",
    "choices": [
      "監視と最適化",
      "データ取り込みのみ",
      "Git運用のみ",
      "Workspace命名のみ"
    ],
    "answer": 0,
    "explanation": "更新ジョブの成功/失敗確認は監視領域。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-076",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventstream監視",
    "difficulty": "Medium",
    "question": "ストリーミング処理で遅延が増えている。重要な確認項目はどれか。",
    "choices": [
      "取り込みレート・処理遅延・バックログ",
      "Sensitivity label",
      "Workspaceロールだけ",
      "Gitタグ"
    ],
    "answer": 0,
    "explanation": "ストリーミングではスループット・遅延・バックログの観測が重要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-077",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "KQL最適化",
    "difficulty": "Hard",
    "question": "EventhouseでKQLクエリが遅い。改善で最初に意識すべきことはどれか。",
    "choices": [
      "必要列・必要期間に絞り早期にfilter",
      "常に全列全期間を読む",
      "RLS解除",
      "Git履歴削除"
    ],
    "answer": 0,
    "explanation": "不要データを早期に絞ることでスキャン量を減らす。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-078",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Spark cache",
    "difficulty": "Hard",
    "question": "同じ中間データを何度も再計算している。繰り返し参照が多い場合に検討できるものはどれか。",
    "choices": [
      "Cache/Persist",
      "Sensitivity label",
      "Deployment rule",
      "Shortcut permission"
    ],
    "answer": 0,
    "explanation": "再利用頻度が高い中間結果ではキャッシュが有効な場合がある。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-079",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Broadcast join",
    "difficulty": "Hard",
    "question": "巨大テーブルと非常に小さい参照テーブルを結合する。小テーブルを各executorへ配布できる場合、候補となる最適化はどれか。",
    "choices": [
      "Broadcast join",
      "Full outer join固定",
      "RLS",
      "VACUUM"
    ],
    "answer": 0,
    "explanation": "小さいテーブルをbroadcastすることでshuffleを減らせる場合がある。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-080",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Data skew",
    "difficulty": "Hard",
    "question": "特定キーにレコードが集中し、1つのSpark taskだけ極端に遅い。原因として最も可能性が高いのはどれか。",
    "choices": [
      "Data skew",
      "Sensitivity label",
      "Viewer role",
      "Git conflict"
    ],
    "answer": 0,
    "explanation": "特定キーへの偏りで一部パーティションが巨大化するのはデータスキューの典型。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-081",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ログ分析",
    "difficulty": "Medium",
    "question": "障害原因を追跡するため、処理の開始・終了・失敗情報を残したい。最も適切な考え方はどれか。",
    "choices": [
      "構造化ログと実行メタデータを残す",
      "ログを無効化",
      "毎回画面をスクショ",
      "Git履歴だけ見る"
    ],
    "answer": 0,
    "explanation": "構造化された実行ログはトラブルシューティングと監査に有効。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-082",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "SLA",
    "difficulty": "Medium",
    "question": "毎朝6時までに処理完了が必要。監視設計で最も重要なのはどれか。",
    "choices": [
      "完了時刻と処理時間の継続監視",
      "Notebookのテーマ",
      "Sensitivity label",
      "Gitブランチ名"
    ],
    "answer": 0,
    "explanation": "SLAでは終了時刻・所要時間の傾向監視が重要。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-083",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ボトルネック",
    "difficulty": "Hard",
    "question": "Pipeline全体が遅い。最初に改善すべき箇所を選ぶにはどうするか。",
    "choices": [
      "各Activityの所要時間を比較してボトルネックを特定",
      "全部同時に書き換える",
      "RLSを解除",
      "Workspaceを削除"
    ],
    "answer": 0,
    "explanation": "計測して最も支配的な処理から改善するのが合理的。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-084",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "並列化",
    "difficulty": "Hard",
    "question": "互いに依存しない4つのCopy処理を直列実行している。処理時間を短縮したい。最も有効な候補はどれか。",
    "choices": [
      "並列実行を検討",
      "全件Full loadへ変更",
      "RLS追加",
      "Git削除"
    ],
    "answer": 0,
    "explanation": "依存関係がなければ並列化で総時間を短縮できる可能性がある。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-085",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "容量効率",
    "difficulty": "Medium",
    "question": "夜間にしか使わない高負荷処理がある。コスト・容量効率を改善する観点として適切なのはどれか。",
    "choices": [
      "スケジュールやcapacity利用を最適化",
      "全日常時最大負荷",
      "ログ削除",
      "全員Admin"
    ],
    "answer": 0,
    "explanation": "利用時間帯と負荷を把握し、不要な同時実行や過剰リソースを避ける。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-086",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Query folding",
    "difficulty": "Hard",
    "question": "Dataflow Gen2で変換している。可能な変換をソース側へ押し下げて取得量を減らしたい。関連概念はどれか。",
    "choices": [
      "Query folding",
      "Sensitivity label",
      "Deployment pipeline",
      "Git squash"
    ],
    "answer": 0,
    "explanation": "Query foldingにより一部変換をソースへ押し下げ、転送量を減らせる。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-087",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Incremental processing",
    "difficulty": "Medium",
    "question": "毎回全期間を再処理しており時間がかかる。変更分だけ処理できる場合、何を検討するか。",
    "choices": [
      "Incremental processing",
      "Full load固定",
      "RLS解除",
      "Git無効化"
    ],
    "answer": 0,
    "explanation": "増分処理で読み書き量を削減できる。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-088",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "VACUUM保持期間",
    "difficulty": "Hard",
    "question": "VACUUMを短い保持期間で実行するときの主なリスクはどれか。",
    "choices": [
      "過去バージョン参照や同時処理で必要なファイルを失う可能性",
      "Viewer権限が増える",
      "Git branchが消える",
      "Sensitivity labelが解除される"
    ],
    "answer": 0,
    "explanation": "保持期間を短くしすぎるとTime Travelや同時処理に必要なファイルを失うリスクがある。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-089",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "最適化順序",
    "difficulty": "Hard",
    "question": "Warehouseの遅いクエリに対して最初からcapacity増強だけを行うのが不適切な理由はどれか。",
    "choices": [
      "クエリやデータ設計の問題を隠し不要なコスト増になる可能性",
      "capacityは性能に無関係",
      "Gitが使えなくなる",
      "RLSが壊れる"
    ],
    "answer": 0,
    "explanation": "まずボトルネックを分析し、クエリやデータ設計を改善してからリソース増強を検討する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  },
  {
    "id": "DP700-090",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Root cause analysis",
    "difficulty": "Hard",
    "question": "ジョブ失敗が断続的に発生している。再発防止に最も有効な進め方はどれか。",
    "choices": [
      "失敗時刻・入力・依存先・ログを相関させ根本原因を特定",
      "毎回手動再実行だけ",
      "ログ削除",
      "全員Admin"
    ],
    "answer": 0,
    "explanation": "一時復旧だけでなく、証跡を突き合わせて根本原因を特定する。",
    "source": "https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/dp-700"
  }
];

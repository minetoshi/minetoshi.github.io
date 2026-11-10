window.DP700_PA_COACH=Object.assign(window.DP700_PA_COACH||{},{
  "PALIVE-20261106-26": {
    "cue": "「ADLS＋SQL Server」「ディメンショナルETL」→ステージング＋モデル変換＋Pipeline",
    "analysis": "複数ソースをいきなり本番表へ入れるのではなく、整形・品質確認・順序制御を分ける。",
    "choices": [
      "× ステージングなしの直接ロードは異種ソースの差分検証や再処理を難しくする。",
      "× 品質確認省略はディメンションキー不一致等を本番へ持ち込む。",
      "○ ステージングでソースデータを受け、型や粒度を整えられる。",
      "○ Fact/Dimensionの構造へ変換して分析用モデルにロードする。",
      "× 自動化のないETLだけでは依存関係や定期実行を運用しづらい。",
      "○ Data Factory pipelineがCopyや変換処理の順序・依存関係を制御する。"
    ]
  },
  "PALIVE-20261106-27": {
    "cue": "「1分Tumbling＋15/30/60分Hopping」「同じクエリでID」→Windows＋System.Window().Id",
    "analysis": "Windowに名前を付け、結果行から由来の時間窓を判別できるようにする。",
    "choices": [
      "× 複数Windowを置いても識別子の参照がなければ結果ラベルの要件を満たせない。",
      "× 15/30/60分までTumblingにすると1分ずつ移動するHoppingの要件と異なる。",
      "○ Window('識別子', ...)で複数窓を定義しSystem.Window().Idを参照する。",
      "× 別クエリ4本でも集計はできるが『同一クエリ』の要件を満たさない。"
    ]
  },
  "PALIVE-20261106-28": {
    "cue": "「大規模Delta」「ML前処理」「柔軟な変換」→Notebook",
    "analysis": "PySparkで大量データを分散変換し、試行錯誤しながらML向けに整形する。",
    "choices": [
      "○ NotebookならSpark/PySparkを対話的に使い複雑な前処理を実装できる。",
      "× Data Factoryはデータ移動・オーケストレーション中心で柔軟なSpark前処理の主役ではない。",
      "× Power BI DataflowはGUI変換向けで大規模コード前処理の自由度が低い。",
      "× SSMSはSQL Server系の管理ツールでFabricのSpark前処理実行環境ではない。"
    ]
  },
  "PALIVE-20261106-29": {
    "cue": "「status=F」「priority別件数」「件数降順」→filter→groupBy→count→sort",
    "analysis": "集計対象をまず確定し、集計キーと件数列の並べ替えを区別する。",
    "choices": [
      "○ 先にFだけfilterしpriority別にorderkeyを数え、n_ordersを降順にする。",
      "× totalpriceのcountは注文キー件数の要件と一致しないうえ、priorityソートでは件数降順ではない。",
      "× statusまでgroupByすると要求より細かい粒度になる。",
      "× 集計後にstatusでfilterすると元列がない、または集計対象が既に混在する。"
    ]
  },
  "PALIVE-20261106-30": {
    "cue": "「本番ストリームジョブ」「Delta保存」「障害復旧」→Spark Job Definition＋checkpoint＋Delta sink",
    "analysis": "実行形式・再開性・出力先の3つをそれぞれ満たす必要がある。",
    "choices": [
      "○ Structured Streamingを含むSpark Job Definitionで本番ジョブとして実行できる。",
      "○ 永続checkpointが処理進捗と状態を保持する。",
      "× JSONファイルだけへの保存では要求されたDeltaテーブルの特性を満たさない。",
      "× バッチ処理だけでは近リアルタイム取り込みにならない。",
      "○ Deltaをsinkにするとトランザクション対応の表へ書き込める。"
    ]
  },
  "PALIVE-20261106-31": {
    "cue": "「ADLS CSV」「対話的に試す」「共同開発」→Notebook",
    "analysis": "取り込み手段だけでなく対話的なコード実行が条件。",
    "choices": [
      "× Pipelineは繰り返し・依存関係の制御向けで対話的な試行に弱い。",
      "× Dataflow Gen2はGUI変換中心でコードセルを共有して試す用途とは違う。",
      "○ NotebookでPySparkをセル単位に実行・修正・共有できる。",
      "× Spark Job Definitionはバッチ/本番実行向けで対話的実験にはNotebookが適する。"
    ]
  },
  "PALIVE-20261106-32": {
    "cue": "「SDK-style SQL Database Project」「DB接続なし」「dacpac生成」→dotnet build",
    "analysis": "ビルドと本番DBへの公開を区別する。",
    "choices": [
      "○ dotnet buildはプロジェクトを検証してdacpac成果物を作れる。",
      "× DeployReportは公開差分の評価に使うものでビルドそのものではない。",
      "× PublishはDBに接続して変更を反映する操作。",
      "× Scriptは公開用SQLスクリプト生成などで、SDKプロジェクトのビルドではない。"
    ]
  },
  "PALIVE-20261106-33": {
    "cue": "「Workspaceから外した人」「Lakehouse1だけRead」→item permissions",
    "analysis": "対象1アイテムの読み取りならWorkspaceロールを追加しない。",
    "choices": [
      "× Contributorは広い編集権限を与える。",
      "× MemberはWorkspace全体の管理・編集寄りの権限。",
      "× ViewerでもWorkspace内の複数アイテムへ閲覧範囲が広がり得る。",
      "○ Lakehouse1だけに必要なアイテム権限を付与できる。"
    ]
  },
  "PALIVE-20261106-34": {
    "cue": "「Notebook同時利用」「High concurrency」→Spark settings",
    "analysis": "同時実行時のセッション共有設定はData Engineering/ScienceのSpark領域。",
    "choices": [
      "○ WorkspaceのSpark settingsからHigh concurrencyの設定を行う。",
      "× Data FactoryはPipeline/Dataflowなどの領域。",
      "× Data WarehouseはT-SQL分析の領域。",
      "× Delegated SettingsはそのHigh concurrency設定の場所ではない。"
    ]
  },
  "PALIVE-20261106-35": {
    "cue": "「Copy Data activityの目的」→ソースから宛先へコピー",
    "analysis": "Copyは移送の機能。複雑な変換はNotebook/Dataflowなど別の手段と区別する。",
    "choices": [
      "× 複雑な変換を直接担う主機能ではない。",
      "○ 接続したソースから宛先へデータを移送する。",
      "× Notebook実行はNotebook activity等の役割。",
      "× SQLコード実行はScript activity等の役割。"
    ]
  },
  "PALIVE-20261106-36": {
    "cue": "「入力でソース/テーブルを切り替える」「同じPipeline再利用」→parameters＋dynamic expressions",
    "analysis": "接続先、パス、テーブル名などを実行時値として変えられるようにする。",
    "choices": [
      "× データソースごとに複製すると保守・修正が増える。",
      "○ Parametersで受けた値をdynamic expressionsでActivity設定へ渡す。",
      "× Notebook内に全部書いてもPipeline側の実行時切替要件を満たしにくい。",
      "× 固定値だけでは入力で切替できない。"
    ]
  },
  "PALIVE-20261106-37": {
    "cue": "「毎日01:00」「Copy→Dataflow→Notebook」「前段成功後」→Data Factory pipeline",
    "analysis": "スケジュールと成功依存の両方を一か所で構成する。",
    "choices": [
      "○ Pipelineは複数Activityの実行順序と定時起動をまとめて管理できる。",
      "× Eventstreamはイベントの取り込み・変換経路用。",
      "× Notebook単体では他のCopy/Dataflow処理の依存関係と実行順を直接構成しにくい。",
      "× Semantic modelはBI分析の論理モデル。"
    ]
  },
  "PALIVE-20261106-38": {
    "cue": "「既存WarehouseをVS Codeへ」「作成時にDBは変更しない」→Create Project From Database",
    "analysis": "Database→Projectの読み取り方向。Project→Databaseの公開と取り違えない。",
    "choices": [
      "× Manage Packagesは依存パッケージ管理でスキーマ抽出ではない。",
      "○ Warehouse接続を右クリックしてCreate Project From Databaseを実行する。",
      "× New QueryはSQLを開くだけでプロジェクト定義の生成ではない。",
      "× From Scratchは空プロジェクト作成で既存スキーマが自動取込されない。"
    ]
  },
  "PALIVE-20261106-39": {
    "cue": "「Data Mesh」「部門にガバナンス委任」→Domain割当＋委任設定＋Domain admin",
    "analysis": "ドメインにWorkspaceを関連付け、管理責任者を指定し、委任可能な設定を渡す。",
    "choices": [
      "× 機密ラベルだけではWorkspaceのDomain所属や管理委任を表せない。",
      "○ 対象WorkspaceをDomainへ所属させる。",
      "○ 委任可能なテナント設定をDomainスコープの管理へ渡す。",
      "× Domainラベルだけでは権限・責任の委任が完了しない。",
      "× RLSだけでは行制御であり部門管理の責任移譲にならない。",
      "○ Domain administratorsを指定してそのDomainの管理主体を明確にする。"
    ]
  },
  "PALIVE-20261106-40": {
    "cue": "「/sales/daily/へファイル作成」「即Pipeline起動」→storage event trigger",
    "analysis": "定時ではなくファイル作成イベントが起動条件。パス条件で対象外を除外する。",
    "choices": [
      "× 手動実行ではファイル到着時の自動化にならない。",
      "× 失敗通知は起動条件を作らない。",
      "× 定期スケジュールはファイル作成直後と一致しない。",
      "○ storage event triggerをBlob createdで設定し対象パスを絞り込む。"
    ]
  },
  "PALIVE-20261106-41": {
    "cue": "「需要が変動」「ピークだけノード追加」→Custom pool Autoscaling",
    "analysis": "常時大きなpoolを確保せず、最大ノード数を上限として需要で増減する。",
    "choices": [
      "○ Autoscalingを有効にしmax nodesをピーク要件に合わせる。",
      "× 静的ノード割当だと需要変動へ追随しない。",
      "× 静的executorだけではpoolのノード増減要件を満たさない。",
      "× 固定ノード数はピーク時過少・平常時過大の原因になる。"
    ]
  },
  "PALIVE-20261106-42": {
    "cue": "「検証済み変更だけ」「Productionへ昇格」→Selective deployment",
    "analysis": "全部の変更を一度にデプロイせず、対象アイテムだけを選ぶ。",
    "choices": [
      "× 同じWorkspaceを全ステージで共有すると環境分離の意味がない。",
      "× Deployment rulesは接続値などの環境差分であり対象アイテム選別そのものではない。",
      "× 全Stageへ同時デプロイすると検証前の変更まで進み得る。",
      "○ Selective deploymentで特定アイテムだけ昇格できる。"
    ]
  },
  "PALIVE-20261106-43": {
    "cue": "「SalaryとSSN」「HRだけ」→HRロール＋列SELECT制御",
    "analysis": "特定列へのアクセス制御。一般ロールに広い権限が残っていないかも確認する。",
    "choices": [
      "× Viewだけでは別経路のテーブルアクセス権があれば機密列が参照できる。",
      "○ HR専用ロールを作り該当ユーザーを割り当てる。",
      "○ 一般ロールから機密列が参照できないようGRANT経路を見直す。必要な場合だけ適切に拒否する。",
      "○ HRロールに必要な機密列のSELECT権限を付与する。",
      "× DDMはマスク表示であって列そのもののSELECT制御ではない。"
    ]
  },
  "PALIVE-20261106-44": {
    "cue": "「ワークロード需要で自動調整」→Autoscaling",
    "analysis": "固定の大きいリソースではなく必要時に計算リソースを増減する。",
    "choices": [
      "○ Autoscalingは需要に応じてリソースを自動で調整する。",
      "× Fixed allocationは変動に追随しない。",
      "× executor固定は需要で必要数が変わるケースに不向き。",
      "× 常にLargeはアイドル時のコストを増やし得る。"
    ]
  },
  "PALIVE-20261106-45": {
    "cue": "「入力パラメーター」「複数データセット」「同じPipeline」→Parameterized pipelines",
    "analysis": "固定の処理定義に外部入力値を渡して再利用する。",
    "choices": [
      "× 別Pipelineを毎回作ると保守対象が増える。",
      "○ Parameterized pipelineにすると同じ処理を違う入力で実行できる。",
      "× パラメーターなしでは入力による対象切替が難しい。",
      "× ハードコードは変更のたびに定義修正が必要。"
    ]
  },
  "PALIVE-20261106-46": {
    "cue": "「RunDateをNotebookに上書き」→Parameters cell＋Base parameters",
    "analysis": "Notebook内の受入口とPipelineからの値設定の両方が必要。",
    "choices": [
      "× Markdown cellはコードの変数を外部上書きする受入口ではない。",
      "○ Notebook側はParameters cell、Pipeline側は@pipeline().parameters.RunDateをBase parametersへ渡す。",
      "× Locked cellは指定のパラメーター設定ではない。",
      "× Frozen cellは指定のパラメーター設定ではない。"
    ]
  },
  "PALIVE-20261106-47": {
    "cue": "「/retailのCSVのみ」「Pipeline成功後にDataflow」→パス＋拡張子、Job succeeded",
    "analysis": "ファイル起動のフィルターと後段起動の成功条件を分ける。",
    "choices": [
      "× .csvだけでは/retail以外のCSVでも起動する。",
      "× /retailだけではCSV以外でも起動する。",
      "○ Blob createdを/retail＋.csvの両方で絞る。",
      "× Job createdは前段成功を保証しない。",
      "○ Pipeline1のJob succeededをDataflow1の起動条件にする。"
    ]
  },
  "PALIVE-20261106-48": {
    "cue": "「Notebook変更履歴」「過去状態へ復元」→Git integration",
    "analysis": "変更内容をcommit単位で残し、必要なら過去のcommitを利用できるようにする。",
    "choices": [
      "× Data Factory Pipelineは実行制御で変更履歴管理の主役ではない。",
      "○ WorkspaceをGit repositoryへ接続してNotebookの変更を版管理する。",
      "× Deployment pipelineだけでは細かなコード変更履歴/任意の復元はできない。",
      "× branch名だけ作っても履歴をcommitしなければ復元できない。"
    ]
  },
  "PALIVE-20261106-49": {
    "cue": "「Spark runtime更新後に互換性エラー」→ライブラリ整理＋対応版へ更新",
    "analysis": "runtimeとライブラリの互換性を合わせ、変更したEnvironmentを再Publishする。",
    "choices": [
      "× executor memoryはメモリ不足の対処でバージョン非互換を直さない。",
      "○ 非互換ライブラリを削除しEnvironmentを再Publishして反映する。",
      "× 必ず旧runtimeへ戻す必要はなく、互換版への更新が基本。",
      "○ 新runtimeに対応するライブラリへ更新して実行環境を整える。",
      "× 古い非互換ライブラリを維持すると同じ例外が続く。"
    ]
  },
  "PALIVE-20261106-50": {
    "cue": "「MedicalHistory列だけ」「許可者限定」→CLS",
    "analysis": "行単位の制限や伏字表示ではなく、特定列へのアクセス可否が要件。",
    "choices": [
      "○ Column-Level SecurityがMedicalHistory列のSELECT権限を対象者へ限定できる。",
      "× DDMは元値をマスク表示する仕組みで列そのもののアクセス制御とは違う。",
      "× RLSは患者の行を絞る仕組みで列を限定しない。",
      "× Workspace roleは全アイテムに広く作用する権限で列単位ではない。"
    ]
  }
});

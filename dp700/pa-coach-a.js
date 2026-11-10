window.DP700_PA_COACH=Object.assign(window.DP700_PA_COACH||{},{
  "PA50-01": {
    "cue": "「/retailのCSVだけ」「前段成功後」→イベントフィルター＋成功依存",
    "analysis": "起動条件と処理順序は別々に設定する。ファイル名条件だけでなく成功時のみ後続を走らせる。",
    "choices": [
      "○ Blob createdをパス・拡張子の両方で限定し、対象CSVだけ起動できる。",
      "○ Pipeline1の成功条件に依存させれば、失敗時にDataflow1を走らせない。",
      "× パスだけではCSV以外のファイル作成でも起動してしまう。",
      "× Dataflow1自身の成功は実行前には分からず、前段成功を表せない。"
    ]
  },
  "PA50-02": {
    "cue": "「Starter poolで不足」「起動時間も抑える」→カスタムpool＋動的割当",
    "analysis": "計算資源の総量を柔軟にし、ジョブ内部のexecutor数も需要に合わせて変える。",
    "choices": [
      "○ カスタムpoolのAutoscaleなら負荷に応じたノード数の拡張を設定できる。",
      "○ Dynamic AllocationならSpark executor数を処理需要に合わせて調整できる。",
      "× Starter poolを停止するだけでは代替リソースが増えない。",
      "× partition数は並列度の調整であり、計算資源の不足自体を必ず解消しない。"
    ]
  },
  "PA50-03": {
    "cue": "「対話的にコードを検証・共有」→Notebook",
    "analysis": "単にCSVを取り込むだけなら他方式もあるが、コードの反復実行と共有が決め手。",
    "choices": [
      "× Pipelineはジョブの順序・スケジュール制御が主で、対話型コード検証の中心ではない。",
      "× Dataflow Gen2はGUI/Power Query変換が中心。コードセルの対話実行とは違う。",
      "○ Notebookはセル単位でPySparkを実行・検証し、共同開発できる。",
      "× Deployment pipelineは開発・テスト・本番間の配布を担当する。"
    ]
  },
  "PA50-04": {
    "cue": "「executor数がジョブで変動」→Dynamic Allocation",
    "analysis": "Sparkの実行中にexecutorを増減させる機能と、pool自体のノード拡縮を区別する。",
    "choices": [
      "○ Dynamic Allocationは必要なexecutor数を負荷に応じて調整する。",
      "× Viewerはアクセスロール。計算資源の配分を変えない。",
      "× AutoSaveはノートブックの保存機能でexecutorとは無関係。",
      "× Shortcutはデータの参照方法でありexecutorを増やさない。"
    ]
  },
  "PA50-05": {
    "cue": "「PipelineのRunDateをNotebook既定値に上書き」→Parameters cell＋Base parameters",
    "analysis": "受け取る側で変数をパラメーター化し、渡す側で値を設定する二段構成。",
    "choices": [
      "○ NotebookのParameters cellにprocess_dateを定義して外部上書きを受ける。",
      "○ Notebook activityのBase parametersにPipelineのRunDateを式で渡す。",
      "× Markdownセルは表示用で、実行時パラメーターの変数定義にならない。",
      "× 前Activityの出力は必須ではなく、Pipelineパラメーターを直接使える。"
    ]
  },
  "PA50-06": {
    "cue": "「既存Warehouseのスキーマ」「Git管理」→Database Projectを抽出",
    "analysis": "既存データを移すのではなく、DDLなどのスキーマ定義をファイル化する。",
    "choices": [
      "○ 既存WarehouseからDatabase Projectを生成すればスキーマをソース管理できる。",
      "× CSV出力は行データでありテーブル定義の版管理方法ではない。",
      "× Semantic modelはBIモデルでSQL Database Projectの元データではない。",
      "× Shortcutはストレージ参照でありDDLのGit管理ではない。"
    ]
  },
  "PA50-07": {
    "cue": "「ユーザーごとに行を制限」→RLSの関数＋Security policy",
    "analysis": "SQL RLSはどの行を見せるかを関数で判定し、ポリシーでテーブルへ適用する。",
    "choices": [
      "○ Predicate functionがユーザーと行の対応を評価する。",
      "○ FILTER PREDICATEを含むSecurity policyで判定関数を対象テーブルへ結び付ける。",
      "× DDMは列の値を伏字にするだけで、行を除外しない。",
      "× Admin付与は権限過剰で、ユーザーごとの行制御にならない。"
    ]
  },
  "PA50-08": {
    "cue": "「既存DBからVS Codeへ」「元DBを変更しない」→Create Project From Database",
    "analysis": "取り込み/抽出と公開/変更は別操作。まずデータベースから定義を読み取る。",
    "choices": [
      "○ Create Project From Databaseは既存スキーマをローカルプロジェクト化する。",
      "× PublishはプロジェクトをDBへ反映する方向で、元DB変更の恐れがある。",
      "× Drop and Recreateは元DBを破壊し得るので条件に反する。",
      "× Shortcutはデータ参照機能でDBプロジェクト抽出ではない。"
    ]
  },
  "PA50-09": {
    "cue": "「MedicalHistoryという列だけ」「許可者限定」→CLS",
    "analysis": "隠したいのは行でも値の表示形式でもなく、特定列へのアクセス自体。",
    "choices": [
      "× RLSは行を絞る。患者ごとの許可なら使うが、列だけの制限ではない。",
      "○ CLSは列に対するSELECT権限を制御する。",
      "× Sensitivity labelは分類・保護方針の表示で、列SELECT制限の代替ではない。",
      "× Workspace Viewerはワークスペース権限で、列単位の制御ではない。"
    ]
  },
  "PA50-10": {
    "cue": "「DDMの元値を見せる」→UNMASK",
    "analysis": "SELECTはそのまま維持し、マスク解除の権限のみ承認者へ限定する。",
    "choices": [
      "× SELECT ALL USER SECURABLESは広範な権限でありマスク解除専用ではない。",
      "× CONTROL SERVERは過剰な管理権限。最小権限を満たさない。",
      "○ UNMASKを適切なスコープで付与するとマスク前の値が見える。",
      "× ALTER ANY MASKはマスク定義の変更権限であって閲覧専用ではない。"
    ]
  },
  "PA50-11": {
    "cue": "「変更された一部だけ本番へ」→Selective deployment",
    "analysis": "全部を流すか、検証したアイテムだけ選ぶかがポイント。",
    "choices": [
      "× Workspace再作成は既存設定や運用を壊し、選択的昇格にならない。",
      "× Git接続解除は変更選択に関係しない。",
      "○ Selective deploymentは対象アイテムを選択してステージへ反映できる。",
      "× 手動コピーよりDeployment pipelineの選択機能が再現性に優れる。"
    ]
  },
  "PA50-12": {
    "cue": "「SalaryとSSNはHRだけ」→HRロール＋列SELECT制限",
    "analysis": "既存の一般ロールに広いSELECT権限がある場合、その経路も見直す必要がある。列許可だけ追加しても安全とは限らない。",
    "choices": [
      "○ HR専用ロールで対象者をまとめると権限を一括管理できる。",
      "○ HRロールへ機密列のSELECTを許可する。ただし他権限の継承も確認。",
      "○ 一般ロールが機密列を読める権限を除去/必要に応じて拒否し、実ユーザーで検証する。",
      "× UNMASKはDDMの解除であり、列アクセス制限そのものではない。",
      "× 全員Adminは機密情報の保護要件に反する。"
    ]
  },
  "PA50-13": {
    "cue": "「末尾4桁だけ表示」「DDM」→partial(0,置換文字,4)",
    "analysis": "partial関数は先頭文字数、伏字文字列、末尾文字数を指定する。",
    "choices": [
      "○ 先頭0桁・伏字・末尾4桁を残すので目的通り。",
      "× default()は型に応じた既定マスクで、末尾4桁は保証しない。",
      "× email()はメール形式向けのマスクでカード番号用ではない。",
      "× random()は数値のランダム表示で、末尾桁の保持を指定できない。"
    ]
  },
  "PA50-14": {
    "cue": "「品質検証済み」「公式資産」「部門へ認定管理委任」→Certified＋Domain管理",
    "analysis": "Promotedはおすすめ表示、Certifiedは正式な承認プロセスを経た資産の認定。",
    "choices": [
      "○ 検証された信頼資産をCertifiedとして識別する。",
      "○ Domain管理者への適切な認定権限委任が部門運用の要件に対応する。実際の権限設定も確認。",
      "× Promotedは自己推薦的な位置づけで、正式認定の代替ではない。",
      "× Viewerにテナント全体の認定管理権限を渡すのは権限過剰。"
    ]
  },
  "PA50-15": {
    "cue": "「複数Notebookでセッション共有」→Spark settingsのHigh concurrency",
    "analysis": "Notebookの同時実行時にセッション資源を共有する設定の場所を問う。",
    "choices": [
      "○ WorkspaceのData Engineering/Science配下のSpark settingsを確認する。",
      "× Power BIのtenant設定はSparkのHigh concurrency設定先ではない。",
      "× Deployment pipelineのルールは環境差分の管理用。",
      "× Endorsementはデータ資産の信頼度表示用。"
    ]
  },
  "PA50-16": {
    "cue": "「Warehouse内の特定テーブルだけSELECT」→オブジェクト権限",
    "analysis": "ワークスペース全体を広げず、必要なSQLオブジェクトへ権限を限定する。既存の広い権限は別途点検。",
    "choices": [
      "× MemberはWorkspace全体の強い権限を追加する。",
      "× UNMASKはDDM解除でSELECT対象テーブルの制限ではない。",
      "○ FactSalesへのSELECTを必要な主体に限定する。ただし他のGRANT経路も確認する。",
      "× Fabric administratorは管理権限が過大。"
    ]
  },
  "PA50-17": {
    "cue": "「末尾4桁」「T-SQLでマスク定義」→ADD MASKED WITH partial",
    "analysis": "関数の意味だけでなく、ALTER COLUMNでマスクを付ける構文まで見る。",
    "choices": [
      "○ ALTER COLUMN ADD MASKED WITHとpartial(0,...,4)で要件に沿う。",
      "× email()はメール形式向けのマスクなので末尾4桁保持にならない。",
      "× publicへのUNMASKは全員に解除権限を与える危険な設定。",
      "× DROP COLUMNは列そのものを削除する。"
    ]
  },
  "PA50-18": {
    "cue": "「一般ユーザーに本番アイテム編集させない」→Workspace role",
    "analysis": "編集を禁止するにはラベル色ではなく、Contributor等の編集可能ロールを見直す。",
    "choices": [
      "○ Workspaceロール・アイテム権限を見直し、一般ユーザーを閲覧権限に抑える。",
      "× ラベル色は機密分類を示すもので編集許可の直接制御ではない。",
      "× Retry回数はパイプライン実行設定。",
      "× executor数はSpark性能設定で編集権限には関係しない。"
    ]
  },
  "PA50-19": {
    "cue": "「DDM運用」「承認者のみ元値」→定義・UNMASK・非特権テスト",
    "analysis": "DDMは完全な情報保護の代替ではないため、元値閲覧と一般表示を両方検証する。",
    "choices": [
      "○ 列の性質に合わせたマスク関数を定義する。",
      "○ UNMASKは元値を見る必要があるユーザーにだけ与える。",
      "○ 一般ユーザーとして実行し、本当にマスクされるか検証する。",
      "× DDMだけで他のアクセス制御不要とは言えない。",
      "× 全員UNMASKにするとマスクが実質無効になる。"
    ]
  },
  "PA50-20": {
    "cue": "「同じPipelineを複数環境/テーブルで再利用」→parameters＋dynamic expressions",
    "analysis": "可変値を外出しして、Activityの参照式に埋め込む。",
    "choices": [
      "○ Pipeline parametersで環境や対象テーブルの入力を定義する。",
      "○ Dynamic expressionsで実行時に入力値を接続先/パス等へ反映する。",
      "× 完全複製は修正漏れと保守費用を増やす。",
      "× 固定値の直書きでは環境差分を安全に切り替えにくい。"
    ]
  },
  "PA50-21": {
    "cue": "「IoTイベントを継続変換」「Deltaへ低遅延書込」→Structured Streaming",
    "analysis": "データが流れ続ける以上、日次バッチではなくストリーム処理エンジンが必要。",
    "choices": [
      "× 日次Copyは継続的な低遅延変換にならない。",
      "○ Structured Streamingは継続到着データを処理しDeltaへ書き込める。",
      "× Deployment pipelineは環境間のコンテンツ昇格用。",
      "× Database ProjectはDBスキーマ管理用。"
    ]
  },
  "PA50-22": {
    "cue": "「大量CSV」「Warehouse」「一括ロード」→COPY INTO＋対象指定＋拒否行対応",
    "analysis": "T-SQLの一括取り込みとエラー調査を組み合わせる。wildcardは便利だが対象が非常に多いと性能注意。",
    "choices": [
      "○ COPY INTOはWarehouseへの高スループット一括取込に使える。",
      "○ wildcardで複数ファイルを指定できる。ただし大量展開なら個別ロケーション列挙も検討。",
      "○ ERRORFILEなどで拒否行を調査でき、障害原因を追いやすい。",
      "× 1行ずつINSERTは大量取込で非効率。",
      "× Adminを増やしてもファイル取込方式の改善にはならない。"
    ]
  },
  "PA50-23": {
    "cue": "「新しいファイルだけ」「障害後に続きから」→stream＋checkpoint",
    "analysis": "差分読込と再開位置の保持が重要。毎回全部読む設計ではない。",
    "choices": [
      "○ ファイルストリームと永続checkpointで処理進捗を保持して再開できる。",
      "× 毎回全件バッチは処理済みファイルを再読込する。",
      "× Deployment pipelineはデプロイ管理で差分検知エンジンではない。",
      "× RLSは行アクセス制御で処理済みファイル判定をしない。"
    ]
  },
  "PA50-24": {
    "cue": "「多様な形式」「PySparkとSQL両方」→Lakehouse",
    "analysis": "FilesとDelta tablesを持ち、SparkとSQL endpointから扱える保存先を探す。",
    "choices": [
      "○ Lakehouseはファイル/Deltaを保持し、SparkとSQL分析の両方を利用できる。",
      "× Deployment pipelineはデータストアではない。",
      "× Dataflowは変換機能であり、多様なデータの保存先そのものではない。",
      "× Sensitivity labelは分類ラベルで保存先ではない。"
    ]
  },
  "PA50-25": {
    "cue": "「Event Hubs→不要列削除・計算列→KQL DB」→Eventstream",
    "analysis": "保存前のストリームをローコード変換して宛先へ送る経路の機能を選ぶ。",
    "choices": [
      "× Database Projectはスキーマの開発・版管理でリアルタイム経路を処理しない。",
      "× Deployment pipelineは環境昇格のための機能。",
      "○ Eventstreamは取り込み中のイベントに変換をかけて宛先へルーティングできる。",
      "× Workspace roleはアクセス権の制御でデータ変換ではない。"
    ]
  }
});

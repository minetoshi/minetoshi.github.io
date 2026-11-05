// Original questions from DP-700 Visual Guide JA, version 3.
window.DP700_QUESTIONS.push(...[
  {
    "id": "PDF-M1-01",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 101,
    "domain": "分析ソリューションの実装と管理",
    "skill": "SQLのRLS・CLS・オブジェクト権限",
    "difficulty": "Medium",
    "type": "single",
    "question": "SQLで、利用者ごとに担当契約の行だけ返したい。最も直接的な制御はどれか。",
    "code": "",
    "choices": [
      "列のDynamic data maskingだけ",
      "RLSの条件関数とSECURITY POLICY",
      "SELECT対象列へのCLSだけ",
      "Certifiedの設定"
    ],
    "choiceNotes": [
      "値の表示を伏せる制御で、担当外の行を除外しない。",
      "行条件をSQLエンジン側で適用する。",
      "列の許可であり、同じ列内の担当行を絞らない。",
      "信頼性の表示であり行条件を適用しない。"
    ],
    "answers": [
      1
    ],
    "explanation": "行条件をSQLエンジン側で適用する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  },
  {
    "id": "PDF-M1-02",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 129,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Spark最適化：Shuffle・Skew・Broadcast・Cache",
    "difficulty": "Medium",
    "type": "single",
    "question": "Sparkで大部分のタスクは終わり、特定キーを扱う1タスクだけ極端に遅い。最初に疑うべきものはどれか。",
    "code": "",
    "choices": [
      "Skewとキー別のデータ分布",
      "機密ラベルの付け忘れ",
      "SQL endpointの更新制約",
      "すべてのタスクのCPU不足だけ"
    ],
    "choiceNotes": [
      "特定キーへ処理が集中する現象に合う。",
      "タスクの偏りとは関係が異なる。",
      "Sparkタスクのキー集中の説明にならない。",
      "一部のみ遅い観測を十分に説明しない。"
    ],
    "answers": [
      0
    ],
    "explanation": "特定キーへ処理が集中する現象に合う。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  {
    "id": "PDF-M1-03",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 102,
    "domain": "分析ソリューションの実装と管理",
    "skill": "OneLake：ファイル・表・列・行を守る",
    "difficulty": "Medium",
    "type": "single",
    "question": "非構造化ファイルを含むOneLakeの特定フォルダーだけへのアクセスを与えたい。最初に検討する粒度はどれか。",
    "code": "",
    "choices": [
      "フォルダー・オブジェクトへの許可",
      "全WorkspaceへのContributor",
      "SQLの行条件だけ",
      "Power BIモデルのRLSだけ"
    ],
    "choiceNotes": [
      "非構造化データの範囲に合う。",
      "必要なフォルダーに比べて権限が広すぎる。",
      "非構造化フォルダーに表の行条件を適用する設計ではない。",
      "対象のファイル読取経路を保護する保証がない。"
    ],
    "answers": [
      0
    ],
    "explanation": "非構造化データの範囲に合う。",
    "source": "https://learn.microsoft.com/en-us/training/modules/secure-data-access-in-fabric/4-apply-granular-permissions"
  },
  {
    "id": "PDF-M1-04",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 111,
    "domain": "データの取り込みと変換",
    "skill": "ディメンション・非正規化・遅着データ",
    "difficulty": "Medium",
    "type": "single",
    "question": "顧客が転居しても、過去の取引は取引当時の住所で分析したい。適切な設計はどれか。",
    "code": "",
    "choices": [
      "現在の住所で全履歴を上書き",
      "SCD Type 2と有効期間での照合",
      "住所のNULLをすべて空文字にする",
      "最新の代理キーだけを全取引へ結合"
    ],
    "choiceNotes": [
      "過去住所を失う。",
      "属性履歴と当時の取引を関連付ける。",
      "履歴管理の要件を満たさない。",
      "過去取引も現在属性へ結び付く危険がある。"
    ],
    "answers": [
      1
    ],
    "explanation": "属性履歴と当時の取引を関連付ける。",
    "source": "https://learn.microsoft.com/en-us/training/modules/describe-medallion-architecture/2-describe-medallion-architecture"
  },
  {
    "id": "PDF-M1-05",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 121,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Notebookのエラー：DriverとExecutor",
    "difficulty": "Medium",
    "type": "single",
    "question": "大きなDataFrameにcollect()を実行した直後、Driverがメモリ不足になった。第一の改善はどれか。",
    "code": "",
    "choices": [
      "同じcollectを高速で再試行",
      "Driverへ全件を集める処理を見直す",
      "列名を変更する",
      "Executorを増やせば必ず解決"
    ],
    "choiceNotes": [
      "同じメモリ問題を繰り返す。",
      "分散処理を保ち不要な集約を避ける。",
      "データ集約量の問題に対応しない。",
      "Driverへ集める構造は残る。"
    ],
    "answers": [
      1
    ],
    "explanation": "分散処理を保ち不要な集約を避ける。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  {
    "id": "PDF-M1-06",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 127,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Pipeline最適化：並列化の階層と上限",
    "difficulty": "Medium",
    "type": "single",
    "question": "Copyの並列度を上げるとソースDBのCPUが飽和し、全体時間が悪化した。適切な対応はどれか。",
    "code": "",
    "choices": [
      "CacheをすべてのNotebookへ追加",
      "同時要求と並列度を抑え、段階的に再測定する",
      "すべての並列度を最大へ固定",
      "エラーが無いので改善済みとする"
    ],
    "choiceNotes": [
      "ソースDBのCopy負荷へ直接対応しない。",
      "ボトルネックであるソースの負荷を制御する。",
      "ソース負荷をさらに増やす危険がある。",
      "性能の悪化を無視している。"
    ],
    "answers": [
      1
    ],
    "explanation": "ボトルネックであるソースの負荷を制御する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/copy-activity-performance-and-scalability-guide"
  },
  {
    "id": "PDF-M1-07",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 113,
    "domain": "データの取り込みと変換",
    "skill": "PySpark：型・NULL・重複・順位",
    "difficulty": "Medium",
    "type": "single",
    "question": "契約IDごとに更新時刻が最新の行を残したい。同時刻の更新には連番seqがある。適切な処理はどれか。",
    "code": "",
    "choices": [
      "ID別Windowで時刻降順・seq降順に順位を付け1位を選ぶ",
      "IDだけでdropDuplicates",
      "全体を時刻降順にして先頭1行だけ残す",
      "PremiumだけでGROUP BY"
    ],
    "choiceNotes": [
      "最新と同時刻の優先を定義できる。",
      "どの更新を採用するかを最新順で保証しない。",
      "全契約のうち1行しか残らない。",
      "契約ごとの最新を選ぶ条件になっていない。"
    ],
    "answers": [
      0
    ],
    "explanation": "最新と同時刻の優先を定義できる。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/4-dataframe"
  },
  {
    "id": "PDF-M1-08",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 117,
    "domain": "データの取り込みと変換",
    "skill": "Structured Streaming：窓・状態・再開位置",
    "difficulty": "Medium",
    "type": "single",
    "question": "Sparkのストリーミングを障害前の進捗・状態から再開したい。継続して保持すべきものはどれか。",
    "code": "",
    "choices": [
      "Notebookの表示結果だけ",
      "同じ出力先の名前だけ",
      "そのクエリのCheckpoint",
      "Watermarkの値だけを手書きで保存"
    ],
    "choiceNotes": [
      "再開に必要な状態を保持しない。",
      "入力の再開位置・状態まで保存しない。",
      "進捗と状態を永続化する。",
      "Checkpointの進捗・状態を代替しない。"
    ],
    "answers": [
      2
    ],
    "explanation": "進捗と状態を永続化する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing"
  },
  {
    "id": "PDF-M1-09",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 107,
    "domain": "データの取り込みと変換",
    "skill": "保存先・SQL実行先・加工手段を選ぶ",
    "difficulty": "Medium",
    "type": "single",
    "question": "T-SQLで表データをINSERT・UPDATEしながらSQL中心のDWHを構成したい。候補として最も適切なのはどれか。",
    "code": "",
    "choices": [
      "Fabric Warehouse",
      "Shortcutのみ",
      "LakehouseのSQL analytics endpointだけ",
      "Eventstreamのみ"
    ],
    "choiceNotes": [
      "T-SQLによるDWHの更新・集計に合う。",
      "参照リンクでありDWHの更新処理自体を実装しない。",
      "Delta表データへの読取用で、同じDMLを実行する更新先ではない。",
      "継続イベントの処理でありSQL中心DWHの表更新先ではない。"
    ],
    "answers": [
      0
    ],
    "explanation": "T-SQLによるDWHの更新・集計に合う。",
    "source": "https://learn.microsoft.com/en-us/training/modules/get-started-lakehouses/2-fabric-lakehouse"
  },
  {
    "id": "PDF-M1-10",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 96,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Sparkの設定：計算資源と実行環境を分ける",
    "difficulty": "Medium",
    "type": "single",
    "question": "複数のNotebookでRuntimeとPythonライブラリの構成を揃えたい。第一に管理すべきものはどれか。",
    "code": "",
    "choices": [
      "Spark poolのノード数のみ",
      "Domainへの所属のみ",
      "Environment",
      "PipelineのRetry回数"
    ],
    "choiceNotes": [
      "計算資源は変わるがライブラリ構成を揃える目的を満たさない。",
      "業務領域での整理であり実行環境の設定ではない。",
      "Runtime・依存ライブラリ等の実行環境を管理する。",
      "失敗時の再試行であり実行環境を統一しない。"
    ],
    "answers": [
      2
    ],
    "explanation": "Runtime・依存ライブラリ等の実行環境を管理する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/2-spark"
  },
  {
    "id": "PDF-M1-11",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 124,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventstreamのエラーをノード別に調べる",
    "difficulty": "Medium",
    "type": "single",
    "question": "Eventstreamで数値宛先へ文字列abcを出すと失敗する。優先して確認する組み合わせはどれか。",
    "code": "",
    "choices": [
      "Data conversion errorsと値・宛先列型",
      "SQL RLSの所有者条件のみ",
      "Gitブランチ名のみ",
      "DomainとCertified"
    ],
    "choiceNotes": [
      "変換の不整合に対応する。",
      "観測された型変換問題と異なる。",
      "実行データの型を説明しない。",
      "分類と信頼表示は型不正を修正しない。"
    ],
    "answers": [
      0
    ],
    "explanation": "変換の不整合に対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor"
  },
  {
    "id": "PDF-M1-12",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 114,
    "domain": "データの取り込みと変換",
    "skill": "JOIN・集計・SQLとKQLの読み方",
    "difficulty": "Medium",
    "type": "single",
    "question": "契約1行の金額1000を商品マスターへ結合したところ、同じ商品キーがマスターに2行あった。両方一致するJOIN後の合計はどうなり得るか。",
    "code": "",
    "choices": [
      "必ずエラー",
      "2000",
      "必ず1000",
      "必ず0"
    ],
    "choiceNotes": [
      "通常のJOINは非一意キーだけで必ず失敗するわけではない。",
      "元の明細が2行に増えてからSUMされる。",
      "JOIN先の重複を自動吸収するとは限らない。",
      "一致する行があるのでその推論は成り立たない。"
    ],
    "answers": [
      1
    ],
    "explanation": "元の明細が2行に増えてからSUMされる。",
    "source": "https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-notebooks/4-combine-aggregate"
  },
  {
    "id": "PDF-M1-13",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 98,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Git：変更履歴と実行データを区別する",
    "difficulty": "Medium",
    "type": "single",
    "question": "対応するFabric Item定義の変更履歴を残し、差分をレビューしたい。最も直接的な仕組みはどれか。",
    "code": "",
    "choices": [
      "定期的なCopy activity",
      "Deployment pipelineだけ",
      "Git integration",
      "LakehouseのVACUUM"
    ],
    "choiceNotes": [
      "データ転送は定義の履歴管理とは目的が違う。",
      "配備の管理であり、単独でGitの変更履歴を代替しない。",
      "定義の履歴・差分と共同作業を管理する。",
      "未参照ファイルの整理であり定義のレビューではない。"
    ],
    "answers": [
      2
    ],
    "explanation": "定義の履歴・差分と共同作業を管理する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/implement-cicd-in-fabric/3-implement-version-control-and-git-integration"
  },
  {
    "id": "PDF-M1-14",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 130,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventhouse・Eventstreamの性能を分ける",
    "difficulty": "Medium",
    "type": "single",
    "question": "Eventhouseで1年分を保持し、参照の大部分は直近7日である。適切な考え方はどれか。",
    "code": "",
    "choices": [
      "保持を1年にすると全件が必ず常時高速",
      "保持期間はSQL RLSだけで設定する",
      "保持要件とキャッシュ要件を分ける",
      "キャッシュを7日にすると必ず8日目以降を削除"
    ],
    "choiceNotes": [
      "キャッシュ・クエリ・負荷の条件を無視している。",
      "RLSは行の参照条件であり保存期間の設定ではない。",
      "データの保存期間と高速アクセス対象は別である。",
      "キャッシュと保持を混同している。"
    ],
    "answers": [
      2
    ],
    "explanation": "データの保存期間と高速アクセス対象は別である。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse"
  },
  {
    "id": "PDF-M1-15",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 103,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Mask・機密ラベル・推奨表示の違い",
    "difficulty": "Medium",
    "type": "single",
    "question": "利用者が信頼できるデータ製品を見つけやすくすることが目的である。アクセス権はすでに設定済み。適切な候補はどれか。",
    "code": "",
    "choices": [
      "Pipelineの失敗依存",
      "RLSの条件追加",
      "EndorsementのPromotedやCertified",
      "DeltaのmergeSchema"
    ],
    "choiceNotes": [
      "実行制御であり信頼性の表示ではない。",
      "行制限であり信頼性の表示ではない。",
      "信頼性の識別を助ける。",
      "列追加等のスキーマ処理であり用途が違う。"
    ],
    "answers": [
      2
    ],
    "explanation": "信頼性の識別を助ける。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking"
  },
  {
    "id": "PDF-M1-16",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 110,
    "domain": "データの取り込みと変換",
    "skill": "全量・差分・再実行の設計",
    "difficulty": "Medium",
    "type": "single",
    "question": "差分ロードの宛先書込が成功し、その後の境界更新が失敗した。次回の再送で二重計上を防ぐ設計はどれか。",
    "code": "",
    "choices": [
      "再送を必ずAppendする",
      "次回は境界を大きく進めて読み飛ばす",
      "宛先でVACUUMだけ実行",
      "キー照合や対象範囲の置換で再送を吸収する"
    ],
    "choiceNotes": [
      "同じ明細が再追加される危険がある。",
      "未処理データの欠落を招く。",
      "現行の重複行を解消する操作ではない。",
      "同じ入力でも結果を正しく保つ設計である。"
    ],
    "answers": [
      3
    ],
    "explanation": "同じ入力でも結果を正しく保つ設計である。",
    "source": "https://learn.microsoft.com/en-us/training/modules/load-data-into-microsoft-fabric-data-warehouse/2-explore-data-load-strategies"
  },
  {
    "id": "PDF-M1-17",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 122,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "モデル更新の監視・通知・アラート",
    "difficulty": "Medium",
    "type": "single",
    "question": "Warehouseの加工成功後、Import型モデルのレポートだけが古い。次に確認すべきものはどれか。",
    "code": "",
    "choices": [
      "SQLの表名を直ちに変更",
      "LakehouseのVACUUM",
      "Warehouse成功だけを根拠に利用者の誤解とする",
      "対象セマンティックモデルの更新履歴"
    ],
    "choiceNotes": [
      "更新失敗の証拠がないまま別の変更を加える。",
      "Importモデルの更新状況の確認にならない。",
      "モデル更新が別段階であることを見落としている。",
      "上流更新後のモデルへの反映を確認する。"
    ],
    "answers": [
      3
    ],
    "explanation": "上流更新後のモデルへの反映を確認する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/create-alerts-for-pipeline-runs"
  },
  {
    "id": "PDF-M1-18",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 120,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Dataflowのエラー：変換と宛先を分ける",
    "difficulty": "Medium",
    "type": "single",
    "question": "Dataflowのプレビューは成功し、更新時の宛先Activityだけが権限エラーになった。まず何を調べるか。",
    "code": "",
    "choices": [
      "宛先への接続主体と書込権限",
      "プレビュー成功なので問題なしとする",
      "表示列の順序だけ",
      "Query foldingを必ず無効化"
    ],
    "choiceNotes": [
      "観測された失敗段階の原因に対応する。",
      "宛先への本番書込は別の検証である。",
      "権限エラーの根本原因を扱っていない。",
      "権限不足を解消しない。"
    ],
    "answers": [
      0
    ],
    "explanation": "観測された失敗段階の原因に対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  },
  {
    "id": "PDF-M1-19",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 100,
    "domain": "分析ソリューションの実装と管理",
    "skill": "WorkspaceとItem：最小権限の設計",
    "difficulty": "Medium",
    "type": "single",
    "question": "利用者は1つのItemの限定データを読むだけで、Itemを変更する必要はない。最小権限の設計として適切なのはどれか。",
    "code": "",
    "choices": [
      "Contributorを与えてからOneLakeで必ず狭める",
      "Memberを与えるのが常に最小",
      "Domainへ所属させれば参照許可は不要",
      "Item共有と必要な細かなデータ許可を検討する"
    ],
    "choiceNotes": [
      "広いWorkspaceロールはOneLakeの細かな制限の対象外となる。",
      "変更等の不要な権限まで与える。",
      "Domain所属だけではItemのアクセス許可にならない。",
      "閲覧範囲に合わせて限定する。"
    ],
    "answers": [
      3
    ],
    "explanation": "閲覧範囲に合わせて限定する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/secure-data-access-in-fabric/3-configure-workspace-and-item-permissions"
  },
  {
    "id": "PDF-M1-20",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 116,
    "domain": "データの取り込みと変換",
    "skill": "Eventstream：流れを処理するエンジン",
    "difficulty": "Medium",
    "type": "single",
    "question": "イベントを「固定5分で重ならない範囲」に分けたい。EventstreamのSQL operatorで対応する窓はどれか。",
    "code": "",
    "choices": [
      "TumblingWindow",
      "日付ごとにdropDuplicates",
      "Checkpointのパス変更",
      "HoppingWindowを10分長・5分間隔で使用"
    ],
    "choiceNotes": [
      "固定長で重ならない窓に対応する。",
      "時間集計窓を定義する処理ではない。",
      "進捗保存先であり集計窓ではない。",
      "隣接する窓が重なる。"
    ],
    "answers": [
      0
    ],
    "explanation": "固定長で重ならない窓に対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  {
    "id": "PDF-M1-21",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 105,
    "domain": "分析ソリューションの実装と管理",
    "skill": "動的な式・Notebookパラメーター",
    "difficulty": "Medium",
    "type": "code",
    "question": "run_dateが2026-11-01のとき、次のPipeline式が返す値はどれか。",
    "code": "@concat('Files/', pipeline().parameters.run_date, '/contracts.csv')",
    "choices": [
      "現在日時に対応するパス",
      "Files/run_date/contracts.csv",
      "Files/contracts.csv/2026-11-01",
      "Files/2026-11-01/contracts.csv"
    ],
    "choiceNotes": [
      "現在時刻を参照する式ではない。",
      "パラメーター名ではなく値を参照する。",
      "引数の順序が異なる。",
      "concatは指定順に文字列を連結する。"
    ],
    "answers": [
      3
    ],
    "explanation": "concatは指定順に文字列を連結する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/expression-language"
  },
  {
    "id": "PDF-M1-22",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 108,
    "domain": "データの取り込みと変換",
    "skill": "Shortcut・Mirroring・Copyの選び分け",
    "difficulty": "Medium",
    "type": "single",
    "question": "対応する別のLakehouseのDeltaデータを、複製を増やさず参照したい。必要な権限はある。第一の候補はどれか。",
    "code": "",
    "choices": [
      "毎時の全量Copy",
      "DB Mirroringによる継続複製",
      "DataflowのAppend",
      "Shortcut"
    ],
    "choiceNotes": [
      "複製が増え、要件に合わない。",
      "この要件は既存Deltaデータの参照であり継続複製を求めていない。",
      "結果を書き込むため複製を避ける目的と違う。",
      "リンクにより参照する。"
    ],
    "answers": [
      3
    ],
    "explanation": "リンクにより参照する。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  },
  {
    "id": "PDF-M1-23",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 126,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Lakehouse最適化：OPTIMIZE・VACUUM・V-Order",
    "difficulty": "Medium",
    "type": "single",
    "question": "Lakehouseの現行表に重複行はなく、小さいデータファイルが大量にあり読取が遅い。最初の候補はどれか。",
    "code": "",
    "choices": [
      "RLSを増やすだけ",
      "同じデータをAppendし続ける",
      "VACUUMで現行の全ファイルを削除",
      "OPTIMIZE等で小ファイルをまとめる"
    ],
    "choiceNotes": [
      "ファイル数を減らす操作ではない。",
      "ファイル増加と重複の原因になり得る。",
      "現行データを消す操作ではなく、目的も違う。",
      "ファイル読取の負担軽減に対応する。"
    ],
    "answers": [
      3
    ],
    "explanation": "ファイル読取の負担軽減に対応する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/work-delta-lake-tables-fabric/3b-optimize-delta-tables"
  },
  {
    "id": "PDF-M1-24",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 112,
    "domain": "データの取り込みと変換",
    "skill": "Dataflow：Folding・更新方式・下流への影響",
    "difficulty": "Medium",
    "type": "single",
    "question": "元DB100万行のうち必要なのは当月1万行だけ。コネクターと変換が対応する場合、転送量を減らす候補はどれか。",
    "code": "",
    "choices": [
      "機密ラベルだけを変更",
      "全量転送後に表示だけ非表示",
      "Dataflowの宛先をAppendに変更するだけ",
      "ソースへ条件を委譲するQuery folding"
    ],
    "choiceNotes": [
      "行の転送範囲を変更しない。",
      "不要な転送を減らさない。",
      "ソースからの読取量を直接減らさない。",
      "必要な行を元DB側で絞り込める。"
    ],
    "answers": [
      3
    ],
    "explanation": "必要な行を元DB側で絞り込める。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflow-gen2-performance-best-practices"
  },
  {
    "id": "PDF-M1-25",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 109,
    "domain": "データの取り込みと変換",
    "skill": "Copy：接続・マッピング・宛先を確認する",
    "difficulty": "Medium",
    "type": "single",
    "question": "Copyは成功したが、金額列に文字列と数値が混在し、下流の集計で失敗した。まず調べるべきことはどれか。",
    "code": "",
    "choices": [
      "成功したので上流の型は調べない",
      "入力値・列型・マッピングと変換",
      "並列度だけを最大にする",
      "Domainを変更する"
    ],
    "choiceNotes": [
      "転送成功は業務品質や下流型の正しさを保証しない。",
      "エラーの具体的な対象を確認できる。",
      "型の不整合を修正しない。",
      "値と型の問題を解消しない。"
    ],
    "answers": [
      1
    ],
    "explanation": "エラーの具体的な対象を確認できる。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-data-factory-pipelines-fabric/2-understand-fabric-pipeline"
  },
  {
    "id": "PDF-M1-26",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 99,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Deploymentとdatabase project",
    "difficulty": "Medium",
    "type": "single",
    "question": "Warehouseの表定義を開発から本番へ配備した。開発の明細行も自動的に本番へ複製されたと判断してよいか。",
    "code": "",
    "choices": [
      "Gitへcommitした時点で全行が同期される",
      "本番の表をCertifiedにすると全行が同期される",
      "判断できない。定義と行データの移行を分けて確認する",
      "同じ表名なら全行も同一になる"
    ],
    "choiceNotes": [
      "Gitの定義管理とデータ転送は別である。",
      "信頼性の表示はデータ移行を実行しない。",
      "スキーマ配備は全データのロードと同義ではない。",
      "表名だけで行データは揃わない。"
    ],
    "answers": [
      2
    ],
    "explanation": "スキーマ配備は全データのロードと同義ではない。",
    "source": "https://learn.microsoft.com/en-us/training/modules/implement-cicd-in-fabric/4-implement-deployment-pipelines"
  },
  {
    "id": "PDF-M1-27",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 97,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Domain・OneLake・Airflowの設定範囲",
    "difficulty": "Medium",
    "type": "single",
    "question": "Airflowの本番DAGで、常時稼働とノード・autoscaleの調整を求められた。Workspaceの設定で検討すべきものはどれか。",
    "code": "",
    "choices": [
      "Custom pool",
      "Domainの関連付け",
      "Starter poolの既定動作のみ",
      "Notebookのsession tagのみ"
    ],
    "choiceNotes": [
      "常時稼働やノード等の調整に対応する。",
      "業務管理の設定でありRuntimeの稼働方式を変更しない。",
      "未使用時の停止を含む既定環境で、求める調整と異なる。",
      "Sparkセッション再利用の設定でありAirflow poolではない。"
    ],
    "answers": [
      0
    ],
    "explanation": "常時稼働やノード等の調整に対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  },
  {
    "id": "PDF-M1-28",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 119,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Pipeline・Copyの監視と再実行",
    "difficulty": "Medium",
    "type": "single",
    "question": "Pipelineが失敗した。原因調査の最初の行動として最も適切なのはどれか。",
    "code": "",
    "choices": [
      "対象RunのActivity入力・出力・エラー詳細を開く",
      "すべてのActivityを根拠なく再実行",
      "直ちに全体のCapacityを増やす",
      "最後の成功Runだけを確認して終了"
    ],
    "choiceNotes": [
      "失敗箇所と具体的な証拠を得られる。",
      "原因や反映済み範囲が分からず重複も招く。",
      "資源不足と確認できていない。",
      "今回の失敗条件を確認できない。"
    ],
    "answers": [
      0
    ],
    "explanation": "失敗箇所と具体的な証拠を得られる。",
    "source": "https://learn.microsoft.com/en-us/training/modules/monitor-fabric-items/"
  },
  {
    "id": "PDF-M1-29",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 123,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventhouseの取り込み・実行エラー",
    "difficulty": "Medium",
    "type": "single",
    "question": "EventhouseへのCSV取り込みで引用符不正のPermanentエラーが確認できた。適切な対処はどれか。",
    "code": "",
    "choices": [
      "クエリの時間範囲だけ変更",
      "キャッシュ期間だけ拡大",
      "同じ壊れたファイルを無制限再送",
      "入力形式を修正し、対象範囲を確認して再取り込み"
    ],
    "choiceNotes": [
      "取り込み形式エラーを修正しない。",
      "入力の構文不正を直さない。",
      "入力が変わらず失敗を繰り返す。",
      "恒久的なデータ問題を直す。"
    ],
    "answers": [
      3
    ],
    "explanation": "恒久的なデータ問題を直す。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse"
  },
  {
    "id": "PDF-M1-30",
    "origin": "pdf90",
    "pdfExam": 1,
    "pdfPage": 104,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Pipelineで順序を制御しNotebookで加工する",
    "difficulty": "Medium",
    "type": "single",
    "question": "Copyが成功した場合だけNotebookを起動し、Copyが失敗した場合は通知したい。適切な構成はどれか。",
    "code": "",
    "choices": [
      "NotebookをCopyより先に実行",
      "どちらも完了依存で接続",
      "成功依存でNotebook、失敗依存で通知へ接続",
      "どちらも成功依存で接続"
    ],
    "choiceNotes": [
      "データ到着後に加工する要件に反する。",
      "Copy失敗時にもNotebookが動く構成になり得る。",
      "求める分岐に対応する。",
      "失敗時の通知条件を満たさない。"
    ],
    "answers": [
      2
    ],
    "explanation": "求める分岐に対応する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-data-factory-pipelines-fabric/2-understand-fabric-pipeline"
  },
  {
    "id": "PDF-M2-01",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 110,
    "domain": "データの取り込みと変換",
    "skill": "全量・差分・再実行の設計",
    "difficulty": "Medium",
    "type": "single",
    "question": "更新時刻が前回境界より大きい行だけを読む差分処理を実装した。ソースで削除された契約も宛先から消す必要がある。何が不足するか。",
    "code": "",
    "choices": [
      "SUMの桁数を増やすだけ",
      "CDC・削除イベント・照合等による削除検出",
      "Appendの回数を増やすだけ",
      "宛先VACUUMだけ"
    ],
    "choiceNotes": [
      "削除の検出を追加しない。",
      "消えた行を通常の更新時刻条件だけでは読み出せない。",
      "削除された宛先行を取り除かない。",
      "現行表に残る契約行を業務条件で削除しない。"
    ],
    "answers": [
      1
    ],
    "explanation": "消えた行を通常の更新時刻条件だけでは読み出せない。",
    "source": "https://learn.microsoft.com/en-us/training/modules/load-data-into-microsoft-fabric-data-warehouse/2-explore-data-load-strategies"
  },
  {
    "id": "PDF-M2-02",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 116,
    "domain": "データの取り込みと変換",
    "skill": "Eventstream：流れを処理するエンジン",
    "difficulty": "Medium",
    "type": "single",
    "question": "Eventstreamで「直近10分を5分間隔で計算」したい。SQL operatorで最も合う例はどれか。",
    "code": "",
    "choices": [
      "Sparkのwindow構文をそのまま貼り付ける",
      "Checkpointの保持期間を10分へ変更",
      "HoppingWindow(minute, 10, 5)",
      "TumblingWindow(minute, 5)"
    ],
    "choiceNotes": [
      "別エンジンの構文を無条件に置換できない。",
      "集計窓を定義する設定ではない。",
      "窓長10分、移動間隔5分で重なる。",
      "重ならない5分窓であり直近10分ではない。"
    ],
    "answers": [
      2
    ],
    "explanation": "窓長10分、移動間隔5分で重なる。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/overview"
  },
  {
    "id": "PDF-M2-03",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 111,
    "domain": "データの取り込みと変換",
    "skill": "ディメンション・非正規化・遅着データ",
    "difficulty": "Medium",
    "type": "single",
    "question": "SCD Type 2の期間は開始を含み終了を含まない。11/1に新住所へ変更する場合、11/1取引を照合する条件はどれか。",
    "code": "",
    "choices": [
      "最大の代理キーだけ",
      "OrderDate BETWEEN ValidFrom AND ValidTo",
      "OrderDate >= ValidFrom AND OrderDate < ValidTo",
      "OrderDate <= ValidFromだけ"
    ],
    "choiceNotes": [
      "取引日が過去のケースで当時の属性を選べない。",
      "両端を含み旧期間の終了にも一致する可能性がある。",
      "境界の二重一致を避け、11/1は新期間に一致する。",
      "開始以後の正しい期間を選べない。"
    ],
    "answers": [
      2
    ],
    "explanation": "境界の二重一致を避け、11/1は新期間に一致する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/describe-medallion-architecture/2-describe-medallion-architecture"
  },
  {
    "id": "PDF-M2-04",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 125,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "T-SQLのエラーとQuery insights",
    "difficulty": "Medium",
    "type": "single",
    "question": "重いクエリを実行した直後、Query insights履歴に見当たらない。最も合理的な説明を含む対応はどれか。",
    "code": "",
    "choices": [
      "未実行と決めつけ直ちに同じ更新を再実行",
      "履歴の反映遅延と現在実行中の状況を分けて確認",
      "SQLは実行履歴を持たないと判断",
      "すべての権限を削除"
    ],
    "choiceNotes": [
      "反映遅延を見落とし二重更新を招き得る。",
      "履歴に無いことだけでは未実行と断定できない。",
      "Query insightsの機能と矛盾する。",
      "履歴確認のための合理的な対応ではない。"
    ],
    "answers": [
      1
    ],
    "explanation": "履歴に無いことだけでは未実行と断定できない。",
    "source": "https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-tsql/2-transform-queries"
  },
  {
    "id": "PDF-M2-05",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 122,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "モデル更新の監視・通知・アラート",
    "difficulty": "Medium",
    "type": "single",
    "question": "特定Activityの失敗時だけTeamsへ通知する最も直接的な構成はどれか。",
    "code": "",
    "choices": [
      "失敗依存でTeams通知Activityへ接続",
      "Domainを変更",
      "通知設定を保存するだけで到達検証は省く",
      "成功依存でのみ通知"
    ],
    "choiceNotes": [
      "Activity単位の失敗イベントに対応する。",
      "実行時通知を構成しない。",
      "接続・宛先・有効化を検証できない。",
      "失敗時だけという要件を満たさない。"
    ],
    "answers": [
      0
    ],
    "explanation": "Activity単位の失敗イベントに対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/create-alerts-for-pipeline-runs"
  },
  {
    "id": "PDF-M2-06",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 120,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Dataflowのエラー：変換と宛先を分ける",
    "difficulty": "Medium",
    "type": "single",
    "question": "Dataflowで突然ある表だけ更新失敗した。元の文字列列に「未定」が入り数値変換が失敗している。適切な対応はどれか。",
    "code": "",
    "choices": [
      "宛先をCertifiedに変更",
      "全件を無条件に0へ置換",
      "同じ更新を無制限にRetry",
      "失敗値を確認し、隔離・除外・置換の業務ルールを実装"
    ],
    "choiceNotes": [
      "変換エラーと異なる機能である。",
      "不明とゼロを同一視し金額を壊す可能性がある。",
      "恒久的な値の問題を修正しない。",
      "型と不正値の意味を確認して対処する。"
    ],
    "answers": [
      3
    ],
    "explanation": "型と不正値の意味を確認して対処する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  },
  {
    "id": "PDF-M2-07",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 117,
    "domain": "データの取り込みと変換",
    "skill": "Structured Streaming：窓・状態・再開位置",
    "difficulty": "Medium",
    "type": "single",
    "question": "Sparkの最大観測イベント時刻は10:20、遅延許容は10分。概念上10:10付近より古い10:05のイベントについて正しい説明はどれか。",
    "code": "",
    "choices": [
      "処理される保証はないが、常に即廃棄とも断定しない",
      "必ず結果へ反映される",
      "必ず到着時に物理削除される",
      "入力が無くても壁時計だけで必ず境界が進む"
    ],
    "choiceNotes": [
      "Watermarkの保証と実際の処理を区別する。",
      "遅すぎるイベントの処理は保証されない。",
      "常に即廃棄とする断定は不適切である。",
      "Sparkのイベント時刻の進捗を無視している。"
    ],
    "answers": [
      0
    ],
    "explanation": "Watermarkの保証と実際の処理を区別する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing"
  },
  {
    "id": "PDF-M2-08",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 97,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Domain・OneLake・Airflowの設定範囲",
    "difficulty": "Medium",
    "type": "single",
    "question": "営業DomainにWorkspaceを所属させた。営業利用者がItemを開けない。合理的な次の確認はどれか。",
    "code": "",
    "choices": [
      "Domainを付ければ自動で全員読めるため待つ",
      "Airflowのノードを増やす",
      "Domain名を長くする",
      "Workspace・Itemとデータのアクセス許可"
    ],
    "choiceNotes": [
      "Domainと権限を混同している。",
      "参照許可の問題に対応しない。",
      "アクセス制御を変更しない。",
      "Domain所属は参照許可そのものではない。"
    ],
    "answers": [
      3
    ],
    "explanation": "Domain所属は参照許可そのものではない。",
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  },
  {
    "id": "PDF-M2-09",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 112,
    "domain": "データの取り込みと変換",
    "skill": "Dataflow：Folding・更新方式・下流への影響",
    "difficulty": "Medium",
    "type": "single",
    "question": "対象月全体を毎日再計算してDataflowの同じ宛先へ書く。既存月データを残したままAppendするだけの設計で起き得る問題はどれか。",
    "code": "",
    "choices": [
      "自動でType 2の履歴になる",
      "自動的にキーごとに最新化される",
      "必ずソースのFoldingが有効になる",
      "同じ明細の再追加による二重計上"
    ],
    "choiceNotes": [
      "Appendだけでは期間や履歴の整合性は管理されない。",
      "Appendにその照合を期待するのは誤り。",
      "宛先のAppendとソースFoldingは別の条件である。",
      "再計算範囲と追加方式が一致していない。"
    ],
    "answers": [
      3
    ],
    "explanation": "再計算範囲と追加方式が一致していない。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflow-gen2-performance-best-practices"
  },
  {
    "id": "PDF-M2-10",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 121,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Notebookのエラー：DriverとExecutor",
    "difficulty": "Medium",
    "type": "single",
    "question": "NotebookでImportErrorが発生する。先週と同じコードだがEnvironmentを変更した。第一の調査はどれか。",
    "code": "",
    "choices": [
      "ソースファイルの数だけ",
      "Checkpointをすべて削除",
      "各タスクをBroadcastへ強制",
      "Runtimeと依存ライブラリの構成差分"
    ],
    "choiceNotes": [
      "ライブラリが読み込めない原因を直接確認しない。",
      "依存ライブラリ不足を直さず進捗を失う。",
      "ImportErrorはJOIN方式の問題ではない。",
      "観測された環境変更と例外に対応する。"
    ],
    "answers": [
      3
    ],
    "explanation": "観測された環境変更と例外に対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  {
    "id": "PDF-M2-11",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 114,
    "domain": "データの取り込みと変換",
    "skill": "JOIN・集計・SQLとKQLの読み方",
    "difficulty": "Medium",
    "type": "code",
    "question": "C1に2イベント、C2に1イベントがある。次のクエリが返すContractIdのグループ数はどれか。同一ID内の時刻は一意とする。",
    "code": "Events | summarize arg_max(EventTime, *) by ContractId",
    "choices": [
      "1",
      "0",
      "2",
      "3"
    ],
    "choiceNotes": [
      "全体の最大1行ではなくIDごとの最大行である。",
      "行をすべて除外する条件は無い。",
      "IDごとに最新行を選ぶためC1とC2の2行になる。",
      "元イベント数と最新化後のID数を混同している。"
    ],
    "answers": [
      2
    ],
    "explanation": "IDごとに最新行を選ぶためC1とC2の2行になる。",
    "source": "https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-notebooks/4-combine-aggregate"
  },
  {
    "id": "PDF-M2-12",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 98,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Git：変更履歴と実行データを区別する",
    "difficulty": "Medium",
    "type": "single",
    "question": "Git同期の後に接続エラーが出た。対応Itemの定義は一致している。適切な判断はどれか。",
    "code": "",
    "choices": [
      "Git履歴を削除すれば解決する",
      "定義一致なら接続先も必ず正しい",
      "環境ごとの接続・資格情報・権限を検証する",
      "データ全量もGitから復元済みと見なす"
    ],
    "choiceNotes": [
      "エラー原因を調べず履歴を失う不適切な対応である。",
      "本番用接続の確認を省略している。",
      "定義の一致と実行可能性は別の検証である。",
      "定義管理とデータの移行を混同している。"
    ],
    "answers": [
      2
    ],
    "explanation": "定義の一致と実行可能性は別の検証である。",
    "source": "https://learn.microsoft.com/en-us/training/modules/implement-cicd-in-fabric/3-implement-version-control-and-git-integration"
  },
  {
    "id": "PDF-M2-13",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 101,
    "domain": "分析ソリューションの実装と管理",
    "skill": "SQLのRLS・CLS・オブジェクト権限",
    "difficulty": "Medium",
    "type": "code",
    "question": "Analystは以下のGRANT以外に広いSELECTを持たない。SQLでSELECT ContractID, Premiumは成功し、SELECT *は失敗する。最も適切な説明はどれか。",
    "code": "GRANT SELECT ON dbo.Contracts(ContractID, Premium) TO Analyst;",
    "choices": [
      "SQL RLSが全列を自動削除した",
      "Dynamic data maskingなら必ずSELECT *が失敗する",
      "SQLエンジンは列単位のGRANTに対応しない",
      "列の許可に含まれない列をSELECT *が参照した"
    ],
    "choiceNotes": [
      "RLSは行条件であり列許可と異なる。",
      "Maskは値の表示であり列参照禁止と同一ではない。",
      "製品の列権限の機能と矛盾する。",
      "CLSの条件に合う。"
    ],
    "answers": [
      3
    ],
    "explanation": "CLSの条件に合う。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  },
  {
    "id": "PDF-M2-14",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 115,
    "domain": "データの取り込みと変換",
    "skill": "Delta：MERGE・スキーマ・履歴",
    "difficulty": "Medium",
    "type": "single",
    "question": "入力に新しい列が増えてDelta書込が不一致になった。列追加は正当で下流も対応済み。最も適切な方向はどれか。",
    "code": "",
    "choices": [
      "原因に関係なくoverwriteSchemaを常用",
      "VACUUMで列を追加",
      "すべての型違いも無条件で自動修復すると見なす",
      "対応するmergeSchema等で必要な列追加を許可"
    ],
    "choiceNotes": [
      "表定義全体への影響を不必要に広げる。",
      "ファイル保持の整理はスキーマ追加を行わない。",
      "列追加と任意の型変更は同じではない。",
      "意味と影響を確認したうえで拡張する。"
    ],
    "answers": [
      3
    ],
    "explanation": "意味と影響を確認したうえで拡張する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/low-shuffle-merge"
  },
  {
    "id": "PDF-M2-15",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 123,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventhouseの取り込み・実行エラー",
    "difficulty": "Medium",
    "type": "single",
    "question": "Eventhouseで.show ingestion failuresが空だった。データが無い原因を取り込み失敗以外に断定してよいか。",
    "code": "",
    "choices": [
      "断定せず取り込みメトリック・診断ログ等も確認する",
      "空なら必ずソース未送信",
      "空なら全方式の取り込みは必ず成功",
      "空なら必ずSQL RLSが原因"
    ],
    "choiceNotes": [
      "コマンドは全段階の失敗を網羅しない。",
      "入力・変換・権限等の調査を省いている。",
      "コマンドの対象範囲を過大評価している。",
      "他の可能性を根拠なく除外している。"
    ],
    "answers": [
      0
    ],
    "explanation": "コマンドは全段階の失敗を網羅しない。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse"
  },
  {
    "id": "PDF-M2-16",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 113,
    "domain": "データの取り込みと変換",
    "skill": "PySpark：型・NULL・重複・順位",
    "difficulty": "Medium",
    "type": "single",
    "question": "C9の9:00は1000、10:00はNULL。「正常値を抽出してから最新」を選ぶ処理は何を返すか。",
    "code": "",
    "choices": [
      "必ずNULLが残る",
      "必ず0になる",
      "1000が残る",
      "必ず両方が残る"
    ],
    "choiceNotes": [
      "処理順序を逆に解釈している。",
      "0置換を行う処理は指定されていない。",
      "NULLの最新行を先に落としたため古い正常行を採用する。",
      "最新の選択を行うので正常値の中から1行を選ぶ。"
    ],
    "answers": [
      2
    ],
    "explanation": "NULLの最新行を先に落としたため古い正常行を採用する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/4-dataframe"
  },
  {
    "id": "PDF-M2-17",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 119,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Pipeline・Copyの監視と再実行",
    "difficulty": "Medium",
    "type": "single",
    "question": "手動Notebookは成功するがPipelineのNotebook activityはPermission deniedになる。最初に比較すべきものはどれか。",
    "code": "",
    "choices": [
      "ノード数だけ",
      "接続・実行主体と宛先許可",
      "手動成功を根拠にPipelineエラーを無視",
      "Premium合計だけ"
    ],
    "choiceNotes": [
      "許可を増やさない。",
      "実行条件の違いが権限エラーの原因になり得る。",
      "自動実行の許可を検証していない。",
      "接続主体に関する失敗の調査にならない。"
    ],
    "answers": [
      1
    ],
    "explanation": "実行条件の違いが権限エラーの原因になり得る。",
    "source": "https://learn.microsoft.com/en-us/training/modules/monitor-fabric-items/"
  },
  {
    "id": "PDF-M2-18",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 102,
    "domain": "分析ソリューションの実装と管理",
    "skill": "OneLake：ファイル・表・列・行を守る",
    "difficulty": "Medium",
    "type": "single",
    "question": "OneLakeで限定ロールを与えた利用者が依然全データを読める。Workspace Contributorでもある。最初に見直すべきことはどれか。",
    "code": "",
    "choices": [
      "テーブルをCertifiedへ変更",
      "RLS条件だけをさらに複雑化",
      "広いWorkspaceロールによるアクセス",
      "限定ロールを何個も追加"
    ],
    "choiceNotes": [
      "アクセス権の範囲を狭めない。",
      "広いWorkspaceロールの例外を解消しない。",
      "細かなOneLakeロールでContributorの許可を狭めることはできない。",
      "許可モデルで広い権限を取り消す設計ではない。"
    ],
    "answers": [
      2
    ],
    "explanation": "細かなOneLakeロールでContributorの許可を狭めることはできない。",
    "source": "https://learn.microsoft.com/en-us/training/modules/secure-data-access-in-fabric/4-apply-granular-permissions"
  },
  {
    "id": "PDF-M2-19",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 96,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Sparkの設定：計算資源と実行環境を分ける",
    "difficulty": "Medium",
    "type": "single",
    "question": "複数NotebookのPipeline実行でSparkセッションの再利用を検討する。session tagだけで必ず再利用できると判断する前に何を確認するか。",
    "code": "",
    "choices": [
      "すべてのNotebookをCertifiedにしたか",
      "ソースDBの主キー名だけ",
      "同じ文字列を付ければ他の条件は不要",
      "対応する高同時実行設定などの前提条件"
    ],
    "choiceNotes": [
      "信頼性の表示はセッション再利用条件ではない。",
      "再利用設定の前提を確認できない。",
      "必須のWorkspace設定等を無視している。",
      "session tagによる再利用は設定・対応条件が前提となる。"
    ],
    "answers": [
      3
    ],
    "explanation": "session tagによる再利用は設定・対応条件が前提となる。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/2-spark"
  },
  {
    "id": "PDF-M2-20",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 108,
    "domain": "データの取り込みと変換",
    "skill": "Shortcut・Mirroring・Copyの選び分け",
    "difficulty": "Medium",
    "type": "single",
    "question": "DB MirroringのRows replicatedが宛先の現行行数より大きい。これだけで重複があると断定できない理由はどれか。",
    "code": "",
    "choices": [
      "すべてのMirroringはデータを複製しないから",
      "指標は権限エラー数だけだから",
      "常にソースの列数を示すから",
      "複製指標は更新・削除等も含む累積件数だから"
    ],
    "choiceNotes": [
      "通常のDB Mirroringの継続複製を無視している。",
      "指標の意味が違う。",
      "行の複製処理の指標であり列数ではない。",
      "現行行数とは意味が異なる。"
    ],
    "answers": [
      3
    ],
    "explanation": "現行行数とは意味が異なる。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  },
  {
    "id": "PDF-M2-21",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 126,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Lakehouse最適化：OPTIMIZE・VACUUM・V-Order",
    "difficulty": "Medium",
    "type": "single",
    "question": "過去バージョン参照が必要な表で、保存領域を減らすためVACUUMを検討する。先に必要なのはどれか。",
    "code": "",
    "choices": [
      "V-Orderの名前だけ変更",
      "保持期間を理由なく最小へ変更",
      "保持期間と過去参照・実行中処理への影響の確認",
      "実行すれば現行の重複が消えると見なす"
    ],
    "choiceNotes": [
      "未参照ファイルの保持設計にならない。",
      "必要な履歴の参照を壊し得る。",
      "必要な過去ファイルを消さないためである。",
      "VACUUMは現行行の業務重複を削除しない。"
    ],
    "answers": [
      2
    ],
    "explanation": "必要な過去ファイルを消さないためである。",
    "source": "https://learn.microsoft.com/en-us/training/modules/work-delta-lake-tables-fabric/3b-optimize-delta-tables"
  },
  {
    "id": "PDF-M2-22",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 106,
    "domain": "分析ソリューションの実装と管理",
    "skill": "時刻・イベント・手動起動",
    "difficulty": "Medium",
    "type": "single",
    "question": "ファイルイベントからパスを受け取るPipelineを、過去日について手動実行する。追加で必要な検討はどれか。",
    "code": "",
    "choices": [
      "手動でも必ず元イベントが再生成されると見なす",
      "現在日付だけを強制して過去日を無視",
      "イベント起動を使えば重複対策は不要",
      "手動時にイベント値が無い場合の引数指定"
    ],
    "choiceNotes": [
      "同じイベントコンテキストがあるとは限らない。",
      "過去日の再処理要件を満たさない。",
      "起動方式だけで再送時の書込結果は保証されない。",
      "イベント由来の値がNULL等になる場合に備える。"
    ],
    "answers": [
      3
    ],
    "explanation": "イベント由来の値がNULL等になる場合に備える。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs"
  },
  {
    "id": "PDF-M2-23",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 99,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Deploymentとdatabase project",
    "difficulty": "Medium",
    "type": "single",
    "question": "SQLオブジェクトの定義をソース管理し、ビルド・配備でWarehouseのスキーマ変更を管理したい。候補はどれか。",
    "code": "",
    "choices": [
      "LakehouseのCheckpoint",
      "対応するWarehouse database project",
      "Dataflowのプレビューだけ",
      "毎晩のAppendだけ"
    ],
    "choiceNotes": [
      "ストリームの進捗でありSQL定義管理ではない。",
      "SQLオブジェクト定義をプロジェクトで扱う。",
      "SQLスキーマのビルドと配備を管理しない。",
      "行を追加する処理は定義管理を代替しない。"
    ],
    "answers": [
      1
    ],
    "explanation": "SQLオブジェクト定義をプロジェクトで扱う。",
    "source": "https://learn.microsoft.com/en-us/training/modules/implement-cicd-in-fabric/4-implement-deployment-pipelines"
  },
  {
    "id": "PDF-M2-24",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 124,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventstreamのエラーをノード別に調べる",
    "difficulty": "Medium",
    "type": "single",
    "question": "Eventstreamの入力100件を条件で絞って20件出力した。件数差だけで異常と判断すべきか。",
    "code": "",
    "choices": [
      "件数は監視に使えないので記録しない",
      "100対20なら必ず80件の障害",
      "条件と期待出力件数を確認して判断する",
      "出力が1件でもあれば常に正常"
    ],
    "choiceNotes": [
      "期待値との比較に有用な証拠を捨てている。",
      "変換の意味を無視している。",
      "正常なフィルターでも件数差が出る。",
      "一部の障害や誤条件を検出できない。"
    ],
    "answers": [
      2
    ],
    "explanation": "正常なフィルターでも件数差が出る。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor"
  },
  {
    "id": "PDF-M2-25",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 100,
    "domain": "分析ソリューションの実装と管理",
    "skill": "WorkspaceとItem：最小権限の設計",
    "difficulty": "Medium",
    "type": "single",
    "question": "一般利用者へReadを付与した。これだけで全経路の全データを読む権限があると断定できるか。",
    "code": "",
    "choices": [
      "できる。Readは常に全列全行への許可",
      "できない。Itemの種類とデータ参照の許可を確認する",
      "できる。Workspaceの設定は影響しない",
      "できないので必ずAdminを与える"
    ],
    "choiceNotes": [
      "許可の粒度と経路を無視している。",
      "Itemの閲覧と全データ読取を区別する。",
      "管理設定や別の権限条件を無視している。",
      "限定許可を調べず過剰な権限を与えている。"
    ],
    "answers": [
      1
    ],
    "explanation": "Itemの閲覧と全データ読取を区別する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/secure-data-access-in-fabric/3-configure-workspace-and-item-permissions"
  },
  {
    "id": "PDF-M2-26",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 105,
    "domain": "分析ソリューションの実装と管理",
    "skill": "動的な式・Notebookパラメーター",
    "difficulty": "Medium",
    "type": "single",
    "question": "Pipelineから渡したrun_dateがNotebookで既定値のままになる。まず確認すべき組み合わせはどれか。",
    "code": "",
    "choices": [
      "パラメーターセルの指定、引数名、Activityの値",
      "Notebookの見出しの色だけ",
      "DatasetのCertifiedだけ",
      "ノード数だけ"
    ],
    "choiceNotes": [
      "値を渡す対応と実Run入力を検証できる。",
      "外部パラメーターの対応に影響しない。",
      "Notebookパラメーターとは別の機能である。",
      "引数の受渡し不備を直さない。"
    ],
    "answers": [
      0
    ],
    "explanation": "値を渡す対応と実Run入力を検証できる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/expression-language"
  },
  {
    "id": "PDF-M2-27",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 128,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Warehouse・クエリ最適化の優先順",
    "difficulty": "Medium",
    "type": "single",
    "question": "JOIN先のキー重複で途中行数が10倍となりWarehouseクエリが遅い。優先順位として最も適切なのはどれか。",
    "code": "",
    "choices": [
      "同じクエリを並列に増やす",
      "JOINの意味・一意性・行数を修正し再測定",
      "Capacityを増やせば誤った合計も直る",
      "SELECT *を増やす"
    ],
    "choiceNotes": [
      "負荷と誤結果を増やす危険がある。",
      "正しさと処理量の原因を先に直す。",
      "資源量は結合の意味を修正しない。",
      "不要な列と処理量を増やす方向である。"
    ],
    "answers": [
      1
    ],
    "explanation": "正しさと処理量の原因を先に直す。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/guidelines-warehouse-performance"
  },
  {
    "id": "PDF-M2-28",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 103,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Mask・機密ラベル・推奨表示の違い",
    "difficulty": "Medium",
    "type": "single",
    "question": "個人情報の元値を参照させないことが要件である。Dynamic data maskingを付けたので他のアクセス制御は不要、という案をどう評価するか。",
    "code": "",
    "choices": [
      "不十分。必要な列・行・オブジェクトの許可も設計する",
      "十分。Maskは暗号化と同じ",
      "十分。すべての経路へSQL Maskが必ず適用される",
      "不十分なのでCertifiedだけを追加"
    ],
    "choiceNotes": [
      "Maskは元値の削除や完全な参照禁止と同一ではない。",
      "表示制御と暗号化を混同している。",
      "SQL以外の経路を無条件に保護する保証はない。",
      "信頼性の表示は元値へのアクセスを遮断しない。"
    ],
    "answers": [
      0
    ],
    "explanation": "Maskは元値の削除や完全な参照禁止と同一ではない。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking"
  },
  {
    "id": "PDF-M2-29",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 129,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Spark最適化：Shuffle・Skew・Broadcast・Cache",
    "difficulty": "Medium",
    "type": "single",
    "question": "大きなFactと、各Executorのメモリに十分収まる小さな商品表をJOINする。Shuffle負担を減らす候補はどれか。",
    "code": "",
    "choices": [
      "大きいFactを必ずBroadcastする",
      "1回しか使わない全表を無条件Cache",
      "小さい商品表のBroadcastを検討する",
      "Fact全件をDriverへcollectする"
    ],
    "choiceNotes": [
      "配布量が大きくなりメモリ負担を増やす。",
      "JOINの通信を狙って減らす手段として不十分で費用もある。",
      "小さい側を配布する方式が候補になる。",
      "分散処理を失いDriverメモリを圧迫する。"
    ],
    "answers": [
      2
    ],
    "explanation": "小さい側を配布する方式が候補になる。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-best-practices"
  },
  {
    "id": "PDF-M2-30",
    "origin": "pdf90",
    "pdfExam": 2,
    "pdfPage": 118,
    "domain": "データの取り込みと変換",
    "skill": "KQL：関数・Materialized view・時系列",
    "difficulty": "Medium",
    "type": "single",
    "question": "KQLのロジックを名前で再利用したい。集計結果を継続保存する必要はない。最も直接的な手段はどれか。",
    "code": "",
    "choices": [
      "表の全量Copyを毎分行う",
      "Stored function",
      "Materialized viewだけが唯一の手段",
      "EventstreamのCheckpoint"
    ],
    "choiceNotes": [
      "ロジックの共通化を実現しない。",
      "ロジックの再利用に合う。",
      "結果を保持する費用を含み、必要以上の設計になり得る。",
      "KQL関数の再利用を管理するものではない。"
    ],
    "answers": [
      1
    ],
    "explanation": "ロジックの再利用に合う。",
    "source": "https://learn.microsoft.com/en-us/training/modules/get-started-kusto-fabric/4-write-queries-kusto-query-language"
  },
  {
    "id": "PDF-M3-01",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 119,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Pipeline・Copyの監視と再実行",
    "difficulty": "Medium",
    "type": "single",
    "question": "PipelineはSucceededだが金額が2倍。再処理が同じ範囲をAppendしていた。適切な判断はどれか。",
    "code": "",
    "choices": [
      "Succeededなので要件達成",
      "Copyの並列度だけを上げる",
      "未参照ファイルを削除すれば現行合計も直る",
      "品質障害として既存重複を修正し再実行設計を変える"
    ],
    "choiceNotes": [
      "業務結果の誤りを無視している。",
      "重複書込の意味を変えない。",
      "現行の重複行に対する対処と異なる。",
      "成功ステータスと結果の正しさは別である。"
    ],
    "answers": [
      3
    ],
    "explanation": "成功ステータスと結果の正しさは別である。",
    "source": "https://learn.microsoft.com/en-us/training/modules/monitor-fabric-items/"
  },
  {
    "id": "PDF-M3-02",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 113,
    "domain": "データの取り込みと変換",
    "skill": "PySpark：型・NULL・重複・順位",
    "difficulty": "Medium",
    "type": "code",
    "question": "以下の結果について正しいのはどれか。契約ごとの更新時刻とseqの組は一意である。",
    "code": "w = Window.partitionBy(\"id\").orderBy(col(\"ts\").desc(), col(\"seq\").desc())\nresult = df.withColumn(\"rn\", row_number().over(w)).filter(\"rn = 1\")",
    "choices": [
      "必ず元の行数を維持する",
      "物理ファイルの保存先を契約別に分ける",
      "契約ごとに指定順の先頭1行を採用する",
      "全データで1行だけを返す"
    ],
    "choiceNotes": [
      "rn=1で他の行を除外する。",
      "WindowのpartitionByと保存時の分割を混同している。",
      "Windowはキー別、row_numberは順番、rn=1は各組の先頭である。",
      "partitionByによる契約別の分割を無視している。"
    ],
    "answers": [
      2
    ],
    "explanation": "Windowはキー別、row_numberは順番、rn=1は各組の先頭である。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/4-dataframe"
  },
  {
    "id": "PDF-M3-03",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 127,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Pipeline最適化：並列化の階層と上限",
    "difficulty": "Medium",
    "type": "single",
    "question": "ForEachの同時実行を上げ、Copy内部の並列度も上げたところgatewayが飽和した。適切な調整はどれか。",
    "code": "",
    "choices": [
      "階層を合わせた同時負荷を評価し段階的に抑える",
      "キー名だけを変える",
      "片方の値しか負荷へ影響しないとする",
      "常に両方を最大へ固定"
    ],
    "choiceNotes": [
      "共有する接続経路の上限を考慮する。",
      "同時要求の問題に対応しない。",
      "並列化の複数階層を無視している。",
      "ボトルネックの負荷を増やす危険がある。"
    ],
    "answers": [
      0
    ],
    "explanation": "共有する接続経路の上限を考慮する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/copy-activity-performance-and-scalability-guide"
  },
  {
    "id": "PDF-M3-04",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 101,
    "domain": "分析ソリューションの実装と管理",
    "skill": "SQLのRLS・CLS・オブジェクト権限",
    "difficulty": "Medium",
    "type": "single",
    "question": "SQL RLSは担当行だけを返すが、同じ利用者のSpark Notebookでは全行を読める。最初に選ぶ対応はどれか。",
    "code": "",
    "choices": [
      "SQLのWHERE条件だけを厳しくする",
      "SQL RLSがあるのでSpark結果を無視",
      "機密ラベルを付ければ全行が自動で消える",
      "SQL以外の経路とOneLake・Workspace等の許可を見直す"
    ],
    "choiceNotes": [
      "Spark側の広い許可を直接制御しない。",
      "実際の漏えい経路を残す。",
      "分類と行の参照許可を混同している。",
      "SQL RLSの適用経路外の許可を調べる必要がある。"
    ],
    "answers": [
      3
    ],
    "explanation": "SQL RLSの適用経路外の許可を調べる必要がある。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  },
  {
    "id": "PDF-M3-05",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 100,
    "domain": "分析ソリューションの実装と管理",
    "skill": "WorkspaceとItem：最小権限の設計",
    "difficulty": "Medium",
    "type": "single",
    "question": "委託先は特定Itemを読むだけで、他のItemの編集は不要。広いWorkspaceロールの付与を避けたい。適切な方針はどれか。",
    "code": "",
    "choices": [
      "全員をContributorにしてMaskだけ追加",
      "アクセスが必要なので必ずAdmin",
      "Item共有と必要な経路の限定許可を設計し本人で検証",
      "全員をMemberに統一"
    ],
    "choiceNotes": [
      "広い変更・参照権限を整理できない。",
      "限定共有が可能か検討していない。",
      "要件の範囲に権限を限定する。",
      "編集不要の利用者へ過剰な権限を与える。"
    ],
    "answers": [
      2
    ],
    "explanation": "要件の範囲に権限を限定する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/secure-data-access-in-fabric/3-configure-workspace-and-item-permissions"
  },
  {
    "id": "PDF-M3-06",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 117,
    "domain": "データの取り込みと変換",
    "skill": "Structured Streaming：窓・状態・再開位置",
    "difficulty": "Medium",
    "type": "single",
    "question": "Delta表に行の更新・削除がある。単純な追加専用入力としてreadStreamする案をどう評価すべきか。",
    "code": "",
    "choices": [
      "Watermarkを増やせば更新がすべて修正される",
      "表がDeltaなら更新・削除も常に追加として自動反映",
      "入力の変更と対応方式を確認しCDF等も検討する",
      "Checkpointを共用すれば変更意味が解決"
    ],
    "choiceNotes": [
      "遅延制御と変更反映方式を混同している。",
      "変更の扱いと対応条件を無視している。",
      "追加専用という前提を満たさない可能性がある。",
      "進捗保存先は更新・削除の解釈を代替しない。"
    ],
    "answers": [
      2
    ],
    "explanation": "追加専用という前提を満たさない可能性がある。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-stateful-processing"
  },
  {
    "id": "PDF-M3-07",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 118,
    "domain": "データの取り込みと変換",
    "skill": "KQL：関数・Materialized view・時系列",
    "difficulty": "Medium",
    "type": "single",
    "question": "繰り返す対応集計にMaterialized viewを使う。View名の問い合わせとmaterialized_view()による保持部分の参照で重要な違いはどれか。",
    "code": "",
    "choices": [
      "未反映の新規分を合わせるか、保持済み部分を読むか",
      "どちらも永久に同じ鮮度で更新費用ゼロ",
      "関数を定義すると元データは必ず削除",
      "Materialized viewは入力更新を監視する必要がない"
    ],
    "choiceNotes": [
      "鮮度と性能の条件を分けて選ぶ。",
      "未反映分と更新コストを無視している。",
      "ロジック再利用と保持・削除を混同している。",
      "更新遅延や負荷の監視を省略している。"
    ],
    "answers": [
      0
    ],
    "explanation": "鮮度と性能の条件を分けて選ぶ。",
    "source": "https://learn.microsoft.com/en-us/training/modules/get-started-kusto-fabric/4-write-queries-kusto-query-language"
  },
  {
    "id": "PDF-M3-08",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 130,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventhouse・Eventstreamの性能を分ける",
    "difficulty": "Medium",
    "type": "single",
    "question": "KQLで毎回1年分を走査して直近1時間だけの集計を行っていた。最初の候補はどれか。",
    "code": "",
    "choices": [
      "意味を保って早い段階で時間範囲を絞る",
      "保持期間を無条件に1時間へ短縮",
      "結果の列名だけを変更",
      "全列と全期間を必ず維持"
    ],
    "choiceNotes": [
      "不要な走査と中間処理を減らす方向である。",
      "過去保存要件を壊すおそれがある。",
      "走査量や処理量を減らさない。",
      "目的外の処理量を減らさない。"
    ],
    "answers": [
      0
    ],
    "explanation": "不要な走査と中間処理を減らす方向である。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse"
  },
  {
    "id": "PDF-M3-09",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 110,
    "domain": "データの取り込みと変換",
    "skill": "全量・差分・再実行の設計",
    "difficulty": "Medium",
    "type": "single",
    "question": "差分処理で今回上限を開始時に固定する設計である。対象反映より先に進捗境界だけを更新し、その後に失敗した。何が危険か。",
    "code": "",
    "choices": [
      "VACUUMが自動で読み直す",
      "次回に未反映データを処理済みと見なし欠落する",
      "必ず重複だけが増え欠落は起きない",
      "進捗更新は外部DBまで自動で一括ロールバック"
    ],
    "choiceNotes": [
      "差分境界と再ロードを管理する機能ではない。",
      "境界が先に進んで未処理範囲を読み飛ばし得る。",
      "未反映範囲を飛ばす危険を無視している。",
      "分散処理全体に単一トランザクションを仮定している。"
    ],
    "answers": [
      1
    ],
    "explanation": "境界が先に進んで未処理範囲を読み飛ばし得る。",
    "source": "https://learn.microsoft.com/en-us/training/modules/load-data-into-microsoft-fabric-data-warehouse/2-explore-data-load-strategies"
  },
  {
    "id": "PDF-M3-10",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 125,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "T-SQLのエラーとQuery insights",
    "difficulty": "Medium",
    "type": "single",
    "question": "Lakehouse SQL analytics endpointでSELECTはできるが、Delta表のUPDATEに失敗した。正しい対処の方向はどれか。",
    "code": "",
    "choices": [
      "Retry回数だけを増やす",
      "更新に対応するSpark等の経路を使う",
      "同じendpointで全員へAdminを与える",
      "SELECTの成功を根拠に障害なしとする"
    ],
    "choiceNotes": [
      "製品の更新制約を解消しない。",
      "そのendpointの表データは読取用である。",
      "対応しないDMLを可能にする根拠にならない。",
      "読取と更新の対応差を無視している。"
    ],
    "answers": [
      1
    ],
    "explanation": "そのendpointの表データは読取用である。",
    "source": "https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-tsql/2-transform-queries"
  },
  {
    "id": "PDF-M3-11",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 115,
    "domain": "データの取り込みと変換",
    "skill": "Delta：MERGE・スキーマ・履歴",
    "difficulty": "Medium",
    "type": "single",
    "question": "MERGEで一致行を無条件更新する設計で、新しい更新の後に古い更新が遅着した。対策として適切なのはどれか。",
    "code": "",
    "choices": [
      "Appendへ変えれば自動で最新1行になる",
      "VACUUMで新しい業務行を選ぶ",
      "MERGEは時刻を見ずとも必ず最新を保持",
      "更新時刻等の新旧条件を加え、入力キーも整理する"
    ],
    "choiceNotes": [
      "履歴が増えるだけで最新化は別途必要になる。",
      "現行の更新条件を実装する操作ではない。",
      "照合と更新条件にその意味は自動では含まれない。",
      "古い状態への上書きを防ぐ判断が必要である。"
    ],
    "answers": [
      3
    ],
    "explanation": "古い状態への上書きを防ぐ判断が必要である。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/low-shuffle-merge"
  },
  {
    "id": "PDF-M3-12",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 124,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventstreamのエラーをノード別に調べる",
    "difficulty": "Medium",
    "type": "single",
    "question": "Eventstreamのソース入力量は変わらず、1つの宛先でBacklogとRuntime errorsが増えている。まず何を調べるか。",
    "code": "",
    "choices": [
      "Domain名だけを変更",
      "対象宛先ノードのログ、書込先の状態・許可・処理量",
      "すべてのソースを未送信と決めつける",
      "すべての出力件数は常に入力と同じとする"
    ],
    "choiceNotes": [
      "宛先処理の滞留を改善しない。",
      "ノードごとの観測に合う。",
      "入力が続いている事実と矛盾する。",
      "変換や分岐の意味を無視している。"
    ],
    "answers": [
      1
    ],
    "explanation": "ノードごとの観測に合う。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/event-streams/monitor"
  },
  {
    "id": "PDF-M3-13",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 111,
    "domain": "データの取り込みと変換",
    "skill": "ディメンション・非正規化・遅着データ",
    "difficulty": "Medium",
    "type": "single",
    "question": "取引データが翌月に遅着した。SCD Type 2で取引当時の属性を再現するには、どの日付で有効期間を照合すべきか。",
    "code": "",
    "choices": [
      "処理した現在日だけ",
      "ファイルのアップロード日だけ",
      "取引日",
      "最大代理キーを優先して日付は見ない"
    ],
    "choiceNotes": [
      "現在属性へ誤結合する可能性がある。",
      "到着時点は取引当時と一致しない。",
      "到着が遅くても取引が発生した時点の属性を選ぶ。",
      "過去属性を選ぶ要件を満たさない。"
    ],
    "answers": [
      2
    ],
    "explanation": "到着が遅くても取引が発生した時点の属性を選ぶ。",
    "source": "https://learn.microsoft.com/en-us/training/modules/describe-medallion-architecture/2-describe-medallion-architecture"
  },
  {
    "id": "PDF-M3-14",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 122,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "モデル更新の監視・通知・アラート",
    "difficulty": "Medium",
    "type": "single",
    "question": "モデル更新の資格情報が期限切れで失敗している。上流のデータは最新。適切な対処はどれか。",
    "code": "",
    "choices": [
      "レポートのタイトルを変更",
      "通知メールだけを無効化",
      "資格情報・接続状態を修正し更新成功を確認する",
      "上流Copyの同じデータを追加し続ける"
    ],
    "choiceNotes": [
      "データ更新に影響しない。",
      "失敗の原因を直さず可視性も下げる。",
      "更新エラーの原因へ対応する。",
      "モデルの認証問題を解消せず重複も招く。"
    ],
    "answers": [
      2
    ],
    "explanation": "更新エラーの原因へ対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/create-alerts-for-pipeline-runs"
  },
  {
    "id": "PDF-M3-15",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 96,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Sparkの設定：計算資源と実行環境を分ける",
    "difficulty": "Medium",
    "type": "single",
    "question": "毎回20秒の計算に対しセッション起動が長い。コードの結果は正しい。最初に調べる性能改善はどれか。",
    "code": "",
    "choices": [
      "起動待ちと対応するセッション再利用条件",
      "全データのV-Orderだけ変更",
      "SUMをCOUNTへ変更",
      "無条件でExecutorメモリだけ倍増"
    ],
    "choiceNotes": [
      "計算時間ではなく起動が主要因である。",
      "短い計算の起動待ちを説明しない。",
      "業務結果を変えてしまい起動待ちの原因も直さない。",
      "起動の比率が高いという観測へ直接対応しない。"
    ],
    "answers": [
      0
    ],
    "explanation": "計算時間ではなく起動が主要因である。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-apache-spark-work-files-lakehouse/2-spark"
  },
  {
    "id": "PDF-M3-16",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 103,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Mask・機密ラベル・推奨表示の違い",
    "difficulty": "Medium",
    "type": "single",
    "question": "機密ラベル、Certified、担当行の制御をそれぞれ求められた。役割の組み合わせで適切なのはどれか。",
    "code": "",
    "choices": [
      "すべてCertifiedだけ",
      "分類はラベル、信頼表示はEndorsement、行制御はRLS等",
      "すべてMaskだけ",
      "すべてDomainだけ"
    ],
    "choiceNotes": [
      "分類と行アクセス制御を満たさない。",
      "それぞれ異なる目的に対応する。",
      "値の表示制御で全目的を代替しない。",
      "業務管理の整理で全目的を代替しない。"
    ],
    "answers": [
      1
    ],
    "explanation": "それぞれ異なる目的に対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/dynamic-data-masking"
  },
  {
    "id": "PDF-M3-17",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 102,
    "domain": "分析ソリューションの実装と管理",
    "skill": "OneLake：ファイル・表・列・行を守る",
    "difficulty": "Medium",
    "type": "single",
    "question": "OneLakeのCLS・RLSを外部クエリエンジンから利用する予定である。設計で確認すべきことはどれか。",
    "code": "",
    "choices": [
      "SQLのGRANT構文を貼ればOneLakeロールになる",
      "フォルダーなら常に行条件を定義できる",
      "表形式・エンジンの認可と対応、フィルターかブロックか",
      "どの外部エンジンも必ずフィルターされる"
    ],
    "choiceNotes": [
      "異なる設定体系を混同している。",
      "非構造化データには表の行を定義できない。",
      "全経路で同じ方式とは限らない。",
      "未認可エンジンではブロックされる場合を無視している。"
    ],
    "answers": [
      2
    ],
    "explanation": "全経路で同じ方式とは限らない。",
    "source": "https://learn.microsoft.com/en-us/training/modules/secure-data-access-in-fabric/4-apply-granular-permissions"
  },
  {
    "id": "PDF-M3-18",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 126,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Lakehouse最適化：OPTIMIZE・VACUUM・V-Order",
    "difficulty": "Medium",
    "type": "single",
    "question": "V-Orderの既定値について古い教材と現行製品資料の記述が異なる。合理的な運用判断はどれか。",
    "code": "",
    "choices": [
      "V-OrderとVACUUMを同じ機能とする",
      "現行製品仕様と対象環境の実際の設定を確認する",
      "常にONと暗記し確認しない",
      "常にOFFで変更不能とする"
    ],
    "choiceNotes": [
      "配置最適化と未参照ファイル削除は別である。",
      "既定値の暗記だけで有効状態を断定しない。",
      "文書間差異と新環境の挙動を無視する。",
      "設定可能性と対象環境の違いを無視する。"
    ],
    "answers": [
      1
    ],
    "explanation": "既定値の暗記だけで有効状態を断定しない。",
    "source": "https://learn.microsoft.com/en-us/training/modules/work-delta-lake-tables-fabric/3b-optimize-delta-tables"
  },
  {
    "id": "PDF-M3-19",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 104,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Pipelineで順序を制御しNotebookで加工する",
    "difficulty": "Medium",
    "type": "single",
    "question": "10表のロードをForEachで並列化したい。各処理は同じ宛先表の同じ日付範囲を上書きする。並列化前に必要な判断はどれか。",
    "code": "",
    "choices": [
      "読み取りが別表なら宛先競合は起きない",
      "最大並列度なら常に正しい",
      "Certifiedにすれば書込競合が消える",
      "宛先更新範囲の競合と順序・範囲の分離"
    ],
    "choiceNotes": [
      "宛先が同一範囲という条件を見落としている。",
      "性能設定はデータ整合性を保証しない。",
      "信頼性の表示は排他・範囲分離を実装しない。",
      "同時更新で結果を壊す危険を確認する。"
    ],
    "answers": [
      3
    ],
    "explanation": "同時更新で結果を壊す危険を確認する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/use-data-factory-pipelines-fabric/2-understand-fabric-pipeline"
  },
  {
    "id": "PDF-M3-20",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 120,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Dataflowのエラー：変換と宛先を分ける",
    "difficulty": "Medium",
    "type": "single",
    "question": "Dataflow更新は失敗したが、同じItemの保存・検証は成功している。原因調査として適切なのはどれか。",
    "code": "",
    "choices": [
      "対象更新Runの表・Activity詳細と入力データを調べる",
      "すべての入力を無条件削除",
      "編集画面の色だけでエラーを判定",
      "保存成功だけで更新成功とみなす"
    ],
    "choiceNotes": [
      "保存時の検証と本番更新の結果は別である。",
      "原因の特定前にデータを失う。",
      "実際のRun情報を確認していない。",
      "異なる操作の成否を混同している。"
    ],
    "answers": [
      0
    ],
    "explanation": "保存時の検証と本番更新の結果は別である。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflows-gen2-monitor"
  },
  {
    "id": "PDF-M3-21",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 114,
    "domain": "データの取り込みと変換",
    "skill": "JOIN・集計・SQLとKQLの読み方",
    "difficulty": "Medium",
    "type": "single",
    "question": "最新契約を商品マスターへLEFT JOINし、未登録商品も含めた契約件数を維持したい。先に必要な確認はどれか。",
    "code": "",
    "choices": [
      "商品マスターの結合キーが一意であること",
      "SUMの別名だけを変更",
      "LEFT JOINなら右側の一意性は一切不要",
      "未登録商品を必ずINNER JOINで消す"
    ],
    "choiceNotes": [
      "重複があるとLEFT JOINでも明細が増える。",
      "結合の行数を制御しない。",
      "左行を残すことと行数が増えないことは別である。",
      "件数を維持する要件に反する。"
    ],
    "answers": [
      0
    ],
    "explanation": "重複があるとLEFT JOINでも明細が増える。",
    "source": "https://learn.microsoft.com/en-us/training/modules/fabric-transform-data-notebooks/4-combine-aggregate"
  },
  {
    "id": "PDF-M3-22",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 123,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "Eventhouseの取り込み・実行エラー",
    "difficulty": "Medium",
    "type": "single",
    "question": "Eventhouseのクエリは実行できるが、特定ソースだけ取り込みに失敗する。最初に確認する組み合わせはどれか。",
    "code": "",
    "choices": [
      "ソース形式・mapping・型・権限と取り込み側ログ",
      "クエリ成功ならすべての取り込みも成功",
      "全クエリを大きな時間範囲へ変更",
      "ソースに関係なくCapacity停止と断定"
    ],
    "choiceNotes": [
      "クエリ成功とは別の取り込み経路を調べる。",
      "異なる操作の権限と成否を混同している。",
      "取り込み失敗の原因を直さない。",
      "観測された特定ソースの失敗を調べていない。"
    ],
    "answers": [
      0
    ],
    "explanation": "クエリ成功とは別の取り込み経路を調べる。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/manage-monitor-eventhouse"
  },
  {
    "id": "PDF-M3-23",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 99,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Deploymentとdatabase project",
    "difficulty": "Medium",
    "type": "single",
    "question": "開発から本番へNotebookを配備した後、本番処理が開発用フォルダーへ書いた。再発防止として優先する検証はどれか。",
    "code": "",
    "choices": [
      "本番を開発と同じDomainにすれば解決",
      "環境ごとの接続・パス・パラメーターと配備後の出力先",
      "Capacityを増やす",
      "Git差分がゼロなら出力先検証は省く"
    ],
    "choiceNotes": [
      "Domain所属だけでは書込パスを修正しない。",
      "問題の直接原因と配備検証に対応する。",
      "誤った出力先を修正しない。",
      "同じ定義でも環境依存値が不適切な場合がある。"
    ],
    "answers": [
      1
    ],
    "explanation": "問題の直接原因と配備検証に対応する。",
    "source": "https://learn.microsoft.com/en-us/training/modules/implement-cicd-in-fabric/4-implement-deployment-pipelines"
  },
  {
    "id": "PDF-M3-24",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 108,
    "domain": "データの取り込みと変換",
    "skill": "Shortcut・Mirroring・Copyの選び分け",
    "difficulty": "Medium",
    "type": "single",
    "question": "Mirroringで1表だけデータが遅れ、他表は更新中である。最初の調査はどれか。",
    "code": "",
    "choices": [
      "直ちに全表を削除して作成し直す",
      "表単位の複製状態・最終完了と詳細エラー",
      "DB全体が動作中なので正常と断定",
      "累積処理数だけを現在行数と比較して完了と断定"
    ],
    "choiceNotes": [
      "原因の確認なしに影響を拡大する。",
      "表固有の遅延を特定する情報に合う。",
      "表単位の異常を見逃す。",
      "指標の意味と時刻が異なる。"
    ],
    "answers": [
      1
    ],
    "explanation": "表固有の遅延を特定する情報に合う。",
    "source": "https://learn.microsoft.com/en-us/fabric/onelake/onelake-shortcuts"
  },
  {
    "id": "PDF-M3-25",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 97,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Domain・OneLake・Airflowの設定範囲",
    "difficulty": "Medium",
    "type": "single",
    "question": "SQLへのGRANTは正しいが外部アプリからOneLakeへ接続できない。経路に対する管理制限を疑っている。追加で確認すべき対象はどれか。",
    "code": "",
    "choices": [
      "SQLのGRANTだけを何度も実行",
      "OneLakeの外部アクセス等に関する管理設定",
      "Certifiedへ変更すれば管理制限は解除される",
      "AirflowのExtra nodesだけ"
    ],
    "choiceNotes": [
      "別経路の管理制限を確認していない。",
      "SQLの許可と別の経路設定が関係する。",
      "信頼性の表示は管理設定を変更しない。",
      "OneLake外部アクセスの許可とは別である。"
    ],
    "answers": [
      1
    ],
    "explanation": "SQLの許可と別の経路設定が関係する。",
    "source": "https://learn.microsoft.com/en-us/fabric/governance/domains"
  },
  {
    "id": "PDF-M3-26",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 106,
    "domain": "分析ソリューションの実装と管理",
    "skill": "時刻・イベント・手動起動",
    "difficulty": "Medium",
    "type": "single",
    "question": "毎日2時の処理と、到着時刻不定のファイル処理を設計する。最も適切な方針はどれか。",
    "code": "",
    "choices": [
      "イベント起動だけで全ファイル到着を保証",
      "前者は時刻起動、後者は対応イベント起動を検討",
      "時刻起動ではパラメーターは使えない",
      "両方とも現在日時だけで対象日を固定"
    ],
    "choiceNotes": [
      "イベント発生とデータ完全性は同義ではない。",
      "起動条件を要件に合わせ、別途データ完全性も確認する。",
      "起動方式と引数の設計を混同している。",
      "遅着・過去日の業務対象を誤る可能性がある。"
    ],
    "answers": [
      1
    ],
    "explanation": "起動条件を要件に合わせ、別途データ完全性も確認する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/pipeline-runs"
  },
  {
    "id": "PDF-M3-27",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 122,
    "domain": "分析ソリューションの監視と最適化",
    "skill": "モデル更新の監視・通知・アラート",
    "difficulty": "Medium",
    "type": "single",
    "question": "定期Pipelineの失敗メールを構成した。運用開始前に追加で必要な確認として最も適切なのはどれか。",
    "code": "",
    "choices": [
      "通知条件・宛先・有効化とテスト失敗時の到達",
      "成功時だけテストすれば失敗通知も保証",
      "保存済みなら受信確認は不要",
      "通知があれば原因は必ず自動修復"
    ],
    "choiceNotes": [
      "設定だけでなく検出と配信を検証する。",
      "失敗条件を実際に通していない。",
      "資格情報や宛先の誤りを検出できない。",
      "通知と修復を混同している。"
    ],
    "answers": [
      0
    ],
    "explanation": "設定だけでなく検出と配信を検証する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/create-alerts-for-pipeline-runs"
  },
  {
    "id": "PDF-M3-28",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 98,
    "domain": "分析ソリューションの実装と管理",
    "skill": "Git：変更履歴と実行データを区別する",
    "difficulty": "Medium",
    "type": "single",
    "question": "開発者2名の定義変更が競合した。片方の変更を失わず管理したい。適切な対応はどれか。",
    "code": "",
    "choices": [
      "Gitの差分を比較し競合を解消して同期後の実行を確認",
      "内容を見ず一方で上書き",
      "行データのVACUUMで解決",
      "定義の履歴は不要としてリポジトリを削除"
    ],
    "choiceNotes": [
      "両方の意図と実行可能性を検証できる。",
      "必要な変更を失うおそれがある。",
      "定義の競合を解消しない。",
      "変更の追跡とレビューを失う。"
    ],
    "answers": [
      0
    ],
    "explanation": "両方の意図と実行可能性を検証できる。",
    "source": "https://learn.microsoft.com/en-us/training/modules/implement-cicd-in-fabric/3-implement-version-control-and-git-integration"
  },
  {
    "id": "PDF-M3-29",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 107,
    "domain": "データの取り込みと変換",
    "skill": "保存先・SQL実行先・加工手段を選ぶ",
    "difficulty": "Medium",
    "type": "single",
    "question": "主な入力はファイル、大量変換はSpark、完成表はSQLで参照したい。Delta表のデータ更新はNotebookで行える。第一の候補はどれか。",
    "code": "",
    "choices": [
      "Eventstreamだけに全ファイルを置く",
      "Lakehouseを中心にNotebookと読取SQL endpointを組み合わせる",
      "Gitへ全データをcommitする",
      "SQL endpointへ全更新DMLを強制"
    ],
    "choiceNotes": [
      "ファイル保存とSpark加工の中心構成として合わない。",
      "ファイル・Spark加工・SQL参照の条件に合う。",
      "定義管理とデータ保管を混同している。",
      "読取用の経路へ更新要件を押し込んでいる。"
    ],
    "answers": [
      1
    ],
    "explanation": "ファイル・Spark加工・SQL参照の条件に合う。",
    "source": "https://learn.microsoft.com/en-us/training/modules/get-started-lakehouses/2-fabric-lakehouse"
  },
  {
    "id": "PDF-M3-30",
    "origin": "pdf90",
    "pdfExam": 3,
    "pdfPage": 112,
    "domain": "データの取り込みと変換",
    "skill": "Dataflow：Folding・更新方式・下流への影響",
    "difficulty": "Medium",
    "type": "single",
    "question": "Dataflowが列追加後に遅くなった。ソースへ委譲できていたフィルターが、途中変換の追加後に委譲されなくなった。適切な改善候補はどれか。",
    "code": "",
    "choices": [
      "保存量だけを測り原因を断定",
      "宛先Appendを増やす",
      "全行を取得する仕様へ固定",
      "変換順とFoldingを調べ、対応する早い段階で絞る"
    ],
    "choiceNotes": [
      "転送量と処理場所の変化を確認できない。",
      "ソースの不要転送を減らさない。",
      "性能悪化の要因を残す。",
      "不要な転送・処理の増加へ対応する。"
    ],
    "answers": [
      3
    ],
    "explanation": "不要な転送・処理の増加へ対応する。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/dataflow-gen2-performance-best-practices"
  }
]);
window.DP700_META.questionCount=window.DP700_QUESTIONS.length;

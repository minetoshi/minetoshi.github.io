window.DP700_PA_COACH=Object.assign(window.DP700_PA_COACH||{},{
  "PALIVE-20261106-01": {
    "cue": "「手動セッション開始では正常」「非アクティブ後のtimeout」→Session ready",
    "analysis": "Notebookのセッション待機時間の問題。容量が止まっているとは限らない。",
    "choices": [
      "× Capacityの再開を毎回管理者へ依頼するのは原因に対して大掛かり。",
      "× Workspace全体の設定変更はこのNotebookだけの条件に比べ影響範囲が大きい。",
      "× AutoSaveは編集データ保存でSparkセッションtimeoutではない。",
      "○ Session readyから当該Notebookのセッションタイムアウトを調整する。"
    ]
  },
  "PALIVE-20261106-02": {
    "cue": "「ForEach itemsは配列」「TableListはJSON文字列」→json()",
    "analysis": "中身が配列の文字列を、JSONとして読み直してArray型にする。createArray()とは使いどころが違う。",
    "choices": [
      "× string()は文字列化なのでArray型への変換と逆方向。",
      "○ json()はJSONテキストを配列/オブジェクトとして解釈する。",
      "× concat()は文字列をつなぐだけで配列型にはならない。",
      "× base64()はエンコードでありJSON配列の解析ではない。"
    ]
  },
  "PALIVE-20261106-03": {
    "cue": "「複雑なDelta集計」「コード変更せず高速化」→Native execution engine",
    "analysis": "コード修正やリソース追加ではなく、実行エンジン自体による高速化を選ぶ。",
    "choices": [
      "× AQEもクエリ最適化を行うが、設問のFabricネイティブ実行エンジンの説明とは異なる。",
      "× Dynamic Allocationはexecutor数の調整で処理演算の実装自体を高速化しない。",
      "× High concurrencyはセッション共有・同時利用の効率化。",
      "○ Native execution engineは対応するSpark演算をネイティブ実行しコード変更を抑えられる。"
    ]
  },
  "PALIVE-20261106-04": {
    "cue": "「変化するデータの条件」「自動通知」→Activator",
    "analysis": "処理ログの閲覧か、値や条件を継続検知してアクションするかを区別する。",
    "choices": [
      "○ Activatorは条件成立を検知して通知・アクションできる。",
      "× Capacityは計算資源で通知条件エンジンではない。",
      "× Monitoring hubは実行状況を調べる入口で、データ条件検知とは役割が違う。",
      "× OneLakeは共通ストレージであり通知エンジンではない。"
    ]
  },
  "PALIVE-20261106-05": {
    "cue": "「親から子へArrayを渡す」「子ではString扱い」→createArray()",
    "analysis": "子のForEachはArrayを要求。親のExecute Pipelineに渡す値を配列型で構築する。",
    "choices": [
      "× 子をString型にするとForEachのArray要件を満たせない。",
      "× @stringは逆に値を文字列化してしまう。",
      "○ createArrayで配列として値を構築し親から渡す。要素のネストも確認する。",
      "× Run IDはデータの配列要素の代わりにならない。"
    ]
  },
  "PALIVE-20261106-06": {
    "cue": "「Eventstreamランタイムエラー」「原因特定」→Data insights＋Runtime logs",
    "analysis": "原因を決め打ちして変更せず、メトリクス・ログ・severityで診断する。",
    "choices": [
      "○ Data insightsでイベント件数や処理の異常を把握する。",
      "× 全変換無効化は原因を特定する前の乱暴な変更で副作用が大きい。",
      "○ Runtime logsをエラー重大度で絞り対象を絞る。",
      "× 原因未確認のロジック変更は修正箇所を誤る危険がある。",
      "○ Runtime logsの内容で具体的な失敗原因を確認する。"
    ]
  },
  "PALIVE-20261106-07": {
    "cue": "「変換が遅い/失敗」「ボトルネック調査」→詳細ログ",
    "analysis": "性能改善の前に処理時間・エラー箇所を観測できる情報を増やす。",
    "choices": [
      "× 失敗通知だけでは原因や遅い処理が分からない。",
      "○ 詳細ログ・実行情報により失敗位置と処理時間を把握できる。",
      "× Autoscaleだけではデータスキュー等のボトルネックは分からない。",
      "× 基本監視のみに限定すると詳しい切り分けに必要な情報が不足する。"
    ]
  },
  "PALIVE-20261106-08": {
    "cue": "「DestinationQueryNotFound」「MultipleDestinationQueries」→再設定＋重複除去",
    "analysis": "エラー名をそのまま分解する。存在しないなら作り直し、複数なら整理。",
    "choices": [
      "○ Ordersの参照先が欠落しているため宛先を再構成する。",
      "○ Customersの宛先設定が重複するため重複を除去する。",
      "× 宛先Queryが見つからない問題は認証だけでは解消しない。",
      "× 複数競合の状態でさらに宛先を追加しても改善しない。"
    ]
  },
  "PALIVE-20261106-09": {
    "cue": "「データ利用可能まで遅い」「継続的な低遅延処理」→Structured Streaming",
    "analysis": "到着を待って日次処理する設計から、流れてきた分を順次処理する設計へ変える。",
    "choices": [
      "× パーティション分割は保存・実行効率の工夫で連続処理ではない。",
      "× ノード追加だけではバッチ起動間隔を短くできない。",
      "× 日次バッチにすると低遅延要件と反対方向。",
      "○ Structured Streamingは継続入力を増分処理できる。"
    ]
  },
  "PALIVE-20261106-10": {
    "cue": "「Pipeline断続失敗」「Run/Activityのエラー詳細」→Monitoring hub",
    "analysis": "ログから具体的な失敗箇所を調査するのが先で、無条件の再実行は後回し。",
    "choices": [
      "× 原因未確認でTimeoutだけ伸ばしても欠損や認証エラーは直らない。",
      "× 調査なしの再実行は再発防止にならない。",
      "× 外部監視が必須ではなく、まずFabric標準の実行詳細を使える。",
      "○ Monitoring hubから該当Runと失敗Activityを追跡する。"
    ]
  },
  "PALIVE-20261106-11": {
    "cue": "「Lookupが0件」「意図的に失敗終了」「独自コード」→Fail activity＋詳細設定",
    "analysis": "Lookupに成功しても0件なら業務上は失敗と判断するケース。必要なら条件分岐でFailへ進める。",
    "choices": [
      "○ Lookup後にFail activityを置き、0件時の分岐から呼び出す。",
      "× Retryは一時的な再試行で0件を業務エラーとして確定しない。",
      "× Waitは待機するだけで失敗終了しない。",
      "○ Failに特定のエラーコードとメッセージを設定できる。",
      "× Retryだけでは要件の『指定したエラーで終了』を満たせない。"
    ]
  },
  "PALIVE-20261106-12": {
    "cue": "「Lookupでデータソース欠落」「明確なエラーコード」→Fail activity",
    "analysis": "曖昧な失敗で放置せず、業務上の状況が分かるエラーを意図的に発行する。",
    "choices": [
      "× 条件分岐だけでは失敗終了やエラー内容の生成にならない。",
      "○ Fail activityで任意のエラーコード/メッセージを設定し失敗終了できる。",
      "× ログだけ記録して続行すると異常を見逃して後続が進む。",
      "× データソース欠落はRetryだけで必ず解決する問題ではない。"
    ]
  },
  "PALIVE-20261106-13": {
    "cue": "「Pipelineは成功」「Lakehouseロードが遅い」→Monitoring hubで時間分析",
    "analysis": "『成功＝性能がよい』ではない。成功したRunのActivity別所要時間を調べる。",
    "choices": [
      "× Dataflow新規作成前に現状の遅延要因を調べるべき。",
      "× Pipeline複製だけでは遅いActivityを特定できない。",
      "× Activatorは条件検知や通知向けで実行時間内訳の把握とは違う。",
      "○ Monitoring hubで成功Runも含め実行時間とActivity詳細を確認する。"
    ]
  },
  "PALIVE-20261106-14": {
    "cue": "「毎分Delta書込」「小ファイル大量」「書込時と後処理」→Optimize Write＋Auto Compact",
    "analysis": "Optimize Writeで小ファイルを作りにくくし、Auto Compactで残った小ファイルをまとめる。",
    "choices": [
      "× V-Orderは読取効率の最適化で小ファイルの自動統合を両方満たすわけではない。",
      "× RDDへの変更はDeltaテーブルの断片化対策ではない。",
      "× VACUUMは古いファイル掃除で小ファイル統合を目的としない。",
      "○ Optimize Writeは書込時のファイル最適化、Auto Compactは書込後の圧縮。"
    ]
  },
  "PALIVE-20261106-15": {
    "cue": "「取り込みと変換が遅い」「原因特定＋改善」→監視で絞る＋変換最適化",
    "analysis": "観測してから対処する二段階を選ぶ。",
    "choices": [
      "○ Activityを状態・開始時刻で絞り、遅延発生箇所を特定する。",
      "× 容量だけ増やしても変換ロジックの非効率は残る。",
      "○ ボトルネックとなる変換を改善すれば処理時間を直接減らせる。",
      "× 通知は異常を知らせるが原因解消の代わりにはならない。"
    ]
  },
  "PALIVE-20261106-16": {
    "cue": "「IoTリアルタイム変換」「Deltaに保存」→Structured Streaming＋Delta",
    "analysis": "継続変換するエンジンとACID対応の格納形式を組み合わせる。",
    "choices": [
      "× Azure Data Factoryのみではこの設問のSparkストリーム変換＋Delta出力を直接示さない。",
      "× Event Hubsはイベント受信基盤で変換とDelta書込の両方を担わない。",
      "× Stream Analyticsは代替ストリーム処理技術だが、選択肢ではDeltaまで含むFabric設計が明示されない。",
      "○ Structured Streamingが継続変換を行い、Deltaが信頼性ある格納先となる。"
    ]
  },
  "PALIVE-20261106-17": {
    "cue": "「Completedに絞る」「2列で集計」「合計5万超」→filter→groupBy→sum→filter",
    "analysis": "行の絞り込みとグループ集計後の条件判定を混同しない。",
    "choices": [
      "○ Completedでfilter後、region/channelでgroupByし、sumの結果に50000超を適用する。",
      "× status別件数は地域・チャネル別金額合計ではない。",
      "× distinctは地域/チャネルの重複除去で合計を求めない。",
      "× 単純なソート・limitは金額合計50000超の条件を意味しない。"
    ]
  },
  "PALIVE-20261106-18": {
    "cue": "「ストリーム保存前」「NULL除外」「計算列」→Structured Streaming＋filter＋式",
    "analysis": "受信したイベントを継続処理し、データ品質と派生列を整えてからDeltaへ保存する。",
    "choices": [
      "○ Spark SQL式で派生列を追加し、保存前に必要な値を計算できる。",
      "○ 必須列NULLを除けば無効なレコードを格納前に除外できる。",
      "× CSVに退避して後日バッチ処理は低遅延要件に合わない。",
      "× バッチ変換だけでは継続ストリームの事前整形にならない。",
      "○ Structured Streamingでデータを継続受信・処理できる。"
    ]
  },
  "PALIVE-20261106-19": {
    "cue": "「Warehouse＋LakehouseをSQLで結合」「新しいWarehouse表」→CTAS",
    "analysis": "SQL一文で結合結果から新表を作れるなら、追加のETLフローを新設する必要がない。",
    "choices": [
      "× Copy activityの個別作成はSQLで直接結合するより処理が増える。",
      "○ CTASでクロスデータベースSELECTの結果からWarehouse新表を作成できる。",
      "× Dataflow Gen2はローコード変換に適するが、今回の新表作成はSQLで完結できる。",
      "× SELECT INTOはFabric Warehouseの対応範囲や構文制限を確認すべきで、ここではCTASを選ぶ。"
    ]
  },
  "PALIVE-20261106-20": {
    "cue": "「2つのストリーム」「列名/型を揃える」「1件ずつ縦結合」→Manage fields→Union",
    "analysis": "Joinはキーで横に結合し、Unionは行を縦につなぐ。先にスキーマを整える。",
    "choices": [
      "× Expand→Joinでは同じ列構造での縦連結にならない。",
      "× Filter→Joinも行の縦結合ではない。",
      "○ Manage fieldsで列名/型/不要列を統一してからUnionでイベントを縦に連結する。",
      "× Join→Manage fieldsは横結合後の列整理であり要求と順序が異なる。"
    ]
  },
  "PALIVE-20261106-21": {
    "cue": "「商品・サブカテゴリ・カテゴリ」「Salesから1回Join」→商品粒度の非正規化",
    "analysis": "ProductKeyで1商品1行のDimProductを作り、階層名を持たせればSalesから1回のJoinでよい。",
    "choices": [
      "○ 1商品1行に3階層の説明属性を持たせるとJoin回数が減る。",
      "× バージョンごとの複数行は履歴管理要件がない場合に粒度を複雑にする。",
      "× Sales明細粒度では商品ディメンションがFact同様に重複する。",
      "× サブカテゴリ粒度だと商品ごとの説明属性を表せない。"
    ]
  },
  "PALIVE-20261106-22": {
    "cue": "「Categoryを全置換」「Customerは更新＋新規」→OVERWRITE＋MERGE",
    "analysis": "全件置換とUpsertを混同しない。MERGEはマッチした既存行と新規行の両方を扱う。",
    "choices": [
      "× DELETEとUPDATEだけでは更新対象や新規追加の要件が不足。",
      "× INSERT INTOだけでは過去のCategory残存やCustomer重複が起きる。",
      "○ INSERT OVERWRITEは全スナップショット置換、MERGEは更新＋追加。",
      "× CategoryをMERGE、CustomerをDELETEでは指定のロード方式と逆。"
    ]
  },
  "PALIVE-20261106-23": {
    "cue": "「Kafka過去分は飛ばす」「新着だけ」「中断後に再開」→latest＋append＋永続checkpoint",
    "analysis": "最新offsetは初回開始位置、appendは追記、checkpointは次回の続き位置。",
    "choices": [
      "× earliestは最初から過去分を処理してしまう。",
      "○ latestで初回既存イベントを飛ばし、appendで追記し、checkpointで再開できる。",
      "× 毎回checkpoint新規だと進捗が引き継がれずデータ欠落/重複のリスクがある。",
      "× checkpointがないと再開位置を確実に保持できない。"
    ]
  },
  "PALIVE-20261106-24": {
    "cue": "「大量Factを毎回Full load」「時間と資源を減らす」→増分ロード＋CDC",
    "analysis": "全件処理をやめ、更新・追加・削除の変更だけを検出して処理する。",
    "choices": [
      "× 計算資源だけ増やしてもフルリロードの不要なI/Oは残る。",
      "○ 増分ロードで前回以降の差分だけを取り込める。",
      "× 手動partition調整だけではフルリロードを避けられない。",
      "× ETL製品変更だけでは処理対象を差分化しない。",
      "○ CDCは変更イベントを追跡し増分処理の元データにできる。"
    ]
  },
  "PALIVE-20261106-25": {
    "cue": "「多様なファイル」「PySparkとSQL両方」→Lakehouse",
    "analysis": "ファイル/Deltaを保存してSparkとSQL分析エンドポイントから扱う要件。",
    "choices": [
      "× WarehouseはT-SQL中心で非構造化ファイルの直接処理に重点を置かない。",
      "× Eventhouseはイベント/ログのKQL分析が中心。",
      "○ Lakehouseは多様なデータ形式の保存とSpark・SQL利用に向く。",
      "× Fabric SQL databaseはリレーショナルDB用途で多様なファイルの分析基盤の主役ではない。"
    ]
  }
});

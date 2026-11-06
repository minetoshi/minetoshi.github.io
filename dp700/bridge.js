window.DP700_BRIDGE=[
  {
    "id": "BRIDGE-1",
    "origin": "bridge9",
    "domain": "データの取り込みと変換",
    "skill": "ステップ10 · 増分の範囲",
    "difficulty": "Hard",
    "type": "single",
    "question": "前回成功した上限は9時。今回の上限を10時に固定し、次回も同じ境界ルールで続けます。今回の対象は？",
    "choices": [
      "9時より後、10時以下",
      "9時以上、10時未満",
      "10時より後の全行"
    ],
    "answers": [
      0
    ],
    "explanation": "下限を含めず上限を含めると、9時を再取得せず、10時を今回に含められます。今回が成功したら10時を次回の下限にします。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse",
    "caseText": "着眼点：9時ちょうどは前回処理済みです。境界の重複と漏れを考えましょう。"
  },
  {
    "id": "BRIDGE-2",
    "origin": "bridge9",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ10 · 参照できる範囲",
    "difficulty": "Hard",
    "type": "single",
    "question": "同じSQLテーブルを使い、担当外の地域の明細を見せず、担当内でも原価列は参照させません。どの制御を組み合わせる？",
    "choices": [
      "地域ごとの行レベル制御と、原価列の参照制限",
      "地域ごとの行レベル制御と、原価列の並べ替え",
      "原価列の参照制限と、実行スケジュールの変更"
    ],
    "answers": [
      0
    ],
    "explanation": "地域は行、原価は列に対する要件です。各制御を実際の利用者権限で確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security",
    "caseText": "着眼点：制限したい対象を「レコード」と「項目」に分けて考えましょう。"
  },
  {
    "id": "BRIDGE-3",
    "origin": "bridge9",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ10 · 性能の証拠",
    "difficulty": "Hard",
    "type": "single",
    "question": "同じSparkジョブで数タスクだけが遅い。入力件数の全体値は前回とほぼ同じです。偏りを裏付ける観察は？",
    "choices": [
      "遅いタスクにシャッフル読み取りが集中している",
      "全タスクの処理時間が一様に伸びた",
      "Notebook名が変更された"
    ],
    "answers": [
      0
    ],
    "explanation": "少数のタスクへのデータ集中は偏りの手掛かりです。結合キーの分布と合わせて確認すると原因を絞れます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-overview",
    "caseText": "着眼点：全体平均と、個々のタスクの分布は別です。"
  },
  {
    "id": "BRIDGE-10",
    "origin": "bridge9",
    "domain": "データの取り込みと変換",
    "skill": "ステップ10 · 境界で失敗",
    "difficulty": "Hard",
    "type": "single",
    "question": "前回の成功上限は12時。13時までをコピーした後、後続の変換が失敗した。変換成功後にだけ進捗を進める設計では次回どうする？",
    "choices": [
      "12時からの同じ範囲を再処理し、重複を防ぐ書き込みを使う",
      "13時を新しい下限にして失敗分を飛ばす",
      "コピー先へ同じ行を無条件で追記する"
    ],
    "answers": [
      0
    ],
    "explanation": "変換が終わるまでは進捗を進めず、再処理が重複を生まないようにします。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse",
    "caseText": "着眼点：成功した範囲を基準に、再実行と重複防止を考えましょう。"
  },
  {
    "id": "BRIDGE-11",
    "origin": "bridge9",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ10 · 最小権限",
    "difficulty": "Hard",
    "type": "single",
    "question": "売上の地域制限に加え、営業担当には編集もさせたくない。公開前に確認する組み合わせは？",
    "choices": [
      "閲覧者相当の権限で、担当外の行が見えず編集もできないことを確認",
      "管理者が全件を見られることだけ確認",
      "閲覧者をContributorにして編集できることを確認"
    ],
    "answers": [
      0
    ],
    "explanation": "要件はデータ行の制限と編集権限の両方です。実際の閲覧者に近い条件で確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces",
    "caseText": "着眼点：見える行と、できる操作を分けて考えましょう。"
  },
  {
    "id": "BRIDGE-12",
    "origin": "bridge9",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ10 · 性能の調査",
    "difficulty": "Hard",
    "type": "single",
    "question": "テーブル全体の行数は増えていないのに、1つのキーに対応するタスクだけ大幅に遅い。改善前に比較する情報は？",
    "choices": [
      "キー別の件数と、遅いタスクのシャッフル量",
      "ジョブの総時間とレポートの配色",
      "ファイル名の長さとダッシュボード名"
    ],
    "answers": [
      0
    ],
    "explanation": "全体の件数が同じでも分布が変われば偏りが起こります。キー分布とタスクのデータ量を照合します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-engineering/spark-monitoring-overview",
    "caseText": "着眼点：全体の値と、タスクごとの分布を比べましょう。"
  },
  {
    "id": "BRIDGE-4",
    "origin": "bridge9",
    "domain": "データの取り込みと変換",
    "skill": "ステップ11 · 再実行と進捗",
    "difficulty": "Hard",
    "type": "multi",
    "question": "増分ロードの後続処理が失敗すると同じバッチが再送されます。重複を防ぎ、未処理データを飛ばさないための対策を2つ選んでください。",
    "choices": [
      "同じキーの再送が重複しないように書き込む",
      "必要な処理が成功してから進捗を進める",
      "コピー開始時に進捗を進める",
      "失敗時も同じバッチを無条件で追記する"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "再実行しても重複しない書き込みと、成功後だけの進捗更新を両立させます。前者は二重登録、後者は取りこぼしを防ぎます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse"
  },
  {
    "id": "BRIDGE-5",
    "origin": "bridge9",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ11 · 障害箇所の特定",
    "difficulty": "Hard",
    "type": "multi",
    "question": "昨日まで動いていた処理で、コピーは成功、Notebookは入力ファイルがないと報告。書き込みをやり直す前に比較する情報を2つ選んでください。",
    "choices": [
      "コピーが実際に書いた宛先パス",
      "Notebookに渡った入力パス",
      "ダッシュボードの色設定",
      "Sparkプールの名前だけ"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "まず出力先と読み取り先が一致するか確認します。実際の値を比較すれば、日付フォルダーやパラメーターの食い違いを見つけられます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"
  },
  {
    "id": "BRIDGE-6",
    "origin": "bridge9",
    "domain": "データの取り込みと変換",
    "skill": "ステップ11 · SQLの条件位置",
    "difficulty": "Hard",
    "type": "code",
    "question": "顧客Aには完了済み注文1件、Bには注文なし。全顧客を残し、完了済み注文数を数えます。Bを0件で返すため、SQLの status = 'Done' をどこに置く？",
    "choices": [
      "LEFT JOINのON条件に置く",
      "LEFT JOIN後のWHEREに置く",
      "COUNT(*)に置き換えて条件を外す"
    ],
    "answers": [
      0
    ],
    "explanation": "ONで完了済み注文だけを結合し、COUNT(o.order_id)でNULLを数えなければ、Bも0件で残ります。WHEREに置くとBのNULL行が除外されます。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/tsql-surface-area",
    "code": "SELECT c.id, COUNT(o.order_id)\nFROM Customers c LEFT JOIN Orders o\nON c.id=o.customer_id\n-- status 条件の位置を考える\nGROUP BY c.id;"
  },
  {
    "id": "BRIDGE-13",
    "origin": "bridge9",
    "domain": "データの取り込みと変換",
    "skill": "ステップ11 · 複数選択・復旧",
    "difficulty": "Hard",
    "type": "multi",
    "question": "宛先に一部だけ書き込んだ後で失敗した。再実行可能にする対策を2つ選んでください。",
    "choices": [
      "キーで重複を防ぐ",
      "必要な処理の成功まで進捗を据え置く",
      "実行開始時に進捗を確定する",
      "同じ行を毎回追記する"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "キーで重複を防ぎ、失敗した範囲を再取得できる進捗管理にします。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-incremental-copy-data-warehouse-lakehouse"
  },
  {
    "id": "BRIDGE-14",
    "origin": "bridge9",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ11 · 複数選択・表示の遅延",
    "difficulty": "Hard",
    "type": "multi",
    "question": "宛先テーブルに最新行が存在するが、ダッシュボードで古い値が表示される。表示側で確認することを2つ選んでください。",
    "choices": [
      "時間範囲とクエリのフィルター",
      "ダッシュボードの更新条件",
      "入力イベントを全件再送",
      "宛先テーブルを削除"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "テーブルまで到達済みなので、表示に使う条件と更新のタイミングを確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/dashboard-real-time-create"
  },
  {
    "id": "BRIDGE-15",
    "origin": "bridge9",
    "domain": "データの取り込みと変換",
    "skill": "ステップ11 · SQLの条件位置",
    "difficulty": "Hard",
    "type": "single",
    "question": "Aに完了1件、Bには未完了1件だけ。両顧客を残して完了件数を数えるには？",
    "choices": [
      "LEFT JOINのONに完了条件を置き、注文IDをCOUNTする",
      "WHEREで完了注文だけに絞る",
      "完了条件なしでCOUNT(*)する"
    ],
    "answers": [
      0
    ],
    "explanation": "ONで完了済み注文に限って結合するとBの注文IDはNULLになり、COUNT(注文ID)が0を返します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/tsql-surface-area"
  },
  {
    "id": "BRIDGE-7",
    "origin": "bridge9",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ12 · 公開前の権限検証",
    "difficulty": "Hard",
    "type": "single",
    "question": "開発者では売上レポートが開けます。営業担当には閲覧だけを許し、担当外の明細を見せない要件があります。公開前の確認は？",
    "choices": [
      "閲覧者相当のアカウントで、閲覧・編集の可否と表示行を確認する",
      "開発者が全件見えることだけ確認する",
      "閲覧者をContributorにして表示を確認する"
    ],
    "answers": [
      0
    ],
    "explanation": "開発者の成功だけでは閲覧者に適用される制御を検証できません。閲覧者の権限で、必要な行が見え、担当外の行が見えず、編集できないことを確かめます。",
    "source": "https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces"
  },
  {
    "id": "BRIDGE-8",
    "origin": "bridge9",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ12 · 鮮度の切り分け",
    "difficulty": "Hard",
    "type": "single",
    "question": "センサーの最新イベントはKQLテーブルまで届いています。担当者が見るダッシュボードだけ値が古いとき、最も情報が得られる次の操作は？",
    "choices": [
      "ダッシュボードの実行クエリを同じ時間範囲・パラメーターで試す",
      "入力イベントを再送する",
      "チェックポイントを削除する"
    ],
    "answers": [
      0
    ],
    "explanation": "保存先までは正常なので、表示側と同じ条件で再現します。クエリでも古ければフィルター等、クエリが新しければ表示・更新の条件を調べます。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/dashboard-real-time-create"
  },
  {
    "id": "BRIDGE-9",
    "origin": "bridge9",
    "domain": "データの取り込みと変換",
    "skill": "ステップ12 · KQLと監視の判断",
    "difficulty": "Hard",
    "type": "single",
    "question": "Aに温度70、90、Bに温度70が1件ずつあります。「受信したがしきい値以上が0件」と「受信していない」を区別したい。AとBを両方表示する集計は？",
    "choices": [
      "DeviceId別に count() と countif(Temperature >= 80) を同時に集計",
      "先に where Temperature >= 80 で絞ってから、DeviceId別に count()",
      "DeviceIdを指定せずに countif(Temperature >= 80)"
    ],
    "answers": [
      0
    ],
    "explanation": "Aは受信2件・しきい値以上1件、Bは受信1件・しきい値以上0件です。事前に絞るとBが消えます。まったく受信していない機器も表示するには、別途機器一覧との照合が必要です。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set"
  },
  {
    "id": "BRIDGE-16",
    "origin": "bridge9",
    "domain": "データの取り込みと変換",
    "skill": "ステップ12 · KQLの比較",
    "difficulty": "Hard",
    "type": "single",
    "question": "Aに温度50と85、Bに60がある。80以上の件数を集計しつつ、受信はあるが該当0件のBも表示するには？",
    "choices": [
      "DeviceId別にcountif(Temperature >= 80)",
      "whereで80以上だけを残してDeviceId別にcount()",
      "DeviceIdなしのcount()"
    ],
    "answers": [
      0
    ],
    "explanation": "条件付き集計ならBのグループが残ります。whereで先に除外するとBの入力行がなくなります。",
    "source": "https://learn.microsoft.com/en-us/fabric/real-time-intelligence/kusto-query-set"
  },
  {
    "id": "BRIDGE-17",
    "origin": "bridge9",
    "domain": "分析ソリューションの監視と最適化",
    "skill": "ステップ12 · 監視からの再実行",
    "difficulty": "Hard",
    "type": "single",
    "question": "コピーの出力先は今日のフォルダー、Notebookの入力は昨日のフォルダー。今日のファイルはすでに存在する。先に直すのは？",
    "choices": [
      "Notebookに渡す日付パラメーター",
      "同じデータの全件コピーを繰り返す",
      "Sparkプールのサイズを増やす"
    ],
    "answers": [
      0
    ],
    "explanation": "コピー済みの出力と読み取り先が違っています。入力パラメーターを修正し、今日のファイルで再実行します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-factory/monitor-data-factory"
  },
  {
    "id": "BRIDGE-18",
    "origin": "bridge9",
    "domain": "分析ソリューションの実装と管理",
    "skill": "ステップ12 · 列と行の検証",
    "difficulty": "Hard",
    "type": "single",
    "question": "担当内の行だけを見せ、原価列は参照不可にした。担当者としてテストするとき、何を確かめる？",
    "choices": [
      "担当内は読め、担当外は見えず、原価列は参照できない",
      "担当内の件数だけ合えば完了",
      "管理者で原価列が見えることだけ確認"
    ],
    "answers": [
      0
    ],
    "explanation": "必要なアクセスと禁止するアクセスを、同じ閲覧者条件で両方確認します。",
    "source": "https://learn.microsoft.com/en-us/fabric/data-warehouse/row-level-security"
  }
];

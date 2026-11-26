# コード・並べ替え問題の意味監査（2026-11-26）

対象は販売用220問中のコード40問と並べ替え15問。各IDの全文、選択肢、採点、出典URL、原稿ハッシュは `commercial-questions.json` にある。下表はコードの実行意味・順序・正答と解説の整合を独立に確認した記録であり、Microsoftによる**個別問題の正答確認ではない**。出典URLは仕様の参照であり、原稿の権利証明ではない。Microsoftの試験問題やPractice Assessmentは参照・転載していない。販売者による独立作成の来歴確認は引き続き必要。

## コード40問

| ID | 確認した論点 | 判定 |
| --- | --- | --- |
| C-SQL-01 | `GROUP BY ProductId` と集計列の対応 | 整合 |
| C-SQL-02 | `COALESCE` の非NULL値選択 | 整合 |
| C-SQL-03 | `ROW_NUMBER` の同時刻タイブレークは未指定 | 選択肢・解説を修正 |
| C-SQL-04 | `LEFT JOIN` は右側の一致行数で左行が増え得る | 設問を修正 |
| C-SQL-05 | `CASE` の条件付き派生列 | 整合 |
| C-SQL-06 | 日付条件の読取削減は適切なパーティション等が前提 | 整合 |
| C-SQL-07 | `GROUP BY Region` の出力粒度 | 整合 |
| C-SQL-08 | カンマ欠落は構文エラーでなく列別名になり得る | 整合 |
| C-SQL-10 | 射影と行絞り込みによる読取削減の可能性 | 整合 |
| C-PY-01 | `dropDuplicates(['BusinessKey'])` は最新行選択ではない | 設問・解説を修正 |
| C-PY-02 | `fillna` の列別の欠損補完 | 整合 |
| C-PY-03 | `groupBy` と `sum` の地域別合計 | 整合 |
| C-PY-04 | 日付比較の前提となる `OrderDate` 型 | 設問に型を明記 |
| C-PY-05 | `withColumn` による列追加・置換 | 整合 |
| C-PY-06 | `append` と Delta形式の指定 | 互換な宛先の前提を設問に明記 |
| C-PY-07 | キーによる32分割は行数均等化を保証しない | 設問・解説を修正 |
| C-PY-08 | 小さい参照表のbroadcast join | 整合（小表という条件あり） |
| C-PY-09 | チェックポイントの進捗・状態復元 | 選択肢・解説を修正、既存の有効なコード例を維持 |
| C-PY-10 | watermarkと遅延到着・状態保持 | 整合 |
| C-KQL-01 | `ago(1h)` より後のタイムスタンプの抽出 | 未来時刻も含むことを設問・解説に明記 |
| C-KQL-02 | `Errors` は別名で、`count()` はエラー行に限定しない | 設問・解説を修正 |
| C-KQL-03 | `avg(Cpu)` のHost別集計 | 整合 |
| C-KQL-04 | `project` は列選択で行数制限ではない | 選択肢・解説を修正 |
| C-KQL-05 | `bin(Timestamp, 5m)` による5分境界 | 整合 |
| C-KQL-06 | `arg_max` の最大時刻の行、同時刻時の指定不足 | 解説に条件を追記 |
| C-KQL-07 | KQLデータベースのOneLake shortcutを `external_table()` で読む | 公式仕様と整合 |
| C-KQL-08 | 時間条件と列選択による後続処理の削減 | 整合（効果はデータ・実行計画に依存） |
| C-KQL-09 | `inner join` の一致キー行 | 整合 |
| C-KQL-10 | external Delta tableのQuery acceleration統計表示 | 公式仕様と整合 |
| MID-11 | SQL地域別SUM：東40、西20 | 整合 |
| MID-12 | PySparkの `>=` は100を含む | 整合 |
| MID-13 | filter後のselectは行と列を別々に制限 | 整合 |
| MID-14 | KQLのDeviceId別count：A2、B1 | 整合 |
| MID-15 | KQLの条件適用後のcount：A1、B1 | 整合 |
| ADV-11 | LEFT JOIN後の `COUNT(o.order_id)` はNULLを数えない | 整合 |
| ADV-12 | 顧客別 `ROW_NUMBER`：設問の時刻に同値なし | 整合 |
| ADV-13 | filterがSUMより先：西150だけ | 整合 |
| ADV-14 | `countif` は入力があるBのグループに0を返す | 整合 |
| ADV-15 | 5分binの10:05は次の境界 | 整合 |
| BRIDGE-6 | LEFT JOINのON側に条件を置きBを保持 | 整合 |

### 選択肢の追加改訂

次の15問は、分野外の語だけで消去できる誤答を、同じ言語・機能の解釈を比較する誤答へ変更した。正答の選択肢番号とコードは維持した。`C-SQL-08` は選択肢に合わせて解説も更新した。

`C-SQL-02`, `C-SQL-05`, `C-SQL-06`, `C-SQL-08`, `C-SQL-10`, `C-PY-02`, `C-PY-04`, `C-PY-05`, `C-PY-08`, `C-PY-09`, `C-PY-10`, `C-KQL-03`, `C-KQL-07`, `C-KQL-08`, `C-KQL-10`。

## 並べ替え15問

並べ替えは公式の必須手順をそのまま問う問題ではなく、提示した4工程を安全に実施する順を問う独自演習。複数の工程を同時に行える実務状況はあるため、「唯一の製品操作順」を主張しない。

| ID | 順序の判断軸 | 判定 |
| --- | --- | --- |
| ORD-01 | Git接続→コミット→レビュー→本番反映 | 整合 |
| ORD-02 | Project作成→スキーマ編集→ビルド→公開 | 整合 |
| ORD-03 | 開発→テスト配置→確認→本番配置 | 整合 |
| ORD-04 | 必要操作の把握→権限選択→付与→利用者検証 | 整合 |
| ORD-06 | パラメーター定義→参照→値渡し→結果検証 | 整合 |
| ORD-07 | 旧watermark取得→差分読取→書込→成功後更新 | 整合 |
| ORD-08 | Bronze→Silver→Gold→分析利用 | 整合 |
| ORD-09 | 対象決定→権限準備→Shortcut作成→利用者検証 | 整合 |
| ORD-10 | ソース確認→接続→Mirroring開始→状態監視 | 整合 |
| ORD-11 | イベントソース→取り込み→変換→宛先 | 整合 |
| ORD-12 | プロファイル→品質処理→結合・集計→curated書込 | 整合 |
| ORD-13 | 失敗Run→Activity→エラー詳細→修正・再実行 | 整合 |
| ORD-14 | ベースライン→ボトルネック→改善→再計測 | 整合 |
| ORD-16 | Eventhouse観測→遅いクエリ特定→改善→再確認 | 整合 |
| ORD-17 | Sparkタスク観測→skew確認→対策→再測定 | 整合 |

## 仕様の確認元

- [Microsoft Learn: ROW_NUMBER](https://learn.microsoft.com/en-us/sql/t-sql/functions/row-number-transact-sql?view=fabric) は同時刻の順序が一意に定まらないことを明記する。
- [Microsoft Learn: COALESCE](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/coalesce-transact-sql?view=fabric) と [CASE](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/case-transact-sql?view=fabric) はNULL値選択と条件式の結果を示す。
- [Apache Spark: dropDuplicates](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.dropDuplicates.html) と [repartition](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.repartition.html) は比較列とハッシュ分割の仕様を示す。
- [Apache Spark: fillna](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.fillna.html) と [withColumn](https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.DataFrame.withColumn.html) は欠損補完と列追加・置換の仕様を示す。
- [Microsoft Learn: Structured Streaming](https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview) はチェックポイントの復元用途とFabricでの書き込み例を示す。
- [Microsoft Learn: KQL summarize](https://learn.microsoft.com/en-us/kusto/query/summarize-operator?view=microsoft-fabric) はグループごとの集計と `countif` の初期値を示す。
- [Microsoft Learn: KQL ago](https://learn.microsoft.com/en-us/kusto/query/ago-function?view=microsoft-fabric) は現在から時間幅を引いた時刻を返す。
- [Microsoft Learn: OneLake shortcuts in KQL](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/onelake-shortcuts) は `external_table()` を案内する。
- [Microsoft Learn: Query acceleration](https://learn.microsoft.com/en-us/fabric/real-time-intelligence/query-acceleration-overview) は統計コマンドを案内する。

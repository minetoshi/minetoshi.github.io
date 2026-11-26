# 段階演習の重複改訂（2026-11-27）

販売用の上級問題を設問と正答の意味で比較したところ、`ADV-8` と `ADV-23` はDeltaテーブルの小ファイルを `OPTIMIZE` でまとめる同じ判断、`ADV-10` と `ADV-25` は再起動時に同じチェックポイントを使う同じ判断を問うていた。後者の各1問を別の論点へ改訂した。問題数と正答番号は変わらない。

| ID | 改訂後の判断 | Microsoft Learnで確認した仕様 | 注意 |
| --- | --- | --- | --- |
| `ADV-23` | 書き込み中心と読み取り中心のDelta表でV-order適用を測定して判断する | [V-orderの利点、書き込み時間との兼ね合い、新規ワークスペースの既定値](https://learn.microsoft.com/en-us/fabric/data-engineering/delta-optimization-and-v-order) | V-orderを全テーブルへ無条件に適用する問題にはしない。 |
| `ADV-25` | 同じソースの独立したストリーミングクエリに別々のチェックポイントを設ける | [クエリごとの専用チェックポイント](https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-overview)、[共有時の復旧リスク](https://learn.microsoft.com/en-us/fabric/data-engineering/structured-streaming-best-practices) | 互換性のある同一クエリの再起動は `ADV-10` で扱う。 |

この確認はMicrosoft Learnの**仕様との照合**であり、Microsoftが各設問の正答を公式に確認したものではない。原稿の作成経緯と販売権限は別途販売者による確認が必要。

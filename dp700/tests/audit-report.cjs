// Rebuild the inventory and per-ID change log against the PR #15 baseline.
const fs=require('fs'),vm=require('vm'),cp=require('child_process');
const {load,keys}=require('./banks.cjs');const base='fe87bc3974b58778ed96ba4442efe7e8e0fca89c';
const read=p=>cp.execFileSync('git',['show',`${base}:dp700/${p}`],{encoding:'utf8'});
const old={};const ctx=vm.createContext({window:old,document:{readyState:'loading',addEventListener(){}}});
for(const m of read('index.html').matchAll(/src="\.\/(.*?\.js)/g)){if(m[1]!=='app.js')vm.runInContext(read(m[1]),ctx);}
const now=load(),original=new Map(keys.flatMap(k=>old[k].map(q=>[q.id,q])));
const fields=['question','caseText','code','choices','answers','explanation','source','type','groups','reviewStatus','scorable','holdReason','instruction'];
const ledger=keys.flatMap(bank=>now[bank].map(q=>{const before=original.get(q.id)||{};const changes=Object.fromEntries(fields.filter(k=>JSON.stringify(q[k])!==JSON.stringify(before[k])).map(k=>[k,{before:before[k]??null,after:q[k]??null}]));return {id:q.id,bank,source:q.source,answerEvidence:q.answerEvidence||'expected',grading:q.reviewStatus==='review'||q.scorable===false?'held':'independent-practice',holdReason:q.holdReason||((q.reviewStatus==='review'||q.scorable===false)?q.explanation:null),changes};}));
fs.mkdirSync('dp700/audit',{recursive:true});fs.writeFileSync('dp700/audit/question-ledger.json',JSON.stringify({baseline:base,date:'2026-11-16',items:ledger},null,2));
const counts={total:ledger.length,question:ledger.filter(r=>r.changes.question).length,choicesOrAnswers:ledger.filter(r=>r.changes.choices||r.changes.answers).length,answers:ledger.filter(r=>r.changes.answers).length,explanation:ledger.filter(r=>r.changes.explanation).length,code:ledger.filter(r=>r.changes.code).length,source:ledger.filter(r=>r.changes.source).length,held:ledger.filter(r=>r.grading==='held').length};
const names=['通常バンク（基本221・PA論点50・図解90）','初級','中級','上級','最上級','PA実戦 2026/11/6','PA復習 2026/11/14','PDF検証版 2026/11/12'];
const bankRows=keys.map((k,i)=>{const rows=ledger.filter(r=>r.bank===k);return `| ${names[i]} | ${rows.length} | ${rows.filter(r=>r.grading==='held').length} |`;});
const changes=ledger.filter(r=>Object.keys(r.changes).length).map(r=>`| ${r.id} | ${Object.keys(r.changes).join(', ')} | ${r.grading==='held'?'採点保留':'独自演習'} |`);
const held=ledger.filter(r=>r.grading==='held').map(r=>`- **${r.id}**：${r.holdReason.replaceAll('\n',' ')}`);
const fingerprints=new Map();for(const k of keys)for(const q of now[k]){const sig=JSON.stringify([q.question,q.caseText,q.code,q.choices,q.orderItems]);const group=fingerprints.get(sig)||[];group.push(q.id);fingerprints.set(sig,group);}
const duplicates=[...fingerprints.values()].filter(x=>x.length>1);fs.writeFileSync('dp700/audit/duplicates.json',JSON.stringify(duplicates,null,2));
let report=`# DP-700 問題道場 品質修正記録（2026-11-16）

対象：minetoshi/minetoshi.github.io の dp700/。基準はPR #15反映後のmain（${base}）。公式Practice Assessmentの個別解答キーを取得したものではない。

## 件数と範囲

| バンク | ID数 | 判定保留 |
|---|---:|---:|
${bankRows.join('\n')}
| 合計 | ${counts.total} | ${counts.held} |

通常演習・分野別・ジャンル全問・本番模試・PA予行・コード演習はバンクを抽出して出題するモード。図解模試3回は図解90問を30問ずつに分ける。間違い復習・期限復習は全バンクのIDを参照する。これらを重複して総問題数に加算しない。

設問文の変更 **${counts.question}問**、選択肢または正解の変更 **${counts.choicesOrAnswers}問**（正解indexの変更 ${counts.answers}問）、解説変更 **${counts.explanation}問**、コード変更 **${counts.code}問**、根拠URL変更 **${counts.source}問**。同じ問題が複数項目に含まれる。修正は読み込み後のquality-fixes.jsも含む実効データで比較する。

重複IDは0。設問・ケース・コード・選択肢まで一致する再掲載は${duplicates.length}組あり、[対応表](audit/duplicates.json)に記録した。復習用途の別バンクとして既存IDを維持している。通常バンクには同じ論点を単一・複数・ケース形式で繰り返す問題がある。589種類の独立論点という意味ではない。

## 教材レビューと根拠の扱い

全バンクを設問・選択肢・想定解・解説の対応として点検し、同一テンプレートの派生もID別台帳に含めた。全問の公式個別解答を確認したという意味ではない。仕様照合済みと表示する問題と、公式資料を根拠にした想定解による独自採点を分ける。後者を公式PAの正解と呼ばない。

[全589問の台帳](audit/question-ledger.json)にはID、バンク、根拠URL、採点状態、変更前後の全文を収録する。[URL確認記録](audit/source-checks.json)には取得日時、HTTPステータス、ページタイトル、内容ハッシュ、対応IDを記録する。HTTP 200は接続確認であり、それだけで意味的検証済みとはしない。

重点確認した仕様：Workspace monitoringのActivityログ列、Notebookの個別タイムアウトとセッション共有条件、Domainへの認定設定委任、WarehouseのSELECT INTOとCTAS、SDK形式Database Project、DeltaコンパクションとVACUUM、ストリームの窓、SQL/RLS/CLS/DDM、Eventstream変換、Mirroring監視。旧名称Always-onをCapacity Planner modeへ変更し、Notebook・Warehouse・Lakehouseの実行エンジンを混同しないよう条件を追加した。

Q11は実KQLの2空欄、Q22は認定と委任先の2グループ、Q47は実行可能なPySpark式4択、Q48はgroupBy/aggの2空欄へ修正。原資料にない条件を加えた再設計は独自練習問題として表示する。元PDFの個別正解を復元したとは扱わない。

## 保留問題

${held.join('\n\n')}

保留問題は参考として閲覧・解答できるが、得点分母・正答数・誤答数・期限復習・誤答復習に含めない。参考候補を緑色の正解として表示しない。過去の履歴は削除せず保持し、現在のホーム集計から保留IDを除く。旧セッション結果の記録は過去時点の記録として保持する。

## 実装と検証

- グループ別選択、空欄別選択、単一・複数・並べ替えの判定を分離。シャッフル表示後も元indexで採点する。
- 回答前のskill名によるヒント漏れをID表示へ変更。BRIDGEの着眼点を解説へ移動。
- 学習履歴キーdp700-dojo-v2と既存589IDを維持。未知の旧IDも消さない。
- 構造検査：node dp700/tests/validate.cjs。全589問、重複ID、空欄・選択数・正解範囲・出典・解説・グループ・保留状態を検査。
- 実コード：python -P dp700/tests/pyspark.py。PySpark 3.5.3でQ47の正解と全誤答肢、Q48の境界値・除外条件・集計を実行。Fabricサービスの実ワークスペースでは未実行。
- 操作検査：node dp700/tests/browser.cjs。1280pxと390px。全バンクモードで589問すべてを操作し、主要各モードも開始から最終スコアまで実行。正答・誤答・保留・グループ・順序・解説リンク・JavaScript例外、全バンクの誤答/期限復習と既存履歴保持を確認。
- 最新の合否・実行ログ・スクリーンショットは[PR #16](https://github.com/minetoshi/minetoshi.github.io/pull/16)のChecksを参照。基準コミット44319d2の実行[run #5](https://github.com/minetoshi/minetoshi.github.io/actions/runs/43837281848)は成功。追加教材修正後も同じCIを実行する。

## 残る制約

公式個別解答の確認件数は0。SQL/KQLの全コードをFabric実サービスで実行した検証ではなく、公式構文・条件の照合とブラウザ上の採点検証である。設問を読んで選択肢を比較する意味的レビューは行ったが、人間の第三者レビュアーによる独立監査ではない。製品仕様・プレビュー・UI名は変わるため、各根拠ページの継続確認が必要。保留${counts.held}問は原設問・公式解答の追加資料か独自設問への再設計が必要で、確定正答として使わない。

## ID別変更履歴

表中の項目名はデータのフィールド名。具体的な変更前後は上記JSON台帳で同じIDを参照する。記載のないIDは実効データを保持した。

| ID | 変更した項目 | 採点 |
|---|---|---|
${changes.join('\n')}
`;
fs.writeFileSync('dp700/QUALITY_AUDIT_20261116.md',report);console.log(JSON.stringify({counts,banks:bankRows,duplicates},null,2));

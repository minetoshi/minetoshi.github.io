(() => {
"use strict";

const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));

const RULES = [
  {re:/リアルタイム|ストリーム|stream|event/i,label:"リアルタイム処理",detail:"継続的・低遅延でデータを処理できる手段が必要"},
  {re:/Lakehouse|Delta|デルタ/i,label:"Lakehouse / Delta",detail:"Lakehouse と Delta テーブルの保存・整合性要件を満たす必要がある"},
  {re:/Warehouse|T-SQL|SQL\b/i,label:"Warehouse / SQL",detail:"リレーショナル処理や T-SQL で直接実現できるかを見る"},
  {re:/低コード|GUI|開発工数|minimi[sz]e development|Power Query/i,label:"低コード・開発工数",detail:"コード量や追加フローを増やさず実現できる方法を優先する"},
  {re:/コードを変更せず|コード変更なし|without changing code|既存コード/i,label:"コード変更を抑える",detail:"アプリ側を書き換えず、実行基盤や設定で改善できる機能を選ぶ"},
  {re:/監視|monitor|ログ|logs?|エラー|失敗|runtime/i,label:"監視・トラブルシューティング",detail:"まず状態・ログ・エラー詳細を観測し、原因を特定してから修正する"},
  {re:/通知|alert|条件.*検知|自動検知|変化するデータ/i,label:"条件検知・通知",detail:"データや状態の条件成立を検知して通知・アクションできる機能が必要"},
  {re:/配列|Array|ForEach|JSON/i,label:"配列・JSON",detail:"文字列と配列の型を区別し、ForEach が扱える配列へ変換する"},
  {re:/パラメータ|parameter|Base parameters|dynamic expression/i,label:"パラメーター",detail:"実行時の値をハードコードせず正しい型で受け渡す"},
  {re:/最小権限|read-only|閲覧|権限|RLS|CLS|OLS|DDM|機密/i,label:"セキュリティ",detail:"行・列・オブジェクト・マスクなど、必要最小限の粒度で制御する"},
  {re:/Git|version control|変更履歴|revert|\bPR\b|レビュー/i,label:"変更管理",detail:"変更履歴を残し、レビューや復元ができる仕組みを選ぶ"},
  {re:/Deployment pipeline|Dev|Test|Prod|本番|昇格/i,label:"環境間デプロイ",detail:"開発・テスト・本番の間で検証済み変更だけを昇格する"},
  {re:/Pipeline|Activity|依存関係|オーケストレーション|trigger|トリガ/i,label:"オーケストレーション",detail:"処理の順序、依存関係、イベントやスケジュール起動を正しく構成する"},
  {re:/増分|incremental|CDC|変更分|full load|全件/i,label:"ロード方式",detail:"全件か差分かを要件に応じて選び、不要な再処理を避ける"},
  {re:/小さな.*ファイル|small files|OPTIMIZE|VACUUM|compact|圧縮/i,label:"Delta 最適化",detail:"小ファイル問題なのか、古いファイル削除なのかを区別する"},
  {re:/性能|高速|遅い|ボトルネック|performance|shuffle|executor|autoscale/i,label:"性能最適化",detail:"ボトルネックの種類に合う最適化を選び、単にリソースを増やすだけにしない"},
  {re:/checkpoint|再開|offset|途中から/i,label:"再開・状態保持",detail:"障害後に処理位置や状態を復元できる仕組みが必要"},
  {re:/watermark|遅延到着|late-arriving/i,label:"遅延到着",detail:"どこまで遅れを許容するかと状態保持の範囲を管理する"},
  {re:/window|ウィンドウ|tumbling|hopping|\bmin\b|分ごと/i,label:"時間窓",detail:"窓幅とスライド間隔、重なりの有無を区別する"},
  {re:/Fact|Dimension|Gold|非正規化|denormali/i,label:"分析モデル",detail:"分析しやすい粒度と Join 回数を意識して Fact / Dimension を設計する"},
  {re:/セッション|session timeout|Session ready|非アクティブ/i,label:"セッション設定",detail:"容量全体ではなく Notebook / Session 固有の設定で解決できるかを見る"}
];

const FALLBACK = [
  {re:/AutoSave/i,text:"AutoSave は Notebook の編集内容保存に関する機能で、セッション・計算資源・データ処理方式の問題は解決しない。"},
  {re:/Workspace Admin|Admin/i,text:"Admin ロールは権限管理の手段であり、データ変換・性能・ストリーミング処理そのものの解決策ではない。"},
  {re:/Viewer/i,text:"Viewer は閲覧権限のロールであり、データ処理方式や性能改善の機能ではない。"},
  {re:/CSV/i,text:"CSV は単純なファイル形式で、Delta のトランザクション管理やストリーミング処理機能を提供しない。"},
  {re:/Git integration/i,text:"Git integration は変更履歴・ソース管理のための機能で、実行時のデータ変換やストリーム処理を行うものではない。"},
  {re:/Deployment pipeline/i,text:"Deployment pipeline は Dev / Test / Prod 間のコンテンツ昇格に使う機能で、データ処理そのものの実行エンジンではない。"},
  {re:/Database Project/i,text:"Database Project はデータベーススキーマをコードとして管理・ビルドするための仕組みで、実行時のストリーム変換を担わない。"},
  {re:/DDM|Dynamic Data Masking/i,text:"DDM は機密値をマスク表示するセキュリティ機能で、取り込み・変換・性能改善の機能ではない。"},
  {re:/OneLake shortcut|Shortcut/i,text:"Shortcut はデータをコピーせず参照する機能で、計算資源の拡張やストリーム処理そのものを行う機能ではない。"},
  {re:/Monitor(ing)? hub/i,text:"Monitoring hub は実行状況を確認する監視機能。データ条件に応じた自動アクションが要件なら Activator とは役割が異なる。"},
  {re:/Capacity/i,text:"Capacity は Fabric の計算リソース基盤。個別の通知条件やデータ変換ロジックを直接実装する機能ではない。"}
];

function glossary(){
  return Array.isArray(window.DP700_GLOSSARY) ? window.DP700_GLOSSARY : [];
}

function textTerms(text){
  const t=String(text||"").toLowerCase();
  const hits=[];
  for(const g of glossary()){
    const names=[g.term,...(g.aliases||[])].filter(Boolean);
    let best="";
    for(const n of names){
      const x=String(n).toLowerCase();
      if(x.length<3) continue;
      if(t.includes(x) && x.length>best.length) best=x;
    }
    if(best) hits.push({g,match:best});
  }
  hits.sort((a,b)=>b.match.length-a.match.length);
  const selected=[];
  for(const h of hits){
    if(selected.some(x=>x.match.includes(h.match))) continue;
    if(selected.some(x=>x.g.term===h.g.term)) continue;
    selected.push(h);
    if(selected.length>=3) break;
  }
  return selected.map(x=>x.g);
}

function requirementItems(q){
  const src=[q.question,q.caseText,q.skill].filter(Boolean).join(" ");
  const out=[];
  for(const r of RULES){
    if(r.re.test(src)) out.push(r);
  }
  return out.slice(0,4);
}

function requirementSummary(q){
  const req=requirementItems(q);
  if(req.length) return req.map(x=>x.label).join(" + ");
  return q.skill || q.domain || "設問の主要要件";
}

function fallbackRole(choice){
  const hit=FALLBACK.find(x=>x.re.test(choice));
  return hit ? hit.text : "";
}

function roleText(choice){
  const terms=textTerms(choice);
  if(terms.length){
    return terms.map(g=>g.term+"： "+g.definition).join(" ");
  }
  return fallbackRole(choice);
}

function generatedMemory(q){
  const req=requirementItems(q);
  const answers=(q.answers||[]).map(i=>q.choices?.[i]).filter(Boolean);
  if(answers.length===1 && req.length){
    return "「"+req[0].label+"」を見たら → "+answers[0];
  }
  if(answers.length>1){
    return "複数選択は、要件を役割ごとに分けて1つずつ満たす選択肢を拾う";
  }
  return answers.length ? "正解の役割を一言で言えるようにする → "+answers.join(" / ") : "設問の要件と各機能の主用途を対応づける";
}

const CUE_RULES = [
  {re:/リアルタイム.*Delta|Delta.*リアルタイム|Lakehouse.*Delta.*リアルタイム|Structured Streaming/i,cue:"「リアルタイム」＋「Delta」"},
  {re:/ForEach.*String|String.*ForEach|配列.*文字列化|文字列.*配列/i,cue:"「ForEach」＋「String/文字列」"},
  {re:/JSON.*文字列|文字列.*JSON/i,cue:"「JSON文字列」→ 配列として解釈"},
  {re:/手動.*セッション|Session ready|非アクティブ.*タイムアウト/i,cue:"「手動Sessionなら動く」＋「タイムアウト」"},
  {re:/コード.*変更.*せず|コード変更なし|既存コードを変更せず/i,cue:"「コード変更なし」＋「高速化」"},
  {re:/条件.*自動.*通知|自動検知.*通知|変化するデータ.*通知/i,cue:"「条件成立」＋「自動通知」"},
  {re:/小さな.*ファイル|small files|Optimize Write|Auto Compact/i,cue:"「小ファイル」＋「今後も継続書き込み」"},
  {re:/クロスデータベース|Warehouse.*Lakehouse|Lakehouse.*Warehouse/i,cue:"「Warehouse＋Lakehouse」＋「新しいテーブル」"},
  {re:/変更分|CDC|増分|incremental/i,cue:"「毎回全件は重い」＋「変更分だけ」"},
  {re:/Create Project From Database|既存.*Warehouse.*VS Code|既存.*スキーマ.*Project/i,cue:"「既存Warehouse」＋「Database Project化」"},
  {re:/dotnet build|接続.*せず.*検証|DB.*接続.*せず/i,cue:"「DB接続なし」＋「検証/成果物」"},
  {re:/read-only|読み取り専用|最小権限.*Lakehouse|Lakehouse.*最小権限/i,cue:"「特定Lakehouseだけ」＋「最小権限」"},
  {re:/revert|以前の状態|変更履歴.*戻/i,cue:"「変更履歴」＋「以前へ戻す」"},
  {re:/Salary|SSN|MedicalHistory|機密.*列|特定列/i,cue:"「特定の列だけ」＋「許可ユーザーだけ」"},
  {re:/マスク|伏字|UNMASK/i,cue:"「列は見せる」＋「値だけ隠す」"},
  {re:/Autoscale|負荷.*変動|需要.*変動|executor.*変動/i,cue:"「負荷が変動」＋「リソースを自動調整」"},
  {re:/検証済み.*変更|verified changes|Selective deployment/i,cue:"「検証済みだけ」＋「本番へ昇格」"},
  {re:/Blob.*created|ファイル.*到着|storage event trigger|CSV.*到着/i,cue:"「ファイル到着」＋「イベント起動」"},
  {re:/checkpoint|途中.*再開|last offset|offset/i,cue:"「障害後も途中から再開」"},
  {re:/watermark|遅延到着/i,cue:"「遅れて届くイベント」＋「待つ範囲」"},
  {re:/Tumbling|Hopping|時間窓|window/i,cue:"「固定窓か重なる窓か」"},
  {re:/RLS|行レベル/i,cue:"「行ごとに見せ分け」"},
  {re:/CLS|Column-Level|列レベル/i,cue:"「列そのものを見せない」"},
  {re:/DDM|Dynamic Data Masking/i,cue:"「列は見えるが値を伏字」"},
  {re:/Eventstream.*Eventhouse|Eventhouse.*Eventstream/i,cue:"「流す」か「保存して分析」かを分ける"},
  {re:/Monitoring hub|Monitor hub/i,cue:"「実行状況・失敗を見る」"},
  {re:/Activator/i,cue:"「条件成立で自動アクション」"},
  {re:/Dataflow Gen2/i,cue:"「GUI/Power Queryで変換」"},
  {re:/Notebook/i,cue:"「対話的・コード中心・Spark」"},
  {re:/Deployment pipeline/i,cue:"「Dev→Test→Prod」"},
  {re:/Git integration/i,cue:"「変更履歴・版管理」"},
  {re:/CTAS|CREATE TABLE AS SELECT/i,cue:"「SELECT結果から新表」"}
];

function examCue(q){
  const src=[q.question,q.caseText,q.skill,...(q.choices||[])].filter(Boolean).join(" ");
  const answers=(q.answers||[]).map(i=>q.choices?.[i]).filter(Boolean);
  const hit=CUE_RULES.find(x=>x.re.test(src));
  let cue=hit?.cue;
  if(!cue){
    const req=requirementItems(q);
    const terms=textTerms(q.question||"").slice(0,2).map(x=>x.term);
    const keys=terms.length ? terms : req.slice(0,2).map(x=>x.label);
    cue=keys.length ? keys.map(x=>"「"+x+"」").join("＋") : "設問の主要キーワード";
  }
  const answer=answers.length ? answers.join(" / ") : "正解";
  return cue+" を見たら → "+answer;
}

function explain(q, displayOrder){
  if(!q || !["pa50-ja","pa-live-20261106"].includes(q.origin)) return "";

  const req=requirementItems(q);
  const summary=requirementSummary(q);
  const order=Array.isArray(displayOrder)&&displayOrder.length ? displayOrder : (q.choices||[]).map((_,i)=>i);
  const correct=new Set(q.answers||[]);

  const reqHtml=req.length
    ? '<ul class="paReqList">'+req.map(r=>'<li><b>'+esc(r.label)+'</b>：'+esc(r.detail)+'</li>').join("")+'</ul>'
    : '<p>この問題は、<b>'+esc(summary)+'</b>に最も直接対応する機能・設定を選ぶ問題です。</p>';

  const choices=order.map((orig,shown)=>{
    const choice=q.choices?.[orig]||"";
    const ok=correct.has(orig);
    const role=roleText(choice);
    let reason;
    if(ok){
      reason = role
        ? role+" この役割が今回の要件「"+summary+"」に直接対応する。"
        : "この選択肢が設問の要件「"+summary+"」を直接満たす。";
    }else{
      reason = role
        ? role+" ただし今回の主要件「"+summary+"」を直接満たす手段ではない。"
        : "この選択肢は今回の主要件「"+summary+"」への直接的な解決策ではない。";
    }
    return '<li class="'+(ok?'paChoiceOk':'paChoiceNg')+'"><b>'+String.fromCharCode(65+shown)+'. '+esc(choice)+'</b><br><span>'+(ok?'○ ':'× ')+esc(reason)+'</span></li>';
  }).join("");

  const memory=q.memoryTip || generatedMemory(q);
  const glossaryHits=textTerms([q.question,...(q.choices||[])].join(" ")).slice(0,3);
  const termHtml=glossaryHits.length
    ? '<div class="paTerms"><b>関連用語：</b>'+glossaryHits.map(g=>'<span>'+esc(g.term)+'</span>').join("")+'</div>'
    : '';

  const cue=examCue(q);

  return '<div class="paDeepExplain">'+
    '<div class="paExamCue"><b>試験での見抜き方：</b>'+esc(cue)+'</div>'+
    '<h4>この問題の解き方</h4>'+
    reqHtml+
    '<h4>正解になる理由</h4>'+
    '<p>'+esc(q.explanation||"正解は設問の主要件に最も直接対応する選択肢。")+'</p>'+
    '<h4>選択肢ごとの整理</h4>'+
    '<ul class="paChoiceList">'+choices+'</ul>'+
    '<div class="paMemory"><b>覚え方：</b>'+esc(memory)+'</div>'+
    termHtml+
  '</div>';
}

window.DP700_PA_EXPLAIN = explain;
})();
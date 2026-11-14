(() => {
"use strict";
const BRIDGE=window.DP700_BRIDGE||[], ADV=window.DP700_ADVANCED||[], MID=window.DP700_INTERMEDIATE||[], BASIC=window.DP700_BASICS||[], Q=window.DP700_QUESTIONS||[], PA_LIVE=window.DP700_PA_LIVE_20261106||[], PA_NOV14=window.DP700_PA_20261114||[], PA_PDF=window.DP700_PA_PDF_20261112||[], META=window.DP700_META||{}, OBJ=window.DP700_OBJECTIVES||[];
const KEY="dp700-dojo-v2";
const $=id=>document.getElementById(id);
const els={
 home:$("home"),quiz:$("quiz"),result:$("result"),attempts:$("statAttempts"),rate:$("statRate"),wrong:$("statWrong"),
 readiness:$("readiness"),domainStats:$("domainStats"),domainSelect:$("domainSelect"),quizMode:$("quizMode"),
 quizCounter:$("quizCounter"),progress:$("progressBar"),timer:$("timer"),qDomain:$("qDomain"),qSkill:$("qSkill"),
 qDiff:$("qDiff"),qType:$("qType"),caseBox:$("caseBox"),codeBox:$("codeBox"),qText:$("qText"),choices:$("choices"),
 feedback:$("feedback"),answerBtn:$("answerBtn"),nextBtn:$("nextBtn"),resultPct:$("resultPct"),resultMsg:$("resultMsg"),
 resultBreakdown:$("resultBreakdown"),bankInfo:$("bankInfo")
};
const store=load(); let session=null, timerHandle=null;
function load(){try{const s=JSON.parse(localStorage.getItem(KEY)||"{}");return {items:s.items||{},totalAttempts:s.totalAttempts||0,totalCorrect:s.totalCorrect||0,sessions:s.sessions||[]};}catch(e){return {items:{},totalAttempts:0,totalCorrect:0,sessions:[]};}}
function save(){localStorage.setItem(KEY,JSON.stringify(store));}
function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function sample(a,n){return shuffle(a).slice(0,Math.min(n,a.length));}
function domains(){return [...new Set(Q.map(q=>q.domain))];}
function pct(a,b){return b?Math.round(a/b*100):0;}
function itemStat(id){return store.items[id]||{attempts:0,correct:0,streak:0,lastWrong:false,nextReview:0};}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}
function typeLabel(t){return ({single:"単一選択",multi:"複数選択",case:"ケース",code:"コード",order:"並べ替え"})[t]||t;}
function domainAgg(d){const ids=Q.filter(q=>q.domain===d).map(q=>q.id);let a=0,c=0,attempted=0;ids.forEach(id=>{const s=itemStat(id);a+=s.attempts;c+=s.correct;if(s.attempts)attempted++;});return {attempts:a,correct:c,attempted,total:ids.length,rate:pct(c,a)};}
function renderHome(){
 clearTimer();
 els.attempts.textContent=store.totalAttempts;
 els.rate.textContent=store.totalAttempts?pct(store.totalCorrect,store.totalAttempts)+"%":"--";
 els.wrong.textContent=[...Q,...BASIC,...MID,...ADV,...BRIDGE,...PA_NOV14,...PA_PDF].filter(q=>itemStat(q.id).lastWrong).length;
 const ds=domains();
 els.domainSelect.innerHTML=ds.map(d=>'<option value="'+escapeHtml(d)+'">'+escapeHtml(d)+'</option>').join("");
 els.domainStats.innerHTML=ds.map(d=>{const s=domainAgg(d);return '<div class="domain"><div class="row"><b>'+escapeHtml(d)+'</b><span class="small">'+(s.attempts?s.rate+"%":"--")+' ・ '+s.attempted+'/'+s.total+'問経験</span></div><div class="bar"><i style="width:'+(s.attempts?s.rate:0)+'%"></i></div></div>';}).join("");
 const uniqueObj=new Set(Q.map(q=>q.objectiveId).filter(x=>/^O\d+/.test(x))).size;
 const codeCount=Q.filter(q=>q.type==="code").length, multiCount=Q.filter(q=>q.type==="multi").length, caseCount=Q.filter(q=>q.type==="case").length, orderCount=Q.filter(q=>q.type==="order").length;
 if(els.bankInfo){const target=META.objectiveCount||49;els.bankInfo.textContent=Q.length+"問 / 公式"+target+"項目 "+uniqueObj+"/"+target+" / コード"+codeCount+" / 複数選択"+multiCount+" / ケース"+caseCount+" / 並べ替え"+orderCount;}
 const overall=store.totalAttempts?pct(store.totalCorrect,store.totalAttempts):0;
 const minDomain=Math.min(...ds.map(d=>domainAgg(d).attempts?domainAgg(d).rate:0));
 const distinct=Object.values(store.items).filter(x=>x.attempts>0).length;
 if(distinct<30) els.readiness.textContent="まず30問ほど解いて現在地を診断してください。現在 "+distinct+"問経験済みです。";
 else if(overall>=85&&minDomain>=80) els.readiness.textContent="合格圏の目安です。45問/100分模試で85%以上を2回安定させ、最後に公式Practice Assessmentへ進んでください。";
 else if(overall>=75) els.readiness.textContent="あと一段です。80%未満の分野と間違い復習を優先してください。";
 else els.readiness.textContent="基礎固めが必要です。分野別20問→解説→間違い復習の順で進めてください。";
 els.home.classList.remove("hidden");els.quiz.classList.add("hidden");els.result.classList.add("hidden");
}
function stratified(n){
 const ds=domains(), base=Math.floor(n/ds.length), rem=n%ds.length; let out=[];
 ds.forEach((d,i)=>out=out.concat(sample(Q.filter(q=>q.domain===d),base+(i<rem?1:0))));
 return shuffle(out);
}
function choose(mode,domain){
 if(mode==="bridge9")return BRIDGE.slice();
 if(mode==="adv15")return ADV.slice();
 if(mode==="mid15")return MID.slice();
 if(mode==="basic15")return BASIC.slice();
 if(mode==="quick10")return sample(Q,10);
 if(mode==="train20")return sample(Q,20);
 if(mode==="mock45")return stratified(45);
 if(mode==="pdf90")return shuffle(Q.filter(q=>q.origin==="pdf90"));
 if(/^pdf[123]$/.test(mode))return Q.filter(q=>q.origin==="pdf90"&&q.pdfExam===Number(mode.slice(3)));
 if(mode==="pa50ja")return shuffle(Q.filter(q=>q.origin==="pa50-ja"));
 if(mode==="paLive50")return PA_LIVE.slice();
 if(mode==="paNov14")return PA_NOV14.slice();
 if(mode==="paPdf50")return PA_PDF.slice();
 if(mode==="pa25"){
   const preferred=Q.filter(q=>q.difficulty==="Hard" || ["case","multi","code","order"].includes(q.type));
   const ds=domains(), base=Math.floor(25/ds.length), rem=25%ds.length; let out=[];
   ds.forEach((d,i)=>out=out.concat(sample(preferred.filter(q=>q.domain===d),base+(i<rem?1:0))));
   return shuffle(out);
 }
 if(mode==="code")return sample(Q.filter(q=>q.type==="code"),20);
 if(mode==="wrong")return sample([...Q,...PA_NOV14,...PA_PDF].filter(q=>itemStat(q.id).lastWrong),25);
 if(mode==="due"){const now=Date.now();return sample([...Q,...BASIC,...MID,...ADV,...BRIDGE,...PA_NOV14,...PA_PDF].filter(q=>{const s=itemStat(q.id);return s.nextReview&&s.nextReview<=now;}),25);}
 if(mode==="domain")return sample(Q.filter(q=>q.domain===domain),20);
 if(mode==="domainAll")return shuffle(Q.filter(q=>q.domain===domain));
 return sample(Q,10);
}
function modeLabel(m){return ({bridge9:"最上級ステップ",adv15:"上級ステップ",mid15:"中級ステップ",basic15:"初級ステップ",pdf90:"図解PDF 全90問",pdf1:"図解模試 第1回",pdf2:"図解模試 第2回",pdf3:"図解模試 第3回",quick10:"10問クイック",train20:"20問演習",mock45:"本番模試45問",pa25:"PA予行25問",pa50ja:"PA論点50問（日本語）",paLive50:"PA実戦50問（2026/11/6）",paNov14:"PA復習50問（2026/11/14）",paPdf50:"PDF検証版50問（2026/11/12）",code:"コード20問",wrong:"間違い復習",due:"期限復習",domain:"分野別20問",domainAll:"このジャンルを全問"})[m]||"演習";}
function start(mode,domain){
 const questions=choose(mode,domain);if(!questions.length){alert(mode==="wrong"?"間違い復習の対象はありません。":"復習対象がありません。");return;}
 session={mode,domain,questions,index:0,selected:new Set(),results:[],answered:false,mock:mode==="mock45",choiceOrders:{},orderState:{},startedAt:Date.now(),deadline:mode==="mock45"?Date.now()+100*60*1000:null};
 els.home.classList.add("hidden");els.result.classList.add("hidden");els.quiz.classList.remove("hidden");
 if(session.mock)startTimer();
 renderQuestion();
}
function startTimer(){clearTimer();updateTimer();timerHandle=setInterval(()=>{updateTimer();if(session&&session.deadline&&Date.now()>=session.deadline)finish(true);},1000);}
function clearTimer(){if(timerHandle){clearInterval(timerHandle);timerHandle=null;}}
function updateTimer(){
 if(!els.timer)return;
 if(!session||!session.deadline){els.timer.textContent="";return;}
 const sec=Math.max(0,Math.floor((session.deadline-Date.now())/1000)),m=Math.floor(sec/60),s=sec%60;
 els.timer.textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
 els.timer.classList.toggle("dangerText",sec<=600);
}
function getOrder(q){
 if(!session.choiceOrders[q.id])session.choiceOrders[q.id]=shuffle(q.choices.map((_,i)=>i));
 return session.choiceOrders[q.id];
}
function renderQuestion(){
 const q=session.questions[session.index];session.selected=new Set();session.answered=false;
 els.quizMode.textContent=modeLabel(session.mode);els.quizCounter.textContent=(session.index+1)+" / "+session.questions.length;
 els.progress.style.width=Math.round(session.index/session.questions.length*100)+"%";
 els.qDomain.textContent=q.domain;els.qSkill.textContent=q.skill;els.qDiff.textContent=["pa-20261114","pa-pdf-20261112"].includes(q.origin)?(q.reviewStatus==="review"?"要確認・採点対象外":"資料ベースの想定解答"):q.difficulty;els.qType.textContent=typeLabel(q.type);
 els.qText.textContent=q.question;
 els.caseBox.classList.toggle("hidden",!q.caseText);els.caseBox.textContent=q.caseText||"";
 els.codeBox.classList.toggle("hidden",!q.code);els.codeBox.textContent=q.code||"";
 els.feedback.className="feedback hidden";els.feedback.innerHTML="";
 els.answerBtn.classList.remove("hidden");els.nextBtn.classList.add("hidden");els.answerBtn.disabled=true;
 if(q.type==="order"){renderOrder(q);return;}
 const order=getOrder(q);
 els.choices.innerHTML=order.map((orig,di)=>'<button class="choice" data-i="'+orig+'"><b>'+String.fromCharCode(65+di)+'.</b> '+escapeHtml(q.choices[orig])+'</button>').join("");
 [...els.choices.children].forEach(b=>b.addEventListener("click",()=>{
   if(session.answered)return;const i=Number(b.dataset.i);
   if(q.type==="multi"){
     if(session.selected.has(i)){session.selected.delete(i);b.classList.remove("selected");}
     else if(session.selected.size<(q.selectCount||q.answers.length)){session.selected.add(i);b.classList.add("selected");}
     els.answerBtn.disabled=session.selected.size!==(q.selectCount||q.answers.length);
   }else{
     session.selected=new Set([i]);[...els.choices.children].forEach(x=>x.classList.remove("selected"));b.classList.add("selected");els.answerBtn.disabled=false;
   }
 }));
}
function renderOrder(q){
 const state=session.orderState[q.id]||(session.orderState[q.id]=shuffle(q.orderItems));
 els.choices.innerHTML=state.map((txt,i)=>'<div class="orderItem"><span><b>'+(i+1)+'.</b> '+escapeHtml(txt)+'</span><span class="orderBtns"><button data-m="up" data-i="'+i+'">↑</button><button data-m="down" data-i="'+i+'">↓</button></span></div>').join("");
 [...els.choices.querySelectorAll(".orderBtns button")].forEach(b=>b.addEventListener("click",()=>{
   if(session.answered)return;const i=Number(b.dataset.i),dir=b.dataset.m,arr=session.orderState[q.id];
   const j=dir==="up"?i-1:i+1;if(j<0||j>=arr.length)return;[arr[i],arr[j]]=[arr[j],arr[i]];renderOrder(q);
 }));
 els.answerBtn.disabled=false;
}
function sameSet(a,b){if(a.length!==b.length)return false;const x=[...a].sort((m,n)=>m-n),y=[...b].sort((m,n)=>m-n);return x.every((v,i)=>v===y[i]);}
function evaluate(q){
 if(q.type==="order"){const a=session.orderState[q.id]||[];return a.length===q.orderItems.length&&a.every((v,i)=>v===q.orderItems[i]);}
 return sameSet([...session.selected],q.answers);
}
function updateStat(q,correct){
 const s=itemStat(q.id);s.attempts++;store.totalAttempts++;
 if(correct){s.correct++;store.totalCorrect++;s.streak=(s.streak||0)+1;s.lastWrong=false;const days=[1,3,7,14,30][Math.min(s.streak-1,4)];s.nextReview=Date.now()+days*86400000;}
 else{s.streak=0;s.lastWrong=true;s.nextReview=Date.now()+86400000;}
 s.lastAttempt=Date.now();store.items[q.id]=s;save();
}
function answer(){
 const q=session.questions[session.index],correct=evaluate(q),ungraded=q.reviewStatus==="review"&&["pa-20261114","pa-pdf-20261112"].includes(q.origin);
 if(!ungraded)updateStat(q,correct);
 session.results.push({id:q.id,domain:q.domain,type:q.type,correct:ungraded?null:correct});session.answered=true;
 if(session.mock){next();return;}
 if(q.type!=="order"){
  [...els.choices.children].forEach(b=>{b.disabled=true;const orig=Number(b.dataset.i);if(q.answers.includes(orig))b.classList.add("correct");if(session.selected.has(orig)&&!q.answers.includes(orig))b.classList.add("wrong");});
 }else{
  [...els.choices.querySelectorAll("button")].forEach(b=>b.disabled=true);
 }
 els.feedback.className="feedback "+(ungraded?"":correct?"ok":"bad");
 let correctText=q.type==="order"?q.orderItems.map((x,i)=>(i+1)+". "+x).join("<br>"):q.answers.map(i=>escapeHtml(q.choices[i])).join(" / ");
 const paDetail=window.DP700_PA_EXPLAIN?window.DP700_PA_EXPLAIN(q,getOrder(q)):"";
 const notes=paDetail?"":(q.choiceNotes?'<ul>'+getOrder(q).map((original,i)=>'<li><b>'+String.fromCharCode(65+i)+'.</b> '+escapeHtml(q.choiceNotes[original])+'</li>').join('')+'</ul>':'');
 const pdf=q.pdfPage?'<p><a href="./DP700_Visual_Guide_JA.pdf#page='+q.pdfPage+'" target="_blank" rel="noopener">図解PDFの'+q.pdfPage+'ページで復習 →</a></p>':'';
 els.feedback.innerHTML="<h3>"+(ungraded?"判定保留（採点対象外）":["pa-20261114","pa-pdf-20261112"].includes(q.origin)?(correct?"想定解答と一致":"想定解答と不一致"):(correct?"正解":"不正解"))+"</h3><div><b>"+(["pa-20261114","pa-pdf-20261112"].includes(q.origin)?"解答候補：":"正解：")+"</b> "+correctText+"</div>"+(paDetail?paDetail:"<p>"+escapeHtml(q.explanation)+"</p>"+(q.memoryTip?"<p><b>覚え方：</b> "+escapeHtml(q.memoryTip)+"</p>":"")+notes)+pdf+"<a href='"+escapeHtml(q.source)+"' target='_blank' rel='noopener'>Microsoft公式資料を確認 →</a>";
 els.answerBtn.classList.add("hidden");els.nextBtn.classList.remove("hidden");els.nextBtn.textContent=session.index===session.questions.length-1?"結果を見る":"次へ";
}
function next(){if(session.index<session.questions.length-1){session.index++;renderQuestion();}else finish(false);}
function finish(timeout){
 if(!session)return;clearTimer();
 if(timeout){
   const done=new Set(session.results.map(r=>r.id));
   session.questions.filter(q=>!done.has(q.id)).forEach(q=>{const ungraded=["pa-20261114","pa-pdf-20261112"].includes(q.origin)&&q.reviewStatus==="review";if(!ungraded)updateStat(q,false);session.results.push({id:q.id,domain:q.domain,type:q.type,correct:ungraded?null:false,timeout:true});});
 }
 const graded=session.results.filter(r=>r.correct!==null),total=graded.length,correct=graded.filter(r=>r.correct===true).length,rate=pct(correct,total),ungradedCount=session.results.length-total;
 store.sessions.unshift({at:Date.now(),mode:session.mode,total,correct,rate,durationSec:Math.round((Date.now()-session.startedAt)/1000)});store.sessions=store.sessions.slice(0,40);save();
 els.quiz.classList.add("hidden");els.result.classList.remove("hidden");
 els.resultPct.textContent=rate+"%";els.resultPct.className=rate>=85?"good":rate>=75?"mid":"low";
 $("nextLearningStep").hidden=!["basic15","mid15","adv15","bridge9"].includes(session.mode);
 $("nextLearningStep").textContent=session.mode==="basic15"?"中級ステップへ":session.mode==="mid15"?"上級ステップへ":session.mode==="adv15"?"最上級ステップへ":"図解模試 第1回へ";
 $("nextLearningStep").onclick=()=>start(session.mode==="basic15"?"mid15":session.mode==="mid15"?"adv15":session.mode==="adv15"?"bridge9":"pdf1");
 els.resultMsg.textContent=(ungradedCount?"判定保留 "+ungradedCount+"問はスコアから除外しています。 ":"")+(["paNov14","paPdf50"].includes(session.mode)?"公式の個別採点結果ではなく、資料と製品仕様に基づく暫定採点です。 ":"")+(["basic15","mid15","adv15","bridge9"].includes(session.mode)?"間違えた問題の解説を見直してから、次のレベルへ進みましょう。":timeout?"時間切れです。未回答は不正解として集計しました。":rate>=85?"合格圏の目安です。この水準を安定させましょう。":rate>=75?"あと少し。誤答を即復習してください。":"基礎と誤答を優先して復習してください。");
 const ds=domains();
 const byDomain=ds.map(d=>{const rows=graded.filter(r=>r.domain===d);if(!rows.length)return"";const c=rows.filter(r=>r.correct).length;return '<div class="domain"><div class="row"><b>'+escapeHtml(d)+'</b><span>'+c+'/'+rows.length+'（'+pct(c,rows.length)+'%）</span></div></div>';}).join("");
 const types=[...new Set(graded.map(r=>r.type))];
 const byType=types.map(t=>{const rows=graded.filter(r=>r.type===t),c=rows.filter(r=>r.correct).length;return '<div class="domain"><div class="row"><b>'+typeLabel(t)+'</b><span>'+c+'/'+rows.length+'（'+pct(c,rows.length)+'%）</span></div></div>';}).join("");
 els.resultBreakdown.innerHTML="<h3>分野別</h3>"+byDomain+"<h3>形式別</h3>"+byType;
 const wrongIds=session.results.filter(r=>r.correct===false).map(r=>r.id);$("retryWrongBtn").disabled=!wrongIds.length;
 $("retryWrongBtn").onclick=()=>{if(!wrongIds.length)return;const set=new Set(wrongIds),arr=[...Q,...BASIC,...MID,...ADV,...BRIDGE,...PA_NOV14,...PA_PDF].filter(q=>set.has(q.id));session={mode:"wrong",questions:shuffle(arr),index:0,selected:new Set(),results:[],answered:false,mock:false,choiceOrders:{},orderState:{},startedAt:Date.now(),deadline:null};els.result.classList.add("hidden");els.quiz.classList.remove("hidden");renderQuestion();};
}
document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>start(b.dataset.mode)));
$("domainStart").addEventListener("click",()=>start("domain",els.domainSelect.value));
$("domainAllStart").addEventListener("click",()=>start("domainAll",els.domainSelect.value));
els.answerBtn.addEventListener("click",answer);els.nextBtn.addEventListener("click",next);
$("quitBtn").addEventListener("click",()=>{if(confirm("この演習を終了しますか？"))renderHome();});
$("homeBtn").addEventListener("click",renderHome);
$("resetBtn").addEventListener("click",()=>{if(confirm("学習履歴をすべて削除します。よろしいですか？")){localStorage.removeItem(KEY);location.reload();}});
renderHome();
})();
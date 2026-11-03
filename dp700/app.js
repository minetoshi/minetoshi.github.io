(() => {
"use strict";
const Q = window.DP700_QUESTIONS || [];
const KEY = "dp700-dojo-v1";
const $ = id => document.getElementById(id);
const els = {
  home:$("home"), quiz:$("quiz"), result:$("result"),
  attempts:$("statAttempts"), rate:$("statRate"), wrong:$("statWrong"), readiness:$("readiness"),
  domainStats:$("domainStats"), domainSelect:$("domainSelect"),
  quizMode:$("quizMode"), quizCounter:$("quizCounter"), progress:$("progressBar"),
  qDomain:$("qDomain"), qSkill:$("qSkill"), qDiff:$("qDiff"), qText:$("qText"), choices:$("choices"),
  feedback:$("feedback"), answerBtn:$("answerBtn"), nextBtn:$("nextBtn"),
  resultPct:$("resultPct"), resultMsg:$("resultMsg"), resultBreakdown:$("resultBreakdown")
};
const store = load();
let session = null;

function load(){
  try{
    const s = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {items:s.items||{}, totalAttempts:s.totalAttempts||0, totalCorrect:s.totalCorrect||0, sessions:s.sessions||[]};
  }catch(e){ return {items:{}, totalAttempts:0, totalCorrect:0, sessions:[]};}
}
function save(){ localStorage.setItem(KEY, JSON.stringify(store)); }
function shuffle(a){
  const x=[...a];
  for(let i=x.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [x[i],x[j]]=[x[j],x[i]]; }
  return x;
}
function sample(a,n){ return shuffle(a).slice(0,Math.min(n,a.length)); }
function uniqueDomains(){ return [...new Set(Q.map(q=>q.domain))]; }
function pct(a,b){ return b ? Math.round(a/b*100) : 0; }
function itemStat(id){ return store.items[id] || {attempts:0,correct:0,streak:0,lastWrong:false,nextReview:0}; }

function domainAggregate(domain){
  const ids=Q.filter(q=>q.domain===domain).map(q=>q.id);
  let a=0,c=0,attempted=0;
  ids.forEach(id=>{ const s=itemStat(id); a+=s.attempts;c+=s.correct;if(s.attempts)attempted++;});
  return {attempts:a,correct:c,attempted,total:ids.length,rate:pct(c,a)};
}
function renderHome(){
  els.attempts.textContent=store.totalAttempts;
  els.rate.textContent=store.totalAttempts ? pct(store.totalCorrect,store.totalAttempts)+"%" : "--";
  const wrongCount=Q.filter(q=>itemStat(q.id).lastWrong).length;
  els.wrong.textContent=wrongCount;

  const doms=uniqueDomains();
  els.domainSelect.innerHTML=doms.map(d=>`<option value="${escapeHtml(d)}">${escapeHtml(d)}</option>`).join("");
  els.domainStats.innerHTML=doms.map(d=>{
    const s=domainAggregate(d);
    const display=s.attempts ? s.rate+"%" : "--";
    return `<div class="domain"><div class="row"><b>${escapeHtml(d)}</b><span class="small">${display} ・ ${s.attempted}/${s.total}問経験</span></div><div class="bar"><i style="width:${s.attempts?s.rate:0}%"></i></div></div>`;
  }).join("");

  const overall=store.totalAttempts?pct(store.totalCorrect,store.totalAttempts):0;
  const minDomain=Math.min(...doms.map(d=>domainAggregate(d).attempts?domainAggregate(d).rate:0));
  const distinct=Object.values(store.items).filter(x=>x.attempts>0).length;
  if(distinct<20){
    els.readiness.textContent=`現在地を診断中です。あと${20-distinct}問ほど解くと弱点が見えやすくなります。`;
  }else if(overall>=85 && minDomain>=80){
    els.readiness.textContent="合格圏の目安です。50問模試で85%以上を2回安定させ、最後に公式Practice Assessmentへ進んでください。";
  }else if(overall>=75){
    els.readiness.textContent="もう一歩です。正答率80%未満の分野と「間違い復習」を優先してください。";
  }else{
    els.readiness.textContent="基礎固めが必要です。20問演習を分野別に回し、解説→再挑戦の順で進めてください。";
  }
  els.home.classList.remove("hidden"); els.quiz.classList.add("hidden"); els.result.classList.add("hidden");
}

function stratifiedMock(n){
  const doms=uniqueDomains(), base=Math.floor(n/doms.length), rem=n%doms.length;
  let out=[];
  doms.forEach((d,i)=>{ out=out.concat(sample(Q.filter(q=>q.domain===d),base+(i<rem?1:0))); });
  return shuffle(out);
}
function choose(mode, domain){
  if(mode==="quick10") return sample(Q,10);
  if(mode==="train20") return sample(Q,20);
  if(mode==="mock50") return stratifiedMock(50);
  if(mode==="wrong") return sample(Q.filter(q=>itemStat(q.id).lastWrong),20);
  if(mode==="due"){
    const now=Date.now();
    return sample(Q.filter(q=>{const s=itemStat(q.id);return s.nextReview && s.nextReview<=now;}),20);
  }
  if(mode==="domain") return sample(Q.filter(q=>q.domain===domain),20);
  return sample(Q,10);
}
function modeLabel(mode){
  return ({quick10:"10問クイック",train20:"20問演習",mock50:"50問模試",wrong:"間違い復習",due:"期限復習",domain:"分野別20問"})[mode]||"演習";
}
function start(mode, domain){
  const questions=choose(mode,domain);
  if(!questions.length){
    alert(mode==="wrong"?"現在、間違い復習の対象はありません。":"現在、復習期限が来ている問題はありません。");
    return;
  }
  session={mode,domain,questions,index:0,selected:null,results:[],answered:false,mock:mode==="mock50"};
  els.home.classList.add("hidden"); els.result.classList.add("hidden"); els.quiz.classList.remove("hidden");
  renderQuestion();
}
function renderQuestion(){
  const q=session.questions[session.index];
  session.selected=null; session.answered=false;
  els.quizMode.textContent=modeLabel(session.mode);
  els.quizCounter.textContent=`${session.index+1} / ${session.questions.length}`;
  els.progress.style.width=`${Math.round(session.index/session.questions.length*100)}%`;
  els.qDomain.textContent=q.domain; els.qSkill.textContent=q.skill; els.qDiff.textContent=q.difficulty;
  els.qText.textContent=q.question;
  els.choices.innerHTML=q.choices.map((c,i)=>`<button class="choice" data-i="${i}"><b>${String.fromCharCode(65+i)}.</b> ${escapeHtml(c)}</button>`).join("");
  [...els.choices.querySelectorAll(".choice")].forEach(b=>b.addEventListener("click",()=>{
    if(session.answered) return;
    session.selected=Number(b.dataset.i);
    [...els.choices.children].forEach(x=>x.classList.remove("selected"));
    b.classList.add("selected"); els.answerBtn.disabled=false;
  }));
  els.feedback.className="feedback hidden"; els.feedback.innerHTML="";
  els.answerBtn.classList.remove("hidden"); els.answerBtn.disabled=true; els.nextBtn.classList.add("hidden");
}
function updateStat(q,correct){
  const s=itemStat(q.id);
  s.attempts++; store.totalAttempts++;
  if(correct){
    s.correct++; store.totalCorrect++; s.streak=(s.streak||0)+1; s.lastWrong=false;
    const days=[1,3,7,14,30][Math.min(s.streak-1,4)];
    s.nextReview=Date.now()+days*86400000;
  }else{
    s.streak=0; s.lastWrong=true; s.nextReview=Date.now()+86400000;
  }
  s.lastAttempt=Date.now(); store.items[q.id]=s; save();
}
function answer(){
  if(session.selected===null) return;
  const q=session.questions[session.index];
  const correct=session.selected===q.answer;
  updateStat(q,correct);
  session.results.push({id:q.id,domain:q.domain,skill:q.skill,correct,selected:session.selected,answer:q.answer});
  session.answered=true;
  if(session.mock){
    next();
    return;
  }
  [...els.choices.children].forEach((b,i)=>{
    b.disabled=true;
    if(i===q.answer)b.classList.add("correct");
    if(i===session.selected && i!==q.answer)b.classList.add("wrong");
  });
  els.feedback.className="feedback "+(correct?"ok":"bad");
  els.feedback.innerHTML=`<h3>${correct?"正解":"不正解"}</h3><div><b>正解：${String.fromCharCode(65+q.answer)}. ${escapeHtml(q.choices[q.answer])}</b></div><p>${escapeHtml(q.explanation)}</p><a href="${q.source}" target="_blank" rel="noopener">Microsoft公式資料を確認 →</a>`;
  els.answerBtn.classList.add("hidden"); els.nextBtn.classList.remove("hidden");
  els.nextBtn.textContent=session.index===session.questions.length-1?"結果を見る":"次へ";
}
function next(){
  if(session.index<session.questions.length-1){ session.index++; renderQuestion(); }
  else finish();
}
function finish(){
  const total=session.results.length, correct=session.results.filter(r=>r.correct).length, rate=pct(correct,total);
  store.sessions.unshift({at:Date.now(),mode:session.mode,total,correct,rate});
  store.sessions=store.sessions.slice(0,30); save();
  els.quiz.classList.add("hidden"); els.result.classList.remove("hidden");
  els.resultPct.textContent=rate+"%";
  els.resultPct.className=rate>=85?"good":rate>=75?"mid":"low";
  els.resultMsg.textContent=rate>=85?"合格圏の目安です。この水準を安定させましょう。":rate>=75?"あと少し。誤答だけ即復習すると伸びやすいです。":"解説を読んで、間違い復習からやり直しましょう。";

  const doms=uniqueDomains();
  els.resultBreakdown.innerHTML=doms.map(d=>{
    const rows=session.results.filter(r=>r.domain===d); if(!rows.length)return "";
    const c=rows.filter(r=>r.correct).length;
    return `<div class="domain"><div class="row"><b>${escapeHtml(d)}</b><span>${c}/${rows.length}（${pct(c,rows.length)}%）</span></div></div>`;
  }).join("");

  const wrongIds=session.results.filter(r=>!r.correct).map(r=>r.id);
  $("retryWrongBtn").disabled=!wrongIds.length;
  $("retryWrongBtn").onclick=()=>{
    if(!wrongIds.length)return;
    const set=new Set(wrongIds), arr=Q.filter(q=>set.has(q.id));
    session={mode:"wrong",questions:shuffle(arr),index:0,selected:null,results:[],answered:false,mock:false};
    els.result.classList.add("hidden");els.quiz.classList.remove("hidden");renderQuestion();
  };
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
}
document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>start(b.dataset.mode)));
$("domainStart").addEventListener("click",()=>start("domain",els.domainSelect.value));
$("answerBtn").addEventListener("click",answer);
$("nextBtn").addEventListener("click",next);
$("quitBtn").addEventListener("click",()=>{ if(confirm("この演習を終了しますか？"))renderHome(); });
$("homeBtn").addEventListener("click",renderHome);
$("resetBtn").addEventListener("click",()=>{
  if(confirm("学習履歴をすべて削除します。よろしいですか？")){
    localStorage.removeItem(KEY); location.reload();
  }
});
renderHome();
})();
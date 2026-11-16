const {chromium}=require('playwright');const fs=require('node:fs');fs.mkdirSync('browser-screenshots',{recursive:true});const assert=require('node:assert/strict');const {load,keys}=require('./banks.cjs');const data=load();const all=keys.flatMap(k=>data[k]);const byId=new Map(all.map(q=>[q.id,q]));
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const results=[];
 for(const width of [1280,390]){
 const page=await browser.newPage({viewport:{width,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const url=process.env.DP700_URL||'http://127.0.0.1:8765/dp700/';await page.goto(url);await page.waitForSelector('[data-mode="basic15"]');
 const modes=await page.locator('[data-mode]').evaluateAll(es=>es.map(e=>e.dataset.mode).filter(m=>!['wrong','due'].includes(m)));
 for(const mode of modes){
  await page.goto(url);await page.locator(`[data-mode="${mode}"]`).click();
  let count=0,graded=0,correct=0;
  // Exercise every question in each deterministic bank, and all sampled questions.
  while(await page.locator('#quiz').isVisible()){
   const id=await page.locator('#qSkill').innerText();const q=byId.get(id);assert(q,`Unknown ${id}`);
   assert(await page.locator('#feedback').isHidden());assert((await page.locator('#qText').innerText()).length>5);
   const chooseWrong=count%4===1;
   if(q.type==='group'){
    for(let g=0;g<q.groups.length;g++){const group=q.groups[g];const i=chooseWrong&&g===0?group.indices.find(i=>i!==group.answer):group.answer;await page.locator(`[data-g="${g}"][data-i="${i}"]`).click();}
   }else if(q.type==='order'){
    for(let i=0;i<q.orderItems.length;i++){
     let current=await page.locator('.orderItem > span:first-child').allTextContents();let j=current.findIndex(t=>t.slice(t.indexOf('. ')+2)===q.orderItems[i]);
     while(j>i){await page.locator(`button[data-m="up"][data-i="${j}"]`).click();j--;}
    }
    if(chooseWrong)await page.locator('button[data-m="down"][data-i="0"]').click();
   }else{
    let picks=[...q.answers];if(chooseWrong){const wrong=q.choices.findIndex((_,i)=>!q.answers.includes(i));picks[0]=wrong;}
    for(const i of picks)await page.locator(`button.choice[data-i="${i}"]`).click();
   }
   if(['PA-PDF-20261112-11','PA-PDF-20261112-48'].includes(id))await page.screenshot({path:`browser-screenshots/${width}-${id}.png`,fullPage:true});
   assert(await page.locator('#answerBtn').isEnabled());await page.locator('#answerBtn').click();
   const ungraded=q.reviewStatus==='review'||q.scorable===false;
   if(!ungraded){graded++;if(!chooseWrong)correct++;}
   if(mode!=='mock45'){
    const feedback=await page.locator('#feedback').innerText();
    if(ungraded){assert(feedback.includes('判定保留'));assert.equal(await page.locator('.choice.correct,.choice.wrong').count(),0);}
    else assert(feedback.includes(chooseWrong?(/pa-(20261114|pdf)/.test(q.origin||'')?'想定解答と不一致':'不正解'):(/pa-(20261114|pdf)/.test(q.origin||'')?'想定解答と一致':'正解')));
    assert(await page.locator('#feedback a').count()>0);await page.locator('#nextBtn').click();
   }
   count++;assert(count<=400);
  }
  assert.equal(await page.locator('#resultPct').innerText(),graded?Math.round(correct/graded*100)+'%':'採点対象なし');
  results.push({width,mode,count,graded,correct});console.error(JSON.stringify(results.at(-1)));
 }
 // Seed history from every bank plus a held question and an unknown legacy ID.
 await page.goto(url);
 const seeds=keys.map(k=>data[k].find(q=>q.reviewStatus!=='review'&&q.scorable!==false).id);
 await page.evaluate(({seeds})=>{const items={};for(const id of seeds)items[id]={attempts:1,correct:0,streak:0,lastWrong:true,nextReview:1};items['PA-PDF-20261112-02']={attempts:9,correct:9,lastWrong:true,nextReview:1};items['legacy-id']={attempts:3,correct:2};localStorage.setItem('dp700-dojo-v2',JSON.stringify({items,totalAttempts:20,totalCorrect:11,sessions:[]}));},{seeds});
 for(const mode of ['wrong','due']){
  await page.reload();assert.equal(await page.locator('#statAttempts').innerText(),String(seeds.length));await page.locator(`[data-mode="${mode}"]`).click();
  const seen=[];
  while(await page.locator('#quiz').isVisible()){
   const id=await page.locator('#qSkill').innerText();seen.push(id);const q=byId.get(id);
   for(const i of q.answers)await page.locator(`button.choice[data-i="${i}"]`).click();
   await page.locator('#answerBtn').click();await page.locator('#nextBtn').click();
  }
  assert.deepEqual([...seen].sort(),[...seeds].sort());
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('dp700-dojo-v2')));
  assert.equal(saved.items['PA-PDF-20261112-02'].attempts,9);assert.equal(saved.items['legacy-id'].attempts,3);
  // Restore due dates and wrong flags for the second review route.
  await page.evaluate(seeds=>{const s=JSON.parse(localStorage.getItem('dp700-dojo-v2'));for(const id of seeds)s.items[id]={attempts:1,correct:0,streak:0,lastWrong:true,nextReview:1};localStorage.setItem('dp700-dojo-v2',JSON.stringify(s));},seeds);
 }
 await page.goto(url);
 for(const action of ['domainStart','domainAllStart']){
  await page.goto(url);await page.locator('#'+action).click();assert(await page.locator('#qText').isVisible());const q=byId.get(await page.locator('#qSkill').innerText());if(q.type!=='order')for(const i of q.answers)await page.locator(`button.choice[data-i="${i}"]`).click();await page.locator('#answerBtn').click();assert(await page.locator('#feedback').isVisible());await page.locator('#nextBtn').click();
 }
 assert.deepEqual(errors,[]);await page.close();
 }
 await browser.close();console.log(JSON.stringify({results},null,2));
})().catch(e=>{console.error(e);process.exit(1)});

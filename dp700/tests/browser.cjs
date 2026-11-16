const {chromium}=require('playwright');const assert=require('node:assert/strict');const {load,keys}=require('./banks.cjs');const data=load();const all=keys.flatMap(k=>data[k]);const byId=new Map(all.map(q=>[q.id,q]));
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
  results.push({width,mode,count,graded,correct});
 }
 assert.deepEqual(errors,[]);await page.close();
 }
 await browser.close();console.log(JSON.stringify({results},null,2));
})().catch(e=>{console.error(e);process.exit(1)});

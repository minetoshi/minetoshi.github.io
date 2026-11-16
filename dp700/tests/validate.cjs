const {load,keys}=require('./banks.cjs');const b=load(),seen=new Set(),errors=[],warnings=[];
for(const key of keys)for(const q of b[key]){
 const fail=m=>errors.push(q.id+': '+m);
 if(!q.id||seen.has(q.id))fail('ID欠落・重複');seen.add(q.id);
 if(!q.question?.trim())fail('問題文なし');
 if(!/どれ|どの|どこ|何|どう|選|並べ|完成|設定|方法|操作|適切|必要|実行|対応|は[？?]|か[。？?]|と[？?]|には[？?]|合う|使う|結果/.test(q.question))warnings.push(q.id+': 問いの意味的確認が必要');
 if(!q.explanation?.trim())fail('解説なし');
 if(!/^https:\/\/learn\.microsoft\.com\//.test(q.source||''))fail('Microsoft Learn根拠URLなし');
 if(q.type!=='order'&&(!q.choices||q.choices.length<2))fail('選択肢不足');
 if(q.type!=='order'&&(!q.answers?.length||q.answers.some(i=>!Number.isInteger(i)||i<0||i>=q.choices.length)))fail('正解index不正');
 if(new Set(q.answers).size!==(q.answers||[]).length)fail('正解index重複');
 if(q.type==='multi'&&(q.selectCount||q.answers.length)!==(q.answers||[]).length)fail('選択数不一致');
 if(q.type==='case'&&!q.caseText)fail('ケース本文なし');
 if(q.type==='code'&&!q.code)fail('コードなし');
 if(q.type==='order'&&(!q.orderItems||q.orderItems.length<2))fail('並べ替え項目不足');
 if(q.type==='group'){
  if(!q.groups?.length)fail('グループなし');
  for(const g of q.groups||[])if(!g.label||g.indices.length<2||!g.indices.includes(g.answer)||g.indices.some(i=>!q.choices[i]))fail('グループ不正');
 }
 if(['single','case','code'].includes(q.type)&&q.answers?.length!==1)fail('単一選択の正解数不正');
 if(q.selectCount!==undefined&&q.type!=='order'&&q.selectCount!==q.answers.length)fail('指定選択数と正解数の不一致');
 if(q.type==='group'&&q.groups?.length!==q.answers.length)fail('グループ数と正解数の不一致');
 if(q.type==='group'&&q.groups?.some(g=>!q.answers.includes(g.answer)))fail('グループ正解と正解indexの不一致');
 if(q.scorable===false&&q.reviewStatus!=='review')fail('採点対象外の状態不整合');
 if(q.reviewStatus==='review'&&!q.holdReason&&!/曖昧|要確認|確認|一意|保留/.test(q.explanation||''))fail('判定保留理由なし');
 if(q.answerEvidence==='official-answer')fail('公式個別解答の証拠未収集');
 if(q.code?.includes('\\n'))fail('コードに文字列改行');
}
console.log(JSON.stringify({total:seen.size,banks:Object.fromEntries(keys.map(k=>[k,b[k].length])),errors,warnings},null,2));
process.exitCode=errors.length?1:0;

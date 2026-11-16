"""Fetch unique cited Microsoft pages; HTTP success is not semantic verification."""
import concurrent.futures,hashlib,html,json,re,subprocess,urllib.request,urllib.error
from pathlib import Path
from datetime import datetime,timezone
root=Path(__file__).resolve().parents[1]
qs=json.loads(subprocess.check_output(['node','-e',"const {load,keys}=require('./dp700/tests/banks.cjs'),b=load();process.stdout.write(JSON.stringify(keys.flatMap(k=>b[k])))"],text=True,cwd=root.parent))
cache=root.parent.parent/'dp700-source-cache';cache.mkdir(exist_ok=True)
urls=sorted({q['source'] for q in qs})
priorPath=root/'audit/source-checks.json'
prior={r['url']:r for r in json.loads(priorPath.read_text())} if priorPath.exists() else {}
def fetch(url):
 r={'url':url,'questionIds':[q['id'] for q in qs if q['source']==url],'checkedAt':datetime.now(timezone.utc).isoformat()}
 if url in prior and prior[url]['status']==200 and (cache/(prior[url]['sha256']+'.txt')).exists():
  old=dict(prior[url]);old['questionIds']=r['questionIds'];return old
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 DP700 learning material source audit'})
  with urllib.request.urlopen(req,timeout=40) as f: raw=f.read().decode('utf-8');r.update(status=f.status,finalUrl=f.url)
  title=re.search(r'<title>(.*?)</title>',raw,re.S);r['title']=html.unescape(title[1]) if title else ''
  article=re.search(r'<main\b.*?</main>',raw,re.S);body=article[0] if article else raw
  body=re.sub(r'<(script|style)\b.*?</\1>','',body,flags=re.S)
  text=html.unescape(re.sub('<[^>]+>',' ',body));text=re.sub(r'\s+',' ',text)
  r['sha256']=hashlib.sha256(raw.encode()).hexdigest();(cache/(r['sha256']+'.txt')).write_text(text)
 except Exception as e:r.update(status=getattr(e,'code',0),error=str(e))
 return r
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool: results=list(pool.map(fetch,urls))
(root/'audit/source-checks.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print(json.dumps({'uniqueUrls':len(results),'ok':sum(r['status']==200 for r in results),'errors':[r for r in results if r['status']!=200]},ensure_ascii=False,indent=2))
raise SystemExit(any(r['status']!=200 for r in results))

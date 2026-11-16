const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..');
function load(){const window={};const ctx=vm.createContext({window,document:{readyState:'loading',addEventListener(){}}});for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/src="\.\/(.*?\.js)/g)){if(m[1]==='app.js')continue;vm.runInContext(fs.readFileSync(path.join(root,m[1]),'utf8'),ctx,{filename:m[1]});}return window;}
const keys=['DP700_QUESTIONS','DP700_BASICS','DP700_INTERMEDIATE','DP700_ADVANCED','DP700_BRIDGE','DP700_PA_LIVE_20261106','DP700_PA_20261114','DP700_PA_PDF_20261112'];
module.exports={load,keys,root};

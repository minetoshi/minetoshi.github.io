"""Execute the repaired aggregation questions on adversarial sample data."""
import json, subprocess
from pyspark.sql import SparkSession, functions as F
banks=json.loads(subprocess.check_output(['node','-e',"process.stdout.write(JSON.stringify(require('./dp700/tests/banks.cjs').load()))"],text=True))
spark=SparkSession.builder.master('local[1]').appName('dp700-question-tests').config('spark.ui.enabled','false').getOrCreate()
orders_df=spark.createDataFrame([(1,'F','HIGH',10.0),(2,'F','HIGH',None),(3,'F','LOW',30.0),(4,'O','LOW',99.0),(5,'F','MID',50.0),(6,'F','MID',60.0),(7,'F','MID',70.0)],['o_orderkey','o_orderstatus','o_orderpriority','o_totalprice'])
q=banks['DP700_PA_PDF_20261112'][46]
expected=[('MID',3),('HIGH',2),('LOW',1)]
for i,code in enumerate(q['choices']):
 rows=eval(code,{'F':F,'orders_df':orders_df}).collect()
 actual=[tuple(r) for r in rows]
 assert (actual==expected)==(i in q['answers']),(i,actual)
sales_df=spark.createDataFrame([('E','web',30000.0,'Completed'),('E','web',25000.0,'Completed'),('E','shop',100000.0,'Cancelled'),('W','web',50000.0,'Completed'),('E','shop',100.0,'Completed')],['region','channel','amount','status'])
q=banks['DP700_PA_PDF_20261112'][47]
code=q['code'].replace('［①］',q['choices'][2].split('｜')[1]).replace('［②］',q['choices'][7].split('｜')[1])
ns={'sales_df':sales_df};exec(code,ns);assert [tuple(r) for r in ns['result'].collect()]==[('E','web',55000.0)]
spark.stop();print('PySpark Q47: correct option and all distractors verified; Q48: boundary, filtering and grouping verified')

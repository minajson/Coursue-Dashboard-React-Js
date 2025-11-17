
import React from 'react'
export default function StatisticCard(){
const bars=[{h:28,label:'1-10 Aug'},{h:44,label:'11-20 Aug'},{h:60,label:'21-30 Aug'},{h:36,label:'31 Aug'}]
return (
<div className="card stat">
<div className="mb-3 h2">Statistic</div>
<div className="p-4" style="background:var(--muted);border-radius:18px">
<div className="hstack" style={{gap:'12px',marginBottom:'8px'}}>
<div className="stat-ring">
<div className="ring"></div>
<div className="inner"><div className="icon-pill" style="width:40px;height:40px">🧔🏻‍♂️</div></div>
</div>
<div>
<div className="small" style={{fontWeight:700}}>Good Morning Jason 🔥</div>
<div className="xsmall muted">Continue your learning to achieve your target!</div>
</div>
</div>
<div className="bar-grid">
{bars.map((b,i)=> (
<div key={i} className="bar-col">
<div className="bar-box"><div className="bar" style={{height:b.h}}/></div>
<div>{b.label}</div>
</div>
))}
</div>
</div>
</div>
)
}
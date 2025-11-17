
import React from 'react'
import Avatar from './Avatar'
export default function Mentor({ name }){
const initials = name.split(' ').map(s=>s[0]).join('').slice(0,2).toUpperCase()
return (
<div className="mentor">
<Avatar initials={initials} />
<div className="vstack">
<div style={{fontSize:14,fontWeight:600}}>{name}</div>
<div className="xsmall muted">Mentor</div>
</div>
<button className="btn follow">Follow</button>
</div>
)
}
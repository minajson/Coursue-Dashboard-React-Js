
import React from 'react'
import { PlayIcon, MoreIcon } from './icons/Icons'


export default function CategoryChip({ title, progress }){
return (
<div className="cat-chip">
<div className="cat-icon"><PlayIcon/></div>
<div className="vstack" style={{gap:'2px'}}>
<div className="small muted">{progress} watched</div>
<div style={{fontWeight:600}}>{title}</div>
</div>
<button className="more-pill btn" style={{marginLeft:'auto'}}><MoreIcon/></button>
</div>
)
}
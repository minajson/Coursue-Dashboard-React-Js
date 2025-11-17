
import React from 'react'
import Avatar from './Avatar'
import { MoreIcon } from './icons/Icons'
export default function YourLessonRow(){
return (
<div className="lesson-row">
<div className="lesson-grid">
<div className="hstack" style={{gap:'12px'}}>
<Avatar initials="PS" />
<div className="vstack">
<div style={{fontWeight:600}}>Padchang Satrio</div>
<div className="xsmall muted">2/16/2004</div>
</div>
</div>
<div><span className="tag">UI/UX DESIGN</span></div>
<div className="thin">Understand Of UI/UX Design</div>
<button className="more btn"><MoreIcon/></button>
</div>
</div>
)
}
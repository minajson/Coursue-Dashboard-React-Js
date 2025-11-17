
import React from 'react'
import Avatar from './Avatar'
import { HeartIcon } from './icons/Icons'


export default function CourseCard({ badge, img, title, mentor }){
const initials = mentor.split(' ').map(s=>s[0]).join('').slice(0,2).toUpperCase()
return (
<div className="course card">
<div className="img">
<img src={img} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
<button className="love btn"><HeartIcon/></button>
</div>
<div className="p-4 vstack" style={{gap:'6px'}}>
<div className="xsmall" style={{color:'var(--primary)',fontWeight:700}}>{badge}</div>
<div style={{fontSize:14,fontWeight:600,lineHeight:1.25}}>{title}</div>
<div className="hstack muted small mt-2" style={{gap:'8px'}}>
<Avatar initials={initials} />
<span>Mentor</span>
</div>
</div>
</div>
)
}
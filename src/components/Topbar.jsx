
import React from 'react'
import IconButton from './IconButton'
import Avatar from './Avatar'
import { SearchIcon, ShieldIcon, BellIcon } from './icons/Icons'


export default function Topbar(){
return (
<div className="topbar">
<div className="search">
<input className="input" placeholder="Search your course..." />
<span className="input-icon"><SearchIcon/></span>
</div>
<IconButton><ShieldIcon/></IconButton>
<IconButton><BellIcon/></IconButton>
<div className="profile">
<Avatar initials="JR" />
<div className="small" style={{fontWeight:600}}>Jason Ranti</div>
</div>
</div>
)
}
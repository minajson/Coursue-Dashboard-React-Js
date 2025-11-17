
import React from 'react'
import {DashboardIcon, InboxIcon, LessonIcon, TaskIcon, GroupIcon, SettingIcon, LogoutIcon } from './icons/Icons'


function SidebarItem({ label, icon: Icon, active }){
const cls = `side-item ${active ? 'active' : ''}`
return (
<button className={cls}>
<div className="icon">{<Icon/>}</div>
<span>{label}</span>
</button>
)
}


function Friend({ name, tag, color }){
return (
<div className="friend">
<div className="dot" style={{ backgroundColor: color }} />
<div className="vstack">
<div style={{fontSize:14,fontWeight:600}}>{name}</div>
<div className="xsmall muted">{tag}</div>
</div>
</div>
)
}


export default function Sidebar(){
return (
<aside className="sidebar">
<div className="brand">
<div className="box">C</div>
<div style={{fontSize:20,fontWeight:600}}>Coursue</div>
</div>


<div className="side-title">OVERVIEW</div>
<nav className="vstack" style={{gap:'8px'}}>
{[
{ label: 'Dashboard', icon: DashboardIcon, active: true },
{ label: 'Inbox', icon: InboxIcon },
{ label: 'Lesson', icon: LessonIcon },
{ label: 'Task', icon: TaskIcon },
{ label: 'Group', icon: GroupIcon },
].map((i) => <SidebarItem key={i.label} {...i} />)}
</nav>


<div className="side-title" style={{marginTop:40}}>FRIENDS</div>
<div className="vstack" style={{gap:'12px'}}>
<Friend name="Bagas Mahpie" tag="Friend" color="#6B6EF9" />
<Friend name="Sir Dandy" tag="Old Friend" color="#F59E0B" />
<Friend name="Jhon Tosan" tag="Friend" color="#EF4444" />
</div>


<div className="side-title" style={{marginTop:40}}>SETTINGS</div>
<nav className="vstack" style={{gap:'8px'}}>
<SidebarItem label="Setting" icon={SettingIcon} />
<SidebarItem label="Logout" icon={LogoutIcon} />
</nav>
</aside>
)
}
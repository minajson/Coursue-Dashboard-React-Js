import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import CategoryChip from '../components/CategoryChip'
import CourseCard from '../components/CourseCard'
import StatisticCard from '../components/StatisticCard'
import Mentor from '../components/Mentor'
import YourLessonRow from '../components/YourLessonRow'

export default function CoursueDashboard () {
    return (
       <div className="maxwrap">
<div className="grid-3col">
<Sidebar />


<main className="vstack" style={{gap:'24px'}}>
<Topbar />


{/* Banner */}
<div className="banner p-8">
<div style={{maxWidth:'520px'}}>
<div className="h1">Sharpen Your Skills with<br/> Professional Online Courses</div>
<button className="cta mt-5">Join Now <span style={{width:8,height:8,background:'var(--primary-600)',borderRadius:'999px',display:'inline-block'}}/></button>
</div>
<svg className="spark" width="220" height="140" viewBox="0 0 220 140" fill="none"><g opacity=".35"><path d="M110 0v140M0 70h220M30 20l160 100M30 120L190 20" stroke="#E7E3FF" strokeWidth="3"/></g></svg>
</div>


{/* Categories */}
<div className="hstack" style={{justifyContent:'space-between'}}>
<div className="hstack" style={{gap:'12px'}}>
<CategoryChip title="UI/UX Design" progress="2/8" />
<CategoryChip title="Branding" progress="3/8" />
<CategoryChip title="Front End" progress="6/12" />
</div>
<div className="hstack" style={{gap:'8px'}}>
<button className="icon-pill"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5"/></svg></button>
<button className="icon-pill"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5"/></svg></button>
</div>
</div> 
    

{/* Continue Watching */}
<section>
<div className="section-title">Continue Watching</div>
<div className="course-grid">
<CourseCard
badge="FRONT END"
img="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
title="Beginner's Guide to Becoming a Professional Front-End Developer"
mentor="Leonardo samsul"
/>
<CourseCard
badge="UI/UX DESIGN"
img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
title="Optimizing User Experience with the Best UI/UX Design"
mentor="Bayu Salto"
/>
<CourseCard
badge="BRANDING"
img="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
title="Reviving and Refreshing Company Image"
mentor="Padchang Satrio"
/>
</div>
</section>


{/* Your lesson */}
<section>
<div className="section-title">Your Lesson</div>
<YourLessonRow />
</section>
</main>


<aside className="vstack" style={{gap:'24px'}}>
<StatisticCard />
<div className="card p-5">
<div className="mb-3 h2">Your mentor</div>
<div className="vstack" style={{gap:'12px'}}>
<Mentor name="Padhang Satrio" />
<Mentor name="Zakir Horizontal" />
<Mentor name="Leonardo Samsul" />
</div>
<button className="btn" style="width:100%"><div class="icon-lg" style="width:100%;border-radius:16px;font-weight:600;justify-content:center;display:flex">See All</div></button>
</div>
</aside>
</div>
</div>
)
}
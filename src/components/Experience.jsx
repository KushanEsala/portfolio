import React from 'react'
import { education, experience } from '@/data/profile'
import FieldGlyph from './FieldGlyph'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function displayPeriod(exp, today) {
  if (!exp.current) return exp.period

  const start = exp.startDate
    ? new Date(`${exp.startDate}T00:00:00`)
    : new Date(`${exp.period.match(/^[A-Za-z]{3} \d{4}/)?.[0] || ''} 1`)
  if (Number.isNaN(start.getTime())) return exp.period

  const months = Math.max(1, (today.getFullYear() - start.getFullYear()) * 12 + today.getMonth() - start.getMonth() + 1)
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  const duration = [
    years && `${years} yr${years === 1 ? '' : 's'}`,
    remainingMonths && `${remainingMonths} mo${remainingMonths === 1 ? '' : 's'}`,
  ].filter(Boolean).join(' ') || '1 mo'

  return `${MONTHS[start.getMonth()]} ${start.getFullYear()} - Present · ${duration}`
}

export default function Experience() {
  const [today, setToday] = React.useState(() => new Date())
  React.useEffect(() => {
    const refreshDate = () => setToday(new Date())
    const interval = window.setInterval(refreshDate, 60 * 60 * 1000)
    window.addEventListener('focus', refreshDate)
    return () => {
      window.clearInterval(interval)
      window.removeEventListener('focus', refreshDate)
    }
  }, [])
  const orderedExperience = [...experience].sort((a, b) => Number(Boolean(b.current)) - Number(Boolean(a.current)))
  return <section id="experience" className="section-shell">
    <div className="site-container section-inner">
      <SectionHead title="Work history." />
      <div className="experience-list">
        {orderedExperience.map((exp, index) => <Reveal key={`${exp.company}-${exp.title}`} delay={Math.min(index * .07, .2)}>
          <article className="experience-item">
            <div><p className="experience-date">{displayPeriod(exp, today)}</p><p className="experience-company">{exp.company}</p></div>
            <div><h3 className="experience-title">{exp.title}{exp.current && <span className="current-badge">Current</span>}</h3>
              <p className="experience-details">{[exp.type, exp.location, exp.workMode].filter(Boolean).join(' · ')}</p>
              <ul className="experience-highlights">{exp.highlights.slice(0, 4).map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
          </article>
        </Reveal>)}
        <Reveal className="education-strip"><FieldGlyph name="stack" size={28} />
          <div><h3>{education.degree} · {education.award}</h3><a href={education.schoolUrl} target="_blank" rel="noopener noreferrer" className="muted-copy text-sm hover:underline">{education.school}</a></div>
          <p className="font-mono text-xs text-muted-foreground">{education.period}</p>
        </Reveal>
      </div>
    </div>
  </section>
}

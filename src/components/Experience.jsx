import React from 'react'
import { education, experience } from '@/data/profile'
import FieldGlyph from './FieldGlyph'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Experience() {
  const orderedExperience = [...experience].sort((a, b) => Number(Boolean(b.current)) - Number(Boolean(a.current)))
  return <section id="experience" className="section-shell">
    <div className="site-container section-inner">
      <SectionHead title="Work history." />
      <div className="experience-list">
        {orderedExperience.map((exp, index) => <Reveal key={`${exp.company}-${exp.title}`} delay={Math.min(index * .07, .2)}>
          <article className="experience-item">
            <div><p className="experience-date">{exp.period}</p><p className="experience-company">{exp.company}</p></div>
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

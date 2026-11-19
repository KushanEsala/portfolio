import React from 'react'
import { certifications, education, profile } from '@/data/profile'
import FieldGlyph from './FieldGlyph'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

const strengths = [
  { icon: 'stack', title: 'Product engineering', description: 'Interfaces and workflows that make sense to the people using them.' },
  { icon: 'data', title: 'Backend and data', description: 'APIs, access controls, integrations, and queries that stay dependable.' },
  { icon: 'circuit', title: 'Applied research', description: 'Experiments with machine learning and adaptive systems.' },
]

export default function About() {
  return <section id="about" className="section-shell">
    <div className="site-container section-inner">
      <SectionHead title="About me." />
      <div className="about-grid">
        <Reveal className="about-copy" delay={.08}>
          <p className="section-lead">I&apos;m {profile.name}, an R&amp;D engineer working across the full path from a user&apos;s first action to the data and services behind it.</p>
          <p className="muted-copy">At {profile.company}, I work on backend services, full-stack tools, data workflows, integrations, and automation for operating teams.</p>
          <p className="muted-copy">I enjoy the parts where correctness counts: authentication, permissions, transactional flows, and queries that stay fast as a system grows. I studied Information Technology at <a href={education.schoolUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-secondary underline-offset-4">SIBA</a>, graduating with First-Class Honours. My final-year research explored machine-learning-driven difficulty adjustment for games.</p>
          <p className="font-mono text-xs uppercase tracking-wide text-primary mt-6">{certifications.length} developer certifications · {education.period}</p>
          <div className="about-focus">
            {strengths.map(item => <div key={item.title} className="focus-item">
              <span className="focus-icon"><FieldGlyph name={item.icon} size={26} /></span>
              <h3>{item.title}</h3><p>{item.description}</p>
            </div>)}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
}

/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseBusiness, Calendar, CheckCircle2, GraduationCap } from 'lucide-react'
import { education, experience } from '@/data/profile'

const Experience = () => {
  const orderedExperience = [...experience].sort((a, b) => Number(Boolean(b.current)) - Number(Boolean(a.current)))

  return (
    <section id="experience" className="py-16 md:py-20 bg-background relative overflow-hidden section-shell">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="section-title text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="experience-timeline mx-auto max-w-5xl">
          {orderedExperience.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.title}`}
              className="experience-item relative grid gap-3 border-b border-border py-6 pl-9 md:grid-cols-[0.28fr_0.72fr] md:gap-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
            >
              <span className={`timeline-dot ${exp.current ? 'is-current' : ''}`} aria-hidden="true" />
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />{exp.period}
                </div>
                <p className="mt-2 text-sm font-semibold text-primary">{exp.company}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-secondary" />
                  <h3 className="text-lg font-bold md:text-xl">{exp.title}</h3>
                  {exp.current && <span className="current-badge">Current</span>}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {[exp.type, exp.location, exp.workMode].filter(Boolean).join(' · ')}
                </p>
                <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-muted-foreground md:grid-cols-2">
                  {exp.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="flex gap-2 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}

          <motion.div className="education-strip mt-6 grid gap-4 p-5 md:grid-cols-[auto_1fr_auto] md:items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GraduationCap className="h-7 w-7 text-primary" />
            <div>
              <p className="font-bold">{education.degree} · {education.award}</p>
              <a href={education.schoolUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-muted-foreground hover:text-primary hover:underline">{education.school}</a>
            </div>
            <p className="font-mono text-xs text-muted-foreground">{education.period}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

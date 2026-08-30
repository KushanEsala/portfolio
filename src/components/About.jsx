/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Database } from 'lucide-react'
import { certifications, education, profile } from '@/data/profile'

const About = () => {
  const strengths = [
    {
      icon: Code2,
      title: 'Application Development',
      description: 'Building maintainable interfaces and backend-connected products with a practical engineering mindset.',
    },
    {
      icon: Database,
      title: 'Backend and Data',
      description: 'Secure APIs, role-based access, integrations, and query-heavy workflows built for dependable performance.',
    },
    {
      icon: BrainCircuit,
      title: 'AI Curiosity',
      description: 'Exploring machine learning and game-focused adaptive systems through final-year research and experiments.',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 section-shell">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="identity-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/ke-mark.svg" alt="Kushan Esala KE monogram" className="w-24" />
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-primary">Current focus</p>
            <h3 className="mt-3 text-3xl font-bold">Backend systems.<br />Useful automation.<br />Reliable delivery.</h3>
            <p className="mt-5 max-w-sm leading-7 text-muted-foreground">{profile.summary}</p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline">View current LinkedIn profile ↗</a>
          </motion.div>
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="mb-4 text-muted-foreground">
              I&apos;m {profile.name}, a research and development engineer and software engineer based in Kandy, Sri Lanka. At We Are Team Rocket I work across
              backend services, full-stack tools, data workflows, integrations, and automation for real operating teams.
            </p>
            <p className="mb-4 text-muted-foreground">
              I enjoy the parts of product engineering where correctness matters: authentication, authorization,
              transactional workflows, form behaviour, and queries that must stay fast as systems grow.
            </p>
            <p className="mb-8 text-muted-foreground">
              I completed a <span className="font-semibold text-primary">{education.degree}</span> at{' '}
              <a href={education.schoolUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">SIBA</a>.
              My research into machine-learning-driven difficulty adjustment for 2D games continues to shape how I think about adaptive systems.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              <div className="fact-row"><Code2 className="h-5 w-5" /><span>{certifications.length} developer certifications</span></div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {strengths.map((item) => (
                <div key={item.title} className="border border-border bg-card p-5">
                  <item.icon className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

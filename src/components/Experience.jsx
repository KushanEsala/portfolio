/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Rocket, Brain, Calendar } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'BSc IT Undergraduate',
    company: 'Academic and practical software journey',
    period: 'Current',
    description: 'Building a strong foundation in software engineering, problem solving, database systems, and modern application development.',
    icon: GraduationCap,
  },
  {
    id: 2,
    title: 'Full-Stack Project Delivery',
    company: 'Web and business systems',
    period: 'Recent work',
    description: 'Delivered portfolio pieces that combine React, Laravel, PHP, SQL-backed systems, and UI implementation for real-world project scenarios.',
    icon: Rocket,
  },
  {
    id: 3,
    title: 'AI and Game Difficulty Research',
    company: 'Final-year project',
    period: 'In progress',
    description: 'Designing a generalized AI-based dynamic difficulty adjustment system for 2D games using machine learning concepts and experimentation.',
    icon: Brain,
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background relative overflow-hidden section-shell">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="section-title text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Journey Highlights
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border/50"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full z-10 hidden md:block"></div>

              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                <div className={`p-6 glass rounded-[1.75rem] shadow-lg hover:shadow-primary/10 transition-shadow duration-300 ${index % 2 === 1 ? 'md:ml-12 md:text-left' : 'md:mr-12'}`}>
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <exp.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-3">{exp.company}</h4>
                  <div className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

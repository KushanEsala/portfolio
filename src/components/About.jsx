/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Layers3 } from 'lucide-react'
import profileImage from '../assets/profile.jpg'

const About = () => {
  const strengths = [
    {
      icon: Code2,
      title: 'Application Development',
      description: 'Building maintainable interfaces and backend-connected products with a practical engineering mindset.',
    },
    {
      icon: Layers3,
      title: 'Cross-Stack Delivery',
      description: 'Comfortable moving between frontend, APIs, databases, and deployment details to ship complete work.',
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
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"></div>
            <img
              src={profileImage}
              alt="Profile Picture"
              className="relative z-10 w-full rounded-[2rem] border border-border/60 object-cover shadow-2xl"
            />
          </motion.div>
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="mb-4 text-muted-foreground">
              I&apos;m a BSc IT undergraduate who enjoys turning ideas into polished products. My work so far spans
              web platforms, desktop-oriented systems, and AI-focused experimentation, with a strong interest in
              building software that is both useful and pleasant to use.
            </p>
            <p className="mb-4 text-muted-foreground">
              I work confidently with <span className="font-semibold text-primary">Java, PHP, JavaScript, C#, React, Laravel, and .NET</span>,
              and I like solving problems across the stack instead of stopping at one layer.
            </p>
            <p className="mb-8 text-muted-foreground">
              Beyond traditional development, I&apos;m especially interested in <span className="font-semibold text-secondary">data science and machine learning</span>.
              My final-year project focuses on an AI-based dynamic difficulty adjustment system for 2D games, which lets
              me combine software engineering with applied research.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {strengths.map((item) => (
                <div key={item.title} className="glass-card rounded-3xl p-5">
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

import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { profile } from '@/data/profile'
import FieldGlyph from './FieldGlyph'
import SystemDrawing from './SystemDrawing'

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const rise = (delay) => reducedMotion ? {} : {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }

  return <section id="home" className="hero-section">
    <div className="hero-shell site-container">
      <div className="hero-copy">
        <Motion.div className="hero-intro" {...rise(0.04)}>
          <span className="hero-intro-mark" aria-hidden="true">✳</span>
          <span>Research &amp; development engineer</span>
          <span className="hero-intro-place">Kandy, Sri Lanka</span>
        </Motion.div>
        <Motion.h1 className="hero-title" {...rise(0.13)}>
          From first click<br />to last database<br /><span>query<span className="hero-period">.</span></span>
        </Motion.h1>
        <Motion.p className="hero-description" {...rise(0.27)}>
          I&apos;m {profile.name}. I build interfaces, APIs, automations and the less visible systems that make a product dependable.
        </Motion.p>
        <Motion.div className="hero-actions" {...rise(0.39)}>
          <a className="action-link action-link-primary" href="#projects">Explore the work <FieldGlyph name="arrow" size={19} /></a>
          <a className="action-link action-link-secondary" href="#contact">Get in touch <FieldGlyph name="arrow" size={19} /></a>
        </Motion.div>
        <Motion.div className="hero-meta" {...rise(0.51)}>
          <span className="hero-meta-line" />
          <span>Currently engineering at <strong>{profile.company}</strong></span>
        </Motion.div>
      </div>
      <Motion.div className="hero-visual" {...rise(0.26)}><SystemDrawing /></Motion.div>
    </div>
    <div className="hero-bottom site-container">
      <span>SCROLL TO EXPLORE <FieldGlyph name="down" size={15} /></span>
      <div><a href={profile.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href={profile.resume} target="_blank" rel="noopener noreferrer">CV ↗</a></div>
    </div>
  </section>
}

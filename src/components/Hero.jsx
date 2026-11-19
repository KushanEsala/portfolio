import React from 'react'
import { profile } from '@/data/profile'
import FieldGlyph from './FieldGlyph'
import portrait from '@/assets/kushan-portrait-studio.png'

export default function Hero() {
  return <section id="home" className="hero-section">
    <div className="hero-shell site-container">
      <div className="hero-copy">
        <h1 className="hero-title">
          Kushan Esala.<br /><span>R&amp;D engineer.</span>
        </h1>
        <p className="hero-description">
          I&apos;m a software engineer at {profile.company}. I build internal tools, business systems, and automation across interfaces, APIs, and data workflows.
        </p>
        <div className="hero-actions">
          <a className="action-link action-link-primary" href="#projects">Explore the work <FieldGlyph name="arrow" size={19} /></a>
          <a className="action-link action-link-secondary" href="#contact">Get in touch <FieldGlyph name="arrow" size={19} /></a>
        </div>
      </div>
      <div className="hero-visual">
        <figure className="hero-portrait">
          <img src={portrait} alt="Portrait of Kushan Esala" fetchPriority="high" />
        </figure>
      </div>
    </div>
    <div className="hero-bottom site-container">
      <div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={profile.resume} target="_blank" rel="noopener noreferrer">CV ↗</a></div>
    </div>
  </section>
}

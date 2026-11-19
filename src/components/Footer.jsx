import React from 'react'
import { profile } from '@/data/profile'

export default function Footer() {
  return <footer className="site-footer">
    <div className="site-container footer-inner">
      <p className="footer-big">Kushan<br /><span>Esala.</span></p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer">CV ↗</a>
        <a href={`mailto:${profile.email}`}>Email ↗</a>
      </div>
      <div className="footer-bottom"><span>© 2026 {profile.name}</span><span>Kandy, Sri Lanka</span></div>
    </div>
  </footer>
}

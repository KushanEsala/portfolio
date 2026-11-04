import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import FieldGlyph from './FieldGlyph'
import { profile } from '@/data/profile'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
    <nav className="site-container header-inner" aria-label="Main navigation">
      <a href="#home" className="wordmark" onClick={closeMenu} aria-label="Kushan Esala, back to top">
        <span className="wordmark-symbol" aria-hidden="true">K<span>↗</span>E</span>
        <span className="wordmark-name">Kushan<br />Esala</span>
      </a>
      <div className="header-links">
        {navItems.map(item => <a href={item.href} key={item.name}>{item.name}</a>)}
      </div>
      <div className="header-tools">
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="header-cv">View CV <FieldGlyph name="arrow" size={16} /></a>
        <ThemeToggle />
        <button className="menu-toggle" type="button" onClick={() => setIsMenuOpen(open => !open)} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation"><FieldGlyph name={isMenuOpen ? 'close' : 'menu'} size={22} /></button>
      </div>
    </nav>
    <div id="mobile-navigation" className={`mobile-navigation ${isMenuOpen ? 'is-open' : ''}`} inert={!isMenuOpen}>
      {navItems.map(item => <a href={item.href} key={item.name} onClick={closeMenu}>{item.name}<FieldGlyph name="arrow" size={19} /></a>)}
      <a href={profile.resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>View CV <FieldGlyph name="arrow" size={19} /></a>
    </div>
  </header>
}

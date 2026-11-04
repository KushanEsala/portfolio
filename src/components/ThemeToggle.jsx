import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import FieldGlyph from './FieldGlyph'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
    <FieldGlyph name={theme === 'light' ? 'moon' : 'sun'} size={20} />
  </button>
}

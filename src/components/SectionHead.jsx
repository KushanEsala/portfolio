import React from 'react'
import Reveal from './Reveal'

export default function SectionHead({ label, title, deck }) {
  return <Reveal className="section-head">
    <p className="section-kicker">{label}</p>
    <div><h2 className="section-title">{title}</h2>{deck && <p className="section-deck">{deck}</p>}</div>
  </Reveal>
}

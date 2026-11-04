import React from 'react'

const paths = {
  arrow: <><path d="M4 15.5 15.5 4" /><path d="M7 4h8.5v8.5" /><path d="M4 19h16" /></>,
  down: <><path d="M10 3v14" /><path d="m4.5 11.5 5.5 5.5 5.5-5.5" /><path d="M3 21h14" /></>,
  stack: <><path d="m3 7 9-4 9 4-9 4-9-4Z" /><path d="m3 12 9 4 9-4" /><path d="m3 17 9 4 9-4" /></>,
  circuit: <><path d="M4 4h7v5h9" /><path d="M4 20h7v-5h9" /><path d="M12 9v6" /><circle cx="4" cy="4" r="2" /><circle cx="20" cy="9" r="2" /><circle cx="20" cy="15" r="2" /><circle cx="4" cy="20" r="2" /></>,
  data: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /><path d="M4 18c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  signal: <><path d="M3 19h18" /><path d="M5 16v-5" /><path d="M10 16V5" /><path d="M15 16V9" /><path d="M20 16V3" /><circle cx="5" cy="8" r="1" /><circle cx="15" cy="6" r="1" /></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><path d="m9 10 2 2 4-4" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /><path d="M3 19 9 14M21 19l-6-5" /></>,
  phone: <><path d="M7 3h10v18H7z" /><path d="M10 6h4M11 18h2" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" /></>,
  moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
  menu: <><path d="M3 6h18M3 12h13M3 18h18" /></>,
  close: <><path d="M4 4 20 20M20 4 4 20" /></>,
  tick: <path d="m3 12 6 6L21 5" />,
}

export default function FieldGlyph({ name, size = 24, className = '', strokeWidth = 1.7 }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>
}

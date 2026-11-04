import React from 'react'

const layers = [
  { name: 'INTERFACE', code: '01', top: 66, fill: 'var(--drawing-front)' },
  { name: 'APPLICATION', code: '02', top: 151, fill: 'var(--drawing-mid)' },
  { name: 'DATA + LOGIC', code: '03', top: 236, fill: 'var(--drawing-back)' },
]

export default function SystemDrawing() {
  return (
    <div className="system-drawing" aria-label="Illustration of interface, application, and data layers connected to a working system" role="img">
      <div className="drawing-heading"><span>FIELD NOTE / 001</span><span>HOW THE WORK FITS</span></div>
      <svg viewBox="0 0 560 440" className="drawing-svg" aria-hidden="true">
        <defs>
          <pattern id="smallGrid" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" fill="none" stroke="var(--drawing-grid)" strokeWidth="1" /></pattern>
          <pattern id="dotGrid" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".75" fill="var(--drawing-dot)" /></pattern>
        </defs>
        <rect x="0" y="0" width="560" height="440" fill="url(#smallGrid)" />
        <path className="trace-line" d="M105 126V365h340V123" fill="none" stroke="var(--drawing-trace)" strokeWidth="1.5" strokeDasharray="5 6" />
        <path className="trace-line trace-delay" d="M160 212v179h250V205" fill="none" stroke="var(--drawing-trace)" strokeWidth="1.5" strokeDasharray="5 6" />
        {layers.map((layer, index) => <g key={layer.name} className="draw-layer" style={{ '--layer-index': index }}>
          <path d={`M112 ${layer.top + 18} 292 ${layer.top - 28} 448 ${layer.top + 18} 269 ${layer.top + 64}Z`} fill={layer.fill} stroke="var(--drawing-ink)" strokeWidth="2" />
          <path d={`M112 ${layer.top + 18}v17l157 46v-17M269 ${layer.top + 64}v17l179-46v-17`} fill="none" stroke="var(--drawing-ink)" strokeWidth="2" />
          <path d={`M152 ${layer.top + 16} 290 ${layer.top - 18} 409 ${layer.top + 17} 270 ${layer.top + 52}Z`} fill="url(#dotGrid)" opacity=".6" />
          <text x="278" y={layer.top + 22} textAnchor="middle" className="drawing-layer-name">{layer.name}</text>
          <text x="466" y={layer.top + 22} className="drawing-layer-code">{layer.code}</text>
          <circle cx="105" cy={layer.top + 18} r="4" fill="var(--drawing-accent)" stroke="var(--drawing-ink)" strokeWidth="1.5" />
        </g>)}
        <g className="draw-output">
          <path d="M95 366h361v40H95z" fill="var(--drawing-ink)" />
          <path d="M111 385h28m10 0h28m10 0h28" stroke="var(--drawing-paper)" strokeWidth="2" />
          <text x="438" y="390" textAnchor="end" className="drawing-output-name">WORKING PRODUCT ↗</text>
        </g>
        <path d="m39 77 20-20m-20 0 20 20M498 336h23m-11.5-11.5v23" stroke="var(--drawing-accent)" strokeWidth="2" />
      </svg>
      <div className="drawing-foot"><span>DESIGNED / BUILT / OPERATED</span><span>KUSHAN ESALA — 2026</span></div>
    </div>
  )
}

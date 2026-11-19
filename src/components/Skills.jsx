import React from 'react'
import { BrainCircuit, Braces, CloudCog, Code2, Database, ServerCog, Webhook } from 'lucide-react'
import {
  SiAmazonwebservices, SiAngular, SiBootstrap, SiChartdotjs, SiDocker, SiDotnet, SiGit,
  SiGooglecloud, SiJavascript, SiJenkins, SiLaravel, SiLinux, SiMongodb, SiMysql, SiN8N,
  SiNginx, SiNodedotjs, SiPhp, SiPm2, SiPostgresql, SiPython, SiReact, SiScikitlearn,
  SiSharp, SiSqlite, SiSupabase, SiTailwindcss, SiTensorflow,
} from 'react-icons/si'
import { skillGroups } from '@/data/profile'
import FieldGlyph from './FieldGlyph'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

const skillIcons = {
  PHP: SiPhp, JavaScript: SiJavascript, 'C#': SiSharp, Python: SiPython,
  React: SiReact, Laravel: SiLaravel, '.NET': SiDotnet, Angular: SiAngular,
  'Node.js': SiNodedotjs, 'Tailwind CSS': SiTailwindcss, Bootstrap: SiBootstrap,
  MySQL: SiMysql, PostgreSQL: SiPostgresql, MongoDB: SiMongodb, SQLite: SiSqlite,
  Supabase: SiSupabase, 'Chart.js': SiChartdotjs, 'Scikit-learn': SiScikitlearn,
  TensorFlow: SiTensorflow, n8n: SiN8N, Docker: SiDocker, Nginx: SiNginx,
  AWS: SiAmazonwebservices, 'Google Cloud': SiGooglecloud, Jenkins: SiJenkins,
  Git: SiGit, PM2: SiPm2, 'Linux server administration': SiLinux,
  'REST APIs': Braces, Webhooks: Webhook, 'Machine learning': BrainCircuit,
  'AI workflow automation': BrainCircuit, 'Third-party integrations': CloudCog,
  SQL: Database, Java: Code2, systemd: ServerCog,
}

const Skills = () => (
  <section id="skills" className="section-shell">
    <div className="site-container section-inner">
      <SectionHead title="Tools I use." />
      <div className="skills-ledger">
        {skillGroups.map((group, idx) => (
          <Reveal key={group.label} className="skill-row" delay={Math.min(idx * .06, .22)}>
            <h3><FieldGlyph name={['stack', 'circuit', 'data', 'signal', 'stack'][idx]} size={20} className="inline-block mr-3 align-middle text-secondary" />{group.label}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill] || Code2
                return <span key={skill} className="skill-chip"><Icon className="h-4 w-4 shrink-0" aria-hidden="true" /><span>{skill}</span></span>
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Skills

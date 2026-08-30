/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Braces, CloudCog, Code2, Database, ServerCog, Webhook } from 'lucide-react'
import {
  SiAmazonwebservices, SiAngular, SiBootstrap, SiChartdotjs, SiDocker, SiDotnet, SiGit,
  SiGooglecloud, SiJavascript, SiJenkins, SiLaravel, SiLinux, SiMongodb, SiMysql, SiN8N,
  SiNginx, SiNodedotjs, SiPhp, SiPm2, SiPostgresql, SiPython, SiReact, SiScikitlearn,
  SiSharp, SiSqlite, SiSupabase, SiTailwindcss, SiTensorflow,
} from 'react-icons/si'
import { skillGroups } from '@/data/profile'

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
  <section id="skills" className="py-16 md:py-20 bg-background relative section-shell">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">Working Stack</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">The languages, platforms, and operational tools I use in current work.</p>
      </motion.div>

      <div className="skills-ledger mx-auto max-w-6xl border-t border-border">
        {skillGroups.map((group, idx) => (
          <motion.div key={group.label} className="grid gap-4 border-b border-border py-6 md:grid-cols-[0.2fr_0.8fr] md:items-start" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}>
            <h3 className="text-lg font-bold">{group.label}</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill] || Code2
                return <span key={skill} className="skill-chip flex items-center gap-2.5"><Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{skill}</span></span>
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills

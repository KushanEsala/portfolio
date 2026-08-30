/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink, FlaskConical, Store, WalletCards, Fuel, BarChart3, ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import ddaProject from '../assets/project-dda-cover.png'
import posProject from '../assets/project-pos.png'
import hirePurchaseProject from '../assets/project-hire-purchase.png'
import serviceStationProject from '../assets/web-project-1.jpg'
import analyticsProject from '../assets/desktop-project-1.jpg'
import shoppingProject from '../assets/web-project-2.jpg'

const projectsData = [
  {
    title: 'Generalized AI Dynamic Difficulty System',
    category: 'Academic · Final-year research',
    description: 'A generalized machine-learning system that studies gameplay telemetry and adapts difficulty through a guarded real-time controller.',
    image: ddaProject,
    technologies: ['Python', 'Scikit-learn', 'Supabase'],
    icon: FlaskConical,
  },
  {
    title: 'Grocery POS and Retail ERP',
    category: 'Commercial system',
    description: 'A production retail platform for barcode checkout, purchasing, batch and expiry stock, cashier shifts, expenses, auditing, and reporting.',
    image: posProject,
    technologies: ['Next.js', 'Laravel', 'MySQL'],
    live: 'https://pos.kushanesala.me',
    icon: Store,
    commercial: true,
  },
  {
    title: 'Hire Purchase ERP',
    category: 'Commercial system',
    description: 'A production operations platform for agreements, installments, inventory, sales, receivables, payables, and branch reporting.',
    image: hirePurchaseProject,
    technologies: ['Next.js', 'Laravel', 'MariaDB'],
    live: 'https://erp.examebuddy.com/',
    icon: WalletCards,
    commercial: true,
  },
  {
    title: 'Service Station Management System',
    category: 'Academic project',
    description: 'A responsive service-station management application with secure authentication, operational workflows, and a Laravel API.',
    image: serviceStationProject,
    technologies: ['React', 'Laravel', 'MySQL'],
    github: 'https://github.com/AdvancedWebDevelopmwnt/ServiceStationManager',
    icon: Fuel,
  },
  {
    title: 'Business Analytics Dashboard',
    category: 'Academic project',
    description: 'A business reporting and inventory dashboard built with Java JSP, servlets, beans, and SQL Server.',
    image: analyticsProject,
    technologies: ['Java JSP', 'Servlets', 'SQL Server'],
    github: 'https://github.com/KushanEsala/BusinessAnalyticsDashboard',
    icon: BarChart3,
  },
  {
    title: 'Chargere Online Shopping Platform',
    category: 'Academic project',
    description: 'An online shopping platform built with PHP and JavaScript, including product, customer, and checkout workflows.',
    image: shoppingProject,
    technologies: ['PHP', 'JavaScript', 'PostgreSQL'],
    github: 'https://github.com/KushanEsala/Online-shopping-platform',
    icon: ShoppingBag,
  },
]

const Projects = () => (
  <section id="projects" className="py-16 md:py-20 bg-background/50 relative section-shell">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Commercial systems and selected academic work, presented with the right level of technical detail.</p>
      </motion.div>

      <motion.div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.12 }}>
        {projectsData.map((project, index) => (
          <motion.article key={project.title} className="project-card group flex overflow-hidden border border-border bg-card flex-col" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }} viewport={{ once: true, amount: 0.2 }}>
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img src={project.image} alt={`${project.title} cover`} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" />
              <span className={`project-type ${project.commercial ? 'commercial' : ''}`}>{project.commercial ? 'Commercial' : 'Academic'}</span>
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <project.icon className="mb-3 h-5 w-5 text-primary" />
              <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-secondary">{project.category}</p>
              <h3 className="text-lg font-bold leading-snug text-foreground">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => <Badge key={tech} variant="outline" className="border-primary/25 bg-primary/5 text-[0.65rem] text-primary">{tech}</Badge>)}
              </div>
              {project.commercial && (
                <div className="commercial-flyer mt-5">
                  <div>
                    <p className="font-semibold text-foreground">Available for your business</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Request a guided demo or discuss a branded production deployment.</p>
                  </div>
                  <a href="#contact" className="demo-request">Request a demo <ArrowRight className="h-4 w-4" /></a>
                </div>
              )}
              <div className="mt-auto flex items-center gap-5 border-t border-border/60 pt-4">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link"><Github size={15} /> Source code</a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link is-live"><ExternalLink size={15} /> Live system</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)

export default Projects

import React from 'react'
import FieldGlyph from './FieldGlyph'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
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
    glyph: 'circuit',
  },
  {
    title: 'Grocery POS and Retail ERP',
    category: 'Commercial system',
    description: 'A production retail platform for barcode checkout, purchasing, batch and expiry stock, cashier shifts, expenses, auditing, and reporting.',
    image: posProject,
    technologies: ['Next.js', 'Laravel', 'MySQL'],
    live: 'https://pos.kushanesala.me',
    glyph: 'stack',
    commercial: true,
  },
  {
    title: 'Hire Purchase ERP',
    category: 'Commercial system',
    description: 'A production operations platform for agreements, installments, inventory, sales, receivables, payables, and branch reporting.',
    image: hirePurchaseProject,
    technologies: ['Next.js', 'Laravel', 'MariaDB'],
    live: 'https://erp.examebuddy.com/',
    glyph: 'data',
    commercial: true,
  },
  {
    title: 'Service Station Management System',
    category: 'Academic project',
    description: 'A responsive service-station management application with secure authentication, operational workflows, and a Laravel API.',
    image: serviceStationProject,
    technologies: ['React', 'Laravel', 'MySQL'],
    github: 'https://github.com/AdvancedWebDevelopmwnt/ServiceStationManager',
    glyph: 'signal',
  },
  {
    title: 'Business Analytics Dashboard',
    category: 'Academic project',
    description: 'A business reporting and inventory dashboard built with Java JSP, servlets, beans, and SQL Server.',
    image: analyticsProject,
    technologies: ['Java JSP', 'Servlets', 'SQL Server'],
    github: 'https://github.com/KushanEsala/BusinessAnalyticsDashboard',
    glyph: 'data',
  },
  {
    title: 'Chargere Online Shopping Platform',
    category: 'Academic project',
    description: 'An online shopping platform built with PHP and JavaScript, including product, customer, and checkout workflows.',
    image: shoppingProject,
    technologies: ['PHP', 'JavaScript', 'PostgreSQL'],
    github: 'https://github.com/KushanEsala/Online-shopping-platform',
    glyph: 'stack',
  },
]

const Projects = () => (
  <section id="projects" className="section-shell">
    <div className="site-container section-inner">
      <SectionHead title="Selected projects." />
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <Reveal key={project.title} delay={Math.min(index % 2 * .08, .2)}>
          <article className="project-card">
            <div className="project-image">
              <img src={project.image} alt={`${project.title} cover`} loading="lazy" />
              <span className={`project-type ${project.commercial ? 'commercial' : ''}`}>{project.commercial ? 'Commercial' : 'Academic'}</span>
            </div>
            <div className="project-body">
              <p className="project-category"><FieldGlyph name={project.glyph} size={19} className="inline-block mr-2 align-middle" />{project.category}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="project-links">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">Source code <FieldGlyph name="arrow" size={15} /></a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">View live system <FieldGlyph name="arrow" size={15} /></a>}
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Projects

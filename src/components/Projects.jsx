/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import webProject1 from '../assets/web-project-1.jpg'
import desktopProject1 from '../assets/desktop-project-1.jpg'
import aiProject1 from '../assets/ai-project-1.jpg'
import webProject2 from '../assets/web-project-2.jpg'

const projectsData = [
  {
    title: 'Service Station Management System',
    description: 'A responsive web application built with React and Laravel, featuring user authentication and a robust API.',
    image: webProject1,
    technologies: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/AdvancedWebDevelopmwnt/ServiceStationManager',
    live: '',
  },
  {
    title: 'Business Analytics Dashboard',
    description: 'A Java JSP desktop application for managing inventory and sales, with a user-friendly interface.',
    image: desktopProject1,
    technologies: ['Java Jsp', 'Servlets/Beans', 'SQL Server'],
    github: 'https://github.com/KushanEsala/BusinessAnalyticsDashboard',
    live: '',
  },
  {
    title: 'AI-Based DDA System for 2D Games',
    description: 'My final year data science project: A Generalized AI-Based Dynamic Difficulty Adjustment System for 2D Games Using Machine Learning.',
    image: aiProject1,
    technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Game Development'],
    github: '',
    live: '',
  },
  {
    title: 'The Chargere Online Shopping Platform',
    description: 'An e-commerce platform developed with PHP and JavaScript, integrating secure payment gateways.',
    image: webProject2,
    technologies: ['PHP', 'JavaScript', 'PostgreSQL', 'HTML', 'CSS'],
    github: 'https://github.com/KushanEsala/Online-shopping-platform',
    live: '',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background/50 relative section-shell">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of web, business, and AI-focused work that reflects how I approach product building.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card group relative overflow-hidden rounded-[1.75rem]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 relative">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary text-xs bg-primary/5">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-muted text-muted-foreground text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  ) : (
                    <span className="flex items-center text-sm text-muted-foreground/80">
                      <Lock size={16} className="mr-2" /> Private
                    </span>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:text-accent transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center text-sm text-primary/80">
                      <ExternalLink size={16} className="mr-2" /> Case Study Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

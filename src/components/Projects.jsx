import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
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
    live: '#',
  },
  {
    title: 'Business Analytics Dashboard',
    description: 'A Java JSP desktop application for managing inventory and sales, with a user-friendly interface.',
    image: desktopProject1,
    technologies: ['Java Jsp', 'Servlets/Beans', 'SQL Server'],
    github: 'https://github.com/KushanEsala/BusinessAnalyticsDashboard',
    live: '#',
  },
  {
    title: 'AI-Based DDA System for 2D Games',
    description: 'My final year data science project: A Generalized AI-Based Dynamic Difficulty Adjustment System for 2D Games Using Machine Learning.',
    image: aiProject1,
    technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Game Development'],
    github: '#',
    live: '#',
  },
  {
    title: 'The Chargere Online Shopping Platform',
    description: 'An e-commerce platform developed with PHP and JavaScript, integrating secure payment gateways.',
    image: webProject2,
    technologies: ['PHP', 'JavaScript', 'PostgreSQL', 'HTML', 'CSS'],
    github: 'https://github.com/KushanEsala/Online-shopping-platform',
    live: '#',
  },
]

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Github size={20} className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="mr-2" /> Live Demo
                  </a>
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


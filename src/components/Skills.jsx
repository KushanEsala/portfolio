import React from 'react'
import { motion } from 'framer-motion'
import {
  FaJava, FaPhp, FaJs, FaReact, FaLaravel, FaDatabase, FaPython, FaBrain, FaDesktop, FaGlobe, FaCode
} from 'react-icons/fa'
import { SiDotnet, SiTailwindcss } from 'react-icons/si'

const skillsData = [
  { name: 'Java', icon: FaJava, category: 'Languages' },
  { name: 'PHP', icon: FaPhp, category: 'Languages' },
  { name: 'JavaScript', icon: FaJs, category: 'Languages' },
  { name: 'C#', icon: FaCode, category: 'Languages' },
  { name: 'Python', icon: FaPython, category: 'Languages' },
  { name: 'SQL', icon: FaDatabase, category: 'Languages' },
  { name: 'React', icon: FaReact, category: 'Frameworks' },
  { name: 'Laravel', icon: FaLaravel, category: 'Frameworks' },
  { name: '.NET', icon: SiDotnet, category: 'Frameworks' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frameworks' },
  { name: 'Web Development', icon: FaGlobe, category: 'Areas' },
  { name: 'Desktop Applications', icon: FaDesktop, category: 'Areas' },
  { name: 'Data Science', icon: FaBrain, category: 'Areas' },
  { name: 'Machine Learning', icon: FaBrain, category: 'Areas' },
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  }

  // Group skills by category for "Dashboard" sections
  const categories = {
    "Languages": skillsData.filter(s => s.category === "Languages"),
    "Frameworks": skillsData.filter(s => s.category === "Frameworks"),
    "Areas": skillsData.filter(s => s.category === "Areas"),
  }

  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow">
            Technical Proficiency
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools and technologies I leverage to build robust solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, skills], idx) => (
            <motion.div
              key={category}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card/40 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon className="text-2xl text-primary" />
                    <span className="font-medium text-sm text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


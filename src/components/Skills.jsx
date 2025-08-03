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
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-6 bg-card rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <skill.icon className="text-primary text-4xl" />
              <h3 className="text-xl font-semibold text-card-foreground">{skill.name}</h3>
              <span className="ml-auto text-muted-foreground text-sm">{skill.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


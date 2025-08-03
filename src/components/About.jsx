import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={profileImage} 
              alt="Profile Picture"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-lg leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="mb-4">
              Hello! I'm a passionate BSc IT student with a strong foundation in both backend and frontend development. 
              My journey in IT has equipped me with knowledge in a variety of programming languages including 
              <span className="font-semibold text-primary"> Java, PHP, JavaScript, and C#</span>.
            </p>
            <p className="mb-4">
              I'm proficient with modern frameworks like <span className="font-semibold text-primary">Laravel, React, and .NET</span>, 
              and I love building robust and user-friendly applications. I've successfully completed several web projects 
              and developed desktop applications such as management systems.
            </p>
            <p className="mb-4">
              Beyond traditional development, I'm an enthusiast in <span className="font-semibold text-primary">Data Science</span>. 
              My final year project involves creating a <span className="font-semibold text-primary">Generalized AI-Based Dynamic Difficulty Adjustment System for 2D Games Using Machine Learning</span>, 
              showcasing my interest in cutting-edge technologies and problem-solving.
            </p>
            <p>
              I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


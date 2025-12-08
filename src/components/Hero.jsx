import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileUser, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide backdrop-blur-sm"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Hire
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block text-foreground">Building the</span>
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-glow">
            Future of Web
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I craft high-performance applications with cutting-edge technologies.
          Specializing in React, Node.js, and immersive UI experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#projects">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300">
              View Projects <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-muted-foreground/30 hover:bg-white/5 hover:border-primary/50 transition-all duration-300">
              Contact Me <Mail className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>

        {/* Restored Social Links with glitched cyber styling */}
        <motion.div
          className="flex justify-center space-x-6 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="https://github.com/KushanEsala" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 group">
            <Github size={24} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/kushan-esala/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 group">
            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:kushanesalakck@gmail.com" className="p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 group">
            <Mail size={24} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://drive.google.com/file/d/1dtGQ_5xV4y7DaqM_5nznWRD49yuCGV6J/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 group">
            <FileUser size={24} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        {/* Tech Decor elements */}
        <motion.div
          className="absolute left-10 bottom-20 opacity-20 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ delay: 1 }}
        >
          <Github size={48} />
        </motion.div>
        <motion.div
          className="absolute right-10 top-40 opacity-20 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Terminal size={48} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


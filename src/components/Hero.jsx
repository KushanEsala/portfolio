import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileUser } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              BSc IT Student passionate about creating innovative web applications, 
              desktop solutions, and exploring the frontiers of data science and AI.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#projects')}
                className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="text-lg px-8 py-3 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="flex justify-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href="https://github.com/KushanEsala" 
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kushan-esala/" 
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:kushanesalakck@gmail.com" 
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Mail size={24} />
              </a>

                            <a 
                href="https://drive.google.com/file/d/1dtGQ_5xV4y7DaqM_5nznWRD49yuCGV6J/view?usp=sharing" 
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <FileUser size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('#about')}
              className="p-2 rounded-full hover:bg-secondary transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} className="text-muted-foreground" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


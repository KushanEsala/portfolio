/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileUser, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const stats = [
    { label: 'Projects built', value: '10+' },
    { label: 'Core stacks', value: 'React .NET Laravel' },
    { label: 'Based in', value: 'Kandy, Sri Lanka' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 section-shell">
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-[10%] h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute right-[8%] top-[28%] h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr] lg:items-end">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-sm text-primary shadow-sm">
                <Sparkles className="h-4 w-4" />
                Building thoughtful digital products
              </div>

              <motion.h1
                className="text-5xl font-bold leading-[0.95] md:text-7xl lg:text-[5.5rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Full-stack apps with
                <span className="block bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
                  clean systems and sharp UI.
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                I&apos;m Kushan Esala, a BSc IT undergraduate creating web applications, dashboards,
                and AI-driven experiences with React, Laravel, .NET, and modern frontend tooling.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a href="#projects">
                  <Button size="lg" className="h-13 rounded-full px-7 text-base">
                    Explore Projects <ArrowDown className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="h-13 rounded-full border-border/70 bg-card/50 px-7 text-base">
                    Let&apos;s Talk <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Peradeniya, Kandy, Sri Lanka
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 text-sm text-muted-foreground">
                  Open to internships and freelance work
                </span>
              </motion.div>
            </div>

            <motion.div
              className="glass rounded-[2rem] p-6 lg:p-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Snapshot</p>
                  <h2 className="mt-2 text-2xl font-bold">What I focus on</h2>
                </div>
                <div className="rounded-full bg-primary/12 p-3 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/70 bg-background/50 p-4">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://github.com/KushanEsala" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border/70 bg-background/60 p-3 text-muted-foreground transition hover:border-primary/50 hover:text-primary">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/kushan-esala/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border/70 bg-background/60 p-3 text-muted-foreground transition hover:border-primary/50 hover:text-primary">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:kushanesalakck@gmail.com" className="rounded-2xl border border-border/70 bg-background/60 p-3 text-muted-foreground transition hover:border-primary/50 hover:text-primary">
                  <Mail size={20} />
                </a>
                <a href="https://drive.google.com/file/d/1dtGQ_5xV4y7DaqM_5nznWRD49yuCGV6J/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border/70 bg-background/60 p-3 text-muted-foreground transition hover:border-primary/50 hover:text-primary">
                  <FileUser size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

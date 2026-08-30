/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

const Hero = () => {
  const deliveryMap = [
    { step: '01', label: 'Discover', detail: 'Goals, users and constraints' },
    { step: '02', label: 'Design', detail: 'Architecture and product flow' },
    { step: '03', label: 'Build', detail: 'Software, data and automation' },
    { step: '04', label: 'Operate', detail: 'Launch, observe and improve' },
  ]

  return (
    <section id="home" className="hero-section section-shell relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-3 border-l-2 border-secondary pl-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="status-dot" />
                Engineering at {profile.company}
              </div>

              <motion.h1
                className="hero-title text-5xl font-bold leading-[0.93] md:text-7xl lg:text-[5.7rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I build the layers
                <span className="block text-primary">
                  behind the product.
                </span>
              </motion.h1>

              <motion.p
                className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                I&apos;m {profile.name}, an associate research and development engineer working from interface to API,
                automation, database, and deployment. I deliver maintainable internal platforms and production-ready SaaS builds.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a href="#projects">
                  <Button size="lg" className="h-13 rounded-lg px-7 text-base">
                    See selected work <ArrowDownRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="h-13 rounded-lg border-border bg-card/40 px-7 text-base">
                    Start a conversation <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </motion.div>

              <motion.div
                className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {profile.location}
                </span>
              </motion.div>
            </div>

            <motion.div
              className="systems-panel relative p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-8 flex items-start justify-between border-b border-border pb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">Product delivery</p>
                  <h2 className="mt-2 text-2xl font-bold">From problem to production</h2>
                </div>
                <span className="font-mono text-xs text-muted-foreground">END TO END</span>
              </div>

              <div className="delivery-map space-y-3">
                {deliveryMap.map((item, index) => (
                  <div key={item.label} className="delivery-node grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
                    <span className="font-mono text-xs text-primary">{item.step}</span>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                    <span className="node-check"><Check className="h-3.5 w-3.5" /></span>
                    {index < deliveryMap.length - 1 && <span className="delivery-line" />}
                  </div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={18} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="social-link">
                  <ArrowUpRight size={18} /> Resume
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

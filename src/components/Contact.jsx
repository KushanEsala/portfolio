/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceId = 'service_za418y8'
    const templateIdAdmin = 'template_d6ndy3d'
    const publicKey = 'bf9sqmWD96PA8g5mT'

    const sendToAdmin = emailjs.sendForm(serviceId, templateIdAdmin, form.current, publicKey)

    sendToAdmin
      .then(() => {
        toast.success("Message sent successfully! I'll get back to you soon.")
        form.current.reset()
      }, (error) => {
        toast.error("Failed to send message: " + (error.text || error.message || 'Check console for details'))
        console.error('EmailJS Error:', error)
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background relative overflow-hidden section-shell">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build Something Solid
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you have a project, internship, or collaboration in mind, send a message and I&apos;ll reply as soon as I can.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div
            className="lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass h-full rounded-[1.75rem] border-l-4 border-l-primary p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Send size={100} className="text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Details</h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                    <p className="text-foreground font-mono">kushanesalakck@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                    <p className="text-foreground font-mono">+94 (75) 462-8289</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                    <p className="text-foreground font-mono">Peradeniya, Kandy, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass p-1 rounded-[1.75rem] overflow-hidden relative">
              <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-muted-foreground font-mono">message-kushan.form</span>
              </div>

              <form ref={form} onSubmit={sendEmail} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-xs font-mono text-primary uppercase tracking-wider">Name</label>
                    <Input type="text" id="user_name" name="user_name" placeholder="Your name" className="bg-background/30 border-primary/20 focus:border-primary font-mono" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-xs font-mono text-primary uppercase tracking-wider">Email</label>
                    <Input type="email" id="user_email" name="user_email" placeholder="your@email.com" className="bg-background/30 border-primary/20 focus:border-primary font-mono" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-primary uppercase tracking-wider">Message</label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project or idea..." rows="6" className="bg-background/30 border-primary/20 focus:border-primary font-mono" required />
                </div>

                <Button type="submit" className="group relative h-14 w-full overflow-hidden border border-primary bg-primary/10 text-lg tracking-wide text-primary hover:bg-primary hover:text-primary-foreground" disabled={isSubmitting}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight size={18} />}
                  </span>
                  <div className="absolute inset-0 bg-primary/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

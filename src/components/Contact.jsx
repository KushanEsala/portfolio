/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { profile } from '@/data/profile'

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)

    if (formData.get('website')) return

    setIsSubmitting(true)

    const serviceId = 'service_19k2r8k'
    const templateIdAdmin = 'template_zvdz9wr'
    const publicKey = 'bf9sqmWD96PA8g5mT'

    try {
      toast.dismiss('contact-status')
      await emailjs.sendForm(serviceId, templateIdAdmin, form.current, publicKey)

      toast.success('Message sent. I’ll reply to the email you entered.', { id: 'contact-status', duration: 4500 })
      form.current.reset()
    } catch (error) {
      toast.error('The message could not be sent. Email me directly or try again.', { id: 'contact-status', duration: 6000 })
      console.error('EmailJS Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background relative overflow-hidden section-shell">
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
            Request a product demo, a production SaaS build, or engineering support. Your contact details are included in the email I receive.
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
            <div className="relative h-full border border-border border-l-4 border-l-primary bg-card p-8">

              <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Details</h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                    <a href={`mailto:${profile.email}`} className="break-all font-mono text-foreground hover:text-primary">{profile.email}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                    <a href="tel:+94754628289" className="font-mono text-foreground hover:text-primary">{profile.phone}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Location</h4>
                    <p className="text-foreground font-mono">{profile.location}</p>
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
            <div className="relative overflow-hidden border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border bg-muted/50 px-5 py-4">
                <span className="text-sm font-semibold">Send an enquiry</span>
                <span className="font-mono text-xs text-muted-foreground">Direct to inbox</span>
              </div>

              <form ref={form} onSubmit={sendEmail} className="p-8 space-y-6">
                <input type="hidden" name="to_email" value={profile.email} />
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" />
                </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_phone" className="text-xs font-mono text-primary uppercase tracking-wider">Phone <span className="text-muted-foreground normal-case">(optional)</span></label>
                    <Input type="tel" id="user_phone" name="user_phone" placeholder="+94 ..." autoComplete="tel" className="bg-background/30 border-primary/20 focus:border-primary font-mono" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-mono text-primary uppercase tracking-wider">What is this about?</label>
                    <Input type="text" id="subject" name="subject" placeholder="Project, role, collaboration..." className="bg-background/30 border-primary/20 focus:border-primary font-mono" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-primary uppercase tracking-wider">Message</label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project or idea..." rows="6" className="bg-background/30 border-primary/20 focus:border-primary font-mono" required />
                </div>

                <Button type="submit" className="group relative h-14 w-full overflow-hidden rounded-lg border border-primary bg-primary text-lg tracking-wide text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
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

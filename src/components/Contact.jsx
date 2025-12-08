import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner' // Assuming sonner is used for toasts based on package.json

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // E: EmailJS Service and Template IDs
    const serviceId = 'service_za418y8';
    const templateIdAdmin = 'template_d6ndy3d'; // Email to you
    const templateIdUser = 'YOUR_AUTO_REPLY_TEMPLATE_ID'; // Email to user (Create this in EmailJS)
    const publicKey = 'bf9sqmWD96PA8g5mT';

    // 1. Send email to YOU (Admin)
    const sendToAdmin = emailjs.sendForm(serviceId, templateIdAdmin, form.current, publicKey);

    sendToAdmin
      .then((result) => {
        // Only if admin email succeeds, try sending the auto-reply
        // NOTE: If you haven't created the second template, comment this part out or it will fail/warn.
        // emailjs.sendForm(serviceId, templateIdUser, form.current, publicKey);

        toast.success("Message sent successfully! I'll get back to you soon.");
        form.current.reset();
      }, (error) => {
        toast.error("Failed to send message: " + (error.text || error.message || "Check console for details"));
        console.error("EmailJS Error:", error);
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-glow">
            Initialize Comms
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Establish a secure connection below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info Panel */}
          <motion.div
            className="lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-8 rounded-2xl h-full border-l-4 border-l-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Mail size={100} className="text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-8 text-foreground">Transmission Data</h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Electronic Mail</h4>
                    <p className="text-foreground font-mono">kushanesalakck@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Frequency</h4>
                    <p className="text-foreground font-mono">+94 (75) 462-8289</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Base of Operations</h4>
                    <p className="text-foreground font-mono">Peradeniya, Kandy, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form "Terminal" */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass p-1 rounded-2xl overflow-hidden relative">
              {/* Terminal Header */}
              <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-muted-foreground font-mono">secure_message_uplink.exe</span>
              </div>

              <form ref={form} onSubmit={sendEmail} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-xs font-mono text-primary uppercase tracking-wider"> &gt; User_Identity</label>
                    <Input type="text" id="user_name" name="user_name" placeholder="ENTER NAME" className="bg-background/30 border-primary/20 focus:border-primary font-mono" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-xs font-mono text-primary uppercase tracking-wider"> &gt; Comms_Channel</label>
                    <Input type="email" id="user_email" name="user_email" placeholder="ENTER EMAIL" className="bg-background/30 border-primary/20 focus:border-primary font-mono" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-primary uppercase tracking-wider"> &gt; Payload_Data</label>
                  <Textarea id="message" name="message" placeholder="ENTER MESSAGE CONTENT..." rows="6" className="bg-background/30 border-primary/20 focus:border-primary font-mono" required />
                </div>

                <Button type="submit" className="w-full bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-lg font-mono tracking-widest relative overflow-hidden group" disabled={isSubmitting}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'TRANSMITTING...' : 'INITIATE TRANSMISSION'}
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


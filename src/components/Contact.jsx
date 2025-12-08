import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
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

    // 2. Send auto-reply to USER (Optional - requires second template)
    // We construct a parameter object for the auto-reply because sendForm sends everything. 
    // Ideally, for the auto-reply, you just need the user's email and name.
    // However, sendForm is easiest if the template uses the same field names.
    // If you haven't created a second template yet, this second call might fail or send a duplicate to you if IDs match.
    // I'll assume you will create a NEW template for the auto-reply.

    // For now, I'll sequence them.
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
    <section id="contact" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <Mail size={32} className="text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">kushanesalakck@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={32} className="text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-muted-foreground">+94 (75) 462-8289</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin size={32} className="text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-muted-foreground">Peradeniya, Kandy, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6 p-8 bg-card rounded-lg shadow-lg">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input type="text" id="user_name" name="user_name" placeholder="Your Name" className="w-full" required />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" id="user_email" name="user_email" placeholder="your.email@example.com" className="w-full" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea id="message" name="message" placeholder="Your message..." rows="5" className="w-full" required />
              </div>
              <Button type="submit" className="w-full text-lg py-3" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact


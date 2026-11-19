import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { profile } from '@/data/profile'
import FieldGlyph from './FieldGlyph'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Contact() {
  const form = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = async (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    if (formData.get('website')) return

    const enquiry = {
      name: String(formData.get('user_name') || '').trim(),
      email: String(formData.get('user_email') || '').trim(),
      phone: String(formData.get('user_phone') || '').trim() || 'Not provided',
      subject: String(formData.get('subject') || '').trim(),
      description: String(formData.get('message') || '').trim(),
    }
    const inboxMessage = [
      'NEW PORTFOLIO ENQUIRY', '------------------------------',
      `Name: ${enquiry.name}`, `Email: ${enquiry.email}`, `Phone: ${enquiry.phone}`,
      `What this is about: ${enquiry.subject}`, '', 'DESCRIPTION',
      '------------------------------', enquiry.description,
    ].join('\n')

    setIsSubmitting(true)
    try {
      toast.dismiss('contact-status')
      await emailjs.send('service_7s35djb', 'template_zvdz9wr', {
        to_email: profile.email,
        from_name: enquiry.name, user_name: enquiry.name, name: enquiry.name,
        from_email: enquiry.email, user_email: enquiry.email, email: enquiry.email, reply_to: enquiry.email,
        user_phone: enquiry.phone, phone: enquiry.phone,
        subject: `Portfolio enquiry: ${enquiry.subject}`,
        enquiry_subject: enquiry.subject,
        message: inboxMessage, description: enquiry.description,
      }, { publicKey: 'bf9sqmWD96PA8g5mT' })
      toast.success('Message sent. I’ll reply to the email you entered.', { id: 'contact-status', duration: 4500 })
      form.current.reset()
    } catch (error) {
      toast.error('The message could not be sent. Email me directly or try again.', { id: 'contact-status', duration: 6000 })
      console.error('EmailJS Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return <section id="contact" className="section-shell">
    <div className="site-container section-inner">
      <SectionHead title="Get in touch." />
      <div className="contact-grid">
        <Reveal className="contact-note">
          <h3>Contact details</h3>
          <div className="contact-details">
            <div className="contact-detail"><FieldGlyph name="mail" size={22} /><div><small>Email</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
            <div className="contact-detail"><FieldGlyph name="phone" size={22} /><div><small>Phone</small><a href="tel:+94754628289">{profile.phone}</a></div></div>
            <div className="contact-detail"><FieldGlyph name="pin" size={22} /><div><small>Location</small><span>{profile.location}</span></div></div>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={.08}>
          <div className="contact-form-top"><span>Send a message</span></div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="hidden" name="to_email" value={profile.email} />
            <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" /></div>
            <div className="contact-form-grid">
              <div className="contact-form-field"><label htmlFor="user_name">Name</label><input id="user_name" name="user_name" placeholder="Your name" autoComplete="name" required /></div>
              <div className="contact-form-field"><label htmlFor="user_email">Email</label><input id="user_email" name="user_email" type="email" placeholder="you@example.com" autoComplete="email" required /></div>
              <div className="contact-form-field"><label htmlFor="user_phone">Phone <span className="normal-case text-muted-foreground">(optional)</span></label><input id="user_phone" name="user_phone" type="tel" placeholder="+94 ..." autoComplete="tel" /></div>
              <div className="contact-form-field"><label htmlFor="subject">What is this about?</label><input id="subject" name="subject" placeholder="Project, role, collaboration..." required /></div>
            </div>
            <div className="contact-form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="A few details about what you're working on..." rows="5" required /></div>
            <button type="submit" className="contact-submit" disabled={isSubmitting}><span>{isSubmitting ? 'Sending...' : 'Send message'}</span><FieldGlyph name="arrow" size={19} /></button>
          </form>
        </Reveal>
      </div>
    </div>
  </section>
}

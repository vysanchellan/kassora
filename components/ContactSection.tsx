'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageSquare, User } from 'lucide-react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.25), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block mb-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#0ea5e9', letterSpacing: '0.3em' }}>
              CONTACT
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '0.05em',
              color: '#e2e8f0',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}>
              LET'S BUILD<br />
              <span style={{ color: '#0ea5e9' }}>SOMETHING</span><br />
              LEGENDARY
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', fontWeight: 300, lineHeight: 1.7, marginBottom: '2rem' }}>
              Whether you're launching your first product or scaling an established platform,
              we want to hear your story. Tell us what you're building.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Mail className="w-4 h-4" />, label: 'HELLO@KASSORA.IO' },
                { icon: <MessageSquare className="w-4 h-4" />, label: 'RESPONSE WITHIN 24H' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(14,165,233,0.1)', color: '#0ea5e9' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569', letterSpacing: '0.1em' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-10 text-center"
                style={{ background: 'rgba(4,13,42,0.8)', border: '1px solid rgba(14,165,233,0.3)' }}
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.3)' }}>
                  <Send className="w-6 h-6" style={{ color: '#0ea5e9' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#e2e8f0', letterSpacing: '0.1em', marginBottom: '12px' }}>
                  MESSAGE SENT
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', fontWeight: 300 }}>
                  We'll be in touch within 24 hours. Get ready.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-8 space-y-5"
                style={{ background: 'rgba(4,13,42,0.7)', border: '1px solid rgba(14,165,233,0.12)' }}>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'NAME', placeholder: 'John Carter', icon: <User className="w-3.5 h-3.5" /> },
                    { key: 'company', label: 'COMPANY', placeholder: 'Acme Corp', icon: <MessageSquare className="w-3.5 h-3.5" /> },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="block mb-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#334155', letterSpacing: '0.15em' }}>
                        {field.label}
                      </label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:border-sky-500/50"
                        style={{
                          background: 'rgba(2,8,24,0.8)',
                          border: '1px solid rgba(14,165,233,0.1)',
                          color: '#e2e8f0',
                          fontFamily: 'var(--font-body)',
                        }}
                        required
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block mb-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#334155', letterSpacing: '0.15em' }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:border-sky-500/50"
                    style={{
                      background: 'rgba(2,8,24,0.8)',
                      border: '1px solid rgba(14,165,233,0.1)',
                      color: '#e2e8f0',
                      fontFamily: 'var(--font-body)',
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#334155', letterSpacing: '0.15em' }}>
                    TELL US ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    rows={4}
                    placeholder="We're building a SaaS for..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:border-sky-500/50 resize-none"
                    style={{
                      background: 'rgba(2,8,24,0.8)',
                      border: '1px solid rgba(14,165,233,0.1)',
                      color: '#e2e8f0',
                      fontFamily: 'var(--font-body)',
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
                    color: '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    boxShadow: '0 0 30px rgba(14,165,233,0.3)',
                  }}
                >
                  <Send className="w-4 h-4" />
                  SEND MESSAGE
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

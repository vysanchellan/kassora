'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div
        className="mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(2,8,24,0.85)' : 'rgba(2,8,24,0.4)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(14,165,233,0.15)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg rotate-45 border border-sky-500/60 group-hover:border-sky-400 transition-colors" />
            <div className="absolute inset-1.5 rounded-sm rotate-45 bg-sky-500/20" />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: '1.4rem', color: '#e2e8f0' }}>
            KASSORA
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-sky-400"
                style={{ color: '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.08em' }}
              >
                {link.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
            color: '#fff',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.06em',
            boxShadow: '0 0 20px rgba(14,165,233,0.3)',
          }}
        >
          GET STARTED
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-5 h-0.5 transition-all duration-300" style={{ background: '#94a3b8' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl p-6"
            style={{ background: 'rgba(2,8,24,0.95)', border: '1px solid rgba(14,165,233,0.15)', backdropFilter: 'blur(20px)' }}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm transition-colors hover:text-sky-400"
                    style={{ color: '#94a3b8', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}
                  >
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

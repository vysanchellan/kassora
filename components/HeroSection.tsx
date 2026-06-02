'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Entropy } from './ui/entropy'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Simulate loading sequence
    const steps = [20, 45, 67, 89, 100]
    let i = 0
    const interval = setInterval(() => {
      if (i < steps.length) {
        setLoadingProgress(steps[i])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setLoaded(true)
          setTimeout(() => setIntroComplete(true), 1000)
        }, 400)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-texture">
      {/* Ambient light orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Loading Intro Screen */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: '#020818' }}
          >
            <div className="relative mb-8">
              <Entropy size={320} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(56,189,248,0.9)',
                  textShadow: '0 0 30px rgba(56,189,248,0.5)',
                }}>
                  KASSORA
                </span>
              </div>
            </div>

            <div className="w-64 h-px bg-slate-800 relative overflow-hidden mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ background: 'linear-gradient(90deg, #0284c7, #38bdf8)' }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#475569', letterSpacing: '0.2em' }}>
              INITIALIZING SYSTEM — {loadingProgress}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <AnimatePresence>
        {introComplete && (
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs"
                style={{
                  background: 'rgba(14,165,233,0.08)',
                  border: '1px solid rgba(14,165,233,0.25)',
                  color: '#38bdf8',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.15em',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                NEXT-GEN SAAS MARKETING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="glitch-text mb-6"
              data-text="MARKET BEYOND LIMITS"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                lineHeight: 0.9,
                letterSpacing: '0.02em',
                color: '#e2e8f0',
              }}
            >
              MARKET{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9, #38bdf8, #7dd3fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                BEYOND
              </span>
              {' '}LIMITS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mb-10 max-w-2xl"
              style={{
                color: '#64748b',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
              }}
            >
              Kassora gives SaaS companies the intelligence to dominate their market.
              From brand positioning to conversion architecture — built for the companies
              that refuse to be average.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  boxShadow: '0 0 30px rgba(14,165,233,0.35), 0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <span className="btn-shimmer absolute inset-0" />
                <span className="relative">LAUNCH WITH KASSORA</span>
              </a>

              <a
                href="#features"
                className="px-8 py-4 rounded-xl transition-all duration-300 hover:border-sky-500/40"
                style={{
                  border: '1px solid rgba(14,165,233,0.2)',
                  color: '#94a3b8',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                }}
              >
                EXPLORE FEATURES →
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
            >
              {[
                { num: '300%', label: 'Avg. Pipeline Growth' },
                { num: '48h', label: 'Launch Turnaround' },
                { num: '99.9%', label: 'System Uptime' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    letterSpacing: '0.05em',
                    background: 'linear-gradient(135deg, #0ea5e9, #7dd3fc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {stat.num}
                  </div>
                  <div style={{ color: '#475569', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', marginTop: '4px' }}>
                    {stat.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #020818)' }} />
    </section>
  )
}

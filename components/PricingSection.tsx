'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'LAUNCH',
    price: '$2,400',
    period: '/month',
    tagline: 'Everything to get you off the ground.',
    features: [
      'Brand identity system',
      'Landing page (up to 5 sections)',
      'SEO foundation setup',
      'Monthly performance report',
      '2 revision rounds',
      'Slack channel access',
    ],
    cta: 'Start Launch',
    highlight: false,
  },
  {
    name: 'SCALE',
    price: '$5,800',
    period: '/month',
    tagline: 'Built for teams ready to dominate.',
    features: [
      'Everything in Launch',
      'Full-site development',
      'Paid ad campaign management',
      'Conversion rate optimization',
      'A/B testing infrastructure',
      'Weekly strategy calls',
      'Dedicated account lead',
    ],
    cta: 'Start Scaling',
    highlight: true,
  },
  {
    name: 'DOMINATE',
    price: 'Custom',
    period: '',
    tagline: 'Enterprise-grade execution at scale.',
    features: [
      'Everything in Scale',
      'Multi-product marketing system',
      'Custom analytics pipeline',
      'API & CRM integrations',
      'Dedicated squad (4 specialists)',
      'Priority response SLA',
      'Quarterly growth roadmap',
    ],
    cta: 'Talk to Us',
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.25), transparent)' }} />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="block mb-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#0ea5e9', letterSpacing: '0.3em' }}>
            INVESTMENT
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.05em',
            color: '#e2e8f0',
            lineHeight: 1,
          }}>
            CHOOSE YOUR <span style={{ color: '#0ea5e9' }}>VELOCITY</span>
          </h2>
          <p className="mt-4 mx-auto max-w-lg" style={{ color: '#475569', fontSize: '1rem', fontWeight: 300, lineHeight: 1.7 }}>
            No hidden costs. No long-term lock-ins. Just results.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-2xl p-8 flex flex-col"
              style={{
                background: plan.highlight ? 'rgba(4,13,42,0.95)' : 'rgba(4,13,42,0.6)',
                border: plan.highlight
                  ? '1px solid rgba(14,165,233,0.5)'
                  : '1px solid rgba(14,165,233,0.12)',
                boxShadow: plan.highlight
                  ? '0 0 60px rgba(14,165,233,0.12), 0 0 0 1px rgba(14,165,233,0.1)'
                  : 'none',
              }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs" style={{
                    background: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
                    color: '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    boxShadow: '0 0 20px rgba(14,165,233,0.4)',
                  }}>
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#0ea5e9', letterSpacing: '0.2em', marginBottom: '8px' }}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: '#e2e8f0', letterSpacing: '0.02em' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ color: '#475569', fontSize: '0.85rem', marginBottom: '10px', fontWeight: 300 }}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 300 }}>{plan.tagline}</p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#0ea5e9' }} />
                      <span style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 300 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="block text-center py-3.5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: plan.highlight
                    ? 'linear-gradient(135deg, #0284c7, #0ea5e9)'
                    : 'transparent',
                  border: plan.highlight
                    ? 'none'
                    : '1px solid rgba(14,165,233,0.25)',
                  color: plan.highlight ? '#fff' : '#64748b',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  boxShadow: plan.highlight ? '0 0 20px rgba(14,165,233,0.3)' : 'none',
                }}
              >
                {plan.cta.toUpperCase()}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
          style={{ color: '#334155', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
        >
          ALL PLANS · 30-DAY SATISFACTION GUARANTEE · CANCEL ANYTIME
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.2), transparent)' }} />
    </section>
  )
}

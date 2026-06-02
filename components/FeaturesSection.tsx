'use client'
import { motion } from 'framer-motion'
import { Radar, IconContainer } from './ui/radar-effect'
import {
  Globe, Smartphone, Palette, Wrench,
  Server, GitBranch, BarChart3, Zap
} from 'lucide-react'

const services = [
  { text: 'Brand Strategy', icon: <Palette className="h-6 w-6 text-sky-500" /> },
  { text: 'Web Development', icon: <Globe className="h-6 w-6 text-sky-500" /> },
  { text: 'Mobile Apps', icon: <Smartphone className="h-6 w-6 text-sky-500" /> },
  { text: 'Analytics & SEO', icon: <BarChart3 className="h-6 w-6 text-sky-500" /> },
  { text: 'DevOps & Infra', icon: <Server className="h-6 w-6 text-sky-500" /> },
  { text: 'Integrations', icon: <GitBranch className="h-6 w-6 text-sky-500" /> },
  { text: 'Performance', icon: <Zap className="h-6 w-6 text-sky-500" /> },
]

const features = [
  {
    num: '01',
    title: 'Conversion Architecture',
    desc: 'We design every pixel to convert. Funnels engineered through real behavioral data, not guesswork.',
  },
  {
    num: '02',
    title: 'AI-Powered Campaigns',
    desc: 'Intelligent content generation and ad optimization that adapts in real time to your audience.',
  },
  {
    num: '03',
    title: 'Full-Stack Execution',
    desc: 'From landing pages to full product sites — our team builds, deploys, and iterates at velocity.',
  },
  {
    num: '04',
    title: 'Data Intelligence',
    desc: 'Custom dashboards and analytics pipelines give you signal from the noise, instantly.',
  },
  {
    num: '05',
    title: 'Brand Architecture',
    desc: 'Systematic brand identity built for scale — visual systems, messaging hierarchies, and more.',
  },
  {
    num: '06',
    title: 'Growth Experiments',
    desc: 'Continuous A/B testing culture baked into everything we ship. Constant compounding gains.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.3), transparent)' }} />

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
            CAPABILITIES
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.05em',
            color: '#e2e8f0',
            lineHeight: 1,
          }}>
            WHAT WE <span style={{ color: '#0ea5e9' }}>DEPLOY</span>
          </h2>
        </motion.div>

        {/* Radar Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center mb-32 h-96 overflow-hidden"
          style={{ background: 'rgba(2,8,24,0.5)', borderRadius: '24px', border: '1px solid rgba(14,165,233,0.1)' }}
        >
          {/* Row 1 */}
          <div className="absolute top-8 w-full max-w-2xl mx-auto px-8 flex justify-between z-10">
            <IconContainer text="Brand Strategy" delay={0.2} icon={<Palette className="h-6 w-6 text-sky-500" />} />
            <IconContainer text="Analytics & SEO" delay={0.4} icon={<BarChart3 className="h-6 w-6 text-sky-500" />} />
            <IconContainer text="Web Development" delay={0.3} icon={<Globe className="h-6 w-6 text-sky-500" />} />
          </div>
          {/* Row 2 */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-sm mx-auto px-8 flex justify-between z-10">
            <IconContainer text="Mobile Apps" delay={0.5} icon={<Smartphone className="h-6 w-6 text-sky-500" />} />
            <IconContainer text="DevOps & Infra" delay={0.8} icon={<Server className="h-6 w-6 text-sky-500" />} />
          </div>
          {/* Row 3 */}
          <div className="absolute bottom-8 w-full max-w-2xl mx-auto px-8 flex justify-between z-10">
            <IconContainer text="Integrations" delay={0.6} icon={<GitBranch className="h-6 w-6 text-sky-500" />} />
            <IconContainer text="Performance" delay={0.7} icon={<Zap className="h-6 w-6 text-sky-500" />} />
          </div>

          <Radar className="absolute bottom-[-3rem]" />
          <div className="absolute bottom-0 z-[41] h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.3), transparent)' }} />
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="neon-border group rounded-2xl p-6 cursor-default transition-all duration-300"
              style={{ background: 'rgba(4,13,42,0.6)', backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-start gap-4">
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: '#0ea5e9',
                  letterSpacing: '0.1em',
                  marginTop: '2px',
                  minWidth: '28px',
                }}>
                  {f.num}
                </span>
                <div>
                  <h3 className="mb-2 group-hover:text-sky-400 transition-colors" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    letterSpacing: '0.05em',
                    color: '#cbd5e1',
                  }}>
                    {f.title.toUpperCase()}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.65, fontWeight: 300 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.2), transparent)' }} />
    </section>
  )
}

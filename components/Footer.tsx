export default function Footer() {
  return (
    <footer className="relative py-12 px-6" style={{ borderTop: '1px solid rgba(14,165,233,0.1)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 rounded-md rotate-45 border border-sky-500/50" />
            <div className="absolute inset-1 rounded-sm rotate-45 bg-sky-500/15" />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: '1rem', color: '#475569' }}>
            KASSORA
          </span>
        </div>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#1e293b', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} KASSORA. ALL RIGHTS RESERVED.
        </p>

        <div className="flex items-center gap-6">
          {['Privacy', 'Terms', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#334155', letterSpacing: '0.1em' }}
              className="hover:text-sky-500 transition-colors">
              {link.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

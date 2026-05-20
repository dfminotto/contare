import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import LogoIcon from './LogoIcon';

const WA = 'https://wa.me/554134062905?text=Ol%C3%A1%2C%20em%20que%20podemos%20ajudar%3F';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'Quem Somos', href: '#about' },
  { label: 'Serviços',   href: '#services' },
  { label: 'Planos',     href: '#plans' },
  { label: 'Contato',    href: '#contact' },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-light shadow-lg shadow-blue-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <LogoIcon size={44} />
          <div className="flex flex-col leading-tight">
            <span className={`text-sm font-black tracking-[0.18em] transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              CM GRUPO
            </span>
            <div className={`h-px my-0.5 transition-colors ${scrolled ? 'bg-slate-400' : 'bg-white/50'}`} />
            <span className={`text-xs font-semibold tracking-[0.25em] transition-colors ${scrolled ? 'text-slate-500' : 'text-white/80'}`}>
              CONTÁBIL
            </span>
          </div>
        </a>

        {/* Nav Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  scrolled ? 'text-slate-600' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 btn-gradient text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-glow-blue"
        >
          <MessageCircle size={16} />
          Falar no WhatsApp
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-light border-t border-white/20 px-6 py-6 space-y-4"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-slate-700 font-medium hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 btn-gradient text-white px-5 py-3 rounded-xl font-semibold text-sm w-full justify-center"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

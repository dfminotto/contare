import { MessageCircle, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import LogoIcon from './LogoIcon';

const WA = 'https://wa.me/554134062905?text=Ol%C3%A1%2C%20em%20que%20podemos%20ajudar%3F';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'Quem Somos', href: '#about' },
  { label: 'Serviços',   href: '#services' },
  { label: 'Planos',     href: '#plans' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LogoIcon size={44} />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black tracking-[0.18em] text-white">CM GRUPO</span>
                <div className="h-px my-0.5 bg-white/40" />
                <span className="text-xs font-semibold tracking-[0.25em] text-white/70">CONTÁBIL</span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm mb-6">
              Contabilidade descomplicada para MEI, ME e pequenas empresas com
              clareza, agilidade e atendimento humano.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { href: WA, icon: MessageCircle, hover: 'hover:bg-green-600' },
                { href: 'https://instagram.com/cmgrupocontabil', icon: Instagram, hover: 'hover:bg-pink-600' },
                { href: 'https://facebook.com/cmgrupocontabil', icon: Facebook, hover: 'hover:bg-blue-600' },
              ].map(({ href, icon: Icon, hover }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-xl bg-slate-800 ${hover} flex items-center justify-center transition-colors`}
                >
                  <Icon size={18} className="text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Menu</h4>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Paulo Alves Pinto, 144<br />Araucária/PR</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <span>(41) 3406-2905</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <span>contato@cmgrupocontabil.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} CM Grupo Contábil. Todos os direitos reservados.
          </p>
          <p className="text-sm text-slate-700">CRC/PR • CNPJ registrado</p>
        </div>
      </div>
    </footer>
  );
}

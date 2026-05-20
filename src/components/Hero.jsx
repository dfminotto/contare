import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, TrendingUp, Users, Award, Headphones } from 'lucide-react';

const WA_PROPOSTA = 'https://wa.me/5541984062905?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!';
const WA = 'https://wa.me/5541984062905?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!';

const stats = [
  { icon: TrendingUp, label: 'Anos de experiência', value: '+10' },
  { icon: Users,      label: 'Empresas atendidas',  value: '500+' },
  { icon: Headphones, label: 'Suporte qualificado', value: 'Ágil' },
  { icon: Award,      label: 'Segurança de dados',   value: '100%' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0f1e]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#312e81] opacity-90" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full bg-violet-600/15 blur-3xl animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 glass text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Contabilidade para o seu crescimento
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.25)}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl"
        >
          Contabilidade{' '}
          <span className="text-gradient">descomplicada</span>{' '}
          para sua empresa
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.4)}
          className="mt-6 text-lg sm:text-xl text-blue-100/70 max-w-2xl leading-relaxed"
        >
          Cuidamos da parte contábil, fiscal e trabalhista com clareza,
          agilidade e atendimento humano, para você focar no que importa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WA_PROPOSTA}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-glow-blue"
          >
            <MessageCircle size={20} />
            Solicitar proposta
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 glass text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
          >
            Conhecer serviços
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl"
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-colors">
              <Icon size={22} className="text-blue-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-black text-white mb-1">{value}</div>
              <div className="text-sm text-blue-200/70">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}

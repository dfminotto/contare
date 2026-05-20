import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ShoppingBag, Briefcase, Factory, Globe } from 'lucide-react';

const values = [
  'Atendimento próximo e sem termos difíceis',
  'Obrigações contábeis sempre em dia',
  'Planejamento tributário inteligente',
  'Foco no crescimento do seu negócio',
  'Equipe experiente e especializada',
  'Tecnologia aliada à contabilidade',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, x: -20 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 bg-slate-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Quem Somos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            Parceiros do seu{' '}
            <span className="text-gradient-dark">sucesso</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              A <strong className="text-slate-900">CM Grupo Contábil</strong> é uma empresa focada em
              simplificar a contabilidade para pequenos negócios, empreendedores
              individuais e empresas em crescimento.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Com mais de <strong className="text-slate-900">10 anos de experiência</strong>, entendemos
              que cada negócio é único. Nossas soluções são sob medida, pensadas
              para ajudar sua empresa a crescer com segurança, clareza e tranquilidade.
            </p>

            {/* Values list */}
            <motion.ul
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid sm:grid-cols-2 gap-3 pt-4"
            >
              {values.map(v => (
                <motion.li key={v} variants={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium">{v}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden shadow-deep">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-10 lg:p-14 text-white">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-3">
                  Contabilidade leve,<br />ágil e parceira
                </h3>
                <p className="text-blue-100/80 leading-relaxed">
                  Deixe a burocracia com a gente e concentre sua energia
                  no que realmente importa: o crescimento do seu negócio.
                </p>

                {/* Segmentos */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: ShoppingBag, l: 'Comércio' },
                    { icon: Briefcase,   l: 'Serviços' },
                    { icon: Factory,     l: 'Indústria' },
                    { icon: Globe,       l: 'E-commerce' },
                  ].map(({ icon: Icon, l }) => (
                    <div key={l} className="bg-white/10 rounded-2xl p-4 text-center">
                      <Icon size={22} className="mx-auto mb-2 text-blue-200" />
                      <div className="text-sm font-semibold">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-2xl -z-10 animate-float" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-200 rounded-xl -z-10 animate-float animation-delay-2000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    emoji: '📊',
    title: 'Contabilidade Completa',
    desc: 'Escrituração contábil, balanços e demonstrativos financeiros com precisão e conformidade.',
    color: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-200',
  },
  {
    emoji: '💰',
    title: 'Planejamento Tributário',
    desc: 'Redução legal da carga tributária com estratégia e segurança para seu negócio.',
    color: 'from-indigo-500 to-indigo-600',
    shadow: 'shadow-indigo-200',
  },
  {
    emoji: '👥',
    title: 'Departamento Pessoal',
    desc: 'Folha de pagamento, admissões, demissões e gestão de benefícios sem complicações.',
    color: 'from-violet-500 to-violet-600',
    shadow: 'shadow-violet-200',
  },
  {
    emoji: '🏢',
    title: 'Abertura de Empresas',
    desc: 'Constituição de negócios com segurança e rapidez. MEI, ME, LTDA e mais.',
    color: 'from-blue-600 to-indigo-600',
    shadow: 'shadow-blue-200',
  },
  {
    emoji: '📋',
    title: 'Obrigações Fiscais',
    desc: 'SPED, DCTF, ECF e todas as declarações acessórias sempre dentro do prazo.',
    color: 'from-sky-500 to-blue-500',
    shadow: 'shadow-sky-200',
  },
  {
    emoji: '🎯',
    title: 'Consultoria Estratégica',
    desc: 'Assessoria para tomada de decisão com base em análises e indicadores financeiros.',
    color: 'from-indigo-600 to-violet-600',
    shadow: 'shadow-indigo-200',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            Tudo que sua empresa{' '}
            <span className="text-gradient-dark">precisa</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Soluções completas de contabilidade para crescer com segurança e tranquilidade.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {services.map(s => (
            <motion.div
              key={s.title}
              variants={cardAnim}
              className={`group bg-white rounded-2xl p-8 shadow-card card-hover border border-slate-100`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg ${s.shadow}`}>
                {s.emoji}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{s.desc}</p>

              {/* Hover accent */}
              <div className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${s.color} rounded-full transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, MessageCircle, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Essencial',
    range: 'MEI / Faturamento até R$ 50k/mês',
    badge: null,
    featured: false,
    items: [
      'Contabilidade completa',
      'Apuração de impostos',
      'Consultoria / assessoria',
    ],
    cta: 'Solicitar proposta',
    waMsg: 'Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!',
  },
  {
    name: 'Plus',
    range: 'Até R$ 150k/mês',
    badge: 'Mais escolhido',
    featured: true,
    items: [
      'Contabilidade completa',
      'Apuração de impostos',
      'Consultoria / assessoria',
      'Suporte online prioritário',
    ],
    cta: 'Solicitar proposta',
    waMsg: 'Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!',
  },
  {
    name: 'Premium',
    range: 'Faturamento acima de R$ 150k/mês',
    badge: null,
    featured: false,
    items: [
      'Contabilidade completa',
      'Apuração de impostos',
      'Consultoria / assessoria',
      'Suporte online prioritário',
      '3 reuniões mensais',
    ],
    cta: 'Solicitar proposta',
    waMsg: 'Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Plans() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="plans" className="py-28 bg-slate-50">
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
            Planos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            Planos para sua{' '}
            <span className="text-gradient-dark">empresa</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu momento e foque no crescimento.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid lg:grid-cols-3 gap-8 items-start"
        >
          {plans.map(plan => (
            <motion.div
              key={plan.name}
              variants={cardAnim}
              className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300
                ${plan.featured
                  ? 'lg:-translate-y-4 shadow-[0_32px_80px_rgba(37,99,235,0.35)]'
                  : 'shadow-card hover:shadow-card-hover'
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 z-10">
                  <div className="badge-shimmer text-slate-900 font-bold text-xs px-5 py-1.5 rounded-b-xl flex items-center gap-1.5">
                    <Zap size={12} />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card body */}
              <div
                className={`flex flex-col flex-1 p-8 sm:p-10
                  ${plan.featured
                    ? 'bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-800 text-white'
                    : 'bg-white'
                  }`}
              >
                {/* Plan name */}
                <div className="mb-8 mt-4">
                  <h3 className={`text-2xl font-black mb-1 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm font-medium ${plan.featured ? 'text-blue-200' : 'text-slate-400'}`}>
                    {plan.range}
                  </p>
                </div>

                {/* Divider */}
                <div className={`h-px mb-8 ${plan.featured ? 'bg-white/20' : 'bg-slate-100'}`} />

                {/* Features */}
                <ul className="space-y-4 flex-1 mb-10">
                  {plan.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                        ${plan.featured ? 'bg-white/20' : 'bg-blue-50'}`}>
                        <Check size={12} className={plan.featured ? 'text-white' : 'text-blue-600'} strokeWidth={3} />
                      </span>
                      <span className={`text-sm font-medium ${plan.featured ? 'text-blue-50' : 'text-slate-700'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/5541984062905?text=${plan.waMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300
                    ${plan.featured
                      ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                      : 'btn-gradient text-white shadow-glow-blue'
                    }`}
                >
                  <MessageCircle size={16} />
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-sm text-slate-400 mt-10"
        >
          Todos os planos incluem atendimento personalizado. Fale conosco para uma proposta sob medida.
        </motion.p>
      </div>
    </section>
  );
}

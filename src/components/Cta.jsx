import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WA = 'https://wa.me/554134062905?text=Ol%C3%A1%2C%20em%20que%20podemos%20ajudar%3F';

export default function Cta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#312e81]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl animate-blob animation-delay-4000" />

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Pronto para simplificar a{' '}
            <span className="text-gradient">contabilidade</span>{' '}
            da sua empresa?
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Fale com a CM Grupo Contábil e descubra o melhor plano para o seu momento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-deep"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Ver planos
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA = 'https://wa.me/554134062905?text=Ol%C3%A1%2C%20em%20que%20podemos%20ajudar%3F';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WA}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-7 right-7 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-[0_8px_32px_rgba(34,197,94,0.5)] flex items-center justify-center transition-colors"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}

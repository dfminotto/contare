import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA = 'https://wa.me/5541984062905?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es!';

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

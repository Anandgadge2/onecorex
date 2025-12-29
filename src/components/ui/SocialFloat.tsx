import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Phone, X, Instagram, Linkedin } from 'lucide-react';

const socialItems = [
  {
    icon: MessageCircle,
    href: 'https://wa.me/971525315971?text=Hello%20OneCoreX%2C%20I%20would%20like%20to%20discuss%20a%20project',
    label: 'WhatsApp',
    color: 'bg-green-600 hover:bg-green-700',
  },
  {
    icon: Phone,
    href: 'tel:+971525315971',
    label: 'Call Us',
    color: 'bg-primary hover:bg-primary/90',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/onecorex',
    label: 'Instagram',
    color: 'bg-gradient-to-br from-purple-600 to-pink-500 hover:opacity-90',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/onecorex',
    label: 'LinkedIn',
    color: 'bg-blue-600 hover:bg-blue-700',
  },
];

export const SocialFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            {socialItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-full text-foreground shadow-lg-custom ${item.color} transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg-custom transition-all ${
          isOpen
            ? 'bg-secondary text-foreground'
            : 'bg-primary text-primary-foreground animate-pulse-glow'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close menu' : 'Open contact menu'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Servizi', href: '#services' },
  { name: 'Progetti', href: '#gallery' },
  { name: 'Chi Siamo', href: '#about' },
  { name: 'Contatti', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#07090D]/80 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-syne text-xl lg:text-2xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-[#3A7DFF] bg-clip-text text-transparent">
                Porte & Finestre Service
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] group-hover:w-full transition-all duration-500" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => scrollToSection('#contact')}
              className="hidden lg:block px-8 py-3 bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#1F5FBF]/30 transition-all duration-300 hover:scale-105"
            >
              Richiedi Preventivo
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-[#07090D] pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-syne font-semibold text-white hover:text-[#3A7DFF] transition-colors text-left"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                onClick={() => scrollToSection('#contact')}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] rounded-full text-lg font-semibold"
              >
                Richiedi Preventivo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

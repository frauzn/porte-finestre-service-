import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-md z-[100]"
        >
          <div className="bg-[#0F131A]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl shadow-black/50">
            {/* Icon */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#1F5FBF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie size={24} className="text-[#3A7DFF]" />
              </div>
              <div className="flex-1">
                <h3 className="font-syne text-lg font-bold text-white mb-2">
                  Utilizzo dei Cookie
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Utilizziamo i cookie per migliorare la tua esperienza di navigazione.
                  Continuando a utilizzare il sito, accetti il nostro utilizzo dei cookie.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 text-xs text-zinc-500 mb-6">
              <a href="/privacy-policy" className="hover:text-[#3A7DFF] transition-colors">
                Privacy Policy
              </a>
              <a href="/cookie-policy" className="hover:text-[#3A7DFF] transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-[#1F5FBF]/30 transition-all duration-300"
              >
                Accetta
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Rifiuta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

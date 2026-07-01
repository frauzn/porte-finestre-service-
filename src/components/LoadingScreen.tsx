import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#07090D] flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <h1 className="font-syne text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white via-white to-[#3A7DFF] bg-clip-text text-transparent">
                  Porte & Finestre Service
                </span>
              </h1>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

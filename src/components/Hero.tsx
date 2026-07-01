import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090D]/60 via-[#07090D]/40 to-[#07090D] z-10" />
        <img
          src="https://images.pexels.com/photos/8134750/pexels-photo-8134750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="Luxury Modern Villa"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/60 via-transparent to-[#07090D]/60 z-10" />

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-[20%] right-[10%] w-96 h-96 bg-[#1F5FBF] rounded-full blur-[120px] z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-[#3A7DFF] rounded-full blur-[150px] z-0"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
        >
          <Sparkles size={16} className="text-[#3A7DFF]" />
          <span className="text-sm font-medium text-zinc-300">Installazioni di Qualità Superiore</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-syne text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.1] mb-8 tracking-tight"
        >
          <span className="block">Valorizziamo gli Spazi</span>
          <span className="block bg-gradient-to-r from-white via-zinc-200 to-[#3A7DFF] bg-clip-text text-transparent">
            con Precisione
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Installazione professionale di porte, finestre e infissi di qualità
          <br className="hidden md:block" />
          per abitazioni e aziende a Modena e in tutta l'Emilia-Romagna
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] rounded-full text-lg font-semibold overflow-hidden hover:shadow-2xl hover:shadow-[#1F5FBF]/40 transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Inizia il Tuo Progetto
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A7DFF] to-[#1F5FBF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button
            onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Scopri i Nostri Lavori
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: '500+', label: 'Progetti Completati' },
            { number: '15+', label: 'Anni di Esperienza' },
            { number: '100%', label: 'Clienti Soddisfatti' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-5xl font-bold font-syne bg-gradient-to-r from-white to-[#3A7DFF] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

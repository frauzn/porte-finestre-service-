import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Anni di Eccellenza' },
  { icon: Users, value: '500+', label: 'Clienti Soddisfatti' },
  { icon: Target, value: '1000+', label: 'Progetti Realizzati' },
  { icon: TrendingUp, value: '100%', label: 'Garanzia Qualità' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#1F5FBF]/5 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#3A7DFF]/5 rounded-full blur-[200px]" />

      <div ref={containerRef} className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-[#1F5FBF]/10 backdrop-blur-xl border border-[#1F5FBF]/20 rounded-full"
            >
              <span className="text-sm font-medium text-[#3A7DFF]">Chi Siamo</span>
            </motion.div>

            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="block text-white">Trasformiamo le Case</span>
              <span className="block bg-gradient-to-r from-zinc-400 to-white bg-clip-text text-transparent">
                in Dimore da Sogno
              </span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                Da oltre 15 anni siamo il punto di riferimento per servizi di
                installazione di qualità superiore a Modena e in tutta l'Emilia-Romagna.
                Il nostro impegno per l'eccellenza e l'attenzione ai dettagli ci hanno
                reso il partner preferito da privati e architetti.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Ci specializziamo nell'installazione di porte, finestre e infissi
                di alta gamma, portando precisione artigianale in ogni progetto.
                Dalle ville moderne alle ristrutturazioni storiche, garantiamo che
                ogni installazione rispetti i più elevati standard di qualità ed estetica.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group relative p-6 bg-[#0F131A] border border-white/5 rounded-2xl hover:border-[#1F5FBF]/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-[#1F5FBF]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1F5FBF]/30 transition-colors duration-500">
                    <stat.icon size={24} className="text-[#3A7DFF]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold font-syne text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#1F5FBF]/40 transition-all duration-500 hover:scale-105"
            >
              Lavora con Noi
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8082299/pexels-photo-8082299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 lg:-left-12 bg-[#0F131A] border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-xl max-w-[280px]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1F5FBF] to-[#3A7DFF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-syne text-white mb-1">
                    Certificati
                  </div>
                  <div className="text-sm text-zinc-400">
                    Specialisti Installazioni di Pregio
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-[#1F5FBF]/20 rounded-full blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#3A7DFF]/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 lg:mt-48"
        >
          <h3 className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 lg:mb-24">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              I Nostri Valori
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Precisione',
                description: 'Ogni installazione eseguita con meticolosa attenzione ai dettagli e perfetto allineamento.',
              },
              {
                title: 'Qualità',
                description: 'Lavoriamo solo con materiali premium e marchi affidabili per garantire risultati duraturi.',
              },
              {
                title: 'Fiducia',
                description: 'Costruiamo relazioni durature attraverso trasparenza, affidabilità e servizio eccellente.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group p-8 lg:p-10 bg-[#0F131A] border border-white/5 rounded-2xl hover:border-[#1F5FBF]/30 transition-all duration-500"
              >
                <div className="text-5xl lg:text-6xl font-bold font-syne text-[#1F5FBF]/20 group-hover:text-[#1F5FBF]/40 transition-colors duration-500 mb-6">
                  0{index + 1}
                </div>
                <h4 className="text-2xl lg:text-3xl font-syne font-bold text-white mb-4 group-hover:text-[#3A7DFF] transition-colors duration-500">
                  {value.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

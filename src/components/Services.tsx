import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, Frame, Package, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Installazione Porte',
    description: 'Posa in opera professionale di porte d\'ingresso di prestigio, porte interne blindate e sistemi di sicurezza su misura.',
    image: 'https://images.pexels.com/photos/7638806/pexels-photo-7638806.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    icon: Home,
  },
  {
    title: 'Installazione Finestre',
    description: 'Montaggio professionale di serramenti moderni, porte scorrevoli in vetro e soluzioni panoramiche su misura.',
    image: 'https://images.pexels.com/photos/6580239/pexels-photo-6580239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    icon: Frame,
  },
  {
    title: 'Montaggio Mobili',
    description: 'Assemblaggio meticoloso e installazione di mobili di pregio, armadi a muro e soluzioni su misura.',
    image: 'https://images.pexels.com/photos/8134752/pexels-photo-8134752.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    icon: Package,
  },
  {
    title: 'Soluzioni Personalizzate',
    description: 'Servizi di installazione su misura per realizzare la tua visione architettonica unica con precisione artigianale.',
    image: 'https://images.pexels.com/photos/7587857/pexels-photo-7587857.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    icon: Wrench,
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#1F5FBF]/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3A7DFF]/5 rounded-full blur-[200px]" />

      <div ref={containerRef} className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-32"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-[#1F5FBF]/10 backdrop-blur-xl border border-[#1F5FBF]/20 rounded-full"
          >
            <span className="text-sm font-medium text-[#3A7DFF]">La Nostra Esperienza</span>
          </motion.div>

          <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Servizi di Installazione</span>
            <span className="block bg-gradient-to-r from-zinc-400 to-white bg-clip-text text-transparent">
              di Qualità Superiore
            </span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Dalle porte di pregio alle finestre panoramiche, portiamo precisione
            e maestria artigianale in ogni installazione
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-[#0F131A] border border-white/5 hover:border-[#1F5FBF]/30 transition-all duration-700"
            >
              {/* Image Container */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F131A] via-[#0F131A]/60 to-transparent" />

                {/* Icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-[#1F5FBF]/30 group-hover:border-[#1F5FBF]/50 transition-all duration-500">
                  <service.icon size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="font-syne text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[#3A7DFF] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6 text-base lg:text-lg">
                  {service.description}
                </p>

                <button className="group/btn inline-flex items-center gap-2 text-[#3A7DFF] font-semibold hover:gap-4 transition-all duration-300">
                  Scopri di Più
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="group-hover/btn:translate-x-1 transition-transform"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F5FBF]/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 lg:mt-32"
        >
          <p className="text-zinc-400 mb-8 text-lg">
            Hai bisogno di una soluzione personalizzata? Siamo qui per aiutarti.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#1F5FBF]/40 transition-all duration-500 hover:scale-105"
          >
            Richiedi Consulenza
          </button>
        </motion.div>
      </div>
    </section>
  );
}

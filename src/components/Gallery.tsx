import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/8134750/pexels-photo-8134750.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Villa Moderna',
    category: 'Architettura',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/7638806/pexels-photo-7638806.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    title: 'Porta d\'Ingresso di Pregio',
    category: 'Porte',
    span: 'lg:row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/8134752/pexels-photo-8134752.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Interni di Lusso',
    category: 'Interni',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/6580239/pexels-photo-6580239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Finestre Panoramiche',
    category: 'Finestre',
    span: 'lg:col-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/7587857/pexels-photo-7587857.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Soggiorno Moderno',
    category: 'Interni',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Villa di Prestigio',
    category: 'Architettura',
    span: 'lg:col-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/7587743/pexels-photo-7587743.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Sala da Pranzo Minimal',
    category: 'Interni',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/10610733/pexels-photo-10610733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Casa Contemporanea',
    category: 'Architettura',
    span: 'lg:row-span-2',
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-32 lg:py-48 bg-[#0F131A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12">
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
            <span className="text-sm font-medium text-[#3A7DFF]">I Nostri Progetti</span>
          </motion.div>

          <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Realizzati con</span>
            <span className="block bg-gradient-to-r from-zinc-400 to-white bg-clip-text text-transparent">
              Precisione e Cura
            </span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Scopri la nostra collezione di progetti completati a Modena e
            in Emilia-Romagna
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
            >
              {/* Image */}
              <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/60 to-transparent"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: hoveredIndex === index ? 0.9 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <div className="w-12 h-12 bg-[#1F5FBF]/30 backdrop-blur-xl border border-[#1F5FBF]/50 rounded-xl flex items-center justify-center">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 10 }}
                  animate={{
                    y: hoveredIndex === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-[#1F5FBF]/20 backdrop-blur-xl border border-[#1F5FBF]/30 rounded-full text-xs font-medium text-[#3A7DFF] mb-3">
                    {image.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-syne font-bold text-white">
                    {image.title}
                  </h3>
                </motion.div>
              </div>

              {/* Hover Border Glow */}
              <motion.div
                className="absolute inset-0 border-2 border-[#1F5FBF]/50 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
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
            Pronto a trasformare i tuoi spazi?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Creiamo Insieme
          </button>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefono',
    value: '+39 371 519 9017',
    href: 'tel:+393715199017',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'portefinestre88@gmail.com',
    href: 'mailto:portefinestre88@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Sede',
    value: 'Modena, Emilia-Romagna',
    href: '#',
  },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert('Devi accettare l\'Informativa sulla Privacy per inviare il messaggio.');
      return;
    }
    // Form submission logic here
  };

  return (
    <section id="contact" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090D] via-[#07090D]/95 to-[#07090D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090D] via-[#07090D]/80 to-[#07090D]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1F5FBF]/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#3A7DFF]/10 rounded-full blur-[200px]" />

      <div ref={containerRef} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
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
            <span className="text-sm font-medium text-[#3A7DFF]">Contattaci</span>
          </motion.div>

          <h2 className="font-syne text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white">Realizziamo Insieme</span>
            <span className="block bg-gradient-to-r from-zinc-400 to-white bg-clip-text text-transparent">
              Qualcosa di Speciale
            </span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Pronto a trasformare i tuoi spazi? Contattaci per una consulenza
            gratuita e un preventivo personalizzato.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_0.9fr] gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-6 p-6 lg:p-8 bg-[#0F131A]/60 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-[#1F5FBF]/30 hover:bg-[#0F131A]/80 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#1F5FBF]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F5FBF]/30 transition-colors duration-500">
                  <info.icon size={24} className="text-[#3A7DFF]" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-2">{info.title}</div>
                  <div className="text-xl lg:text-2xl font-semibold text-white group-hover:text-[#3A7DFF] transition-colors duration-500">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 lg:p-8 bg-gradient-to-br from-[#1F5FBF]/20 to-[#3A7DFF]/10 backdrop-blur-xl border border-[#1F5FBF]/30 rounded-2xl"
            >
              <h3 className="text-xl font-syne font-bold text-white mb-4">
                Orari di Apertura
              </h3>
              <div className="space-y-2 text-zinc-300">
                <div className="flex justify-between">
                  <span>Lunedì - Venerdì</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabato</span>
                  <span>9:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Domenica</span>
                  <span>Chiuso</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="p-8 lg:p-12 bg-[#0F131A]/60 backdrop-blur-xl border border-white/5 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-3">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-[#07090D]/60 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:border-[#1F5FBF]/50 focus:outline-none transition-colors"
                    placeholder="Mario Rossi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-3">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-6 py-4 bg-[#07090D]/60 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:border-[#1F5FBF]/50 focus:outline-none transition-colors"
                    placeholder="+39 123 456 7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 bg-[#07090D]/60 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:border-[#1F5FBF]/50 focus:outline-none transition-colors"
                    placeholder="mario@esempio.it"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-3">
                    Messaggio
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-6 py-4 bg-[#07090D]/60 border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:border-[#1F5FBF]/50 focus:outline-none transition-colors resize-none"
                    placeholder="Raccontaci del tuo progetto..."
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-white/20 bg-[#07090D]/60 text-[#1F5FBF] focus:ring-[#1F5FBF] focus:ring-offset-0 transition-colors"
                    />
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      Ho letto e accetto l'<a href="/privacy-policy" className="text-[#3A7DFF] hover:underline">Informativa sulla Privacy</a>.
                    </span>
                  </label>
                  
                  <a 
                    href="/privacy-policy" 
                    className="inline-block text-xs text-zinc-500 hover:text-[#3A7DFF] transition-colors"
                  >
                    Informativa sulla Privacy
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={!privacyAccepted}
                  className={`group w-full px-8 py-5 rounded-xl text-lg font-semibold transition-all duration-500 flex items-center justify-center gap-3 ${
                    privacyAccepted
                      ? 'bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] hover:shadow-2xl hover:shadow-[#1F5FBF]/40 hover:scale-[1.02]'
                      : 'bg-white/5 cursor-not-allowed opacity-50'
                  }`}
                >
                  Invia Messaggio
                  <Send size={20} className={privacyAccepted ? 'group-hover:translate-x-1 transition-transform' : ''} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 pt-12 border-t border-white/5"
        >
          <div className="text-center mb-6">
            <div className="font-syne text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-white to-[#3A7DFF] bg-clip-text text-transparent">
                Porte & Finestre Service
              </span>
            </div>
            <p className="text-zinc-500 mb-6">
              Installazioni di Qualità Superiore a Modena
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="flex justify-center gap-8 mb-6">
            <a 
              href="/privacy-policy" 
              className="text-sm text-zinc-600 hover:text-[#3A7DFF] transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/cookie-policy" 
              className="text-sm text-zinc-600 hover:text-[#3A7DFF] transition-colors"
            >
              Cookie Policy
            </a>
          </div>
          
          <p className="text-sm text-zinc-600 text-center">
            © 2024 Porte & Finestre Service. Tutti i diritti riservati.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

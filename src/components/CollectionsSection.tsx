import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    id: "drive",
    name: "Drive",
    subtitle: "Design essenziale e carattere contemporaneo",
  },
  {
    id: "classic",
    name: "Classic",
    subtitle: "Eleganza intemporelle e finiture raffinate",
  },
  {
    id: "balance",
    name: "Balance",
    subtitle: "Equilibrio tra forma, luce e funzionalità",
  },
  {
    id: "calmness",
    name: "Calmness",
    subtitle: "Atmosfere serene con dettagli premium",
  },
];

export default function CollectionsSection() {
  const navigate = useNavigate();

  return (
    <section id="collezioni" className="relative px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#3A7DFF]">
            Collezioni
          </p>

          <h2 className="font-syne text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Soluzioni progettate per ogni stile
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Scopri le collezioni che uniscono qualità artigianale,
            tecnologia e personalizzazione.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Картинка коллекции */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={`/images/doors/${collection.id}.webp`}
                  alt={collection.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#07090D] via-[#07090D]/70 to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-syne text-2xl font-semibold text-white">
                      {collection.name}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-zinc-400">
                      {collection.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/collezioni/${collection.id}`)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-[#3A7DFF]/40 hover:bg-[#3A7DFF]/10 hover:text-white"
                >
                  Esplora la collezione
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
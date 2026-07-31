import { motion } from "framer-motion";

export type DoorCardProps = {
  id: string;
  name: string;
  image: string;
};

export default function DoorCard({ name, image }: DoorCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
    >
      <img
        src={image}
        alt={name}
        className="block mx-auto w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />

      <h3 className="mt-6 text-center font-syne text-xl font-semibold text-white">
        {name}
      </h3>
    </motion.article>
  );
}
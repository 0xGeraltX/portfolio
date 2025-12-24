"use client";
import { motion } from "framer-motion";

const projects = [
  "Sui",
  "Arbitrum",
  "Optimism",
  "Aptos",
  "Caldera",
  "Space Runner NFT",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-6 rounded-xl bg-white dark:bg-slate-700 shadow hover:scale-105 transition"
            >
              <h3 className="font-semibold">{project}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Web3 Testnet / Ecosystem Contributor
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

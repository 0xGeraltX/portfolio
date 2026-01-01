"use client";
import { motion } from "framer-motion";

const skills = [
  "DApps Testing",
  "Smart Contract Deployment",
  "Bug Bounty",
  "NFT Deployment",
  "Node Management",
  "ICO / IDO / IEO Experience",
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white dark:bg-slate-700 shadow"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

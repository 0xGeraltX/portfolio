"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    name: "Sui",
    role: "Testnet Contributor",
    description: "Sui testnet participation, wallet testing and ecosystem tasks.",
    image: "/projects/sui.png",
    twitter: "https://twitter.com/SuiNetwork"
  },
  {
    name: "Arbitrum",
    role: "Early User",
    description: "L2 interaction, bridge usage and governance exploration.",
    image: "/projects/arbitrum.png",
    twitter: "https://twitter.com/arbitrum"
  },
  {
    name: "Optimism",
    role: "Web3 Tester",
    description: "Optimism ecosystem testing and early adoption.",
    image: "/projects/optimism.png",
    twitter: "https://twitter.com/optimism"
  },
  {
    name: "Space Runner NFT",
    role: "NFT Contributor",
    description: "NFT minting, marketplace interaction and testing.",
    image: "/projects/spacerunner.png",
    twitter: "https://twitter.com/SpaceRunnerNFT"
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer p-6 rounded-xl bg-white dark:bg-slate-700 shadow hover:scale-105 transition"
            >
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                {project.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

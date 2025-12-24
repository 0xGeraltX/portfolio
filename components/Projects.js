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
          {projects.map((project) => (
            <div
              key={project}
              className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:scale-105 transition"
            >
              <h3 className="font-semibold">{project}</h3>
              <p className="text-sm text-gray-400 mt-2">
                Web3 Testnet / Ecosystem Contributor
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

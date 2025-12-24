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
    <section className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

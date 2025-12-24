export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Geralt <span className="text-blue-400">| Web3</span>
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-xl">
        Web3 Developer • Airdrop Hunter • Testnet Tester
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-800 transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
}

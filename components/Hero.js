"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-5xl font-extrabold">
        Geralt <span className="text-blue-500">| Web3</span>
      </h1>

      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-xl">
        Web3 Developer • Airdrop Hunter • Testnet Tester
      </p>
    </motion.section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-slate-800 p-6 rounded-xl max-w-md w-full"
      >
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <p className="text-sm text-gray-500">
          Role: {project.role}
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}

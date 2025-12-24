"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({
  project,
  projects,
  currentIndex,
  setCurrentIndex,
  onClose
}) {
  if (!project) return null;

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, projects.length, setCurrentIndex]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-xl"
      >
        {/* Image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="rounded-xl mb-4"
          />
        )}

        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <p className="text-sm text-gray-500 mb-4">
          Role: <span className="font-medium">{project.role}</span>
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm"
            >
              Live Site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm"
            >
              GitHub
            </a>
          )}
          {project.twitter && (
            <a
              href={project.twitter}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm"
            >
              Twitter
            </a>
          )}
        </div>

        <div className="mt-6 text-xs text-gray-400 text-center">
          ⌨️ Use ← → arrows to navigate • ESC to close
        </div>
      </motion.div>
    </div>
  );
}

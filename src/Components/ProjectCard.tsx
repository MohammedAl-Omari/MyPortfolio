// src/Components/ProjectCard.tsx
import type { Project } from "../types/Project";
import { Github } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-md hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
        {project.title}
      </h3>
      
      {/* Description */}
      <p className="group-hover:text-blue-500 transition-colors mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span 
            key={tag} 
            className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent dark:border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Links - Only show if at least one link exists */}
      {(project.github || project.link) && (
        <div className="flex gap-5 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors"
            >
            </a>
          )}
        </div>
      )}
    </div>
  );
}
import { projects } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">My Work</h1>
        <p className="mb-2">A collection of things I've built recently.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
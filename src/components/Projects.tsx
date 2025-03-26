
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useLanguage();
  
  return (
    <div className="group rounded-xl overflow-hidden glass shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <div 
          className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500 ease-out"
          style={{ 
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-black/5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
        <div className="flex gap-3">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={16} />
              {t('projects.demo')}
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <Github size={16} />
              {t('projects.code')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [category, setCategory] = useState("all");
  const { t } = useLanguage();
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description: "Portfolio professionnel présentant mes projets et compétences avec React et Tailwind.",
      image: "images/porfolio.png",
      tags: ["React", "Tailwind CSS", "JavaScript", "Express"],
      demoUrl: "",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "Store Manager",
      description: "Application permettant de gérer les mouvements quotidiens dans une boutique.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Express" ],
      demoUrl: "",
      repoUrl: "https://github.com/deomrd/boutique"
    },
    {
      id: 4,
      title: "Site Vitrine Organisation",
      description: "Site vitrine pour un restaurant avec menu interactif et réservations.",
      image: "https://eptopeace.org/a-admin/img/realisations/1704874446.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "",
      repoUrl: "https://eptopeace.org/"
    }
  ];

  const categories = [
    { id: "all", label: t('projects.filter.all') },
    { id: "react", label: "React" },
    { id: "express", label: "Express.js" },
    { id: "tailwind", label: "Tailwind" },
    { id: "php", label: "PHP" }
  ];

  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
      );

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="block text-sm font-medium text-blue-600 mb-2">{t('projects.title')}</span>
          <h2 className="heading-lg mb-6">{t('projects.heading')}</h2>
          <p className="paragraph">
            {t('projects.description')}
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                category === cat.id
                  ? "bg-black text-white"
                  : "bg-black/5 hover:bg-black/10"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillItem = ({ 
  name, 
  level, 
  icon,
  delay = 0
}: { 
  name: string; 
  level: number; 
  icon: string;
  delay?: number;
}) => {
  return (
    <div 
      className="group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <span className="text-xl">{icon}</span>
        </div>
        <h3 className="font-medium">{name}</h3>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ 
  title, 
  skills,
  className 
}: { 
  title: string; 
  skills: Array<{ name: string; level: number; icon: string }>;
  className?: string;
}) => {
  return (
    <div className={cn("p-6 rounded-xl glass animate-fade-in", className)}>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillItem 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            icon={skill.icon}
            delay={index * 100} 
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();
  
  const frontendSkills = [
    { name: "HTML", level: 95, icon: "🌐" },
    { name: "CSS", level: 90, icon: "🎨" },
    { name: "Tailwind CSS", level: 95, icon: "💨" },
    { name: "JavaScript", level: 85, icon: "📜" },
    { name: "React", level: 90, icon: "⚛️" },
    { name: "jQuery", level: 80, icon: "🔌" },
    { name: "AJAX", level: 75, icon: "🔄" },
    { name: "Vite", level: 85, icon: "⚡" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, icon: "📦" },
    { name: "Express", level: 80, icon: "🚂" },
    { name: "MongoDB", level: 75, icon: "🍃" },
    { name: "MySQL", level: 85, icon: "🗄️" },
    { name: "Prisma ORM", level: 80, icon: "🔷" },
    { name: "REST API", level: 85, icon: "🔄" },
  ];

  const otherSkills = [
    { name: "Git/GitHub", level: 85, icon: "🔄" },
    { name: "Web Hosting", level: 90, icon: "🏠" },
    { name: "Performance Optimization", level: 80, icon: "⚡" },
    { name: "Responsive Design", level: 95, icon: "📱" },
    { name: "TypeScript", level: 70, icon: "😍" },
    { name: "Intelligence Artificial", level: 75, icon: "🧑‍🚀" },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="block text-sm font-medium text-blue-600 mb-2">{t('skills.title')}</span>
          <h2 className="heading-lg mb-6">{t('skills.heading')}</h2>
          <p className="paragraph">
            {t('skills.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory 
            title={t('skills.frontend')}
            skills={frontendSkills} 
            className="md:transform md:hover:-translate-y-2 transition-transform duration-300"
          />
          <SkillCategory 
            title={t('skills.backend')}
            skills={backendSkills} 
            className="md:transform md:hover:-translate-y-2 transition-transform duration-300 md:delay-100"
          />
          <SkillCategory 
            title={t('skills.other')}
            skills={otherSkills} 
            className="md:transform md:hover:-translate-y-2 transition-transform duration-300 md:delay-200"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

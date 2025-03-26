
import { Code, Server, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="block text-sm font-medium text-blue-600 mb-2">{t('about.title')}</span>
          <h2 className="heading-lg mb-6">{t('about.heading')}</h2>
          <p className="paragraph">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl glass hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.frontend.title')}</h3>
            <p className="text-foreground/70">
              {t('about.frontend.description')}
            </p>
          </div>

          <div className="p-6 rounded-xl glass hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.backend.title')}</h3>
            <p className="text-foreground/70">
              {t('about.backend.description')}
            </p>
          </div>

          <div className="p-6 rounded-xl glass hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-emerald-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.hosting.title')}</h3>
            <p className="text-foreground/70">
              {t('about.hosting.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

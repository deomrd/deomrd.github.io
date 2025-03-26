
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-background-shine" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="text-center md:text-left md:flex-1">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
              {t('hero.subtitle')}
            </span>
            
            <h1 className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Deogratias <span className="highlight-gradient">Mirindi</span>
            </h1>
            
            <p className="paragraph max-w-2xl mx-auto md:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-black/90 transition-colors"
              >
                {t('hero.cta.projects')}
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-black/20 rounded-md font-medium hover:bg-black/5 transition-colors"
              >
                {t('hero.cta.contact')}
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
              <Avatar className="w-64 h-64 border-4 border-white shadow-xl relative">
                <AvatarImage src="/images/profil.jpg" />
                <AvatarFallback className="text-3xl font-serif">DM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-float">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown size={32} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

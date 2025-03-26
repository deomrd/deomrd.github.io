
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Type des langues disponibles
export type Language = 'fr' | 'en';

// Type du contexte
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Traductions
export const translations = {
  fr: {
    // Header
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.home': 'Accueil',
    
    // Hero
    'hero.subtitle': 'Développeur Web Full-stack & Hébergeur de Sites',
    'hero.description': "Je conçois et développe des expériences web modernes, intuitives et performantes avec une attention particulière aux détails et à l'expérience utilisateur.",
    'hero.cta.projects': 'Découvrir mes projets',
    'hero.cta.contact': 'Me contacter',
    
    // About
    'about.title': 'À PROPOS',
    'about.heading': 'La passion du développement web',
    'about.description': "Passionné par le code et les technologies web, je crée des solutions digitales qui allient esthétique et performance. Mon expertise couvre tant le développement frontend que backend, ainsi que l'hébergement de sites web pour des solutions complètes.",
    'about.frontend.title': 'Développement Frontend',
    'about.frontend.description': 'Je crée des interfaces utilisateur modernes, responsive et performantes avec HTML, CSS, React Js, Tailwind CSS, Bootstrap, jQuery, Ajax et JavaScript.',
    'about.backend.title': 'Développement Backend',
    'about.backend.description': "Je développe des API et services backend robustes avec Node.js, Express, PHP et d'autres technologies modernes.",
    'about.hosting.title': 'Hébergement Web',
    'about.hosting.description': "Je propose des solutions d'hébergement fiables et sécurisées pour assurer la disponibilité optimale de vos sites.",
    
    // Skills
    'skills.title': 'COMPÉTENCES',
    'skills.heading': 'Expertise technique',
    'skills.description': "Au fil des années, j'ai acquis et perfectionné un ensemble de compétences techniques qui me permettent de créer des solutions web complètes, de l'interface utilisateur jusqu'à l'hébergement.",
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.other': 'Autres compétences',
    
    // Projects
    'projects.title': 'PROJETS',
    'projects.heading': 'Mes réalisations récentes',
    'projects.description': 'Découvrez une sélection de mes projets qui démontrent mes compétences et mon expertise en développement web. Chaque projet reflète ma passion pour créer des expériences web de qualité.',
    'projects.filter.all': 'Tous',
    'projects.demo': 'Voir',
    'projects.code': 'Voir',
    
    // Contact
    'contact.title': 'CONTACT',
    'contact.heading': 'Discutons de votre projet',
    'contact.description': 'Vous avez un projet en tête ou des questions sur mes services ? N\'hésitez pas à me contacter. Je suis toujours ouvert à discuter de nouvelles opportunités.',
    'contact.form.title': 'Envoyez-moi un message',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais (moins de 24h)',
    'contact.social': 'Retrouvez-moi aussi sur',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    
    // Footer
    'footer.description': "Développeur web passionné, spécialisé en création d'applications web modernes et performantes.",
    'footer.navigation': 'Navigation',
    'footer.links': 'Liens',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.home': 'Home',
    
    // Hero
    'hero.subtitle': 'Web Developer & Website Hosting',
    'hero.description': 'I design and develop modern, intuitive, and high-performance web experiences with special attention to details and user experience.',
    'hero.cta.projects': 'Discover my projects',
    'hero.cta.contact': 'Contact me',
    
    // About
    'about.title': 'ABOUT',
    'about.heading': 'Passion for web development',
    'about.description': 'Passionate about code and web technologies, I create digital solutions that combine aesthetics and performance. My expertise covers both frontend and backend development, as well as web hosting for complete solutions.',
    'about.frontend.title': 'Frontend Development',
    'about.frontend.description': 'I create modern, responsive, and high-performance user interfaces with HTML, CSS, React Js, Tailwind CSS, Bootstrap, jQuery, Ajax and JavaScript.',
    'about.backend.title': 'Backend Development',
    'about.backend.description': 'I develop robust API and backend services with Node.js, Express, PHP and other modern technologies.',
    'about.hosting.title': 'Web Hosting',
    'about.hosting.description': 'I offer reliable and secure hosting solutions to ensure optimal availability of your sites.',
    
    // Skills
    'skills.title': 'SKILLS',
    'skills.heading': 'Technical expertise',
    'skills.description': 'Over the years, I have acquired and perfected a set of technical skills that allow me to create complete web solutions, from the user interface to hosting.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.other': 'Other skills',
    
    // Projects
    'projects.title': 'PROJECTS',
    'projects.heading': 'My recent achievements',
    'projects.description': 'Discover a selection of my projects that demonstrate my skills and expertise in web development. Each project reflects my passion for creating quality web experiences.',
    'projects.filter.all': 'All',
    'projects.demo': 'View',
    'projects.code': 'View',
    
    // Contact
    'contact.title': 'CONTACT',
    'contact.heading': 'Let\'s discuss your project',
    'contact.description': 'Do you have a project in mind or questions about my services? Don\'t hesitate to contact me. I\'m always open to discussing new opportunities.',
    'contact.form.title': 'Send me a message',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! I will reply as soon as possible (less 24hour)',
    'contact.social': 'Find me also on',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // Footer
    'footer.description': 'Passionate web developer, specialized in creating modern and high-performance web applications.',
    'footer.navigation': 'Navigation',
    'footer.links': 'Links',
    'footer.rights': 'All rights reserved.',
  }
};

// Création du contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Fournisseur du contexte
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  // Fonction de traduction
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

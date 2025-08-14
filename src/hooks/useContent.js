import { useTranslation } from 'react-i18next';

export const useContent = () => {
  const { t } = useTranslation();
  
  // Helper function to get nested translation objects
  const getTranslationObject = (key) => {
    try {
      return t(key, { returnObjects: true });
    } catch (error) {
      console.warn(`Translation key "${key}" not found`);
      return {};
    }
  };
  
  return {
    home: getTranslationObject('home'),
    about: getTranslationObject('about'),
    projects: getTranslationObject('projects'),
    skills: getTranslationObject('skills'),
    contact: getTranslationObject('contact'),
    navigation: getTranslationObject('navigation'),
    footer: getTranslationObject('footer'),
    // Helper functions
    getProjectById: (id) => {
      const projects = getTranslationObject('projects');
      return projects.find(p => p.id === id);
    },
    getSkills: () => {
      const about = getTranslationObject('about');
      return about.skills || [];
    }
  };
};
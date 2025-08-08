import { useState } from 'react';
import content from '../data/content.json';

export const useContent = () => {
  const [data] = useState(content);
  
  // You can add loading states, error handling, etc.
  // For now, we'll just return the static data
  
  return {
    home: data.home,
    about: data.about,
    projects: data.projects,
    contact: data.contact,
    // Helper functions
    getProjectById: (id) => data.projects.find(p => p.id === id),
    getSkills: () => data.about.skills
  };
};
import React, { useEffect, useState } from 'react';
import { Switch } from '@mui/material';

interface LanguageToggleProps {
  onLanguageToggle: (language: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ onLanguageToggle }) => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.checked ? 'ar' : 'en');
  };

  useEffect(() => {
    onLanguageToggle(language);
  }, [language]);

  return (
    <div>
      <Switch
        checked={language === 'ar'}
        onChange={handleLanguageChange}
      />
      <span>{language}</span>
    </div>
  );
};

export default LanguageToggle;

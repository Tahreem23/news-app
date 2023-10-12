import React, { useEffect } from 'react';
import { Switch } from '@mui/material';

const LanguageToggle = ({ onLanguageToggle }) => {
  const [language, setLanguage] = React.useState('en');

  const handleLanguageChange = (event: any) => {
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
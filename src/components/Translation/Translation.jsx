import React from 'react';
import { useTranslation } from 'react-i18next';

// Enhanced translation component with fallback and interpolation support
export const T = ({ 
  children, 
  values = {}, 
  fallback = null, 
  className = '',
  component = 'span',
  ...props 
}) => {
  const { t } = useTranslation();
  
  try {
    const translatedText = t(children, values);
    const Component = component;
    
    return (
      <Component className={className} {...props}>
        {translatedText !== children ? translatedText : (fallback || children)}
      </Component>
    );
  } catch (error) {
    console.warn(`Translation key "${children}" not found:`, error);
    return fallback || children;
  }
};

// Hook for getting translations with error handling
export const useT = () => {
  const { t, i18n } = useTranslation();
  
  const translate = (key, options = {}) => {
    try {
      return t(key, options);
    } catch (error) {
      console.warn(`Translation key "${key}" not found:`, error);
      return key;
    }
  };
  
  const translateWithFallback = (key, fallback = key, options = {}) => {
    try {
      const result = t(key, options);
      return result !== key ? result : fallback;
    } catch (error) {
      console.warn(`Translation key "${key}" not found:`, error);
      return fallback;
    }
  };
  
  return {
    t: translate,
    tf: translateWithFallback,
    i18n,
    currentLanguage: i18n.language,
    changeLanguage: i18n.changeLanguage
  };
};

// Translation wrapper for common UI elements
export const TranslatedButton = ({ 
  textKey, 
  values = {}, 
  children, 
  ...props 
}) => {
  const { t } = useT();
  
  return (
    <button {...props}>
      {textKey ? t(textKey, values) : children}
    </button>
  );
};

export const TranslatedHeading = ({ 
  level = 1, 
  textKey, 
  values = {}, 
  children, 
  className = '',
  ...props 
}) => {
  const { t } = useT();
  const HeadingTag = `h${level}`;
  
  return React.createElement(
    HeadingTag,
    { className, ...props },
    textKey ? t(textKey, values) : children
  );
};

export const TranslatedText = ({ 
  textKey, 
  values = {}, 
  children, 
  className = '',
  component = 'p',
  ...props 
}) => {
  const { t } = useT();
  const Component = component;
  
  return (
    <Component className={className} {...props}>
      {textKey ? t(textKey, values) : children}
    </Component>
  );
};

// Export default as T component
export default T;

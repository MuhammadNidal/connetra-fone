import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';

const DarkModeToggle = ({ isMobile = false }) => {
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();

  if (isMobile) {
    return (
      <button
        onClick={toggleTheme}
        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          {isDarkMode ? (
            <FaSun className="text-lg text-yellow-500" />
          ) : (
            <FaMoon className="text-lg text-gray-600 dark:text-gray-400" />
          )}
          <span className="text-sm font-medium">
            {isDarkMode ? t('navbar.lightMode') : t('navbar.darkMode')}
          </span>
        </div>
        <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
          isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
        }`}>
          <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
            isDarkMode ? 'translate-x-6' : 'translate-x-0'
          }`} />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
      title={isDarkMode ? t('navbar.lightMode') : t('navbar.darkMode')}
    >
      <div className="relative">
        {isDarkMode ? (
          <FaSun className="text-lg text-yellow-500 animate-pulse" />
        ) : (
          <FaMoon className="text-lg" />
        )}
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {isDarkMode ? t('navbar.lightMode') : t('navbar.darkMode')}
        </div>
      </div>
    </button>
  );
};

export default DarkModeToggle;

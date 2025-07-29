import { useTheme } from '../contexts/ThemeContext';
import { getThemeClasses, generateCSSVariables } from '../config/theme';

export const useThemeUtils = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  const themeClasses = getThemeClasses(isDarkMode);
  const cssVariables = generateCSSVariables(isDarkMode);
  
  // Helper function to get conditional classes based on theme
  const getConditionalClass = (lightClass, darkClass) => {
    return isDarkMode ? darkClass : lightClass;
  };
  
  // Helper function to get theme-aware gradient
  const getGradient = (type = 'primary') => {
    const gradients = {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600',
      secondary: 'bg-gradient-to-r from-pink-500 to-rose-500',
      success: 'bg-gradient-to-r from-green-500 to-emerald-500',
      warning: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      error: 'bg-gradient-to-r from-red-500 to-pink-500'
    };
    return gradients[type] || gradients.primary;
  };
  
  // Helper function to get card styles
  const getCardStyle = (elevated = false) => {
    const baseClass = `${themeClasses.bgCard} rounded-xl transition-all duration-300`;
    const shadowClass = elevated 
      ? (isDarkMode ? 'shadow-2xl shadow-black/20' : 'shadow-2xl')
      : (isDarkMode ? 'shadow-lg shadow-black/10' : 'shadow-lg');
    
    return `${baseClass} ${shadowClass}`;
  };
  
  // Helper function to get button styles
  const getButtonStyle = (variant = 'primary', size = 'md') => {
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    };
    
    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg',
      secondary: `${themeClasses.btnSecondary}`,
      danger: `${themeClasses.btnDanger}`,
      success: `${themeClasses.btnSuccess}`,
      ghost: `${getConditionalClass('text-gray-700 hover:bg-gray-100', 'text-gray-300 hover:bg-gray-700')}`,
      outline: `border-2 ${getConditionalClass('border-gray-300 text-gray-700 hover:bg-gray-50', 'border-gray-600 text-gray-300 hover:bg-gray-800')}`
    };
    
    return `${variants[variant]} ${sizes[size]} font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center`;
  };
  
  // Helper function to get input styles
  const getInputStyle = (hasError = false) => {
    const baseClass = `w-full px-3 py-2 ${themeClasses.bgInput} ${themeClasses.textPrimary} rounded-lg transition-all duration-200`;
    const borderClass = hasError 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
      : `${themeClasses.borderInput} ${themeClasses.focusBorder}`;
    
    return `${baseClass} border ${borderClass}`;
  };
  
  return {
    isDarkMode,
    toggleTheme,
    themeClasses,
    cssVariables,
    getConditionalClass,
    getGradient,
    getCardStyle,
    getButtonStyle,
    getInputStyle
  };
};

export default useThemeUtils;

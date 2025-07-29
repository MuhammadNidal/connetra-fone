// Global theme configuration
export const themeConfig = {
  // Color palette
  colors: {
    // Primary colors
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    
    // Secondary colors
    secondary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      950: '#500724'
    },
    
    // Success colors
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16'
    },
    
    // Warning colors
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03'
    },
    
    // Error colors
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a'
    },
    
    // Neutral colors (Gray scale)
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    }
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    success: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
    warning: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    error: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
    dark: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    light: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'Monaco', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
      '9xl': '8rem'     // 128px
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    }
  },
  
  // Spacing
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    2.5: '0.625rem',  // 10px
    3: '0.75rem',     // 12px
    3.5: '0.875rem',  // 14px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    7: '1.75rem',     // 28px
    8: '2rem',        // 32px
    9: '2.25rem',     // 36px
    10: '2.5rem',     // 40px
    11: '2.75rem',    // 44px
    12: '3rem',       // 48px
    14: '3.5rem',     // 56px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    28: '7rem',       // 112px
    32: '8rem',       // 128px
    36: '9rem',       // 144px
    40: '10rem',      // 160px
    44: '11rem',      // 176px
    48: '12rem',      // 192px
    52: '13rem',      // 208px
    56: '14rem',      // 224px
    60: '15rem',      // 240px
    64: '16rem',      // 256px
    72: '18rem',      // 288px
    80: '20rem',      // 320px
    96: '24rem'       // 384px
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px'
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
    // Dark mode shadows
    dark: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
    }
  },
  
  // Animations & Transitions
  animations: {
    duration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    timing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out'
    }
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  // Dark mode specific settings
  darkMode: {
    backgroundColor: '#0f172a',
    cardBackground: '#1e293b',
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    borderColor: '#374151'
  },
  
  // Light mode specific settings
  lightMode: {
    backgroundColor: '#f8fafc',
    cardBackground: '#ffffff',
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    borderColor: '#e2e8f0'
  }
};

// CSS Custom Properties Generator
export const generateCSSVariables = (isDarkMode = false) => {
  const mode = isDarkMode ? themeConfig.darkMode : themeConfig.lightMode;
  
  return {
    '--bg-primary': mode.backgroundColor,
    '--bg-card': mode.cardBackground,
    '--text-primary': mode.textPrimary,
    '--text-secondary': mode.textSecondary,
    '--border-color': mode.borderColor,
    '--primary-50': themeConfig.colors.primary[50],
    '--primary-500': themeConfig.colors.primary[500],
    '--primary-600': themeConfig.colors.primary[600],
    '--secondary-500': themeConfig.colors.secondary[500],
    '--success-500': themeConfig.colors.success[500],
    '--warning-500': themeConfig.colors.warning[500],
    '--error-500': themeConfig.colors.error[500],
    '--gradient-primary': themeConfig.gradients.primary,
    '--gradient-secondary': themeConfig.gradients.secondary,
    '--transition-normal': `${themeConfig.animations.duration[300]} ${themeConfig.animations.timing.ease}`,
    '--border-radius': themeConfig.borderRadius.DEFAULT,
    '--shadow': isDarkMode ? themeConfig.shadows.dark.DEFAULT : themeConfig.shadows.DEFAULT
  };
};

// Utility function to get theme-aware classes
export const getThemeClasses = (isDarkMode = false) => ({
  // Background classes
  bgPrimary: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
  bgCard: isDarkMode ? 'bg-gray-800' : 'bg-white',
  bgInput: isDarkMode ? 'bg-gray-700' : 'bg-white',
  
  // Text classes
  textPrimary: isDarkMode ? 'text-white' : 'text-gray-900',
  textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
  textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
  
  // Border classes
  border: isDarkMode ? 'border-gray-600' : 'border-gray-200',
  borderInput: isDarkMode ? 'border-gray-600' : 'border-gray-300',
  
  // Hover states
  hoverBg: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
  hoverText: isDarkMode ? 'hover:text-white' : 'hover:text-gray-900',
  
  // Focus states
  focusBorder: 'focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
  
  // Button variants
  btnPrimary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300',
  btnSecondary: isDarkMode 
    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
    : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  btnDanger: 'bg-red-500 text-white hover:bg-red-600',
  btnSuccess: 'bg-green-500 text-white hover:bg-green-600'
});

export default themeConfig;

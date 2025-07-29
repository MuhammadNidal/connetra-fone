import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, resolve } from 'path';

// Component directories to update
const componentDirs = [
  'src/components',
  'src/pages',
];

// Dark mode class mappings
const darkModeClasses = {
  'bg-white': 'bg-white dark:bg-gray-800',
  'bg-gray-50': 'bg-gray-50 dark:bg-gray-900',
  'bg-gray-100': 'bg-gray-100 dark:bg-gray-800',
  'bg-gray-200': 'bg-gray-200 dark:bg-gray-700',
  'text-black': 'text-black dark:text-white',
  'text-gray-900': 'text-gray-900 dark:text-gray-100',
  'text-gray-800': 'text-gray-800 dark:text-gray-200',
  'text-gray-700': 'text-gray-700 dark:text-gray-300',
  'text-gray-600': 'text-gray-600 dark:text-gray-400',
  'text-gray-500': 'text-gray-500 dark:text-gray-500',
  'border-gray-200': 'border-gray-200 dark:border-gray-700',
  'border-gray-300': 'border-gray-300 dark:border-gray-600',
  'shadow-md': 'shadow-md dark:shadow-xl dark:shadow-gray-900/20',
  'shadow-lg': 'shadow-lg dark:shadow-2xl dark:shadow-gray-900/30',
  'hover:bg-gray-100': 'hover:bg-gray-100 dark:hover:bg-gray-700',
  'hover:bg-gray-200': 'hover:bg-gray-200 dark:hover:bg-gray-600',
};

// Common imports to add
const requiredImports = {
  translation: "import { useTranslation } from 'react-i18next';",
  theme: "import { useTheme } from '../../contexts/ThemeContext';",
  language: "import { useLanguage } from '../../contexts/LanguageContext';",
};

// Function to process a file
function processFile(filePath) {
  try {
    let content = readFileSync(filePath, 'utf8');
    let modified = false;

    // Skip if already has translation import
    if (content.includes("useTranslation")) {
      console.log(`Skipping ${filePath} - already has translations`);
      return;
    }

    // Add imports if they don't exist
    if (!content.includes("useTranslation")) {
      // Find the last import statement
      const lastImportIndex = content.lastIndexOf('import');
      if (lastImportIndex !== -1) {
        const nextLineIndex = content.indexOf('\n', lastImportIndex);
        const beforeImports = content.substring(0, nextLineIndex);
        const afterImports = content.substring(nextLineIndex);
        
        content = beforeImports + '\n' + requiredImports.translation + '\n' + requiredImports.theme + afterImports;
        modified = true;
      }
    }

    // Add hooks to component function
    if (!content.includes("const { t } = useTranslation();")) {
      // Find component function
      const componentMatch = content.match(/const\s+(\w+)\s*=\s*\(\s*[^)]*\s*\)\s*=>\s*{/);
      if (componentMatch) {
        const functionStart = componentMatch.index + componentMatch[0].length;
        const beforeFunction = content.substring(0, functionStart);
        const afterFunction = content.substring(functionStart);
        
        content = beforeFunction + '\n  const { t } = useTranslation();\n  const { isDarkMode } = useTheme();\n' + afterFunction;
        modified = true;
      }
    }

    // Apply dark mode classes
    Object.entries(darkModeClasses).forEach(([original, replacement]) => {
      const regex = new RegExp(`className="([^"]*\\s+)?${original.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}(\\s+[^"]*)?"`);
      if (content.match(regex) && !content.includes(replacement)) {
        content = content.replace(regex, (match) => {
          return match.replace(original, replacement);
        });
        modified = true;
      }
    });

    if (modified) {
      writeFileSync(filePath, content);
      console.log(`✅ Updated: ${filePath}`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Function to walk through directories
function walkDir(dir) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      processFile(filePath);
    }
  });
}

// Main execution
console.log('🚀 Starting component update process...\n');

componentDirs.forEach(dir => {
  const fullPath = resolve(dir);
  if (existsSync(fullPath)) {
    console.log(`📁 Processing directory: ${dir}`);
    walkDir(fullPath);
  } else {
    console.log(`⚠️  Directory not found: ${dir}`);
  }
});

console.log('\n✨ Component update process completed!');
console.log('\n📝 Next steps:');
console.log('1. Review the updated files for any manual adjustments needed');
console.log('2. Add specific translation keys for each component');
console.log('3. Test the application in both light and dark modes');
console.log('4. Test language switching functionality');

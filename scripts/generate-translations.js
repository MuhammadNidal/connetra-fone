const fs = require('fs');
const path = require('path');

// Translation keys for different page types
const pageTranslations = {
  home: {
    title: "Welcome to Connectra eSim",
    subtitle: "Your gateway to global connectivity",
    features: {
      instant: "Instant Activation",
      global: "Global Coverage", 
      affordable: "Affordable Plans",
      support: "24/7 Support"
    }
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Simple steps to get connected worldwide",
    steps: {
      step1: "Choose Your Destination",
      step2: "Select a Plan", 
      step3: "Download eSIM",
      step4: "Stay Connected"
    }
  },
  coverage: {
    title: "Global Coverage",
    subtitle: "Available in 200+ countries and regions"
  },
  help: {
    title: "Help Center",
    subtitle: "Find answers to your questions",
    search: "Search for help...",
    categories: "Categories",
    popular: "Popular Articles"
  },
  blog: {
    title: "Travel Blog",
    subtitle: "Tips, guides, and travel stories",
    readMore: "Read More",
    category: "Category",
    publishedOn: "Published on"
  },
  about: {
    title: "About Us",
    subtitle: "Your trusted partner in global connectivity",
    mission: "Our Mission",
    vision: "Our Vision",
    values: "Our Values"
  },
  careers: {
    title: "Careers",
    subtitle: "Join our growing team",
    openPositions: "Open Positions",
    applyNow: "Apply Now"
  },
  referral: {
    title: "Refer a Friend",
    subtitle: "Share the connectivity and earn rewards",
    howItWorks: "How Referral Works",
    earnRewards: "Earn Rewards"
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Find quick answers to common questions",
    searchFAQ: "Search FAQs...",
    categories: "FAQ Categories"
  },
  terms: {
    title: "Terms of Service",
    subtitle: "Please read our terms and conditions",
    lastUpdated: "Last updated",
    acceptance: "Acceptance of Terms"
  },
  privacy: {
    title: "Privacy Policy", 
    subtitle: "How we protect your privacy",
    dataCollection: "Data Collection",
    dataUsage: "Data Usage"
  },
  compatiblePhones: {
    title: "eSIM Compatible Devices",
    subtitle: "Check if your device supports eSIM",
    searchDevice: "Search your device...",
    supported: "Supported",
    notSupported: "Not Supported"
  }
};

// Function to generate translation content for a component
function generateTranslations(componentName, pageType = 'default') {
  const baseTranslations = pageTranslations[pageType] || {};
  
  return {
    en: {
      [componentName]: {
        title: baseTranslations.title || `${componentName} Page`,
        subtitle: baseTranslations.subtitle || `Welcome to ${componentName}`,
        loading: "Loading...",
        error: "Something went wrong",
        retry: "Try Again",
        ...baseTranslations
      }
    },
    ur: {
      [componentName]: {
        title: baseTranslations.title ? translateToUrdu(baseTranslations.title) : `${componentName} صفحہ`,
        subtitle: baseTranslations.subtitle ? translateToUrdu(baseTranslations.subtitle) : `${componentName} میں خوش آمدید`,
        loading: "لوڈ ہو رہا ہے...",
        error: "کچھ غلط ہوگیا",
        retry: "دوبارہ کوشش کریں",
        ...translateObjectToUrdu(baseTranslations)
      }
    }
  };
}

// Simple Urdu translations (you can expand this)
function translateToUrdu(text) {
  const translations = {
    "Welcome to Connectra eSim": "Connectra eSim میں خوش آمدید",
    "Your gateway to global connectivity": "عالمی رابطے کا آپ کا دروازہ",
    "How It Works": "یہ کیسے کام کرتا ہے",
    "Simple steps to get connected worldwide": "دنیا بھر میں جڑنے کے آسان اقدامات",
    "Global Coverage": "عالمی کوریج",
    "Available in 200+ countries and regions": "200+ ممالک اور علاقوں میں دستیاب",
    "Help Center": "مدد مرکز",
    "Find answers to your questions": "اپنے سوالوں کے جوابات تلاش کریں",
    "Travel Blog": "سفری بلاگ",
    "Tips, guides, and travel stories": "تجاویز، گائیڈز، اور سفری کہانیاں",
  };
  
  return translations[text] || text;
}

function translateObjectToUrdu(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      result[key] = translateToUrdu(value);
    } else if (typeof value === 'object') {
      result[key] = translateObjectToUrdu(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

// Function to update translation files
function updateTranslationFiles(componentName, pageType) {
  const translations = generateTranslations(componentName, pageType);
  
  ['en', 'ur'].forEach(lang => {
    const filePath = path.resolve(`src/i18n/locales/${lang}.json`);
    
    try {
      const existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const newContent = {
        ...existingContent,
        ...translations[lang]
      };
      
      fs.writeFileSync(filePath, JSON.stringify(newContent, null, 2));
      console.log(`✅ Updated ${lang}.json with ${componentName} translations`);
    } catch (error) {
      console.error(`❌ Error updating ${lang}.json:`, error.message);
    }
  });
}

// Function to identify page type from file path
function identifyPageType(filePath) {
  const fileName = path.basename(filePath, '.jsx').toLowerCase();
  const dirName = path.basename(path.dirname(filePath)).toLowerCase();
  
  // Map file/directory names to page types
  const pageTypeMap = {
    'home': 'home',
    'howitwork': 'howItWorks',
    'coverage': 'coverage', 
    'help': 'help',
    'blog': 'blog',
    'aboutus': 'about',
    'career': 'careers',
    'referral': 'referral',
    'faq': 'faq',
    'faqs': 'faq',
    'terms': 'terms',
    'termsofservices': 'terms',
    'privacy': 'privacy',
    'compatiblephone': 'compatiblePhones',
    'esimcompatiblephone': 'compatiblePhones'
  };
  
  return pageTypeMap[fileName] || pageTypeMap[dirName] || 'default';
}

// Function to scan components and generate translations
function scanAndGenerateTranslations() {
  const componentDirs = ['src/pages', 'src/components'];
  
  componentDirs.forEach(dir => {
    const fullPath = path.resolve(dir);
    if (!fs.existsSync(fullPath)) return;
    
    function walkDir(currentDir) {
      const files = fs.readdirSync(currentDir);
      
      files.forEach(file => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (file.endsWith('.jsx') && !file.includes('.test.')) {
          const componentName = path.basename(file, '.jsx').toLowerCase();
          const pageType = identifyPageType(filePath);
          
          console.log(`📄 Processing: ${componentName} (type: ${pageType})`);
          updateTranslationFiles(componentName, pageType);
        }
      });
    }
    
    walkDir(fullPath);
  });
}

// Main execution
console.log('🌐 Starting translation generation process...\n');
scanAndGenerateTranslations();
console.log('\n✨ Translation generation completed!');
console.log('\n📝 Next steps:');
console.log('1. Review generated translations for accuracy');
console.log('2. Add missing Urdu translations manually');
console.log('3. Test language switching in the application');
console.log('4. Add translations for other languages (Arabic, French, etc.)');

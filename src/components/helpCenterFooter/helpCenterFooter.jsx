import React from "react";

import { div } from "three/tsl";  
import { FaHeart } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
const HelpCenterFooter = () => {
    const { t } = useTranslation();
  return (
    <div className="main">
      <div className="space">
<hr />
</div>
    <footer className="helpCenterFooter flex items-center justify-center px-6 py-4  dark:bg-gray-800 text-gray-700 dark:text-gray-300">
   <span>{t('footer.copyright')}</span>
    <FaHeart className="mx-2 text-red-500 animate-pulse" />
    <span>
      {t('footer.madeBy')} <a href="https://itechtrack.com/" className="text-blue-500 dark:text-blue-400 hover:underline">{t('footer.techTrack')}</a>
    </span>
    </footer>
    </div>
  );
};

export default HelpCenterFooter;

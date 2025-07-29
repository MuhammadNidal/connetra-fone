import { Routes, Route } from 'react-router-dom';
import HelpCenter from '../HelpCenter/HelpCenter';
import SubmitRequest from "../../components/submitRequest/submitRequest";
import EsimCompatiblePhones from '../../components/EsimCompatiblePhones/EsimCompatiblePhones';
import EsimHelp from '../../components/EsimHelp/EsimHelp';
import Account from '../../components/Account/Account'
import Faqs from '../FAQs/FAQs'

const HelpCenterMain = () => {
  return (
    
    <Routes>
      <Route path="/helpcenter" element={<HelpCenter />} />
      <Route path="/helpcenter/faqs" element={<Faqs />} />
      <Route path="/helpcenter/submit-request" element={<SubmitRequest/>} />
      <Route path="/helpcenter/compatible-phones" element={<EsimCompatiblePhones />} />
      <Route path="/helpcenter/Esim-Help" element={<EsimHelp />} />
      <Route path="/helpcenter/Account" element={<Account/>} />
      
    </Routes>
  );
};

export default HelpCenterMain;

import { useLocation } from 'react-router-dom';
import PricingCards from '../../components/europePlanPricing/europePlanPricing';

const AllPlans = () => {
  const location = useLocation();
  const { plans = [], title = {}, features = [],  } = location.state || {};

  return (
    <div className="all-plans-container">
      <PricingCards 
        title={title} 
        features={features} 
        plans={plans} 
        // paymentMethods={paymentMethods}
        showAll={true}
      />
    </div>
  );
};

export default AllPlans;
import { useState } from 'react';

const ReferralProgram = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="max-w-4xl mt-28 mx-auto my-10 px-5 font-sans text-gray-800">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-8 rounded-xl text-center text-white shadow-lg mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">🎁 ConnectraeSIM Referral Program</h1>
        <p className="text-lg">
          Share the joy. Earn rewards. Give your friends&nbsp;
          <strong>CAD $5 off</strong>&nbsp;— get&nbsp;
          <strong>CAD $5 credit</strong>&nbsp;in return!
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div 
          className={`bg-white rounded-xl p-6 shadow-md transition-all cursor-pointer ${activeIndex === 0 ? 'transform -translate-y-1' : ''}`}
          onClick={() => toggle(0)}
        >
          <div className="text-xl font-semibold text-blue-600">1️⃣ Entry / Eligibility</div>
          <div className={`mt-4 text-gray-700 overflow-hidden transition-all ${activeIndex === 0 ? 'max-h-96' : 'max-h-0'}`}>
            <p>To participate, simply create or log into your ConnectraeSIM account.</p>
          </div>
        </div>

        <div 
          className={`bg-white rounded-xl p-6 shadow-md transition-all cursor-pointer ${activeIndex === 1 ? 'transform -translate-y-1' : ''}`}
          onClick={() => toggle(1)}
        >
          <div className="text-xl font-semibold text-blue-600">🔗 2. Referral Procedure</div>
          <div className={`mt-4 text-gray-700 overflow-hidden transition-all ${activeIndex === 1 ? 'max-h-96' : 'max-h-0'}`}>
            <ul className="space-y-2 pl-0">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                Get your unique referral code from your dashboard.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                Share it with friends via text, email, or social media.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                Your friend signs up and makes a first purchase using the code.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                You receive a <strong>CAD $5 reward</strong> via email. 🎉
              </li>
            </ul>
          </div>
        </div>

        <div 
          className={`bg-white rounded-xl p-6 shadow-md transition-all cursor-pointer ${activeIndex === 2 ? 'transform -translate-y-1' : ''}`}
          onClick={() => toggle(2)}
        >
          <div className="text-xl font-semibold text-blue-600">💸 3. Referred Friend Discount</div>
          <div className={`mt-4 text-gray-700 overflow-hidden transition-all ${activeIndex === 2 ? 'max-h-96' : 'max-h-0'}`}>
            <ul className="space-y-2 pl-0">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                Must be a new user.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                Apply the referral code at sign-up or checkout.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                Only valid for the first eSIM purchase.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                Cannot be combined with other offers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded-lg mt-8 font-medium shadow-sm">
        <p><strong>Ready to earn?</strong> Share your code now and help your friends save while you earn rewards!</p>
      </div>
    </div>
  );
};

export default ReferralProgram;
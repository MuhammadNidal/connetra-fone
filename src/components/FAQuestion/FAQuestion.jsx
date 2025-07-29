// // File: FAQ.js

// import React from "react";
// import "./FAQuestion.css"; // Updated CSS styling

// const FAQuestion = () => {
//   const faqsLeft = [
//     "What is the difference between Europe Prepaid and Unlimited eSIMs?",
//     "Do you store or share my data?",
//     "Can I top up with more data in Europe?",
//     "Can I combine coverage in multiple countries?",
//     "Do you have long-term Europe eSIM plans available?",
//     "What is the return policy?",
//   ];

//   const faqsRight = [
//     "Are there any restrictions on Europe Unlimited eSIM plans?",
//     "Is Wi-Fi Hotspot included to share internet?",
//     "Are there any extra fees or charges?",
//     "Can I keep my regular phone number?",
//     "Is my phone compatible with Maya Mobile eSIM plans?",
//     "Does the Europe eSIM include a local phone number?",
//   ];

//   return (
//     <div className="faq-section">
//       <h2 className="faq-heading">
//         Frequently Asked <span>Questions</span>
//       </h2>
//       <div className="faq-columns">
//         <div className="faq-column">
//           {faqsLeft.map((faq, index) => (
//             <div className="faq-item" key={index}>
//               <p className="faq-question">{faq}</p>
//               <span className="faq-icon">+</span>
//             </div>
//           ))}
//         </div>
//         <div className="faq-column">
//           {faqsRight.map((faq, index) => (
//             <div className="faq-item" key={index}>
//               <p className="faq-question">{faq}</p>
//               <span className="faq-icon">+</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="faq-footer">
//       <a href="#more-faqs" className="faq-footer-link">
//   See answers to more <span>FAQs <span className="faq-icon"> &gt; </span></span>
// </a>

//       </div>
//     </div>
//   );
// };

// export default FAQuestion;
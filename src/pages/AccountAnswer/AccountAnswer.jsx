// import { useParams, Link } from "react-router-dom";
// import accountContent from "../../assets/data/accountContent.json";
// import "./AccountAnswer.css";
// import logo from "../../assets/logo.png";
// import { useState, useEffect } from "react";

// const AccountAnswer = () => {
//   const { id } = useParams();
//   const [isMobile, setIsMobile] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const question = accountContent.find((item) => item.id === id);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (!question) {
//     return <div>Question not found!</div>;
//   }

//   return (
//     <div className="account-answer-container">
//       {/* Sidebar or Dropdown */}
//       {isMobile ? (
//         <div className="mobile-dropdown">
//           <button className="answer-dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
//             {question.question} ▾
//           </button>
          
//           {dropdownOpen && (
//             <ul className="account-dropdown-menu">
//               {accountContent.map((item) => (
//                 <li key={item.id}>
//                   <Link
//                     to={`/answer/${item.id}`}
//                     className={`sidebar-link ${item.id === id ? "active" : ""}`}
//                     onClick={() => setDropdownOpen(false)}
//                   >
//                     {item.question}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ) : (
//         <aside className="sidebar">
//           <h4 className="sidebar-title">Related Questions</h4>
//           <ul className="sidebar-list">
//             {accountContent.map((item) => (
//               <li key={item.id}>
//                 <Link
//                   to={`/answer/${item.id}`}
//                   className={`sidebar-link ${item.id === id ? "active" : ""}`}
//                 >
//                   {item.question}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </aside>
//       )}

//       {/* Main Answer Content */}
//       <div className="answer-content">
//         <h3>{question.question}</h3>
//         <div className="author" style={{alignItems:'center'}}>
//                       <img src={logo} alt="Connectra eSim Logo" className="author-logo" />
//                       <h3>Connectra eSIM Support Team</h3>
                     
//                       {/* <button className="follow-btn">Follow</button> */}
//                     </div>
//         {question.answer.map((content, index) => (
//           <div key={index}>
//             {content.type === "paragraph" && <p>{content.text}</p>}
//             {content.type === "heading" && <h4>{content.text}</h4>}
//             {content.type === "list" && (
//               <ul>
//                 {content.items.map((listItem, idx) => (
//                   <li key={idx} style={{color:"gray"}}>{listItem}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AccountAnswer;
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import accountContent from "../../assets/data/accountContent.json";
import logo from "../../assets/logo.png";
import "./AccountAnswer.css";

const AccountAnswer = () => {
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const question = accountContent.find((item) => item.id === id);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!question) return <div>Question not found!</div>;

  const renderTextWithLinks = (text, color = "inherit") => {
    const parts = text.split(/(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    return parts.map((part, idx) => {
      if (part.match(/^https?:\/\//)) {
        return (
          <a key={idx} href={part} target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF" }}>
            {part}
          </a>
        );
      } else if (part.match(/^[a-zA-Z0-9._%+-]+@/)) {
        return (
          <a key={idx} href={`mailto:${part}`} style={{ color: "#007BFF" }}>
            {part}
          </a>
        );
      }
      return <span key={idx} style={{ color }}>{part}</span>;
    });
  };

  return (
    <div className="account-answer-container">
      {/* Sidebar or Dropdown */}
      {isMobile ? (
        <div className="mobile-dropdown">
          <button className="answer-dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {question.question} ▾
          </button>
          {dropdownOpen && (
            <ul className="account-dropdown-menu">
              {accountContent.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/answer/${item.id}`}
                    className={`sidebar-link ${item.id === id ? "active" : ""}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.question}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <aside className="sidebar">
          <h4 className="sidebar-title">Related Questions</h4>
          <ul className="sidebar-list">
            {accountContent.map((item) => (
              <li key={item.id}>
                <Link to={`/answer/${item.id}`} className={`sidebar-link ${item.id === id ? "active" : ""}`}>
                  {item.question}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      {/* Main Answer Content */}
      <div className="answer-content">
        <h3>{question.question}</h3>
        <div className="author" style={{display:'flex',alignItems:'center'}}>
          <img src={logo} alt="Connectra eSim Logo" className="author-logo" />
          <h5 style={{color:'darkgray'}}>Connectra eSIM Support Team</h5>
        </div>

        {question.answer.map((content, index) => {
          const textColor = content.color || "inherit";

          if (content.type === "paragraph") {
            return <p key={index}>{renderTextWithLinks(content.text, textColor)}</p>;
          }

          if (content.type === "heading") {
            return <h4 key={index} style={{ color: textColor }}>{renderTextWithLinks(content.text, textColor)}</h4>;
          }

          if (content.type === "list") {
            return (
              <ul key={index}>
                {content.items.map((item, idx) => {
                  const itemText = typeof item === "string" ? item : item.text;
                  const itemColor = typeof item === "string" ? "gray" : item.color || "gray";
                  return <li key={idx}>{renderTextWithLinks(itemText, itemColor)}</li>;
                })}
              </ul>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default AccountAnswer;


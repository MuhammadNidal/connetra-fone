import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import parse from "html-react-parser"; // Import html-react-parser
import logo from "../../assets/logo.png";
import HelpContent from "../../assets/data/HelpContent.json";

const HelpContentAnswer = () => {
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const question = HelpContent.find((item) => item.id === id);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!question) return <div>Question not found!</div>;

  const renderTextWithLinks = (text, color = "inherit") => {
    const parts = text.split(
      /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/
    );
  return parts.map((part, idx) => {
  if (part.match(/^https?:\/\//)) {
    return (
      <a
        key={idx}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#007BFF" }}
      >
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

return (
  <span key={idx} style={{ color }}>
    {parse(part.replace(/\n/g, "<br />"), {
      replace: (domNode) => {
        if (domNode.name === "strong") {
          domNode.attribs = {
            ...domNode.attribs,
            style: "color: rgb(80, 79, 79); font-weight: bold;",
          };
        }

        // Custom color tags like <red> and <blue>
        if (domNode.name === "red") {
          return <span style={{ color: "red",fontWeight: "bold"  }}>{domNode.children[0]?.data}</span>;
        }

        if (domNode.name === "blue") {
          return <span style={{ color: "#3498db" }}>{domNode.children[0]?.data}</span>;
        }

        // Add more color tags as needed
      },
    })}
  </span>
);

});

  };

  return (
    <div className="account-answer-container">
      {/* Sidebar or Dropdown */}
      {isMobile ? (
        <div className="mobile-dropdown">
          <button
            className="answer-dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {question.question} ▾
          </button>
          {dropdownOpen && (
            <ul className="account-dropdown-menu">
              {HelpContent.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/help-answer/${item.id}`}
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
            {HelpContent.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/help-answer/${item.id}`}
                  className={`sidebar-link ${item.id === id ? "active" : ""}`}
                >
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
        <div className="author" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Connectra eSim Logo" className="author-logo" />
          <h5 style={{ color: "darkgray" }}>Connectra eSIM Support Team</h5>
        </div>

        {question.answer.sections.map((content, index) => {
          const textColor = content.color || "inherit";

          if (content.type === "paragraph") {
            return <p key={index}>{renderTextWithLinks(content.text, textColor)}</p>;
          }

          if (content.type === "heading") {
            return (
              <h4 key={index} style={{ color: textColor }}>
                {renderTextWithLinks(content.text, textColor)}
              </h4>
            );
          }
if (content.type === "list") {
  return (
    <ol key={index} style={{ paddingLeft: "20px", listStyleType: "decimal" }}>
      {content.items.map((item, idx) => {
        const isString = typeof item === "string";
        const itemText = isString ? item : item.text;
        const itemColor = isString ? "gray" : item.color || "gray";
        const hasSublist = !isString && Array.isArray(item.subitems);

        return (
          <li key={idx} style={{ marginBottom: "6px" }}>
            {renderTextWithLinks(itemText, itemColor)}

            {hasSublist && (
              <ul style={{ marginTop: 4, marginLeft: 20 }}>
                {item.subitems.map((subItem, subIdx) => (
                  <li key={subIdx} style={{ marginBottom: "4px" }}>
                    {renderTextWithLinks(subItem, item.color || "gray")}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}


    if (content.type === "images") {
  return (
    <div
      key={index}
      className="faq-images"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "1rem"
      }}
    >
      {content.images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Step ${i + 1}`}
          className="faq-image"
          style={{ maxWidth: "30%" }}
        />
      ))}
    </div>
  );
}

          return null;
        })}
      </div>
    </div>
  );
};

export default HelpContentAnswer;
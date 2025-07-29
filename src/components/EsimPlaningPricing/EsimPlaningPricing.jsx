import "./EsimPlaningPricing.css";
import React from "react";

const EsimPlaningPricing = ({
  title,
  description,
  heading,
  plans = [],
  backgroundColor,
  backgroundImage,
  features = [],
}) => {
  return (
    <div
      className="headerSection"
      style={{
        backgroundColor: backgroundImage ? "transparent" : backgroundColor,
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
          : "none",
      }}
    >
      <div className="headerSection-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>{heading}</h4>
        <div className="headerSection-features">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <i className={feature.icon}></i> {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cards Section */}
      <div className="headerSection-cards">
        {plans.map((plan, index) => (
          <div className="headerSection-card" key={index}>
            <div className="card-header">
              <h3 className="plan-size">{plan.size}</h3>
              <p className="plan-tag">{plan.tag}</p>
            </div>
            <div className="card-body">
              <h4 className="plan-price">
                {plan.price} <span>{plan.perGB}</span>
              </h4>
              <p className="coverage">{plan.coverage}</p>
              <button className="buy-now-btn">Buy Now</button>
              <p className="card-description">{plan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EsimPlaningPricing;
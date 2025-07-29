import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Card = ({ 
  icon, 
  title, 
  description, 
  linkText, 
  link, 
  bgColor = "white", 
  align = "center", 
  hoverEffect = true, 
  size = "medium",
  shadow = true,
  variant = "default",
  className = "",
  onClick
}) => {
  const baseClasses = "rounded-xl transition-all duration-300 ease-in-out";
  
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8"
  };

  const variantClasses = {
    default: "bg-white border border-gray-200",
    gradient: "bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-0",
    glass: "bg-white/80 backdrop-blur-sm border border-white/20",
    outline: "border-2 border-primary-200 bg-transparent",
  };

  const hoverClasses = hoverEffect 
    ? "hover:shadow-lg hover:scale-105 hover:-translate-y-1" 
    : "";

  const shadowClasses = shadow 
    ? "shadow-sm" 
    : "";

  const classes = `
    ${baseClasses} 
    ${alignClasses[align]} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${hoverClasses} 
    ${shadowClasses} 
    ${className}
    ${onClick ? 'cursor-pointer' : ''}
  `.trim().replace(/\s+/g, ' ');

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.location.href = link;
    }
  };

  const iconColorClass = variant === 'gradient' ? 'text-white' : 'text-primary-600';
  const titleColorClass = variant === 'gradient' ? 'text-white' : 'text-gray-900';
  const descriptionColorClass = variant === 'gradient' ? 'text-white/90' : 'text-gray-600';
  const linkColorClass = variant === 'gradient' ? 'text-white hover:text-white/80' : 'text-primary-600 hover:text-primary-700';

  return (
    <div 
      className={classes}
      onClick={handleClick}
    >
      {icon && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${variant === 'gradient' ? 'bg-white/20' : 'bg-primary-100'} ${iconColorClass}`}>
            {React.cloneElement(icon, { 
              className: `h-6 w-6 ${iconColorClass}` 
            })}
          </div>
        </div>
      )}
      
      <h3 className={`text-lg font-semibold ${titleColorClass} mb-2`}>
        {title}
      </h3>
      
      <p className={`text-sm leading-relaxed ${descriptionColorClass} mb-4`}>
        {description}
      </p>
      
      {linkText && (
        <a 
          href={link}
          className={`inline-flex items-center gap-2 text-sm font-medium ${linkColorClass} transition-colors duration-200 group`}
          onClick={(e) => e.stopPropagation()}
        >
          {linkText}
          <FaArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  link: PropTypes.string,
  bgColor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  hoverEffect: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shadow: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'gradient', 'glass', 'outline']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;

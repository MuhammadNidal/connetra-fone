const Card = ({ 
  icon, 
  title, 
  description, 
  linkText, 
  link, 
  bgColor = "default", 
  align = "center", 
  hoverEffect = true, 
  size = "medium",
  shadow = true, 
}) => {
  // Base card classes with modern Tailwind styling
  const baseClasses = "bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-100";
  
  // Background color variants
  const bgColorClasses = {
    default: "bg-white",
    primary: "bg-gradient-to-br from-blue-50 to-indigo-50",
    secondary: "bg-gradient-to-br from-gray-50 to-slate-50", 
    success: "bg-gradient-to-br from-green-50 to-emerald-50",
    warning: "bg-gradient-to-br from-yellow-50 to-orange-50",
    danger: "bg-gradient-to-br from-red-50 to-pink-50"
  };
  
  // Size variants
  const sizeClasses = {
    small: "p-4",
    medium: "p-6", 
    large: "p-8"
  };
  
  // Alignment variants
  const alignClasses = {
    left: "text-left",
    center: "text-center", 
    right: "text-right"
  };
  
  // Hover effects
  const hoverClasses = hoverEffect ? "hover:shadow-xl hover:-translate-y-2 hover:scale-105" : "";
  
  // Shadow variants
  const shadowClasses = shadow ? "shadow-lg" : "shadow-sm";

  const cardClasses = `${baseClasses} ${bgColorClasses[bgColor]} ${sizeClasses[size]} ${alignClasses[align]} ${hoverClasses} ${shadowClasses}`;

  return (
    <div className={cardClasses}>
      {icon && (
        <div className={`mb-4 ${alignClasses[align]} text-3xl text-blue-600`}>
          {icon}
        </div>
      )}
      
      <h3 className={`text-xl font-bold text-gray-800 mb-3 ${alignClasses[align]}`}>
        {title}
      </h3>
      
      <p className={`text-gray-600 leading-relaxed mb-4 ${alignClasses[align]}`}>
        {description}
      </p>
      
      {linkText && (
        <div className={alignClasses[align]}>
          <a 
            href={link} 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group"
          >
            {linkText}
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
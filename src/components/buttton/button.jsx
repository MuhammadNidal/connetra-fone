
import PropTypes from "prop-types";

const Button = ({ label, onClick, variant, size, disabled, className = "", ...props }) => {
  // Base button classes with modern Tailwind styling
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  // Variant styles
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-300",
    secondary: "bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 shadow-md hover:shadow-lg focus:ring-gray-300",
    success: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl focus:ring-green-300",
    danger: "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl focus:ring-red-300",
    outline: "border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg focus:ring-blue-300",
    ghost: "text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-300"
  };
  
  // Size styles
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.medium} ${className}`.trim();

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

// Define default props
Button.defaultProps = {
  variant: "primary",
  size: "medium",
  disabled: false,
};

// Define prop types
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "outline", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large", "xl"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;

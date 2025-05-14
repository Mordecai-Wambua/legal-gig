import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Button Component
 *
 * A reusable button component with different variants and sizes based on the Services page styling.
 * Can be rendered as a button element or Link component from react-router-dom.
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  ...props
}) => {
  // Base styling shared by all variants
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 ";

  // Width handling
  const widthStyles = fullWidth ? "w-full" : "";

  // Size variations
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Style variations
  const variantStyles = {
    // Primary blue button (filled)
    primary: `bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500 ${
      disabled ? "opacity-60 cursor-not-allowed" : ""
    }`,

    // Secondary indigo button (filled)
    secondary: `bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg focus:ring-indigo-500 ${
      disabled ? "opacity-60 cursor-not-allowed" : ""
    }`,

    // Gradient button (blue to indigo)
    gradient: `bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500 ${
      disabled ? "opacity-60 cursor-not-allowed" : ""
    }`,

    // Outline button
    outline: `bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500 ${
      disabled ? "opacity-60 cursor-not-allowed" : ""
    }`,

    // Text button (no background)
    text: `text-blue-600 hover:text-blue-800 hover:bg-blue-50 focus:ring-blue-500 ${
      disabled ? "opacity-60 cursor-not-allowed" : ""
    }`,

    nav: `text-white hover:text-white hover:bg-black/30 rounded-md ${
      disabled ? "opacity-60 cursor-not-allowed" : ""
    }`,
  };

  // Combined classes
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  // Render as Link if 'to' prop is provided (internal routing)
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  // Render as anchor if 'href' prop is provided (external link)
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  // Render as button by default
  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "gradient",
    "outline",
    "text",
    "nav",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;

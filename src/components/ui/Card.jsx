import React from "react";
import PropTypes from "prop-types";

/**
 * Card Component
 *
 * A reusable card component with consistent styling based on the Services page.
 * Can be configured with different variants, paddings, and hover effects.
 */
const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "default",
  hover = true,
  shadow = "md",
  rounded = "xl",
  ...props
}) => {
  // Base styling
  const baseStyles = "overflow-hidden transition-all duration-300";

  // Padding options
  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  // Border radius options
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  // Shadow options
  const shadowStyles = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  // Background color variants
  const variantStyles = {
    default: "bg-white",
    primary: "bg-blue-50",
    secondary: "bg-indigo-50",
    transparent: "bg-transparent",
    gradient: "bg-gradient-to-r from-blue-50 to-indigo-50",
  };

  // Hover effects
  const hoverStyles = hover ? "hover:shadow-lg hover:-translate-y-1" : "";

  // Combined classes
  const combinedClasses = `
    ${baseStyles}
    ${paddingStyles[padding]}
    ${roundedStyles[rounded]}
    ${shadowStyles[shadow]}
    ${variantStyles[variant]}
    ${hoverStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " "); // Clean up whitespace

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "transparent",
    "gradient",
  ]),
  padding: PropTypes.oneOf(["none", "sm", "default", "lg", "xl"]),
  hover: PropTypes.bool,
  shadow: PropTypes.oneOf(["none", "sm", "md", "lg", "xl"]),
  rounded: PropTypes.oneOf(["none", "sm", "md", "lg", "xl", "2xl", "full"]),
};

/**
 * Card.Header Component
 *
 * A sub-component for the Card header section
 */
Card.Header = ({ children, className = "", ...props }) => {
  const combinedClasses = `mb-4 ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

Card.Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * Card.Body Component
 *
 * A sub-component for the Card body section
 */
Card.Body = ({ children, className = "", ...props }) => {
  const combinedClasses = `${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

Card.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * Card.Footer Component
 *
 * A sub-component for the Card footer section
 */
Card.Footer = ({ children, className = "", ...props }) => {
  const combinedClasses = `mt-4 ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

Card.Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;

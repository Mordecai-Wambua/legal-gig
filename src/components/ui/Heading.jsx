import React from "react";
import PropTypes from "prop-types";

/**
 * Heading Component
 *
 * A reusable heading component that provides consistent typography styling
 * across the site, based on the Services page styling.
 */
const Heading = ({
  level = 2,
  children,
  className = "",
  variant = "default",
  serif = false,
  aligned = "left",
  underlined = false,
  ...props
}) => {
  // Get the correct heading element based on level
  const Tag = `h${level}`;

  // Base styling
  const baseStyles = "font-bold";

  // Font family
  const fontFamily = serif ? "font-serif" : "font-sans";

  // Text alignment
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Size variations based on heading level
  const sizeStyles = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
    h5: "text-lg md:text-xl",
    h6: "text-base md:text-lg",
  };

  // Color and style variations
  const variantStyles = {
    default: "text-gray-900",
    primary: "text-blue-800",
    secondary: "text-indigo-700",
    light: "text-gray-700",
    gradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700",
  };

  // Underline style for section headers
  const underlineStyle = underlined
    ? "relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gray-900"
    : "";

  // Combined classes
  const combinedClasses = `
    ${baseStyles}
    ${fontFamily}
    ${sizeStyles[`h${level}`]}
    ${variantStyles[variant]}
    ${alignment[aligned]}
    ${underlineStyle}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " "); // Clean up whitespace

  return (
    <Tag className={combinedClasses} {...props}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "light",
    "gradient",
  ]),
  serif: PropTypes.bool,
  aligned: PropTypes.oneOf(["left", "center", "right"]),
  underlined: PropTypes.bool,
};

export default Heading;

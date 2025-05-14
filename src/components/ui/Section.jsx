import React from "react";
import PropTypes from "prop-types";
import Heading from "./Heading";

/**
 * Section Component
 *
 * A reusable section component for page sections with consistent padding,
 * background options, and container sizing based on the Services page style.
 */
const Section = ({
  children,
  className = "",
  id,
  title,
  subtitle,
  centered = false,
  background = "white",
  padding = "default",
  container = true,
  maxWidth = "6xl",
  ...props
}) => {
  // Base styling
  const baseStyles = "relative";

  // Background variations
  const backgroundStyles = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    primary: "bg-blue-700 text-white",
    secondary: "bg-indigo-700 text-white",
    gradient: "bg-gradient-to-r from-blue-800 to-indigo-700 text-white",
    transparent: "bg-transparent",
  };

  // Padding options
  const paddingStyles = {
    none: "py-0",
    sm: "py-8",
    default: "py-16",
    lg: "py-24",
    xl: "py-32",
  };

  // Max width for container
  const maxWidthStyles = {
    none: "",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };

  // Combined classes for section
  const sectionClasses = `
    ${baseStyles}
    ${backgroundStyles[background]}
    ${paddingStyles[padding]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " "); // Clean up whitespace

  // Container classes
  const containerClasses = container
    ? `container mx-auto px-4 ${maxWidthStyles[maxWidth]}`
    : "";

  // Title alignment
  const titleAlignment = centered ? "center" : "left";

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className={containerClasses}>
        {title && (
          <header className={`mb-12 ${centered ? "text-center" : ""}`}>
            <Heading
              level={2}
              aligned={titleAlignment}
              underlined={centered}
              className="mb-4"
              variant={
                background === "white" ||
                background === "light" ||
                background === "transparent"
                  ? "default"
                  : "default"
              }
            >
              {title}
            </Heading>

            {subtitle && (
              <p
                className={`text-lg ${
                  background === "white" ||
                  background === "light" ||
                  background === "transparent"
                    ? "text-gray-700"
                    : "text-white/80"
                }`}
              >
                {subtitle}
              </p>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  centered: PropTypes.bool,
  background: PropTypes.oneOf([
    "white",
    "light",
    "dark",
    "primary",
    "secondary",
    "gradient",
    "transparent",
  ]),
  padding: PropTypes.oneOf(["none", "sm", "default", "lg", "xl"]),
  container: PropTypes.bool,
  maxWidth: PropTypes.oneOf([
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "full",
  ]),
};

export default Section;

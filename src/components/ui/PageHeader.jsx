import React from "react";
import PropTypes from "prop-types";
import { Heading } from "./index";

/**
 * PageHeader Component
 *
 * A reusable page header component with a consistent style based on the Services page.
 * Features a gradient background, title, subtitle, and optional decorative elements.
 */
const PageHeader = ({
  title,
  subtitle,
  className = "",
  size = "default",
  withDecoration = true,
  ...props
}) => {
  // Base styles
  const baseStyles = "relative overflow-hidden text-white";

  // Background gradient based on Services page
  const backgroundStyles = "bg-gradient-to-r from-blue-800 to-indigo-700";

  // Size variations
  const sizeStyles = {
    sm: "pt-24 pb-10",
    default: "pt-32 pb-16",
    lg: "pt-40 pb-20",
  };

  // Combined classes
  const combinedClasses = `${baseStyles} ${backgroundStyles} ${sizeStyles[size]} ${className}`;

  return (
    <header className={combinedClasses} {...props}>
      {/* Decorative elements (inspired by Services page) */}
      {withDecoration && (
        <>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 right-20 w-32 h-32 bg-indigo-500/20 rounded-full mb-10"></div>
          <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full"></div>
        </>
      )}

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <Heading level={1} className="mb-6" serif={true}>
          {title}
        </Heading>

        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "default", "lg"]),
  withDecoration: PropTypes.bool,
};

export default PageHeader;

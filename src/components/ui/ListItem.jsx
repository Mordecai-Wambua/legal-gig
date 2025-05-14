import React from "react";
import PropTypes from "prop-types";

/**
 * ListItem Component
 *
 * A reusable list item component with an icon, consistent with the design system.
 * Used for benefits, features, and other lists across the site.
 */
const ListItem = ({
  children,
  className = "",
  icon = "check",
  variant = "primary",
  spacing = "default",
  ...props
}) => {
  // Base styling
  const baseStyles = "flex items-start";

  // Spacing options
  const spacingStyles = {
    sm: "space-x-2",
    default: "space-x-3",
    lg: "space-x-4",
  };

  // Get the appropriate icon
  const getIcon = () => {
    switch (icon) {
      case "check":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "dot":
        return <div className="h-2 w-2 rounded-full mt-1.5" />;
      case "arrow":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  // Icon container styles based on variant
  const iconStyles = {
    primary: "bg-blue-100 text-blue-600",
    secondary: "bg-indigo-100 text-indigo-600",
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    danger: "bg-red-100 text-red-600",
  };

  // Combined classes
  const combinedClasses = `
    ${baseStyles}
    ${spacingStyles[spacing]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " "); // Clean up whitespace

  return (
    <div className={combinedClasses} {...props}>
      <span
        className={`inline-flex items-center justify-center ${iconStyles[variant]} h-6 w-6 rounded-full shrink-0 mt-0.5`}
      >
        {getIcon()}
      </span>
      <div>{children}</div>
    </div>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.oneOf(["check", "dot", "arrow"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ]),
  spacing: PropTypes.oneOf(["sm", "default", "lg"]),
};

export default ListItem;

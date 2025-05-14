import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

/**
 * NavLink Component
 *
 * A specialized link component for navigation items with active state styling.
 * Based on the design system's color palette and styling patterns.
 */
const NavLink = memo(
  ({
    to,
    children,
    variant = "default",
    className = "",
    activeClassName = "",
    exact = false,
    onClick,
    ...props
  }) => {
    const { pathname } = useLocation();
    const isActive = exact ? pathname === to : pathname.startsWith(to);

    // Base styling shared by all variants
    const baseStyles =
      "font-medium rounded-full px-4 py-2 transition-all duration-200";

    // Style variations for different contexts
    const variantStyles = {
      // Default styling (works on any background)
      default: "text-gray-800 hover:bg-black/10",

      // Light styling (for dark backgrounds)
      light: "text-white hover:bg-white/20 bg-black/20",

      // Primary blue styling
      primary: "text-blue-700 hover:bg-blue-300/30",

      // Secondary indigo styling
      secondary: "text-indigo-700 hover:bg-indigo-300/30",

      // Purple styling (for membership/courses pages)
      purple: "text-purple-700 hover:bg-purple-300/30",
    };

    // Active state styles
    const activeStyles = isActive
      ? activeClassName ||
        (variant === "light"
          ? "font-semibold bg-white/10"
          : "font-semibold bg-black/5")
      : "";

    // Combined classes
    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${activeStyles} ${className}`;

    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "light",
    "primary",
    "secondary",
    "purple",
  ]),
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  exact: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavLink;

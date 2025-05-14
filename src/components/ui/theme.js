/**
 * Design System - Theme Configuration
 *
 * This file defines the core design variables for the application
 * based on the Services page styling for consistency across all pages.
 */

// Color palette inspired by the Services page (blue/indigo scheme)
export const colors = {
  // Primary colors
  primary: {
    50: "#EFF6FF", // blue-50
    100: "#DBEAFE", // blue-100
    200: "#BFDBFE", // blue-200
    300: "#93C5FD", // blue-300
    400: "#60A5FA", // blue-400
    500: "#3B82F6", // blue-500
    600: "#2563EB", // blue-600
    700: "#1D4ED8", // blue-700
    800: "#1E40AF", // blue-800
    900: "#1E3A8A", // blue-900
  },
  // Secondary colors (indigo)
  secondary: {
    50: "#EEF2FF", // indigo-50
    100: "#E0E7FF", // indigo-100
    200: "#C7D2FE", // indigo-200
    300: "#A5B4FC", // indigo-300
    400: "#818CF8", // indigo-400
    500: "#6366F1", // indigo-500
    600: "#4F46E5", // indigo-600
    700: "#4338CA", // indigo-700
    800: "#3730A3", // indigo-800
    900: "#312E81", // indigo-900
  },
  // Neutral colors
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  // Additional colors
  white: "#FFFFFF",
  black: "#000000",
};

// Typography settings
export const typography = {
  fontFamily: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

// Spacing settings
export const spacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
};

// Border radius
export const borderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  DEFAULT: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px", // Full rounded (circle for square aspect ratio)
};

// Shadows
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
};

// Common gradient backgrounds
export const gradients = {
  primary: "bg-gradient-to-r from-blue-800 to-indigo-700", // Services page header
  primaryHover: "bg-gradient-to-r from-blue-900 to-indigo-800",
  secondary: "bg-gradient-to-r from-blue-600 to-indigo-600",
  secondaryHover: "bg-gradient-to-r from-blue-700 to-indigo-700",
  light: "bg-gradient-to-r from-blue-50 to-indigo-50",
};

// Z-index levels
export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  auto: "auto",
};

// Animation durations
export const transitions = {
  75: "75ms",
  100: "100ms",
  150: "150ms",
  200: "200ms",
  300: "300ms",
  500: "500ms",
  700: "700ms",
  1000: "1000ms",
};

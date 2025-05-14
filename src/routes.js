/**
 * Application routes configuration
 * This file centralizes all route definitions for easier maintenance
 */

// Route constants - use these for navigation links to avoid hard-coding paths
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  NEWS: "/news",
  COURSES: "/courses",
  MEMBERSHIP: "/membership",
  CONTACT: "/contact",
};

// Routes metadata for use in navigation, breadcrumbs, and SEO
export const ROUTE_METADATA = [
  {
    path: ROUTES.HOME,
    name: "Home",
    description: "Your Essential Partner in Transforming Conflict",
    showInNav: true,
    order: 1,
  },
  {
    path: ROUTES.ABOUT,
    name: "About",
    description: "Learn about The Dispute Resolution Centre and our mission",
    showInNav: true,
    order: 2,
  },
  {
    path: ROUTES.SERVICES,
    name: "Services",
    description: "Comprehensive dispute resolution services for your needs",
    showInNav: true,
    order: 3,
  },
  {
    path: ROUTES.NEWS,
    name: "News",
    description: "Latest updates, articles and insights on dispute resolution",
    showInNav: true,
    order: 4,
  },
  {
    path: ROUTES.COURSES,
    name: "Courses",
    description: "Educational programs and courses in conflict resolution",
    showInNav: true,
    order: 5,
  },
  {
    path: ROUTES.MEMBERSHIP,
    name: "Membership",
    description:
      "Join our global dispute resolution community and enhance your professional standing",
    showInNav: true,
    order: 6,
  },
  {
    path: ROUTES.CONTACT,
    name: "Contact",
    description: "Get in touch with The Dispute Resolution Centre",
    showInNav: true,
    order: 7,
  },
];

// Helper function to get route metadata by path
export const getRouteMetadata = (path) => {
  return (
    ROUTE_METADATA.find((route) => route.path === path) || {
      name: "Not Found",
      description: "The page you're looking for does not exist",
    }
  );
};

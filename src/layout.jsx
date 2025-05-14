// Layout.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { getRouteMetadata } from "./routes";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const routeMetadata = getRouteMetadata(pathname);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Set page title and meta description based on current route
  useEffect(() => {
    // Update page title
    document.title = `${routeMetadata.name} | The Dispute Resolution Centre`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", routeMetadata.description);
    }
  }, [pathname, routeMetadata]);

  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-blue-700 focus:text-white focus:z-50"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow" role="main">
        {children}
      </main>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

import { useState, useEffect, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { ROUTE_METADATA } from "../../routes";
import { Button, NavLink } from "../../components/ui";
import { colors } from "../../components/ui/theme";

// Sort navigation links by their order property
const NAV_LINKS = ROUTE_METADATA.filter((route) => route.showInNav).sort(
  (a, b) => a.order - b.order
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { pathname } = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
    // Store current scroll position
    setScrollPosition(window.scrollY);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock scroll when menu is open on mobile and handle position fixing
  useEffect(() => {
    if (menuOpen && window.innerWidth < 768) {
      // Store current scroll position
      const scrollY = window.scrollY;

      // Prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Restore scroll position when menu closes
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [menuOpen]);

  // Determines the appropriate navbar theme based on current page and scroll state
  const getNavTheme = () => {
    // Services, About, News pages use blue theme
    if (["/services", "/about", "/news"].includes(pathname)) {
      return isScrolled ? "light" : "default";
    }
    // Courses, Membership pages use purple theme
    if (["/courses", "/membership"].includes(pathname)) {
      return isScrolled ? "light" : "purple";
    }
    // Contact page uses primary blue theme
    if (["/contact"].includes(pathname)) {
      return isScrolled ? "light" : "primary";
    }
    // Default (home) uses light theme
    return "light";
  };

  const navTheme = getNavTheme();

  // Logo style based on current theme
  const logoColorClass = (() => {
    if (isScrolled) return "text-white";
    if (navTheme === "default") return "text-gray-800";
    if (navTheme === "purple") return "text-purple-700";
    if (navTheme === "primary") return "text-blue-700";
    return "text-white";
  })();

  const baseNav = "fixed top-0 left-0 w-full z-50 transition-all duration-300";
  const scrollStyles = isScrolled
    ? "bg-black/70 backdrop-blur-md py-2 shadow-lg"
    : "bg-transparent py-3 md:py-3";
  const navbarClasses = `${baseNav} ${scrollStyles}`;

  const toggleMenu = useCallback(() => {
    setFadeOut(false);
    setMenuOpen((prev) => !prev);
  }, []);

  // Hamburger button background styles
  const hamburgerBgClass = isScrolled ? "bg-black/40" : "bg-black/60";

  return (
    <nav
      className={navbarClasses}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl md:text-3xl font-extrabold tracking-widest select-none ${logoColorClass}`}
          aria-label="Homepage"
        >
          LOGO
        </Link>

        {/* Desktop Links (≥1000px) */}
        <ul className="hidden lg:flex space-x-8">
          {NAV_LINKS.map(({ path, name }) => (
            <li key={name}>
              <NavLink to={path} variant={navTheme} exact={path === "/"}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (all <1000px) */}
        <Button
          variant={"nav"}
          className={`lg:hidden z-50 ${hamburgerBgClass}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <RiCloseLargeFill size={20} />
          ) : (
            <GiHamburgerMenu size={20} />
          )}
        </Button>
      </div>

      {/* Mobile Fullscreen Menu (<-md) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md flex flex-col items-center justify-center overflow-y-auto transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="menu"
        style={{ height: "100vh" }}
      >
        <div className="w-full max-w-sm flex flex-col items-center bg-black/80 py-6 px-4 rounded-lg shadow-xl my-auto">
          {NAV_LINKS.map(({ path, name }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              variant="light"
              className="w-full text-center mb-3 px-8 py-3 !text-xl hover:scale-105 hover:bg-white/20 bg-black/50 rounded-md border border-white/10"
              exact={path === "/"}
              role="menuitem"
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mid-Size Strip Menu (md–lg) */}
      <div
        id="strip-menu"
        className={`fixed backdrop-blur-md bg-black/90 py-4 shadow-lg top-0 left-0 w-full z-40 transition-opacity duration-300 hidden md:flex lg:hidden justify-center items-center ${
          menuOpen
            ? fadeOut
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onTransitionEnd={() => fadeOut && setMenuOpen(false)}
      >
        <ul className="max-w-3xl mx-auto flex flex-wrap justify-center gap-2 text-white text-lg font-semibold">
          {NAV_LINKS.map(({ path, name }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={() => setFadeOut(true)}
                variant="light"
                className="hover:underline px-3 py-1 !text-lg hover:scale-105 bg-black/40 rounded"
                exact={path === "/"}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navbar);

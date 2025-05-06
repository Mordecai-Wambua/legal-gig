import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

const LINKS = [
  { ref: "/", name: "Home" },
  { ref: "/about", name: "About" },
  { ref: "/services", name: "Services" },
  { ref: "/news", name: "News" },
  { ref: "/courses", name: "Courses" },
  { ref: "/mediation", name: "Mediation" },
  { ref: "/contact", name: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { pathname } = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock scroll when menu is open on mobile
  useEffect(() => {
    document.body.style.overflow =
      menuOpen && window.innerWidth < 768 ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Determines logo color based on current pathname & scroll state
  const logoColorClass = (() => {
    if (["/services", "/about", "/news"].includes(pathname)) {
      return isScrolled ? "text-white" : "text-gray-800";
    }
    if (["/courses", "/mediation"].includes(pathname)) {
      return isScrolled ? "text-white" : "text-purple-700";
    }

    if (["/contact"].includes(pathname)) {
      return isScrolled ? "text-white" : "text-blue-700";
    }
    return "text-white";
  })();

  // Base link styles
  const linkBaseClass = "font-medium rounded-full px-4 py-2 transition";

  // Link color variant depending on pathname & scroll state
  const linkColorClass = (() => {
    if (["/services", "/about", "/news"].includes(pathname)) {
      return isScrolled
        ? "text-white hover:bg-black/50"
        : "text-gray-800 hover:bg-black/50";
    }
    if (["/courses", "/mediation"].includes(pathname)) {
      return isScrolled
        ? "text-white hover:bg-purple-300/30"
        : "text-purple-700 hover:bg-purple-300/30";
    }

    if (["/contact"].includes(pathname)) {
      return isScrolled
        ? "text-white hover:bg-black/50"
        : "text-blue-700 hover:bg-blue-300/30";
    }
    return "text-white hover:bg-white/20";
  })();

  const baseNav = "fixed top-0 left-0 w-full z-50 transition-all duration-300";
  const scrollStyles = isScrolled
    ? "bg-black/70 backdrop-blur-md py-2 shadow-lg"
    : "bg-transparent py-5";
  const navbarClasses = `${baseNav} ${scrollStyles}`;

  return (
    <nav
      className={navbarClasses}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className=" mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <Link
          to="/"
          className={`text-3xl font-extrabold tracking-widest select-none ${logoColorClass}`}
          aria-label="Homepage"
        >
          LOGO
        </Link>

        {/* Desktop Links (≥1000px) */}
        <ul className="hidden lg:flex space-x-8">
          {LINKS.map(({ ref, name }) => (
            <li key={name}>
              <Link to={ref} className={`${linkBaseClass} ${linkColorClass}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (all <1000px) */}
        <button
          className="lg:hidden text-white focus:outline-none z-50"
          onClick={() => {
            setFadeOut(false);
            setMenuOpen((open) => !open);
          }}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {menuOpen ? (
            <RiCloseLargeFill size={28} />
          ) : (
            <GiHamburgerMenu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Fullscreen Menu (<-md) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-xl font-semibold transition-transform duration-300  md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="menu"
      >
        {LINKS.map(({ ref, name }) => (
          <Link
            key={name}
            to={ref}
            onClick={() => setMenuOpen(false)}
            className="text-white px-8 py-3 rounded-full hover:bg-white/20 transition hover:scale-105"
            role="menuitem"
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Mid-Size Strip Menu (md–lg) */}
      <div
        id="strip-menu"
        className={`fixed backdrop-blur-md py-5 shadow-lg top-0 left-0 w-full z-40 transition-opacity duration-300 hidden md:flex lg:hidden justify-center items-center ${
          menuOpen
            ? fadeOut
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onTransitionEnd={() => fadeOut && setMenuOpen(false)}
      >
        <ul className="max-w-3xl mx-auto flex space-x-6 text-white text-lg font-semibold backdrop-blur-sm">
          {LINKS.map(({ ref, name }) => (
            <li key={name}>
              <Link
                to={ref}
                onClick={() => setFadeOut(true)}
                className="hover:underline px-3 py-1 transition hover:scale-105"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

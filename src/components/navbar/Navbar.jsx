import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import "./navbar.css";

const links = [
  { ref: "/", name: "Home" },
  { ref: "/about", name: "About" },
  { ref: "/services", name: "Services" },
  { ref: "/news", name: "News" },
  { ref: "/courses", name: "Courses" },
  { ref: "/contact", name: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  // Update isScrolled on scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuActive((prev) => !prev);

  // Close mobile menu on link click (only on mobile)
  const handleLinkClick = () => {
    if (window.innerWidth < 768) setIsMenuActive(false);
  };

  // Compute navbar classes dynamically
  const navClasses = [
    "navbar",
    isScrolled && "sticky",
    ["/services", "/about", "/news"].includes(pathname) && "services-nav",
    pathname === "/courses" && "courses-nav",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav
      className={navClasses}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <Link to="/" className="logo" aria-label="Homepage">
        LOGO
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button
        className="menu-toggle md:hidden z-20"
        onClick={toggleMenu}
        aria-expanded={isMenuActive}
        aria-controls="primary-navigation"
        aria-label={isMenuActive ? "Close menu" : "Open menu"}
        type="button"
      >
        {isMenuActive ? (
          <RiCloseLargeFill size={22} />
        ) : (
          <GiHamburgerMenu size={22} />
        )}
      </button>

      {/* Navigation Links */}
      <ul
        id="primary-navigation"
        className={`nav-links ${isMenuActive ? "active" : ""}`}
        role="menu"
      >
        {links.map(({ ref, name }) => (
          <li key={name} role="none">
            <Link
              to={ref}
              onClick={handleLinkClick}
              role="menuitem"
              tabIndex={isMenuActive || window.innerWidth >= 768 ? 0 : -1}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

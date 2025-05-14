import { memo } from "react";
import { Link } from "react-router-dom";
import { ROUTE_METADATA } from "../../routes";

// Select main navigation routes for footer
const FOOTER_LINKS = ROUTE_METADATA.filter((route) => route.showInNav).sort(
  (a, b) => a.order - b.order
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-black/70 backdrop-blur-md py-6 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo and description in its own row on mobile */}
        <div className="mb-6 text-center sm:text-left">
          <div className="text-2xl font-extrabold tracking-widest mb-2">
            LOGO
          </div>
          <p className="text-gray-300 text-sm">
            Your Essential Partner in Transforming Conflict
          </p>
        </div>

        {/* Links and Contact in a compact grid on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-2 sm:mb-4">Quick Links</h2>
            <ul className="space-y-1 sm:space-y-2">
              {FOOTER_LINKS.slice(0, 4).map(({ path, name }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-gray-300 hover:text-white transition text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/More Links */}
          <div>
            <h2 className="text-lg font-bold mb-2 sm:mb-4">Services</h2>
            <ul className="space-y-1 sm:space-y-2">
              {FOOTER_LINKS.slice(4).map(({ path, name }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-gray-300 hover:text-white transition text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-lg font-bold mb-2 sm:mb-4">Contact</h2>
            <address className="not-italic space-y-1 sm:space-y-2 text-sm text-gray-300">
              <p>Kimathi Street</p>
              <p>Nairobi, Kenya</p>
              <p>
                <a
                  href="tel:+254759357030"
                  className="hover:text-white transition"
                >
                  (+254) 759 357030
                </a>
              </p>
              <p>
                <a
                  href="mailto:zackserick@gmail.com"
                  className="hover:text-white transition"
                >
                  zackserick@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center text-gray-400 text-sm">
          <p>
            &copy; {year} The Dispute Resolution Centre. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

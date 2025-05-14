import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { trainingOptions } from "../../data/membershipData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { submitMembershipRegistration } from "../../services/api";

// Helper to build full number
function getFullPhone(iti, inputEl) {
  if (!iti || !inputEl) return "";
  const { dialCode } = iti.getSelectedCountryData();
  const national = inputEl.value.replace(/\D/g, "");
  return `+${dialCode}${national}`;
}

export default function MembershipModal({ isOpen, onClose, categoryName }) {
  if (!isOpen) return null;

  const modalRef = useRef(null);
  const phoneRef = useRef();
  const itiRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState("Physical Training");
  const [form, setForm] = useState({ name: "", email: "" });
  const [buttonText, setButtonText] = useState("Register");
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  // Common close handler to ensure body scroll is restored
  const handleClose = () => {
    document.body.style.overflow = "";
    onClose();
  };

  // Reset form state
  const resetForm = () => {
    setForm({ name: "", email: "" });
    setSelectedOption("Physical Training");
    setFormStatus(null);
    setErrorMessage("");
    if (phoneRef.current) phoneRef.current.value = "";
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden"; // Prevent body scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = ""; // Ensure body scrolling is restored
    };
  }, [isOpen, onClose]);

  // Initialize phone input
  useEffect(() => {
    if (isOpen && phoneRef.current) {
      itiRef.current = intlTelInput(phoneRef.current, {
        separateDialCode: true,
        initialCountry: "auto",
        geoIpLookup: (cb) => cb("ke"),
      });
    }

    return () => {
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, [isOpen]);

  // Focus trap for the modal
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Focus the modal
      modalRef.current.focus();
      // Reset form on open
      resetForm();
    }
  }, [isOpen]);

  const handleOptionClick = (value) => setSelectedOption(value);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setFormStatus(null);
    setErrorMessage("");

    try {
      const phone = getFullPhone(itiRef.current, phoneRef.current);

      // Validate phone number
      if (!phone || phone.length < 10) {
        setFormStatus("error");
        setErrorMessage("Please enter a valid phone number");
        setButtonText("Register");
        return;
      }

      const payload = {
        ...form,
        trainingOption: selectedOption,
        phone,
        categoryName,
      };

      const response = await submitMembershipRegistration(payload);

      if (response.success) {
        setFormStatus("success");
        setButtonText("Sent Successfully!");

        // Close after delay and reset form
        setTimeout(() => {
          document.body.style.overflow = ""; // Ensure body scrolling is restored
          onClose();
          resetForm();
        }, 2000);
      } else {
        setFormStatus("error");
        setErrorMessage(
          response.message || "Failed to register. Please try again."
        );
        setButtonText("Try Again");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        error.message || "An unexpected error occurred. Please try again."
      );
      setButtonText("Try Again");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto md:overflow-y-scroll shadow-2xl transform transition-all duration-300 opacity-100 scale-100 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden md:[-ms-overflow-style:none]"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        aria-labelledby="membership-title"
      >
        <div className="relative overflow-hidden">
          {/* Header background with gradient */}
          <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-r from-purple-700 to-indigo-800 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full -mt-10 -mr-10"></div>
            <div className="absolute bottom-0 left-10 w-24 h-24 bg-indigo-400/20 rounded-full mb-6"></div>

            {/* Header content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h2
                id="membership-title"
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3"
              >
                Join Our Community
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-md">
                Register as a{" "}
                <span className="font-serif font-bold">{categoryName}</span>
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          {formStatus === "success" && (
            <div className="mb-4 md:mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-3 md:p-4 rounded">
              <p className="font-medium">Registration Successful!</p>
              <p className="text-sm mt-1">
                Thank you for joining us. We'll contact you shortly.
              </p>
            </div>
          )}

          {formStatus === "error" && (
            <div className="mb-4 md:mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-3 md:p-4 rounded">
              <p className="font-medium">Registration Failed</p>
              <p className="text-sm mt-1">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Training options */}
            <div>
              <label className="block font-bold mb-1 md:mb-2 text-gray-700 text-sm md:text-base">
                Training Option <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {trainingOptions.map((opt) => (
                  <div
                    key={opt.title}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedOption === opt.title
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => handleOptionClick(opt.title)}
                  >
                    <div className="font-semibold text-gray-800 text-sm md:text-base">
                      {opt.title}
                    </div>
                    <div className="text-purple-600 font-bold text-sm md:text-base">
                      {opt.price}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {opt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-bold mb-1 text-gray-700 text-sm md:text-base"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoFocus
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 md:p-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-sm md:text-base"
                  aria-required="true"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-bold mb-1 text-gray-700 text-sm md:text-base"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 md:p-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-sm md:text-base"
                  aria-required="true"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block font-bold mb-1 text-gray-700 text-sm md:text-base"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                ref={phoneRef}
                required
                className="w-full border border-gray-300 rounded-lg p-2 md:p-3 text-sm md:text-base"
                aria-required="true"
                placeholder="Your phone number"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "success"}
              className={`w-full text-white rounded-lg p-3 font-medium shadow-md hover:shadow-lg text-sm md:text-base mt-4 md:mt-6 flex items-center justify-center transition-all duration-300 ${
                formStatus === "success"
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800"
              }`}
            >
              <span>{buttonText}</span>
              {buttonText === "Register" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
          </form>

          {/* Social icons */}
          <div className="mt-6 pt-4 border-t text-center">
            <h4 className="text-gray-600 mb-2 text-sm md:text-base">
              Connect With Us
            </h4>
            <div className="flex justify-center space-x-4 md:space-x-6">
              {[
                { icon: faFacebookF, color: "bg-blue-600", url: "#" },
                {
                  icon: faInstagram,
                  color:
                    "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
                  url: "#",
                },
                { icon: faTwitter, color: "bg-blue-400", url: "#" },
                { icon: faYoutube, color: "bg-red-600", url: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className={`h-8 w-8 md:h-10 md:w-10 rounded-full ${social.color} flex items-center justify-center text-white transition-transform hover:scale-110`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.icon.iconName} page`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MembershipModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  categoryName: PropTypes.string,
};

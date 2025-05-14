import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
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

const API_URL = import.meta.env.VITE_API_URL;

// Helper to build full number
function getFullPhone(iti, inputEl) {
  if (!iti || !inputEl) return "";
  const { dialCode } = iti.getSelectedCountryData();
  const national = inputEl.value.replace(/\D/g, "");
  return `+${dialCode}${national}`;
}

export default function MembershipModal({ isOpen, onClose, categoryName }) {
  const [showModal, setShowModal] = useState(false);
  const [buttonText, setButtonText] = useState("Register");
  const phoneRef = useRef();
  const itiRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("Physical Training");
  const [form, setForm] = useState({ name: "", email: "" });

  // Modal lifecycle
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
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

  const handleOptionClick = (value) => setSelectedOption(value);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const clearForm = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
      setForm({ name: "", email: "" });
      setSelectedOption("Physical Training");
      if (phoneRef.current) phoneRef.current.value = "";
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const phone = getFullPhone(itiRef.current, phoneRef.current);
    const payload = {
      ...form,
      trainingOption: selectedOption,
      phone,
      categoryName,
    };

    try {
      const response = await fetch(`${API_URL}/api/membership`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setButtonText("Message Sent!");
        setTimeout(() => clearForm(), 2000);
      } else {
        setButtonText("Failed to send!");
      }
    } catch (error) {
      setButtonText("Error sending!");
    }

    setTimeout(() => setButtonText("Register"), 3000);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={clearForm}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-white rounded-xl shadow-xl w-full max-w-3xl p-4 sm:p-6 relative transform transition-all duration-300 ${
          showModal ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-2xl sm:text-3xl text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={clearForm}
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2
          id="membership-title"
          className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800"
        >
          Join Us in becoming a<br />
          <span className="text-gray-700">{categoryName}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Training options */}
          <div>
            <label className="block font-bold mb-1 text-gray-800 text-sm sm:text-base">
              Training Option <span className="text-red-500">*</span>
            </label>

            <div className="space-y-2">
              {trainingOptions.map((opt) => (
                <div
                  key={opt.title}
                  className={`p-2 sm:p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedOption === opt.title
                      ? "border-gray-400 bg-gray-50"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleOptionClick(opt.title)}
                >
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">
                    {opt.title}
                  </div>
                  <div className="text-gray-700 font-bold text-sm sm:text-base">
                    {opt.price}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {opt.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-bold mb-1 text-gray-800 text-sm sm:text-base"
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
              className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none"
              aria-required="true"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-bold mb-1 text-gray-800 text-sm sm:text-base"
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
              className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base focus:ring-2 focus:ring-gray-400 focus:border-gray-400 outline-none"
              aria-required="true"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block font-bold mb-1 text-gray-800 text-sm sm:text-base"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              ref={phoneRef}
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-2.5 sm:p-3 font-medium transition-colors shadow-md hover:shadow-lg text-sm sm:text-base mt-2"
          >
            {buttonText}
          </button>
        </form>

        {/* Social icons */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t text-center">
          <h4 className="text-gray-600 mb-2 text-sm sm:text-base">
            Connect With Us
          </h4>
          <div className="flex justify-center space-x-4 sm:space-x-6">
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
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white ${social.color} w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:opacity-90 transition-opacity`}
                aria-label={`Visit our ${social.icon.iconName} page`}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-xs sm:text-sm"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

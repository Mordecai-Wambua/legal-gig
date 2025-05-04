import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useModalLifecycle, useIntlTelInput } from "./hooks";
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

// Static price options
const priceOptionsData = [
  {
    title: "Virtual Training",
    value: "Virtual - 25,000",
    price: "Ksh 25,000",
    desc: "Complete your training online via ZOOM",
  },
  {
    title: "Physical Training",
    value: "Physical - 40,000",
    price: "Ksh 40,000",
    desc: "Face-to-face in-person training",
  },
  {
    title: "Hybrid Training",
    value: "2 days virtual 3 days physical - 35,000",
    price: "Ksh 35,000",
    desc: "2 days virtual + 3 days physical training",
  },
];

// Helper to build full number
function getFullPhone(iti, inputEl) {
  const { dialCode } = iti.getSelectedCountryData();
  const national = inputEl.value.replace(/\D/g, "");
  return `+${dialCode}${national}`;
}

export default function MediationModal({ isOpen, onClose, courseName }) {
  const [showModal, setShowModal] = useState(false);
  const [buttonText, setButtonText] = useState("Register");
  const phoneRef = useRef();
  const itiRef = useIntlTelInput(phoneRef, isOpen);
  const [selectedOption, setSelectedOption] = useState("Physical Training");
  const [form, setForm] = useState({ name: "", email: "" });

  useModalLifecycle(isOpen, onClose, setShowModal);

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
      courseName,
    };

    try {
      const response = await fetch(`${API_URL}/api/course`, {
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
    //
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={clearForm}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative transform transition-all duration-300 ${
          showModal ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mediation-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-5xl text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={clearForm}
        >
          &times;
        </button>

        <h2 id="mediation-title" className="text-2xl font-bold mb-4">
          Join <strong>Us</strong> in becoming a<br />
          <strong>{courseName}</strong>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Training options */}
          <div>
            <label className="block font-bold mb-1">
              Training Option <span className="text-red-500">*</span>
            </label>

            <div className="space-y-2">
              {priceOptionsData.map((opt) => (
                <div
                  key={opt.title}
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedOption === opt.title
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleOptionClick(opt.title)}
                >
                  <div className="font-semibold">{opt.title}</div>
                  <div className="text-blue-600 font-bold">{opt.price}</div>
                  <div className="text-sm text-gray-600">{opt.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-bold mb-1">
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
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-bold mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-bold mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              ref={phoneRef}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded p-3 font-medium hover:bg-blue-700"
          >
            {buttonText}
          </button>
        </form>

        {/* Social icons */}
        <div className="mt-6 pt-4 border-t text-center">
          <h4 className="text-gray-600 mb-2">Connect With Us</h4>
          <div className="flex justify-center space-x-6">
            {[faFacebookF, faInstagram, faTwitter, faYoutube].map(
              (icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${
                    icon === faFacebookF
                      ? "bg-blue-600"
                      : icon === faInstagram
                      ? "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600"
                      : icon === faTwitter
                      ? "bg-black"
                      : "bg-red-600"
                  } w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90`}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

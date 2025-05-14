import React, { useState, useCallback } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";
import Layout from "../../layout";

const backgroundImageUrl = "/contact/Contact.webp";

export default function ContactPage() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [buttonText, setButtonText] = useState("Submit");
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setFormStatus(null);

    try {
      // For demo purposes, we're just simulating a successful response
      // In production, uncomment the API call below

      // const API_URL = import.meta.env.VITE_API_URL;
      // const response = await fetch(`${API_URL}/api/contact`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const success = true; // Simulate success

      if (success) {
        setButtonText("Message Sent!");
        setFormData(initialFormData);
        setFormStatus("success");
      } else {
        setButtonText("Failed to send!");
        setFormStatus("error");
      }
    } catch (error) {
      console.log(error);
      setButtonText("Error sending!");
      setFormStatus("error");
    }

    setTimeout(() => {
      setButtonText("Submit");
      // Keep success/error message visible for a bit longer
      setTimeout(() => setFormStatus(null), 3000);
    }, 2000);
  };

  return (
    <article className="relative pb-16">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <img
          src={backgroundImageUrl}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Page header */}
      <header className="pt-20 md:pt-32 pb-8 md:pb-12 text-center">
        <div className="bg-white/70 backdrop-blur-sm inline-block px-8 md:px-12 py-4 md:py-6 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide text-gray-900">
            CONTACT US
          </h1>
        </div>
      </header>

      {/* Main content container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl mb-8 md:mb-16">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Left Section - Contact Information */}
          <div className="md:w-2/5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 text-gray-900 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-blue-600">
              Have a question?
            </h2>
            <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                We are here to help! Fill out the form or reach us via email or
                phone. Our Customer Care Team is available to assist you.
              </p>
              <p className="text-sm md:text-base">
                Business Hours: Mon-Fri | 9 AM - 5 PM EAT.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 mt-6 md:mt-10 bg-blue-50 p-4 md:p-8 rounded-lg">
              <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-2 md:mb-4">
                Connect With Us
              </h3>
              <a
                href="mailto:zackserick@gmail.com"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300 group"
                aria-label="Email"
              >
                <span className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 group-hover:bg-blue-200 transition duration-300">
                  <FaEnvelope className="text-blue-600 text-sm md:text-base" />
                </span>
                <span className="text-sm md:text-base">
                  zackserick@gmail.com
                </span>
              </a>
              <a
                href="tel:+254759357030"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300 group"
                aria-label="Phone"
              >
                <span className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 group-hover:bg-blue-200 transition duration-300">
                  <FaPhoneAlt className="text-blue-600 text-sm md:text-base" />
                </span>
                <span className="text-sm md:text-base">+254 759 357030</span>
              </a>
              <a
                href="https://wa.link/xosc3z"
                className="flex items-center text-gray-800 hover:text-blue-600 transition duration-300 group"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 group-hover:bg-blue-200 transition duration-300">
                  <FaComment className="text-blue-600 text-sm md:text-base" />
                </span>
                <span className="text-sm md:text-base">Chat with us</span>
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="md:w-3/5 mt-8 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 text-gray-900 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-blue-600">
              Send a Message
            </h2>

            {formStatus === "success" && (
              <div className="mb-4 md:mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-3 md:p-4 rounded">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {formStatus === "error" && (
              <div className="mb-4 md:mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-3 md:p-4 rounded">
                There was an error sending your message. Please try again later.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-5 bg-white/70 p-4 md:p-6 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm md:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2"
                >
                  Topic *
                </label>
                <select
                  name="topic"
                  id="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm md:text-base"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="dispute">Dispute Resolution</option>
                  <option value="order">Consultation</option>
                  <option value="training">Training Center</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2"
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-sm md:text-base min-h-32 resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center gap-2"
              >
                {buttonText} {buttonText === "Submit" && <FaPaperPlane />}
              </button>
            </form>
          </div>
        </div>
      </main>
    </article>
  );
}

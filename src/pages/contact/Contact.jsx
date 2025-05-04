import React, { useState, useCallback } from "react";
import { FaEnvelope, FaPhoneAlt, FaComment } from "react-icons/fa";
import Layout from "../../layout";
import "./contact.css";

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

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setButtonText("Message Sent!");
        setFormData(initialFormData);
      } else {
        setButtonText("Failed to send!");
      }
    } catch (error) {
      console.log(error);
      setButtonText("Error sending!");
    }

    setTimeout(() => setButtonText("Submit"), 3000);
  };

  return (
    <Layout>
      <div className="contactContain">
        {/* Background Image */}
        <div className="bgImage">
          <img
            src={backgroundImageUrl}
            alt="Contact Us"
            className="bgImg"
            loading="lazy"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div className="containerSection">
          {/* Left Section */}
          <div className="leftSection">
            <h1 className="title">Have a question?</h1>
            <p>
              We are here to help! Fill out the form or reach us via email or
              phone. Our Customer Care Team is available to assist you.
            </p>
            <p>Business Hours: Mon-Fri | 9 AM - 5 PM EAT.</p>

            <div className="contactInfo">
              <a
                href="mailto:zackserick@gmail.com"
                className="contactItem"
                aria-label="Email"
              >
                <FaEnvelope className="contactItemIcon" /> zackserick@gmail.com
              </a>
              <a
                href="tel:+254759357030"
                className="contactItem"
                aria-label="Phone"
              >
                <FaPhoneAlt className="contactItemIcon" /> +254 759 357030
              </a>
              <a
                href="https://wa.link/xosc3z"
                className="contactItem"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaComment className="contactItemIcon" /> Chat with us
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="rightSection">
            <form onSubmit={handleSubmit}>
              <div className="formRow">
                <div>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="phone">Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <label htmlFor="topic">Topic *</label>
              <select
                name="topic"
                id="topic"
                required
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="dispute">Dispute Resolution</option>
                <option value="order">Consultation</option>
                <option value="training">Training Center</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="message">Message *</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">{buttonText}</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

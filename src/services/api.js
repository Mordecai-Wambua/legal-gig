/**
 * API Service for handling all server requests
 */

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * Base API request handler with error handling
 *
 * @param {string} endpoint - API endpoint to call
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} Response data
 */
async function apiRequest(endpoint, options = {}) {
  try {
    const url = `${API_URL}/api/${endpoint}`;

    const defaultHeaders = {
      "Content-Type": "application/json",
    };

    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Server error");
    }

    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
}

/**
 * Submit contact form
 *
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} Response data
 */
export async function submitContactForm(formData) {
  return apiRequest("contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

/**
 * Submit membership registration
 *
 * @param {Object} formData - Membership registration data
 * @returns {Promise<Object>} Response data
 */
export async function submitMembershipRegistration(formData) {
  return apiRequest("membership", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

export default {
  submitContactForm,
  submitMembershipRegistration,
};

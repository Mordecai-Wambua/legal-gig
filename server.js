import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { body, validationResult } from "express-validator";

// Setup __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

// Enable CORS for all origins
app.use(cors());

// Enable JSON body parsing for incoming requests
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, "dist")));

// Logging middleware for API requests
app.use("/api", (req, res, next) => {
  console.log(
    `API Request: ${req.method} ${req.url} at ${new Date().toISOString()}`
  );
  next();
});

// Data validation middleware
const validateContact = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid email is required"),
  body("message").trim().notEmpty().withMessage("Message is required"),
  body("topic").trim().notEmpty().withMessage("Topic is required"),
];

const validateMembership = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid email is required"),
  body("phone").trim().notEmpty().withMessage("Phone number is required"),
  body("trainingOption")
    .trim()
    .notEmpty()
    .withMessage("Training option is required"),
  body("categoryName").trim().notEmpty().withMessage("Category is required"),
];

// Function to send email (placeholder for actual email sending logic)
const sendEmail = async (to, subject, content) => {
  try {
    // This is where you would implement actual email sending
    // For example, using nodemailer, SendGrid, or other email service

    // Example with nodemailer (you'd need to install nodemailer package):
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //   }
    // });

    // await transporter.sendMail({
    //   from: process.env.EMAIL_FROM,
    //   to,
    //   subject,
    //   html: content
    // });

    console.log(`Email would be sent to: ${to}, Subject: ${subject}`);
    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
};

// Create cleaner response structure
const createResponse = (success, message, data = null) => {
  return {
    success,
    message,
    ...(data && { data }),
  };
};

// API routes
const ApiRouter = express.Router();

// Contact form submission
ApiRouter.post("/contact", validateContact, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json(
          createResponse(false, "Validation failed", { errors: errors.array() })
        );
    }

    const { firstName, lastName, email, topic, message, phone } = req.body;

    console.log("Contact form submission:", req.body);

    // Prepare email notification content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send email notification to admin (uncomment when ready to implement)
    // const emailSent = await sendEmail('admin@example.com', `New Contact: ${topic}`, emailContent);

    // Store in database (this would be implemented with your DB of choice)
    // await db.contacts.create({ firstName, lastName, email, topic, message, phone });

    res.status(200).json(createResponse(true, "Message received successfully"));
  } catch (error) {
    console.error("Contact form error:", error);
    res
      .status(500)
      .json(createResponse(false, "Server error processing your request"));
  }
});

// Membership registration
ApiRouter.post("/membership", validateMembership, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json(
          createResponse(false, "Validation failed", { errors: errors.array() })
        );
    }

    const { name, email, phone, trainingOption, categoryName } = req.body;

    console.log("Membership registration:", req.body);

    // Prepare confirmation email to user
    const userEmailContent = `
      <h2>Thank You for Registering with The Dispute Resolution Centre</h2>
      <p>Dear ${name},</p>
      <p>We have received your registration as a <strong>${categoryName}</strong>.</p>
      <p>Training option selected: <strong>${trainingOption}</strong></p>
      <p>Our team will review your application and contact you shortly.</p>
      <p>Best regards,<br>The Dispute Resolution Centre Team</p>
    `;

    // Prepare notification email to admin
    const adminEmailContent = `
      <h2>New Membership Registration</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Category:</strong> ${categoryName}</p>
      <p><strong>Training Option:</strong> ${trainingOption}</p>
    `;

    // Send emails (uncomment when ready to implement)
    // const userEmailSent = await sendEmail(email, 'Your Registration with The Dispute Resolution Centre', userEmailContent);
    // const adminEmailSent = await sendEmail('admin@example.com', `New Member Registration: ${categoryName}`, adminEmailContent);

    // Store in database (this would be implemented with your DB of choice)
    // await db.memberships.create({ name, email, phone, trainingOption, categoryName });

    res.status(200).json(createResponse(true, "Registration successful"));
  } catch (error) {
    console.error("Membership registration error:", error);
    res
      .status(500)
      .json(createResponse(false, "Server error processing your registration"));
  }
});

app.use("/api", ApiRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json(createResponse(false, "An unexpected error occurred"));
});

// Catch-all for React Router (Express 5+)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(
    `Server running in ${process.env.NODE_ENV || "development"} mode`
  );
});

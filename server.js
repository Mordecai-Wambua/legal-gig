import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

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

// Logging middleware (optional)
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// API routes
const ApiRouter = express.Router();
ApiRouter.post("/contact", (req, res) => {
  console.log(req.body);
  res.json({ message: "Home page data from Express!" });
});
app.use("/api", ApiRouter);

// Catch-all for React Router (Express 5+)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

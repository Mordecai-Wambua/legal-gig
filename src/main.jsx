import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// pages
import Home from "./pages/home/Home.jsx";
import AboutPage from "./pages/about/About.jsx";
import ContactPage from "./pages/contact/Contact.jsx";
import NewsPage from "./pages/news/News.jsx";
import CoursesPage from "./pages/courses/Courses.jsx";
import ServicesPage from "./pages/services/Services.jsx";
import MediationPage from "./pages/mediation/Mediation.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/courses", element: <CoursesPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/mediation", element: <MediationPage /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorBoundary from "./components/errorboundary/ErrorBoundary";
import Layout from "./layout";
import FullScreenSpinner from "./components/fullscreenspinner/FullScreenSpinner";
import { ROUTES } from "./routes";

// Lazy load page components for code splitting
const Home = lazy(() => import("./pages/home/Home.jsx"));
const AboutPage = lazy(() => import("./pages/about/About.jsx"));
const ContactPage = lazy(() => import("./pages/contact/Contact.jsx"));
const NewsPage = lazy(() => import("./pages/news/News.jsx"));
const CoursesPage = lazy(() => import("./pages/courses/Courses.jsx"));
const ServicesPage = lazy(() => import("./pages/services/Services.jsx"));
const MembershipPage = lazy(() => import("./pages/membership/Membership.jsx"));
const NotFound = lazy(() => import("./pages/notfound/NotFound.jsx"));

// Common route element with Layout and Suspense
const withLayout = (Component) => (
  <ErrorBoundary>
    <Layout>
      <Suspense fallback={<FullScreenSpinner />}>
        <Component />
      </Suspense>
    </Layout>
  </ErrorBoundary>
);

const router = createBrowserRouter([
  { path: ROUTES.HOME, element: withLayout(Home) },
  { path: ROUTES.ABOUT, element: withLayout(AboutPage) },
  { path: ROUTES.CONTACT, element: withLayout(ContactPage) },
  { path: ROUTES.NEWS, element: withLayout(NewsPage) },
  { path: ROUTES.COURSES, element: withLayout(CoursesPage) },
  { path: ROUTES.SERVICES, element: withLayout(ServicesPage) },
  { path: ROUTES.MEMBERSHIP, element: withLayout(MembershipPage) },
  { path: "*", element: withLayout(NotFound) },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

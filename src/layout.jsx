// Layout.js
import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

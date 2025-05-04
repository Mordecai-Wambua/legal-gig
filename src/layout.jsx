// Layout.js
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

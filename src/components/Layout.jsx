import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-gray-800">
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
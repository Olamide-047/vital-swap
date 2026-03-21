import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
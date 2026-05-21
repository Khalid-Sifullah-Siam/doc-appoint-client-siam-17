import Navbar from "../components/sharedComponents/Navbar/Navbar";
import Footer from "../components/sharedComponents/Footer/Footer";

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
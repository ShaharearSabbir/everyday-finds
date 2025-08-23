import Footer from "@/components/Footer";
import Hero from "@/components/homepage/Hero";
import ProductHighlights from "@/components/homepage/ProductHighlights";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductHighlights />
      <Footer />
    </div>
  );
}

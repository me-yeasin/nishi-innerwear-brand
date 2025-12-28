import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import MobileActionBar from "../../components/product/MobileActionBar";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="flex flex-col md:flex-row relative">
        {/* Left: Scrollable Gallery */}
        <ProductGallery />

        {/* Right: Sticky Info */}
        <ProductInfo />
      </div>

      {/* Mobile Sticky Bar */}
      <MobileActionBar />

      {/* Related Products / Footer would follow */}
      <div className="md:mt-20">
        <Footer />
      </div>
    </main>
  );
}

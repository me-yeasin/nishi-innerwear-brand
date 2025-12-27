import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryShowcase from "./components/CategoryShowcase";
import QualityFeature from "./components/QualityFeature";
import SmartBundles from "./components/SmartBundles";
import CustomerReviews from "./components/CustomerReviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CategoryShowcase />
      <QualityFeature />
      <SmartBundles />
      <CustomerReviews />
      <FAQ />
      <Footer />
    </main>
  );
}

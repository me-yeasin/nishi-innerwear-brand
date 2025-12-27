import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryShowcase from "./components/CategoryShowcase";
import QualityFeature from "./components/QualityFeature";
import SmartBundles from "./components/SmartBundles";
import CustomerReviews from "./components/CustomerReviews";
import FAQ from "./components/FAQ";

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

      {/* Footer Placeholder */}
      <div className="h-20 bg-bg-light"></div>
    </main>
  );
}

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryHero from "../../components/shop/CategoryHero";
import VisualFilterBar from "../../components/shop/VisualFilterBar";
import ProductGrid from "../../components/shop/ProductGrid";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Dynamic Mood Header */}
      <CategoryHero category={category} />

      {/* Sticky Filter Bar */}
      <VisualFilterBar />

      {/* Product Grid */}
      <ProductGrid />

      <Footer />
    </main>
  );
}

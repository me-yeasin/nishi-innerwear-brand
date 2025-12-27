import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryShowcase from "./components/CategoryShowcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CategoryShowcase />

      {/* Footer Placeholder */}
      <div className="h-20 bg-bg-light"></div>
    </main>
  );
}

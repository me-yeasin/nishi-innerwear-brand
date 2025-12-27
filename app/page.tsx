import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/*
        This is a placeholder for the rest of the content (Categories, Products, etc.)
        which will be implemented in future steps.
        For now, we just add some padding to ensure the footer/scroll works.
      */}
      <div className="h-20 bg-bg-light"></div>
    </main>
  );
}

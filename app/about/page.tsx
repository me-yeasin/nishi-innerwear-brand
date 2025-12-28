import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import StoryTimeline from "../components/about/StoryTimeline";
import ValuesGrid from "../components/about/ValuesGrid";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <StoryTimeline />
      <ValuesGrid />
      <Footer />
    </main>
  );
}

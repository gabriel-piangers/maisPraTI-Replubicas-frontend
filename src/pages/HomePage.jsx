import { Header } from "../components/Header";
import { FirstSection } from "../components/firstSection";
import { AboutCards } from "../components/AboutCards";
import { Footer } from "../components/Footer";
import { ExploreCategories } from "../components/ExploreCategories";
import { FeaturedProperties } from "../components/FeaturedProperties";

export function HomePage() {
  return (
    <>
      <Header />
      <FirstSection />  
      <main className="homepage-main">
        <ExploreCategories />
        <FeaturedProperties />
        <AboutCards />
      </main>
      <Footer />
    </>
  );
}

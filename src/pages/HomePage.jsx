import { FirstSection } from "../components/FirstSection";
import { AboutCards } from "../components/AboutCards";
import { Footer } from "../components/Footer";
import { ExploreCategories } from "../components/ExploreCategories";
import { FeaturedProperties } from "../components/FeaturedProperties";

export function HomePage() {
  return (
    <>
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

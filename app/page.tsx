import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FlashSale from "@/components/home/FlashSale";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BenefitsSection from "@/components/home/BenefitsSection";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import FloatingSearch from "@/components/home/FloatingSearch";
import TrendingProducts from "@/components/home/TrendingProducts";
import OfferBanner from "@/components/home/OfferBanner";
import NewArrivals from "@/components/home/NewArrivals";
import BrandShowcase from "@/components/home/BrandShowcase";
import AIRecommendation from "@/components/home/AIRecommendation";
import InstagramFeed from "@/components/home/InstagramFeed";
import MobileAppSection from "@/components/home/MobileAppSection";
import { theme } from "@/lib/theme";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className={`overflow-hidden ${theme.shopPage}`}>
      <HeroSection />

      <div className="relative z-30 -mt-10 px-4">
        <div className="max-w-6xl mx-auto">
          <FloatingSearch />
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <CategorySection />
      </section>

      <section id="flash" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-pink-100 to-orange-100 opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4">
          <FlashSale />
        </div>
      </section>

      <section id="trending" className="max-w-7xl mx-auto px-4 py-20">
        <TrendingProducts />
      </section>

      <section className="px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          <OfferBanner />
        </div>
      </section>

      <section id="featured" className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4">
          <FeaturedProducts />
        </div>
      </section>

      <section
        id="new"
        className="bg-gradient-to-b from-white to-pink-50 py-20 dark:from-gray-900 dark:to-gray-950"
      >
        <div className="max-w-7xl mx-auto px-4">
          <NewArrivals />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <BrandShowcase />
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 via-white to-pink-100 opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4">
          <AIRecommendation />
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <BenefitsSection />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <Testimonials />
      </section>

      <section className="bg-gradient-to-b from-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <InstagramFeed />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <MobileAppSection />
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </main>
  );
}

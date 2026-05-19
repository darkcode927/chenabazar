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
    <main
      className={`overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white ${theme.shopPage}`}
    >
      {/* HERO */}
      <HeroSection />

      {/* FLOATING SEARCH */}
      <div className="relative z-30 -mt-6 px-4 sm:-mt-8 lg:-mt-10">
        <div className="mx-auto max-w-6xl">
          <FloatingSearch />
        </div>
      </div>

      {/* CATEGORY */}
      <section className="px-4 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <CategorySection />
        </div>
      </section>

      {/* FLASH SALE */}
      <section
        id="flash"
        className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/70 via-pink-100/70 to-orange-100/70 dark:from-red-950/30 dark:via-pink-950/20 dark:to-orange-950/30" />

        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl dark:bg-pink-500/10" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />

        <div className="relative mx-auto max-w-7xl px-4">
          <FlashSale />
        </div>
      </section>

      {/* TRENDING */}
      <section
        id="trending"
        className="px-4 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <TrendingProducts />
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="px-4 pb-6 sm:pb-10">
        <div className="mx-auto max-w-7xl">
          <OfferBanner />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        id="featured"
        className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      >
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl dark:bg-pink-500/10" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-500/10" />

        <div className="relative mx-auto max-w-7xl px-4">
          <FeaturedProducts />
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section
        id="new"
        className="bg-gradient-to-b from-white to-pink-50 py-14 transition-colors duration-300 dark:from-gray-950 dark:to-gray-900 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4">
          <NewArrivals />
        </div>
      </section>

      {/* BRANDS */}
      <section className="px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <BrandShowcase />
        </div>
      </section>

      {/* AI RECOMMENDATION */}
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/70 via-white/80 to-pink-100/70 dark:from-sky-950/20 dark:via-slate-950 dark:to-pink-950/20" />

        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl dark:bg-sky-500/10" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl dark:bg-pink-500/10" />

        <div className="relative mx-auto max-w-7xl px-4">
          <AIRecommendation />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-gray-200 bg-white py-14 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <BenefitsSection />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Testimonials />
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-14 transition-colors duration-300 dark:from-gray-900 dark:to-gray-950 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <InstagramFeed />
        </div>
      </section>

      {/* MOBILE APP */}
      <section className="px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <MobileAppSection />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-4 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-5xl">
          <Newsletter />
        </div>
      </section>
    </main>
  );
}
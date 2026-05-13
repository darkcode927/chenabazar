import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FlashSale from "@/components/home/FlashSale";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BenefitsSection from "@/components/home/BenefitsSection";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { Product } from "@/types";
import FloatingSearch from "@/components/home/FloatingSearch";
import TrendingProducts from "@/components/home/TrendingProducts";
import OfferBanner from "@/components/home/OfferBanner";
import NewArrivals from "@/components/home/NewArrivals";
import BrandShowcase from "@/components/home/BrandShowcase";
import AIRecommendation from "@/components/home/AIRecommendation";
import InstagramFeed from "@/components/home/InstagramFeed";
import MobileAppSection from "@/components/home/MobileAppSection";
import RecentlyViewd from "@/components/home/RecentlyViewed";
export const dynamic = "force-dynamic";

// 🔥 Fetch Products
async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-pink-50 via-white to-gray-100">
      {/* 🔥 HERO SECTION */}
      <HeroSection />

      {/* 🔥 FLOATING SEARCH */}
      <div className="relative z-30 -mt-10 px-4">
        <div className="max-w-6xl mx-auto">
          <FloatingSearch />
        </div>
      </div>

      {/* 🔥 CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <CategorySection />
      </section>

      {/* 🔥 FLASH SALE */}
      <section id="flash" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-pink-100 to-orange-100 opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4">
          <FlashSale product={products.slice(0, 4)} />
        </div>
      </section>

      {/* 🔥 TRENDING PRODUCTS */}
      <section id="trending" className="max-w-7xl mx-auto px-4 py-20">
        <TrendingProducts product={products.slice(0, 4)} />
      </section>

      {/* 🔥 Recently Viewed */}
      {/* <section className="px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          <RecentlyViewd />
        </div>
      </section> */}
      {/* 🔥 OFFER BANNER */}
      <section className="px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          <OfferBanner />
        </div>
      </section>

      {/* 🔥 FEATURED PRODUCTS */}
      <section id="featured" className="relative py-16 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4">
          <FeaturedProducts product={products.slice(0, 4)} />
        </div>
      </section>

      {/* 🔥 NEW ARRIVALS */}
      <section
        id="new"
        className="bg-gradient-to-b from-white to-pink-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <NewArrivals product={products.slice(0, 4)} />
        </div>
      </section>

      {/* 🔥 BRAND SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <BrandShowcase />
      </section>

      {/* 🔥 AI RECOMMENDATION */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 via-white to-pink-100 opacity-70" />

        <div className="relative max-w-7xl mx-auto px-4">
          <AIRecommendation product={products.slice(0, 4)} />
        </div>
      </section>

      {/* 🔥 BENEFITS */}
      <section className="bg-white border-y py-20">
        <div className="max-w-7xl mx-auto px-4">
          <BenefitsSection />
        </div>
      </section>

      {/* 🔥 TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <Testimonials />
      </section>

      {/* 🔥 INSTAGRAM FEED */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <InstagramFeed />
        </div>
      </section>

      {/* 🔥 MOBILE APP */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <MobileAppSection />
      </section>

      {/* 🔥 NEWSLETTER */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </main>
  );
}

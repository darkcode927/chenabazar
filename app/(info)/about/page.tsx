export default function AboutPage() {
  return (
    <div>

      {/* HERO */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold">About Chena Bazar</h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Your trusted online marketplace delivering quality, convenience, and value.
        </p>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
          className="rounded-2xl"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Chena Bazar started with a vision to make online shopping in Bangladesh more reliable,
            affordable, and enjoyable. We bring together top-quality products and a seamless experience.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower customers with a seamless shopping experience, offering high-quality products
            at competitive prices with fast delivery.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          className="rounded-2xl"
        />
      </section>

      {/* VISION */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
          className="rounded-2xl"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become Bangladesh’s most trusted e-commerce platform by continuously innovating
            and putting customers first.
          </p>
        </div>
      </section>

    </div>
  );
}
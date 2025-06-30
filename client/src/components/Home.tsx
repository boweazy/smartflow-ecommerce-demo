
import React from "react";

const Home = () => {
  return (
    <div className="bg-black text-yellow-400 min-h-screen font-sans">
      <header className="text-center py-16 bg-gradient-to-r from-gray-900 to-black shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300">SmartFlow Systems</h1>
        <p className="mt-4 text-yellow-200 text-lg">Next-Level Booking & eCommerce for Barbers, Creators & Brands</p>
        <div className="mt-6 space-x-4">
          <a href="https://boweazy.github.io/smartflow-ecommerce-demo/" target="_blank" rel="noopener noreferrer"
            className="inline-block border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-2 rounded transition duration-300">
            View Live Demo
          </a>
        </div>
      </header>

      <section className="py-16 px-6 text-center bg-black">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-10">What We Offer</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "✅ Booking System with AI Assistant",
            "✅ Google Calendar Integration",
            "✅ Online Store (500 Products)",
            "✅ Secure Stripe Payments",
            "✅ Sell on IG & Facebook",
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-900 border border-yellow-500 shadow-xl rounded-lg p-6 w-72 text-yellow-200">
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-gray-950">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Pricing & Packages</h2>
        <p className="text-yellow-100 text-lg mb-8">£149 Setup • £15/month hosting & support</p>
        <a href="mailto:hello@smartflowsystems.online"
          className="inline-block border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-2 rounded transition duration-300">
          Book a Setup Call
        </a>
      </section>

      <footer className="bg-black text-yellow-500 text-center py-6 text-sm border-t border-yellow-800">
        &copy; 2025 SmartFlow Systems • Designed for Elegance & Power
      </footer>
    </div>
  );
};

export default Home;

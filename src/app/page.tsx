import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import PricingOrContact from "./components/PricingOrContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="max-w-6xl mx-auto w-full px-6">
        <Features />
        <Testimonials />
        <PricingOrContact />
      </main>
      <Footer />
    </div>
  );
}

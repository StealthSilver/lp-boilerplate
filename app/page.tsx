import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Features/>
      <Testimonials/>
      <CTA/>
      <Footer />
    </main>
  );
}

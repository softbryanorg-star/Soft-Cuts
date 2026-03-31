import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import FloatingCTA from "../components/FloatingCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Soft Cuts Stylist Salon | Best Barbershop in Owerri</title>

        <meta
          name="description"
          content="Premium barbing salon in Owerri. Clean fades, dreadlocks, beard grooming and luxury haircuts. Book via WhatsApp."
        />

        <meta
          name="keywords"
          content="barbershop Owerri, haircut Owerri, fade haircut Nigeria, barber near me, dreadlocks styling Owerri"
        />

        <meta name="author" content="Soft Cuts Stylist Salon" />

        {/* Social sharing */}
        <meta property="og:title" content="Soft Cuts Stylist Salon" />
        <meta
          property="og:description"
          content="Premium haircuts and grooming in Owerri. Book now."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <FloatingCTA />
      <Footer />
    </>
  );
}
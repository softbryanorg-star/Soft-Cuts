import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  const phone = "14155238886";

  // ✅ KEEP THIS EXACT TEXT (DO NOT CHANGE)
  const message = encodeURIComponent("joinlabor-facing");

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="hero" id="home">
      {/* BACKGROUND IMAGE */}
      <div className="hero-bg"></div>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Precision.<br />
          Style.<br />
          Power.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Experience luxury grooming with instant WhatsApp booking.
        </motion.p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Book Now
        </motion.a>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}
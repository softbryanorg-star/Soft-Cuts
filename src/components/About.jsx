import "./About.css";

export default function About() {
  const phone = "14155238886";

  // ✅ DO NOT CHANGE THIS (activates your chatbot)
  const message = encodeURIComponent("joinlabor-facing");

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* LEFT SIDE IMAGE */}
        <div className="about-image">
          <img src="/images/about.jpg" alt="Barber Shop" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          <h2>About Soft Cuts Stylist Salon</h2>

          <p>
            At Soft Cuts Stylist Salon, we don’t just cut hair — we craft identity.
            Every fade, every line, every detail is designed to give you confidence,
            presence, and a premium look that stands out.
          </p>

          <p>
            Our mission is simple: deliver a world-class barbering experience with
            precision, style, and consistency. Whether it's a clean fade, beard
            grooming, or a full transformation, we treat every client like royalty.
          </p>

          {/* ADDRESS */}
          <div className="about-address">
            <h4>📍 Visit Us</h4>
            <p>No. 12 Wetheral Road, Owerri, Imo State, Nigeria</p>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn"
          >
            Book Appointment
          </a>

        </div>
      </div>
    </section>
  );
}
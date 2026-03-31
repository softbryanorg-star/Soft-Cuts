import "./About.css";

export default function About() {
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
            At Soft Cuts Stylist Salon, we don’t just cut hair, we craft identity.
            Every fade, every line, every detail is designed to give you confidence,
            presence, and a premium look that stands out.
          </p>

          <p>
            Our mission is simple: deliver world-class barbering experience with
            precision, style, and consistency. Whether it's a clean fade, beard
            grooming, or a full transformation we treat every client like royalty.
          </p>

          {/* ADDRESS */}
          <div className="about-address">
            <h4>📍 Visit Us</h4>
            <p>No. 12 Wetheral Road, Owerri, Imo State, Nigeria</p>
          </div>

          {/* BUTTON */}
          <a
            href="https://wa.me/14155238886?text=join%20labor-facing"
            className="about-btn"
          >
            Book Appointment
          </a>

        </div>
      </div>
    </section>
  );
}
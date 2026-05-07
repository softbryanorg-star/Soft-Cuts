import React from "react";
import "./FloatingCTA.css";

export default function FloatingCTA() {
  const phone = "14155238886";

  // DO NOT CHANGE THIS
  const message = encodeURIComponent("join labor-facing");

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
    >
      📲 Chat on WhatsApp
    </a>
  );
}
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// ✅ FIXED IMPORT
import { Pagination } from "swiper/modules";

import "./Testimonials.css";

const testimonials = [
  {
    name: "Chukwuemeka I.",
    review: "Absolutely amazing! My fade was perfect and the beard trim was on point. I’m coming back every month.",
    location: "Owerri, Imo State",
  },
  {
    name: "Amaka O.",
    review: "Soft Cuts Stylist Salon made me feel like royalty. Instant WhatsApp booking was a lifesaver!",
    location: "Owerri, Imo State",
  },
  {
    name: "Ifeanyi U.",
    review: "No waiting, no stress. The service was smooth, and my hair has never looked this good!",
    location: "Owerri, Imo State",
  },
  {
    name: "Ngozi C.",
    review: "From booking to haircut, everything was flawless. Highly recommend Soft Cuts!",
    location: "Owerri, Imo State",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Clients Say</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="review">"{item.review}"</p>
              <h4 className="name">{item.name}</h4>
              <p className="location">{item.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
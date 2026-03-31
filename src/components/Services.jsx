import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Services() {
  const services = [
    {
      title: "Classic Haircut",
      image: "/images/cut1.jpg",
    },
    {
      title: "Skin Fade",
      image: "/images/cut2.jpg",
    },
    {
      title: "Low Fade",
      image: "/images/cut3.jpg",
    },
    {
      title: "High Fade",
      image: "/images/cut4.jpg",
    },
    {
      title: "Taper Fade",
      image: "/images/cut5.jpg",
    },
    {
      title: "Beard Grooming",
      image: "/images/cut6.jpg",
    },
    {
      title: "Hair Coloring",
      image: "/images/cut7.jpg",
    },
    {
      title: "Kids Cut",
      image: "/images/cut8.jpg",
    },
    {
      title: "Dreadlocks Styling",
      image: "/images/cut9.jpg",
    },
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <img src={service.image} alt={service.title} />
              <div className="overlay">
                <h3>{service.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
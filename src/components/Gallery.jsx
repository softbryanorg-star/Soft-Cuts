import "./Gallery.css";

export default function Gallery() {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
    "/images/image9.png",
    "/images/image10.png",
    "/images/image11.png",
    "/images/image12.png",
    "/images/image13.png",
    "/images/image14.png",

  ];

  return (
    <section className="gallery" id="gallery">
      <h2>Our Work</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt="Haircut" />
          </div>
        ))}
      </div>
    </section>
  );
}
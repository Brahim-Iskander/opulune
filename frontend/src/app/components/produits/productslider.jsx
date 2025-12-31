"use client";
const items = [
  {
    src: "https://images.pexels.com/photos/1721096/pexels-photo-1721096.jpeg",
    alt: "Slide 1",
    captionTitle: "First slide",
    captionText: "Some representative content."
  },
  {
    src: "https://images.pexels.com/photos/1721096/pexels-photo-1721096.jpeg",
    alt: "Slide 2",
    captionTitle: "Second slide",
    captionText: "More content here."
  },
  {
    src: "https://images.pexels.com/photos/1721096/pexels-photo-1721096.jpeg",
    alt: "Slide 3",
    captionTitle: "Third slide",
    captionText: "Final slide content."
  }
];

export default function ProductSlider() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
       {items.map((item, index) => 
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="2000"
            style={{ height: "60vh" }}
          >
            <img
              src={item.src}
              className="d-block w-100"
              alt={item.alt}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.captionTitle}</h5>
              <p>{item.captionText}</p>
            </div>
          </div>
        )}

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

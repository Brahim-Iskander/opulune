"use client";


export default function ProductSlider({products}) {
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
       {products.map((item, index) => 
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="2000"
            style={{ height: "60vh" }}
          >
            <img
              src={item.imageUrl}
              className="d-block w-100"
              alt={item.name}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.name}</h5>
              <p>{item.description}</p>
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

import Carousel from "react-bootstrap/Carousel";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/carousel/H1.avif";
import img2 from "../../assets/carousel/TV.jpg";
import img3 from "../../assets/carousel/W1.jpg";
import img4 from "../../assets/carousel/vivo.webp";

function Home() {

  const navigate = useNavigate();

  const imageStyle = {
    width: "100%",
    height: "85vh",
    objectFit: "cover",
    filter: "brightness(65%)"
  };

  return (
    <div>

      {/* HERO CAROUSEL */}

      <Carousel
        fade
        interval={3500}
        className="mb-5"
      >

        <Carousel.Item>

          <img
            style={imageStyle}
            src={img1}
            alt="Samsung mobile"
          />

          <Carousel.Caption className="text-start mb-5">

            <h1 className="display-4 fw-bold">
              Upgrade Your Technology
            </h1>

            <p className="fs-5">
              Discover the latest smartphones at great prices.
            </p>

            <Button
              variant="light"
              size="lg"
              className="px-4 mt-2"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </Button>

          </Carousel.Caption>

        </Carousel.Item>


        <Carousel.Item>

          <img
            style={imageStyle}
            src={img4}
            alt="Vivo mobile"
          />

          <Carousel.Caption className="text-start mb-5">

            <h1 className="display-4 fw-bold">
              Latest Smartphones
            </h1>

            <p className="fs-5">
              Performance, style and innovation in one place.
            </p>

            <Button
              variant="light"
              size="lg"
              className="px-4 mt-2"
              onClick={() => navigate("/products")}
            >
              Explore Products
            </Button>

          </Carousel.Caption>

        </Carousel.Item>


        <Carousel.Item>

          <img
            style={imageStyle}
            src={img2}
            alt="Television"
          />

          <Carousel.Caption className="text-start mb-5">

            <h1 className="display-4 fw-bold">
              Entertainment At Home
            </h1>

            <p className="fs-5">
              Find televisions made for an amazing viewing experience.
            </p>

            <Button
              variant="light"
              size="lg"
              className="px-4 mt-2"
              onClick={() => navigate("/products")}
            >
              View Products
            </Button>

          </Carousel.Caption>

        </Carousel.Item>


        <Carousel.Item>

          <img
            style={imageStyle}
            src={img3}
            alt="Smart watch"
          />

          <Carousel.Caption className="text-start mb-5">

            <h1 className="display-4 fw-bold">
              Smart Style Everyday
            </h1>

            <p className="fs-5">
              Explore smart devices designed for your lifestyle.
            </p>

            <Button
              variant="light"
              size="lg"
              className="px-4 mt-2"
              onClick={() => navigate("/products")}
            >
              Shop Collection
            </Button>

          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>


      {/* INTRO SECTION */}

      <section className="py-5">

        <Container className="text-center">

          <p className="text-primary fw-semibold mb-2">
            SHOP EASE
          </p>

          <h2 className="fw-bold display-6 mb-3">
            Discover Products You'll Love
          </h2>

          <p
            className="text-muted mx-auto mb-4 fs-5"
            style={{
              maxWidth: "700px",
              lineHeight: "1.8"
            }}
          >
            Explore our collection of quality products at great prices.
            From smartphones to electronics and accessories, find what
            you need and enjoy a simple shopping experience.
          </p>

          <Button
            variant="dark"
            size="lg"
            className="px-5 rounded-pill"
            onClick={() => navigate("/products")}
          >
            Explore Products
          </Button>

        </Container>

      </section>

    </div>
  );
}

export default Home;
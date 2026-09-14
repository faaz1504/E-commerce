import Carousel from 'react-bootstrap/Carousel';
import img4 from '../../assets/carousel/vivo.webp'
import img2 from '../../assets/carousel/TV.jpg'
import img1 from '../../assets/carousel/H1.avif'
import img3 from '../../assets/carousel/W1.jpg'


import { Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';





function Home(){

    const navigate = useNavigate();

    let style = {

         width: "100%",
  height: "100vh",
  objectFit: "cover"

    }
    
    return(

        <div >
            
            <Carousel className='mb-5'>
      <Carousel.Item>
        <img style={style} src={img1} alt="img1"/>
        {/* <Carousel.Caption>
          <h3>samsung flip</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={img4} alt="img2" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={img2} alt="img3" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={style} src={img4} alt="img3" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

    <section className="py-5 text-center">

      <Container>

        <h2 className="fw-bold mb-3">
          Discover Products You'll Love
        </h2>

        <p className="text-muted mx-auto mb-4"
           style={{ maxWidth: "650px" }}>
          Explore our collection of quality products at great prices.
          Find what you need and enjoy a simple shopping experience.
        </p>

        <Button 
         variant="primary"
         onClick={() => navigate("/products")}>
          Shop Now
        </Button>

      </Container>

    </section>

        </div>

        

    );

}
export default Home;
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Products(){

    return(

        <div>

            <section className="py-5 bg-light">

      <Container>

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Our Products
          </h2>

          <p className="text-muted">
            Explore some of our latest products.
          </p>

        </div>


        <Row className="g-4">

          <Col xs={12} sm={6} md={4} lg={3}>

            <Card className="h-10 border-0 shadow-sm">

              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                style={{
                  height: "200px",
                  objectFit: "cover"
                }}
              />

              <Card.Body>

                <Card.Title>
                  iPhone 17
                </Card.Title>

                <Card.Text className="text-muted">
                  Latest smartphone with powerful performance.
                </Card.Text>

                <h5 className="fw-bold">
                  ₹1,02,900
                </h5>

                <div className="d-flex gap-2 mt-3">

                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={() => navigate("/cart")}
                  >
                    Add to Cart
                  </Button>

                </div>

              </Card.Body>

            </Card>

          </Col>


          <Col xs={12} sm={6} md={4} lg={3}>

            <Card className="h-10 border-0 shadow-sm">

              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                style={{
                  height: "200px",
                  objectFit: "cover"
                }}
              />

              <Card.Body>

                <Card.Title>
                  Headphones
                </Card.Title>

                <Card.Text className="text-muted">
                  Wireless headphones with clear audio.
                </Card.Text>

                <h5 className="fw-bold">
                  ₹4,999
                </h5>

                <Button
                  variant="primary"
                  className="w-100 mt-3"
                  onClick={() => navigate("/cart")}
                >
                  Add to Cart
                </Button>

              </Card.Body>

            </Card>

          </Col>


          <Col xs={12} sm={6} md={4} lg={3}>

            <Card className="h-10 border-0 shadow-sm">

              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                style={{
                  height: "200px",
                  objectFit: "cover"
                }}
              />

              <Card.Body>

                <Card.Title>
                  Smart Watch
                </Card.Title>

                <Card.Text className="text-muted">
                  Track your fitness and daily activity.
                </Card.Text>

                <h5 className="fw-bold">
                  ₹7,999
                </h5>

                <Button
                  variant="primary"
                  className="w-100 mt-3"
                  onClick={() => navigate("/cart")}
                >
                  Add to Cart
                </Button>

              </Card.Body>

            </Card>

          </Col>


          <Col xs={12} sm={6} md={4} lg={3}>

            <Card className="h-10 border-0 shadow-sm">

              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                style={{
                  height: "200px",
                  objectFit: "cover"
                }}
              />

              <Card.Body>

                <Card.Title>
                  Laptop
                </Card.Title>

                <Card.Text className="text-muted">
                  Fast and reliable laptop for everyday work.
                </Card.Text>

                <h5 className="fw-bold">
                  ₹59,999
                </h5>

                <Button
                  variant="primary"
                  className="w-100 mt-3"
                  onClick={() => navigate("/cart")}
                >
                  Add to Cart
                </Button>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </section>

        </div>

    )

}
export default Products;
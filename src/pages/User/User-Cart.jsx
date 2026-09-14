import { Container, Row, Col, Card, Button} from "react-bootstrap";


function UserCart(){

    return(

        <div>

        <Container className="py-5">

      <h2 className="fw-bold mb-4">
        Shopping Cart
      </h2>

      <Row className="g-4">

        {/* Cart Items */}
        <Col lg={8}>

          <Card className="border-0 shadow-sm mb-3">

            <Card.Body>

              <Row className="align-items-center">

                <Col xs={4} md={3}>

                  <img
                    src="https://via.placeholder.com/150"
                    alt="product"
                    className="img-fluid rounded"
                  />

                </Col>


                <Col xs={8} md={5}>

                  <h5 className="fw-bold">
                    iPhone 17
                  </h5>

                  <p className="text-muted mb-2">
                    Mobile
                  </p>

                  <h6>
                    ₹1,02,900
                  </h6>

                </Col>


                <Col
                  xs={6}
                  md={2}
                  className="mt-3 mt-md-0"
                >

                  <div className="d-flex align-items-center gap-2">

                    <Button
                      variant="outline-secondary"
                      size="sm"
                    >
                      -
                    </Button>

                    <span>
                      1
                    </span>

                    <Button
                      variant="outline-secondary"
                      size="sm"
                    >
                      +
                    </Button>

                  </div>

                </Col>


                <Col
                  xs={6}
                  md={2}
                  className="text-end mt-3 mt-md-0"
                >

                  <Button
                    variant="danger"
                    size="sm"
                  >
                    Remove
                  </Button>

                </Col>

              </Row>

            </Card.Body>

          </Card>
        </Col>
        </Row>
        </Container>
            
        </div>

    )


}
export default UserCart;

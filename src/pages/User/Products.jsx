import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";
import { addToCart } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Products() {

  const products = useSelector(
    (state) => state.products.products
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();



  return (
    <Container className="py-5">

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          Our Products
        </h2>

        <p className="text-muted">
          Explore our latest collection
        </p>

      </div>


      {products.length === 0 ? (

        <div className="text-center py-5">

          <h4>No Products Available</h4>

          <p className="text-muted">
            Products will appear here when they are added.
          </p>

        </div>

      ) : (

        <Row className="g-4">

          {products.map((product) => (

            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >

              <Card
                className="h-100 border-0 shadow-sm"
              >

                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />


                <Card.Body className="d-flex flex-column">

                  <Card.Title className="fw-bold">

                    {product.name}

                  </Card.Title>


                  <p className="text-muted mb-2">

                    {product.category}

                  </p>


                  <Card.Text
                    className="text-muted"
                    style={{
                      fontSize: "14px"
                    }}
                  >

                    {product.description}

                  </Card.Text>


                  <h5 className="fw-bold mt-auto">

                    ₹{product.price.toLocaleString("en-IN")}

                  </h5>


                  <Button
                    variant="dark"
                    className="w-100 mt-3"
                    onClick={() =>{
                       dispatch(addToCart(product));
                       navigate('/User-cart');
                    }}
                    
                  >
                    Add to Cart
                  </Button>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      )}

    </Container>
  );
}

export default Products;
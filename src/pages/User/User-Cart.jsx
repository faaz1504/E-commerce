import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { decreaseQuantity, increaseQuanitity, removeFromCart } from "../../Redux/cartSlice";


function UserCart(){

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total,item) =>
      total + item.price * item.quantity,
    0

  );

    return(

        <div>

        <Container className="py-5">

      <h2 className="fw-bold mb-4">
        Shopping Cart
      </h2>
      
      {cartItems.length === 0 ? (

        <div className="text-center py-5">

          <h4>Your cart is empty</h4>

          <p className="text-muted">
            Add some products to your cart.
          </p>

        </div>

      ) : (

        <>
          {cartItems.map((item) => (

            <Card
              key={item.id}
              className="border-0 shadow-sm mb-3"
            >

              <Card.Body>

                <Row className="align-items-center">

                  {/* IMAGE */}

                  <Col md={2}>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{
                        height: "100px",
                        width: "100px",
                        objectFit: "cover"
                      }}
                    />

                  </Col>


                  {/* PRODUCT DETAILS */}

                  <Col md={4}>

                    <h5 className="fw-bold">
                      {item.name}
                    </h5>

                    <p className="text-muted mb-1">
                      {item.category}
                    </p>

                    <h6>
                      ₹{item.price}
                    </h6>

                  </Col>


                  {/* QUANTITY */}

                  <Col md={3}>

                    <div className="d-flex align-items-center gap-2">

                      <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(item.id)
                          )
                        }
                      >
                        -
                      </Button>


                      <span className="fw-bold">
                        {item.quantity}
                      </span>


                      <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() =>
                          dispatch(
                            increaseQuanitity(item.id)
                          )
                        }
                      >
                        +
                      </Button>

                    </div>

                  </Col>


                  {/* SUBTOTAL */}

                  <Col md={2}>

                    <h6 className="fw-bold">
                      ₹{item.price * item.quantity}
                    </h6>

                  </Col>


                  {/* REMOVE */}

                  <Col md={1}>

                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.id)
                        )
                      }
                    >
                      Remove
                    </Button>

                  </Col>

                </Row>

              </Card.Body>

            </Card>

          ))}


          {/* TOTAL */}

          <Card className="border-0 shadow-sm mt-4">

            <Card.Body>

              <div className="d-flex justify-content-between align-items-center">

                <h4 className="mb-0">
                  Total
                </h4>

                <h3 className="fw-bold mb-0">
                  ₹{totalPrice}
                </h3>

              </div>

            </Card.Body>

          </Card>

        </>
      )}
        </Container>
            
        </div>

    )


}
export default UserCart;

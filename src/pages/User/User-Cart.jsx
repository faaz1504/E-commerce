import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  decreaseQuantity,
  increaseQuanitity,
  
} from "../../Redux/cartSlice";


function UserCart() {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();


  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  return (

    <Container className="py-4">

      {/* HEADING */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold mb-1">
            Shopping Cart
          </h2>

          <p className="text-muted mb-0">
            {totalItems} items in your cart
          </p>

        </div>

      </div>


      {cartItems.length === 0 ? (

        <Card className="border-0 shadow-sm text-center">

          <Card.Body className="py-5">

            <h3 className="fw-bold">
              Your cart is empty
            </h3>

            <p className="text-muted">
              Looks like you haven't added any products yet.
            </p>

            <Button
              variant="dark"
              className="px-4"
              href="/products"
            >
              Continue Shopping
            </Button>

          </Card.Body>

        </Card>

      ) : (

        <Row className="g-4">


          {/* LEFT SIDE - CART PRODUCTS */}

          <Col lg={8}>

            {cartItems.map((item) => (

              <Card
                key={item.id}
                className="border-0 shadow-sm mb-3"
              >

                <Card.Body className="p-4">

                  <Row className="align-items-center g-3">


                    {/* IMAGE */}

                    <Col xs={12} sm={3} md={2}>

                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{
                          width: "110px",
                          height: "110px",
                          objectFit: "cover"
                        }}
                      />

                    </Col>


                    {/* PRODUCT DETAILS */}

                    <Col xs={12} sm={9} md={4}>

                      <h5 className="fw-bold mb-2">
                        {item.name}
                      </h5>

                      <Badge
                        bg="secondary"
                        className="mb-2"
                      >
                        {item.category}
                      </Badge>

                      <h6 className="fw-semibold mt-2">
                        ₹{item.price.toLocaleString("en-IN")}
                      </h6>

                    </Col>


                    {/* QUANTITY */}

                    <Col xs={6} md={3}>

                      <p className="text-muted small mb-2">
                        Quantity
                      </p>

                      <div className="d-flex align-items-center gap-2">

                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                        >
                          -
                        </Button>


                        <span
                          className="fw-bold text-center"
                          style={{
                            minWidth: "30px"
                          }}
                        >
                          {item.quantity}
                        </span>


                        <Button
                          variant="outline-secondary"
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


                    {/* SUBTOTAL + REMOVE */}

                    <Col
                      xs={6}
                      md={3}
                      className="text-md-end"
                    >

                      <p className="text-muted small mb-1">
                        Subtotal
                      </p>

                      <h5 className="fw-bold">
                        ₹{item.price * item.quantity}
                      </h5>

                      <Button
                        variant="link"
                        className="text-danger p-0 text-decoration-none"
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

          </Col>


          {/* RIGHT SIDE - ORDER SUMMARY */}

          <Col lg={4}>

            <Card
              className="border-0 shadow-sm"
              style={{
                position: "sticky",
                top: "100px"
              }}
            >

              <Card.Body className="p-4">

                <h4 className="fw-bold mb-4">
                  Order Summary
                </h4>


                <div className="d-flex justify-content-between mb-3">

                  <span className="text-muted">
                    Items
                  </span>

                  <span>
                    {totalItems}
                  </span>

                </div>


                <div className="d-flex justify-content-between mb-3">

                  <span className="text-muted">
                    Subtotal
                  </span>

                  <span>
                    ₹{totalPrice}
                  </span>

                </div>


                <div className="d-flex justify-content-between mb-3">

                  <span className="text-muted">
                    Delivery
                  </span>

                  <span className="text-success">
                    Free
                  </span>

                </div>


                <hr />


                <div className="d-flex justify-content-between align-items-center mb-4">

                  <h5 className="fw-bold mb-0">
                    Total
                  </h5>

                  <h4 className="fw-bold mb-0">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </h4>

                </div>


                <Button
                  variant="dark"
                  size="lg"
                  className="w-100"
                >
                  Proceed to Checkout
                </Button>


                <Button
                  variant="outline-secondary"
                  className="w-100 mt-3"
                  href="/products"
                >
                  Continue Shopping
                </Button>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      )}

    </Container>

  );
}

export default UserCart;
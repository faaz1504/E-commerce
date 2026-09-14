import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/products/productSlice";
import { useNavigate } from "react-router-dom";
import "./ViewProducts.css";

function ViewProducts() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(
    (state) => state.products.products
  );

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="products-page">

      {/* Heading */}

      <div className="products-header">

        <div>
          <h2>View Products</h2>

          <p>
            Manage all products available in your store.
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() =>
            navigate("/AdminDashboard/add-product")
          }
        >
          + Add Product
        </button>

      </div>


      {products.length === 0 ? (

        <div className="empty-products">
          <h4>No Products Available</h4>
          <p>Add a product to get started.</p>
        </div>

      ) : (

        <div className="card product-card">

          <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">

              <thead>

                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th className="text-center">
                    Actions
                  </th>
                </tr>

              </thead>


              <tbody>

                {products.map((product) => (

                  <tr key={product.id}>

                    <td className="product-name">
                      {product.name}
                    </td>


                    <td className="product-price">
                      ₹{product.price}
                    </td>


                    <td>

                      <span className="category-badge">
                        {product.category}
                      </span>

                    </td>


                    <td className="product-description">
                      {product.description}
                    </td>


                    <td>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-table-image"
                      />

                    </td>


                    <td>

                      <div className="d-flex justify-content-center gap-2">

                        <button
                          type="button"
                          className="btn btn-warning btn-sm px-3"
                          onClick={() =>
                            navigate(
                              `/AdminDashboard/edit-product/${product.id}`
                            )
                          }
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm px-3"
                          onClick={() =>
                            handleDelete(product.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

    </div>
  );
}

export default ViewProducts;
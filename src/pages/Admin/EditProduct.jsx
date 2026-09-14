import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../../Redux/products/productSlice";

function EditProduct() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingProduct = useSelector(
    (state) =>
      state.products.products.find(
        (product) => product.id === Number(id)
      )
  );

  const [product, setProduct] = useState({
    id: existingProduct?.id || "",
    name: existingProduct?.name || "",
    price: existingProduct?.price || "",
    category: existingProduct?.category || "",
    description: existingProduct?.description || "",
    image: existingProduct?.image || ""
  });


  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(
      updateProduct({
        ...product,
        price: Number(product.price)
      })
    );

    navigate("/AdminDashboard/view-products");
  };


  return (
    <div>

      <h2 className="mb-4">Edit Product</h2>

      <div className="card shadow-sm p-4">

        <form onSubmit={handleSubmit}>

          <table className="table table-bordered">

            <tbody>

              <tr>
                <th>Product Name</th>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.name}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        name: e.target.value
                      })
                    }
                  />
                </td>
              </tr>


              <tr>
                <th>Price</th>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        price: e.target.value
                      })
                    }
                  />
                </td>
              </tr>


              <tr>
                <th>Category</th>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.category}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        category: e.target.value
                      })
                    }
                  />
                </td>
              </tr>


              <tr>
                <th>Description</th>

                <td>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={product.description}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        description: e.target.value
                      })
                    }
                  />
                </td>
              </tr>


              <tr>
                <th>Image</th>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.image}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        image: e.target.value
                      })
                    }
                  />
                </td>
              </tr>


              <tr>

                <td
                  colSpan="2"
                  className="text-center"
                >

                  <button
                    type="submit"
                    className="btn btn-success px-4"
                  >
                    Update Product
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </form>

      </div>

    </div>
  );
}

export default EditProduct;
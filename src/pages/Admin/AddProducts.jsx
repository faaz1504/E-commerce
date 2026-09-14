import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addProduct } from '../../Redux/products/productSlice';
import { useNavigate } from 'react-router-dom';

function AddProduct(){

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [product,setProduct] = useState({

    name:"",
    price:"",
    category:"",
    description:"",
    image:""

  });

  const handleSubmit = (e) => {

      e.preventDefault();

      const newProduct = {

        id:Date.now(),
        ...product,
        price:Number(product.price)

      };

      dispatch(addProduct(newProduct));

      navigate('/AdminDashboard/view-products')

  };

  




    return(
     <div>

      <h2 className="mb-3">Add Product</h2>

      <div className="card shadow-sm p-5">

        <form onSubmit={handleSubmit}>

          <table className="table table-bordered">

            <tbody>

              <tr>
                <th>Product Name</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                    value={product.name}

                    onChange={(e)=>
                      setProduct({
                        ...product,
                        name:e.target.value
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
                    placeholder="Enter product price"
                    value={product.price}

                    onChange={(e)=>
                      setProduct({
                        ...product,
                        price:e.target.value
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
                    placeholder="Enter category"
                    value={product.category}

                    onChange={(e)=>
                      setProduct({
                        ...product,
                        category:e.target.value
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
                    placeholder="Enter product description"
                    value={product.description}

                    onChange={(e)=>
                      setProduct({
                        ...product,
                        description:e.target.value
                      })
                    }
                  ></textarea>
                </td>
              </tr>

              <tr>
                <th>Image</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter image URL"
                    value={product.image}

                    onChange={(e)=>
                      setProduct({
                        ...product,
                        image:e.target.value
                      })
                    }
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2" className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-2"
                  >
                    Add Product
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </form>

      </div>

    </div>
    
)


}
export default AddProduct;
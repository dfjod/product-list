import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { origin } from "../utils/url";

export function List() {
  const [products, setProducts] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`${origin}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const dataArray = Object.keys(data).map((key) => {
      return {
        id: key,
        ...data[key],
      };
    });
    setProducts(dataArray);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleMassDelete = async () => {
    const response = await fetch(`${origin}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _method: "DELETE", ids: checkedProducts }),
    });
    const data = await response.json();
    console.log(data.message);
    fetchProducts();
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedProducts((prev) => [...prev, value]);
    } else {
      setCheckedProducts((prev) => prev.filter((id) => id !== value));
    }
  };

  return (
    <>
      <header>
        <div className="nav">
          <h1 className="nav-title">Product List</h1>
          <ul>
            <li>
              <Link to="/add-product">
                <button>ADD</button>
              </Link>
            </li>
            <li>
              <button onClick={handleMassDelete} id="delete-product-btn">
                MASS DELETE
              </button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="container">
          <div id="product-list">
            {products.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <label className="clickable-container">
                    <input
                      type="checkbox"
                      value={product.id}
                      className="delete-checkbox"
                      id={product.id}
                      onChange={handleCheckboxChange}
                    />
                    <Product product={product} />
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

export function List() {
  const [products, setProducts] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:3333/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let dataArray = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        setProducts(dataArray);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleMassDelete = () => {
    fetch("http://localhost:3333/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkedProducts),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(`${response.message}`);
        fetchProducts();
      })
      .catch((error) => console.log(`${error}`));
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
                <button>Add</button>
              </Link>
            </li>
            <li>
              <button onClick={handleMassDelete}>Mass Delete</button>
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
      <footer>
        <p>Scandiweb test assignment</p>
      </footer>
    </>
  );
}

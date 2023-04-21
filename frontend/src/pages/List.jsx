import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Product from "../components/Product";

export function List() {
  let data = useLoaderData();

  const [checkedProducts, setCheckedProducts] = useState([]);

  const handleMassDelete = () => {
    return fetch("localhost/productlist/index.php", {
      method: "DELETE",
      headers: "Content-Type: application/json",
      body: JSON.stringify(checkedProducts),
    });
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
          <h1>Product List</h1>
          <ul>
            <li>
              <Link to="/product-add">ADD</Link>
            </li>
            <li>
              <button onClick={handleMassDelete}>MASS DELETE</button>
            </li>
          </ul>
        </div>
      </header>
      <hr />
      <main>
        <div id="product-list">
          {data.map((product) => {
            return (
              <div className="product" key={product.id}>
                <input
                  type="checkbox"
                  value={product.id}
                  onChange={handleCheckboxChange}
                />
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <hr />
        <p>Scandiweb test assignment</p>
      </footer>
    </>
  );
}

export const productLoader = () => {
  return fetch("http://localhost/productlist/backend/api/index.php").then(
    (response) => response.json()
  );
};

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const productLoader = () => {
  return fetch("http://localhost/productlist/index.php").then((response) =>
    response.json()
  );
};

const Product = ({ product }) => {
  const extractAttributes = ({ special_values }) => {
    const attributeArray = special_values.split(";");
    const attributeObject = {};

    attributeArray.map((attribute) => {
      const [key, value] = attribute.split(":");
      attributeObject[key] = value;
    });
    return attributeObject;
  };

  const setAttribute = (product) => {
    const attributes = extractAttributes(product);

    if (product.category_name == "furniture") {
      return (
        <p>
          {attributes.height}X{attributes.width}X{attributes.length}
        </p>
      );
    }
    if (product.category_name == "dvd") {
      return <p>{attributes.size} MB</p>;
    }
    if (product.category_name == "book") {
      return <p>{attributes.weight} KG</p>;
    }
  };

  return (
    <>
      <p>{product.sku}</p>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      {setAttribute(product)}
    </>
  );
};

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

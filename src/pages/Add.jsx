import { Link } from "react-router-dom";
import { useState, useRef } from "react";

// Post request logic
const ProductForm = () => {
  const formRef = useRef(null);
  const [type, setType] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    return fetch("add-product", {
      method: "POST",
      headers: "Content-Type: application/json",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((jsonResponse) => console.log(jsonResponse))
      .catch((e) => console.log(e));
  };

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  return (
    <form ref={formRef} id="product_form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="sku">SKU</label>
        <input type="text" id="sku" />
      </div>

      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>

      <div className="form-row">
        <label htmlFor="price">Price($)</label>
        <input type="text" id="price" />
      </div>

      <div className="form-row">
        <label htmlFor="productType">Type Switcher</label>
        <select
          defaultValue="default"
          id="productType"
          onChange={handleTypeChange}
        >
          <option value="default" disabled hidden>
            Type Switcher
          </option>
          <option value="dvd">DVD</option>
          <option value="furniture">Furniture</option>
          <option value="book">Book</option>
        </select>
        <SpecialAttribute type={type} />
      </div>
    </form>
  );
};

// Type switch
let SpecialAttribute = ({ type }) => {
  if (type === "dvd") {
    return (
      <div className="row">
        <label htmlFor="size">Size (MB)</label>
        <input type="text" id="size" />
      </div>
    );
  }

  if (type === "furniture") {
    return (
      <>
        <div className="row">
          <label htmlFor="height">Height (CM)</label>
          <input type="text" id="height" />
        </div>
        <div className="row">
          <label htmlFor="width">Width (CM)</label>
          <input type="text" id="width" />
        </div>
        <div className="row">
          <label htmlFor="length">Length (CM)</label>
          <input type="text" id="length" />
        </div>
      </>
    );
  }

  if (type === "book") {
    return (
      <div className="row">
        <label htmlFor="size">Weight (KG)</label>
        <input type="text" id="size" />
      </div>
    );
  }
};

// Add page
export function Add() {
  return (
    <>
      <header>
        <div className="nav">
          <h1>Product Add</h1>
          <div className="nav-buttons">
            <Link to="/">Cancel</Link>
            <button type="submit" form="product_form">
              Save
            </button>
          </div>
        </div>
      </header>
      <hr />
      <main>
        <div className="body">
          <div id="form">
            <ProductForm />
          </div>
        </div>
      </main>
      <hr />
      <footer>
        <div className="footer">
          <p>Scandiweb test assignment</p>
        </div>
      </footer>
    </>
  );
}

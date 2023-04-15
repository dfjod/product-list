import { Link } from "react-router-dom";
import { useState } from "react";

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

function Add() {
  const [type, setType] = useState(null);

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setType(value);
  };

  return (
    <>
      <header>
        <div className="nav">
          <h1>Product Add</h1>
          <div className="nav-buttons">
            <Link to="/">Cancel</Link>
            <button>Save</button>
          </div>
        </div>
      </header>
      <hr />
      <main>
        <div className="body">
          <div id="form">
            <form>
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

export default Add;

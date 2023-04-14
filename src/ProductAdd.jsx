import { useState } from "react";

let SpecialAttribute = ({ type }) => {
  if (type == "DVD") {
    return (
      <div className="row">
        <label htmlFor="size">Size (MB)</label>
        <input type="text" id="size" />
      </div>
    );
  } else if (type == "Furniture") {
    return (
      <>
        <div className="row">
          <label htmlFor="height">Size (MB)</label>
          <input type="text" id="height" />
        </div>
        <div className="row">
          <label htmlFor="width">Size (MB)</label>
          <input type="text" id="width" />
        </div>
        <div className="row">
          <label htmlFor="length">Size (MB)</label>
          <input type="text" id="length" />
        </div>
      </>
    );
  } else {
    return (
      <div className="row">
        <label htmlFor="size">Size (MB)</label>
        <input type="text" id="size" />
      </div>
    );
  }
};

function ProductAdd() {
  const [type, setType] = useState();

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
            <a href="/product-add">Cancel</a>
            <button>Save</button>
          </div>
        </div>
        <hr />
      </header>
      <main>
        <div id="form">
          <form>
            <div className="form-row">
              <label for="sku">SKU</label>
              <input type="text" id="sku" />
            </div>

            <div className="form-row">
              <label for="name">Name</label>
              <input type="text" id="name" />
            </div>

            <div className="form-row">
              <label htmlFor="price">Price($)</label>
              <input type="text" id="price" />
            </div>

            <div className="form-row">
              <label htmlFor="productType">Type Switcher</label>
              <select
                name=""
                id="productType"
                onChange={}
              >
                <option value="dvd">DVD</option>
                <option value="furniture">Furniture</option>
                <option value="book">Book</option>
              </select>
              <SpecialAttribute selectedType={type} />
            </div>
          </form>
        </div>
      </main>
      <footer>
        <hr />
        <p>Scandiweb test assignment</p>
      </footer>
    </>
  );
}

export default ProductAdd;

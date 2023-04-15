import { useState } from "react";
import { Link } from "react-router-dom";

let Products = ({ products }) => {
  const [checkedProducts, setCheckedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedProducts((prev) => [...prev, value]);
    } else {
      setCheckedProducts((prev) => prev.filter((id) => id !== value));
    }
    console.log(checkedProducts);
  };

  const setAttribute = (product) => {
    if (product.category == "FURNITURE") {
      return (
        <p>
          {product.height}X{product.width}X{product.lenght}
        </p>
      );
    } else if (product.category == "DVD") {
      return <p>{product.size} MB</p>;
    } else {
      return <p>{product.weight} KG</p>;
    }
  };

  return (
    <div id="product-list">
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <input
              type="checkbox"
              value={product.id}
              onChange={handleCheckboxChange}
            />
            <p>{product.sku}</p>
            <p>{product.name}</p>
            <p>{product.price} $</p>
            {setAttribute(product)}
          </div>
        );
      })}
    </div>
  );
};

function List() {
  const data = [
    {
      id: 1,
      sku: "XJ93YH25DQ",
      name: "Old DVD",
      price: "11",
      category: "DVD",
      size: 20,
    },
    {
      id: 2,
      sku: "L8V4TG01RS",
      name: "New book",
      price: "23",
      category: "BOOK",
      weight: 0.7,
    },
    {
      id: 3,
      sku: "R5F7WQ68ZE",
      name: "Dusty table",
      price: "1",
      category: "FURNITURE",
      height: 10,
      width: 20,
      lenght: 30,
    },
    {
      id: 4,
      sku: "K2N8MU35IA",
      name: "Crucked chair",
      price: "4",
      category: "FURNITURE",
      height: 5,
      width: 10,
      lenght: 10,
    },
    {
      id: 5,
      sku: "B0C9XJ21SW",
      name: "Scraped DVD",
      price: "1",
      category: "DVD",
      size: 256,
    },
    {
      id: 6,
      sku: "B0C9XJ21SW",
      name: "Bomb ass book",
      price: "5",
      category: "BOOK",
      weight: 1,
    },
  ];
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
              <button>MASS DELETE</button>
            </li>
          </ul>
        </div>
      </header>
      <hr />
      <main>
        <Products products={data} />
      </main>
      <footer>
        <hr />
        <p>Scandiweb test assignment</p>
      </footer>
    </>
  );
}

export default List;

import { useState } from "react";

let List = ({ products }) => {

  const [checkedProducts, setCheckedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedProducts(prev => [...prev, value])
    } else {
      setCheckedProducts(prev => prev.filter(id => id != value))
    }
    console.log(checkedProducts);
  }

  return (
    <div id="product-list">
      {products.map(product => {
        return (
          <div className="product" key={product.id}>
            <input type="checkbox" value={product.id} onChange={handleCheckboxChange} />
            <p>{product.sku}</p>
            <p>{product.name}</p>
            <p>{product.price} $</p>
          </div>
        )
      })}
    </div>
  )
}

function ProductList() {
  const data = [
    {
      id: 1, sku: "XJ93YH25DQ", name: "Old DVD", price: "11"
    },
    {
      id: 2, sku: "L8V4TG01RS", name: "New book", price: "23"
    },
    {
      id: 3, sku: "R5F7WQ68ZE", name: "Dusty table", price: "1"
    },
    {
      id: 4, sku: "K2N8MU35IA", name: "Crucked chair", price: "4"
    },
    {
      id: 5, sku: "B0C9XJ21SW", name: "Scraped DVD", price: "1"
    },
    {
      id: 6, sku: "B0C9XJ21SW", name: "Bomb ass book", price: "5"
    }
  ];
  return (
    <>
      <header>
        <div className="navbar">
          <h1>Product List</h1>
          <a href="/product-add">ADD</a>
          <button>MASS DELETE</button>
        </div>
      </header>
      <main>
        <List products={data} />
      </main>
      <hr />
      <p>Scandiweb test assignment</p>
    </>
  )
}

export default ProductList;

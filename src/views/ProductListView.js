import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

let ProductListView = (products) => {
  const data = [
    {
      sku: "XJ93YH25DQ", name: "Old DVD", price: "11"
    },
    {
      sku: "L8V4TG01RS", name: "New book", price: "23"
    },
    {
      sku: "R5F7WQ68ZE", name: "Dusty table", price: "1"
    },
    {
      sku: "K2N8MU35IA", name: "Crucked chair", price: "4"
    },
    {
      sku: "B0C9XJ21SW", name: "Scraped DVD", price: "1"
    },
    {
      sku: "B0C9XJ21SW", name: "Bomb ass book", price: "5"
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
        <ProductList sku={data.sku} name={data.name} price={data.price} />
      </main>
      <Footer />
    </>
  )
};

export default ProductListView;
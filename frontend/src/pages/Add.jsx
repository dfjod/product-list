import { Link } from "react-router-dom";
import ProductForm from "../components/ProductFrom";

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
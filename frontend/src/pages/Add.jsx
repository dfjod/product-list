import { Link } from "react-router-dom";
import Form from "../components/Form";

export function Add() {
  return (
    <>
      <header>
        <div className="nav">
          <h1 className="nav-title">Product Add</h1>
          <ul>
            <li>
              <Link to="/">
                <button>Cancel</button>
              </Link>
            </li>
            <li>
              <button type="submit" form="product_form">
                Save
              </button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="form">
          <Form />
        </div>
      </main>
      <footer>
        <div className="footer">
          <p>Scandiweb test assignment</p>
        </div>
      </footer>
    </>
  );
}

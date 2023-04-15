import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<List />} />
        <Route path="/product-add" element={<Add />} />
      </>
    )
  );

  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

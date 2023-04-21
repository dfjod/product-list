import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { List, productLoader } from "./pages/List";
import { Add } from "./pages/Add";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<List />} loader={productLoader} />
        <Route path="/add-product" element={<Add />} />
      </Route>
    )
  );

  return (
    <div id="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

function Root() {
  return <Outlet />;
}

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ProductList } from "./pages/ProductList";
import { ProductAdd } from "./pages/ProductAdd";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Index />}>
        <Route index element={<ProductList />} />
        <Route path="/add-product" element={<ProductAdd />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function Index() {
  return <Outlet />;
}

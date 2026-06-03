import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../components/Cart";
import ProductDetail from "../components/ProductDetail";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/product/:id",
    element: <ProductDetail />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
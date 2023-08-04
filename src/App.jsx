import LoginPage from "./components/pages/login/LoginPage.jsx";
import OrderPage from "./components/pages/order/OrderPage.jsx";
import ErrorPage from "./components/pages/error/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//style

import { GlobalStyle } from "./theme/GlobalStyle.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/order/:username",
    element: <OrderPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

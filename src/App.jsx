import LoginPage from "./components/pages/login/LoginPage.jsx";
import OrderPage from "./components/pages/order/OrderPage.jsx";
import ErrorPage from "./components/pages/error/ErrorPage.jsx";
import Main from "./components/pages/order/Main/Main.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
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
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

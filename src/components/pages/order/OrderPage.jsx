import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
//components
import { Navbar } from "./Navbar/Navbar.jsx";
import Main from "./Main/Main.jsx";

//style
import styled from "styled-components";

import AdminContext from "../../../context/OrderContext.js";
import { useMenuData } from "../../../hooks/useMenuData.js";
import { deepCopy } from "../../../utils/array.js";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [basketProducts, setBasketProducts] = useState([]);
  const titleEditRef = useRef();

  const {
    menuData,
    handleAddToMenu,
    handleDeleteToMenu,
    handleEditToMenu,
    resetMenu,
    selectedProduct,
    setSelectedProduct,
    newProduct,
    setNewProduct,
  } = useMenuData();

  const handleDeleteToBasket = (idBasketProduct) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const basketProductsUpdated = basketProductsCopy.filter(
      (basketProduct) => basketProduct.id !== idBasketProduct
    );
    setBasketProducts(basketProductsUpdated);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menuData,
    selectedProduct,
    setSelectedProduct,
    handleAddToMenu,
    handleDeleteToMenu,
    resetMenu,
    newProduct,
    setNewProduct,
    handleEditToMenu,
    titleEditRef,
    basketProducts,
    setBasketProducts,
    handleDeleteToBasket,
  };

  const { username } = useParams();

  return (
    <AdminContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <Navbar username={username} />
        <Main />
      </OrderPageStyled>
    </AdminContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  overflow: hidden;
  height: 100vh;
`;

export default OrderPage;

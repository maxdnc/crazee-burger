import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
//components
import { Navbar } from "./Navbar/Navbar.jsx";
import Main from "./Main/Main.jsx";

//style
import styled from "styled-components";

import AdminContext from "../../../context/OrderContext.js";
import { useMenuData } from "../../../hooks/useMenuData.js";
import { useBasketProduct } from "../../../hooks/useBasketProducts.js";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

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

  const {
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,
    basketProducts,
    handleAddToBasket,
  } = useBasketProduct();

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

    handleAddToBasket,
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,
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

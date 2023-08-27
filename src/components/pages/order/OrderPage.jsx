import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
//components
import { Navbar } from "./Navbar/Navbar.jsx";
import Main from "./Main/Main.jsx";

//style
import styled from "styled-components";

import AdminContext from "../../../context/OrderContext.js";
import { useMenuData } from "../../../hooks/useMenuData.js";

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

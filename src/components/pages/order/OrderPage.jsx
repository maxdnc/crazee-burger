import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
//components
import { Navbar } from "./Navbar/Navbar.jsx";
import Main from "./Main/Main.jsx";
//data
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";

//style
import styled from "styled-components";

import AdminContext from "../../../context/OrderContext.js";

//utils
import { deepCopy } from "../../../utils/array";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menuData, setMenuData] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();

  const handleAddToMenu = (newProduct) => {
    const menuDataCopy = deepCopy(menuData);

    const menuDataUpdated = [newProduct, ...menuDataCopy];
    setMenuData(menuDataUpdated);
  };

  const handleDeleteToMenu = (idProductToDelete) => {
    const menuDataCopy = deepCopy(menuData);

    const menuUpdated = menuDataCopy.filter(
      (product) => product.id !== idProductToDelete
    );
    setMenuData(menuUpdated);
  };

  const handleEditToMenu = (productBeingEdited) => {
    const menuDataCopy = deepCopy(menuData);
    const indexOfProducToEdit = menuData.indexOf(selectedProduct);
    menuDataCopy[indexOfProducToEdit] = productBeingEdited;
    setMenuData(menuDataCopy);
  };

  const resetMenu = () => {
    setMenuData(fakeMenu.LARGE);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menuData,
    setMenuData,
    handleAddToMenu,
    handleDeleteToMenu,
    resetMenu,
    newProduct,
    setNewProduct,
    selectedProduct,
    setSelectedProduct,
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

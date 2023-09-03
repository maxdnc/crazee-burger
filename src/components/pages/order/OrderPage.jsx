import { Outlet, useParams } from "react-router-dom";
import { useState, useRef } from "react";
//components
import { Navbar } from "./Navbar/Navbar.jsx";

//style
import styled from "styled-components";
import AdminContext from "../../../context/OrderContext.js";
//enums
import { EMPTY_PRODUCT } from "../../../enums/product.js";

//hooks
import { useMenuData } from "../../../hooks/useMenuData.js";
import { useBasketProduct } from "../../../hooks/useBasketProducts.js";
//utils
import { findInArrayById, isAProductSelected } from "../../../utils/array.js";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [isBasketSmallDevicesActive, setIsBasketSmallDevicesActive] =
    useState(false);

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

  const handleProductSelected = async (idSelectedProduct) => {
    const isSelectedProductSame =
      isAProductSelected(selectedProduct) &&
      selectedProduct.id === idSelectedProduct;

    if (isSelectedProductSame) {
      setSelectedProduct(EMPTY_PRODUCT);
    } else {
      const selectedProduct = findInArrayById(menuData, idSelectedProduct);
      await setIsCollapsed(false);
      await setSelectedProduct(selectedProduct);
      await setCurrentTabSelected("edit");
      titleEditRef.current.focus();
    }
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

    handleAddToBasket,
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,

    handleProductSelected,

    isBasketSmallDevicesActive,
    setIsBasketSmallDevicesActive,
  };

  const { username } = useParams();

  return (
    <AdminContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <Navbar username={username} />
        <Outlet />
      </OrderPageStyled>
    </AdminContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  overflow: hidden;
  height: 100dvh;
`;

export default OrderPage;
